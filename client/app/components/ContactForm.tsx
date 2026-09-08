"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const enquiryTypes = [
  "Course enquiry",
  "Enrolment help",
  "Organisation / team training",
  "Learner portal / login issue",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      // TODO: no backend yet. Point this at a real handler before launch —
      // an /api/contact route, or a form service (Formspree, Resend, HubSpot).
      // Until then this always fails and shows the fallback email address.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center text-center bg-white border border-brand/10 rounded-[4px] p-10 lg:p-14 min-h-[420px]"
      >
        <span className="w-14 h-14 rounded-full bg-mint/15 flex items-center justify-center text-mint mb-5">
          <CheckCircle2 size={26} strokeWidth={1.8} />
        </span>
        <h3 className="font-serif text-[26px] text-brand mb-3 tracking-[-0.5px]">
          Thank you — we&apos;ve got it.
        </h3>
        <p className="text-[14px] font-medium text-brand/60 leading-[1.8] max-w-sm">
          A member of the team will be in touch within two business days. If
          your enquiry is urgent, please call us directly.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-white border border-brand/12 text-brand text-[14px] font-medium placeholder:text-brand/30 px-4 py-3.5 rounded-[4px] outline-none focus:border-mint focus:ring-2 focus:ring-mint/25 transition-colors";
  const labelBase =
    "block font-mono text-[10px] font-bold tracking-[2px] uppercase text-brand/50 mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-brand/10 rounded-[4px] p-7 lg:p-9"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="firstName" className={labelBase}>
            First name *
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className={inputBase}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelBase}>
            Last name *
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            className={inputBase}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className={labelBase}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputBase}
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputBase}
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="organisation" className={labelBase}>
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          autoComplete="organization"
          className={inputBase}
          placeholder="If you're enquiring on behalf of a team"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="enquiryType" className={labelBase}>
          What&apos;s this about? *
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue=""
          className={`${inputBase} appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelBase}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputBase} resize-y`}
          placeholder="Tell us what you need and we'll point you in the right direction."
        />
      </div>

      {/* CONSENT */}
      <div className="flex items-start gap-3 mb-7">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-brand shrink-0 cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-[12px] font-medium text-brand/55 leading-[1.7] cursor-pointer"
        >
          I agree to NSWPM Academy storing the details above so they can respond
          to my enquiry.
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-gold/12 border border-gold/40 rounded-[4px] p-4 mb-6"
        >
          <AlertCircle
            size={16}
            strokeWidth={2}
            className="text-brand shrink-0 mt-0.5"
          />
          <p className="text-[13px] font-medium text-brand/75 leading-[1.7]">
            Sorry — we couldn&apos;t send that just now. Please email us
            directly at{" "}
            <a
              href="mailto:info@nswpm.com.au"
              className="font-bold underline underline-offset-2 hover:text-brand"
            >
              info@nswpm.com.au
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-brand text-white text-[13px] font-bold tracking-[1px] uppercase px-8 py-4 rounded-[4px] hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={15} strokeWidth={2.5} className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={15} strokeWidth={2.5} />
          </>
        )}
      </button>
    </form>
  );
}
