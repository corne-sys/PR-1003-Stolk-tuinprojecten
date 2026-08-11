"use server";

import { z } from "zod";

const contactSchema = z.object({
  naam: z.string().trim().min(2, "Vul uw naam in."),
  telefoon: z
    .string()
    .trim()
    .min(6, "Vul een geldig telefoonnummer in.")
    .regex(/^[\d\s+()-]{6,}$/, "Vul een geldig telefoonnummer in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  notities: z.string().trim().max(2000, "Maximaal 2000 tekens.").optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  fieldErrors?: Partial<Record<"naam" | "telefoon" | "email" | "notities", string>>;
  formError?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: onzichtbaar veld voor mensen, aantrekkelijk voor bots. Gevuld
  // veld = stille afwijzing zonder de afzender te waarschuwen, zonder
  // gegevens te loggen of te verwerken.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const result = contactSchema.safeParse({
    naam: formData.get("naam"),
    telefoon: formData.get("telefoon"),
    email: formData.get("email"),
    notities: formData.get("notities"),
  });

  if (!result.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactFormState["fieldErrors"]>;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors };
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    return {
      status: "error",
      formError: "Verzenden is momenteel niet mogelijk. Probeer het later opnieuw.",
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(result.data),
  });

  if (!response.ok) {
    return {
      status: "error",
      formError: "Er ging iets mis bij het verzenden. Probeer het later opnieuw.",
    };
  }

  return { status: "success" };
}
