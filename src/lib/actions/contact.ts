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
  consent: z.literal("on", {
    message: "Ga akkoord met de privacyverklaring om het formulier te verzenden.",
  }),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  fieldErrors?: Partial<Record<"naam" | "telefoon" | "email" | "consent", string>>;
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
    consent: formData.get("consent"),
  });

  if (!result.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactFormState["fieldErrors"]>;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", fieldErrors };
  }

  // TODO vóór livegang: koppel hier een echte bezorgroute (bijv. Resend,
  // een SMTP-provider, of een CRM-webhook) om `result.data` daadwerkelijk
  // bij Lucas te bezorgen. Er wordt bewust niets gelogd — `result.data`
  // bevat persoonsgegevens (naam, telefoon, e-mail).
  // await sendContactNotification(result.data);

  return { status: "success" };
}
