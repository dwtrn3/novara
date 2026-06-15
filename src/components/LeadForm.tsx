"use client";

import { useState, type FormEvent } from "react";

const CLINIC_TYPES = ["Aesthetics", "IVF", "Dental", "Other"] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#B07040] focus:ring-1 focus:ring-[#B07040]";

const compactInputClasses =
  "w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 font-sans text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#B07040] focus:ring-1 focus:ring-[#B07040]";

const labelClasses =
  "block font-sans text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2";

const compactLabelClasses =
  "block font-sans text-[10px] tracking-[0.1em] uppercase text-neutral-500 mb-1";

/**
 * The actual form markup + submit logic, shared between the inline
 * "Ready to grow?" page section and the popup modal triggered from
 * the header / hero "Book a call" CTAs.
 */
export function LeadFormFields({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      clinicType: String(data.get("clinicType") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({ ok: false }));

      if (res.ok && result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className={compact ? "text-center mb-4" : "text-center mb-10"}>
        <p className={compact ? "font-sans text-[10px] tracking-[0.2em] uppercase text-[#B07040] mb-1.5" : "font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-4"}>
          Let&apos;s Talk
        </p>
        <h2
          className={
            compact
              ? "font-serif text-2xl font-bold text-neutral-900 leading-tight"
              : "font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight"
          }
        >
          Ready to grow?
        </h2>
        {compact ? (
          <p className="font-sans text-xs leading-relaxed text-neutral-500 max-w-md mx-auto mt-1.5">
            Share a few details and we&apos;ll be in touch within one business day.
          </p>
        ) : (
          <>
            <div aria-hidden="true" className="border-t-2 border-[#B07040] w-12 mx-auto my-5" />
            <p className="font-sans text-sm md:text-base leading-relaxed text-neutral-500 max-w-md mx-auto">
              No pitch decks. No retainer traps. Share a few details below
              and we&apos;ll be in touch within one business day to book your
              free 30-minute strategy call.
            </p>
          </>
        )}
      </div>

      {status === "success" ? (
        <div className={compact ? "bg-white rounded-2xl shadow-xl py-8 px-6 text-center" : "bg-white rounded-2xl shadow-xl py-14 px-6 md:px-16 text-center"}>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B07040]/10">
            <span className="font-serif text-3xl text-[#B07040]">✓</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900">Thank you!</h3>
          <p className="font-sans text-sm text-neutral-500 mt-3 max-w-sm mx-auto">
            We&apos;ve received your details and will be in touch within one business day.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className={compact ? "bg-white rounded-2xl shadow-xl py-6 px-5" : "bg-white rounded-2xl shadow-xl py-10 px-6 md:px-12"}
        >
          {/* Honeypot field — hidden from real users, catches bots. */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company">Company (leave blank)</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className={compact ? "grid grid-cols-2 gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
            <div>
              <label htmlFor="name" className={compact ? compactLabelClasses : labelClasses}>
                Name <span className="text-[#B07040]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={compact ? compactInputClasses : inputClasses}
                placeholder="Dr. Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className={compact ? compactLabelClasses : labelClasses}>
                Email <span className="text-[#B07040]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={compact ? compactInputClasses : inputClasses}
                placeholder="jane@clinic.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className={compact ? compactLabelClasses : labelClasses}>
                Phone <span className="text-[#B07040]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={compact ? compactInputClasses : inputClasses}
                placeholder="+44 7700 900000"
              />
            </div>

            <div>
              <label htmlFor="clinicType" className={compact ? compactLabelClasses : labelClasses}>
                Clinic type
              </label>
              <select id="clinicType" name="clinicType" className={compact ? compactInputClasses : inputClasses} defaultValue="">
                <option value="" disabled>
                  Select one…
                </option>
                {CLINIC_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {!compact && (
              <>
                <div className="sm:col-span-2">
                  <label htmlFor="budget" className={labelClasses}>
                    Monthly marketing budget
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className={inputClasses}
                    placeholder="e.g. £2,000 – £5,000"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClasses} resize-y`}
                    placeholder="Tell us a little about your goals…"
                  />
                </div>
              </>
            )}
          </div>

          {status === "error" && (
            <p
              role="alert"
              className="mt-5 font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className={
              compact
                ? "mt-4 w-full inline-flex items-center justify-center px-8 py-3 font-sans text-xs tracking-widest uppercase text-white rounded-sm bg-[#B07040] hover:bg-[#96603A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                : "mt-7 w-full inline-flex items-center justify-center px-8 py-3.5 font-sans text-xs tracking-widest uppercase text-white rounded-sm bg-[#B07040] hover:bg-[#96603A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            }
          >
            {status === "submitting" ? "Sending…" : "Submit My Details"}
          </button>

          <p className={compact ? "font-sans text-[11px] text-neutral-400 mt-2.5 text-center tracking-wide" : "font-sans text-xs text-neutral-400 mt-4 text-center tracking-wide"}>
            We&apos;ll only use your details to get in touch. No spam, ever.
          </p>
        </form>
      )}
    </>
  );
}

export default function LeadForm() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 px-5 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F2ED 0%, #ECEAE4 100%)" }}
    >
      {/* Decorative copper glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(176,112,64,0.16) 0%, rgba(176,112,64,0) 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-32 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(176,112,64,0.1) 0%, rgba(176,112,64,0) 70%)" }}
      />
      {/* Fine border frame */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 border-t border-[#B07040]/15" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 border-b border-[#B07040]/15" />

      <div className="relative max-w-2xl mx-auto">
        <LeadFormFields />
      </div>
    </section>
  );
}
