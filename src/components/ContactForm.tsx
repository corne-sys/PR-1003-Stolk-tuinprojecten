"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      data-event="contact_submit"
      className="inline-flex items-center justify-center rounded-[6px] bg-terracotta px-8 py-4 font-sans text-sm font-medium tracking-wide text-linen transition-colors hover:bg-terracotta-deep disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Versturen…" : "Versturen"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-[6px] border border-sand bg-linen-warm p-8">
        <p className="font-display text-xl font-medium text-forest-deep">Bedankt voor uw bericht</p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/80">
          Lucas neemt contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <p className="font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
        Laat uw gegevens achter. Lucas neemt contact met u op.
      </p>

      {state.status === "error" && state.formError && (
        <p role="alert" className="font-sans text-sm text-[#8C4A30]">
          {state.formError}
        </p>
      )}

      {/* Honeypot: onzichtbaar voor mensen, zichtbaar voor bots. */}
      <div className="absolute left-[-9999px] top-auto" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="naam" className="font-sans text-sm font-medium text-charcoal">
          Naam
        </label>
        <input
          type="text"
          id="naam"
          name="naam"
          required
          autoComplete="name"
          aria-invalid={state.status === "error" && !!state.fieldErrors?.naam}
          aria-describedby={state.fieldErrors?.naam ? "naam-error" : undefined}
          className="mt-2 w-full rounded-[6px] border border-sand bg-linen-warm px-4 py-3 font-sans text-[1.0625rem] text-charcoal outline-none focus:border-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        {state.fieldErrors?.naam && (
          <p id="naam-error" role="alert" className="mt-1.5 font-sans text-sm text-[#8C4A30]">
            {state.fieldErrors.naam}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefoon" className="font-sans text-sm font-medium text-charcoal">
          Telefoonnummer
        </label>
        <input
          type="tel"
          id="telefoon"
          name="telefoon"
          required
          autoComplete="tel"
          aria-invalid={state.status === "error" && !!state.fieldErrors?.telefoon}
          aria-describedby={state.fieldErrors?.telefoon ? "telefoon-error" : undefined}
          className="mt-2 w-full rounded-[6px] border border-sand bg-linen-warm px-4 py-3 font-sans text-[1.0625rem] text-charcoal outline-none focus:border-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        {state.fieldErrors?.telefoon && (
          <p id="telefoon-error" role="alert" className="mt-1.5 font-sans text-sm text-[#8C4A30]">
            {state.fieldErrors.telefoon}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-sans text-sm font-medium text-charcoal">
          E-mailadres
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={state.status === "error" && !!state.fieldErrors?.email}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          className="mt-2 w-full rounded-[6px] border border-sand bg-linen-warm px-4 py-3 font-sans text-[1.0625rem] text-charcoal outline-none focus:border-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        />
        {state.fieldErrors?.email && (
          <p id="email-error" role="alert" className="mt-1.5 font-sans text-sm text-[#8C4A30]">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
