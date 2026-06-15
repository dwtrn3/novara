import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results & Case Studies | YRT by Novara π",
  alternates: { canonical: "/results" },
  description:
    "Real results from aesthetics clinics, IVF centres, dental practices, and private clinics. See how YRT by Novara π drives growth through paid ads, SEO, and web.",
  openGraph: {
    title: "Results & Case Studies | YRT by Novara π",
    description:
      "Real results from aesthetics clinics, IVF centres, dental practices, and private clinics. See how YRT by Novara π drives growth through paid ads, SEO, and web.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Results & Case Studies | YRT by Novara π" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Results & Case Studies | YRT by Novara π",
    description:
      "Real results from aesthetics clinics, IVF centres, dental practices, and private clinics. See how YRT by Novara π drives growth through paid ads, SEO, and web.",
    images: ["/opengraph-image"],
  },
};

const CASES = [
  {
    tag: "Aesthetics",
    location: "Dubai",
    stat: "3×",
    statLabel: "appointments",
    timeframe: "First 60 days",
    description:
      "A Dubai-based aesthetics clinic was struggling to fill their appointment books despite a strong reputation. We rebuilt their paid social strategy from the ground up: new creative, tighter audience targeting, and a streamlined landing page. Within 60 days of going live, bookings had tripled.",
    services: ["Paid Ads", "Landing Page"],
  },
  {
    tag: "IVF",
    location: "India",
    stat: "4×",
    statLabel: "more leads",
    timeframe: "At 40% lower cost per lead",
    description:
      "An established IVF centre in India needed to reduce their cost per enquiry while growing volume. By restructuring their Google Ads campaigns and introducing AEO-optimised content, we quadrupled lead volume, while simultaneously cutting the cost per lead by 40%.",
    services: ["Paid Ads", "SEO & AEO"],
  },
  {
    tag: "Private Clinic",
    location: "UK",
    stat: "+70%",
    statLabel: "new patients",
    timeframe: "Within 90 days of launch",
    description:
      "A multi-specialty private clinic in the UK wanted to grow their new patient pipeline without relying on word of mouth. We launched a full-funnel paid ads strategy alongside a redesigned website built for conversion. New patient bookings rose by 70% within the first 90 days.",
    services: ["Paid Ads", "Website", "SEO"],
  },
];

const STATS = [
  { value: "8+",   label: "Years in market" },
  { value: "400+", label: "Campaigns launched" },
  { value: "£2M+", label: "Ad spend managed" },
  { value: "4×",   label: "Average lead growth" },
];

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-36 pb-20 px-5 sm:px-8 md:px-16 max-w-6xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-5">
            Case Studies
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight max-w-2xl">
            Results that speak for themselves.
          </h1>
          <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mt-6">
            We work with aesthetics clinics, IVF centres, dental practices, and private clinics
            across the UK and internationally. Here&apos;s what happens when strategy meets execution.
          </p>
        </section>

        {/* ── Global stats bar ── */}
        <section className="border-t border-b border-white/10 py-10 px-5 sm:px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-serif text-4xl md:text-5xl font-bold text-[#B07040]">
                  {s.value}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-neutral-500 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Case studies ── */}
        <section className="py-20 px-5 sm:px-8 md:px-16 max-w-6xl mx-auto">
          <div className="space-y-0">
            {CASES.map((c) => (
              <div
                key={`${c.tag}-${c.location}`}
                className="group border-t border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start hover:bg-white/[0.02] transition-colors duration-300 px-0"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-sans text-xs tracking-widest uppercase text-[#B07040]">
                      {c.tag}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="font-sans text-xs tracking-widest uppercase text-neutral-500">
                      {c.location}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="font-serif text-7xl md:text-8xl font-bold text-white leading-none group-hover:text-[#B07040] transition-colors duration-500">
                      {c.stat}
                    </p>
                    <p className="font-sans text-sm tracking-widest uppercase text-neutral-400 mt-2">
                      {c.statLabel}
                    </p>
                  </div>

                  <p className="font-sans text-xs tracking-widest uppercase text-neutral-600">
                    {c.timeframe}
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between h-full gap-8">
                  <p className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="font-sans text-[11px] tracking-widest uppercase px-3 py-1.5 border border-white/10 text-neutral-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-5 sm:px-8 md:px-16 bg-[#B07040]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-white/70 mb-4">
              Your clinic next
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Want results like these?
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-10 max-w-md mx-auto">
              Book a free 30-minute discovery call. No pitch decks, no retainer traps, just a
              clear plan built around your clinic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-[#B07040] font-sans text-xs tracking-widest uppercase hover:bg-neutral-100 transition-all duration-300"
              >
                Book a Free Call
              </a>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-sans text-xs tracking-widest uppercase hover:bg-white hover:text-[#B07040] transition-all duration-300"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
