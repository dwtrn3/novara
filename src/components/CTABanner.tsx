"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function CTABanner() {
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCardVisible(true);
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full py-20 px-5 bg-[#B07040] overflow-x-hidden">
      <div
        ref={cardRef}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl py-14 px-6 md:px-20 text-center"
        style={{
          opacity:    cardVisible ? 1 : 0,
          transform:  cardVisible ? "scale(1)" : "scale(0.96)",
          transition: `opacity 1.4s ${EASE}, transform 1.4s ${EASE}`,
        }}
      >
        {/* Label */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-4">
          Let&apos;s Talk
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
          Ready to grow?
        </h2>

        {/* Copper divider */}
        <div className="border-t-2 border-[#B07040] w-12 mx-auto my-5" />

        {/* Body */}
        <p className="font-sans text-sm md:text-base leading-relaxed text-neutral-500 max-w-md mx-auto mb-8">
          No pitch decks. No retainer traps.
          Aesthetics, IVF, dental, or private clinics —
          just a 30-minute call and a plan built for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-sans text-xs tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "#B07040" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#96603A";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#B07040";
            }}
          >
            Book a Free Call
          </a>

          <a
            href="#results"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 font-sans text-xs tracking-widest uppercase border rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: "#B07040", color: "#B07040", background: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#B07040";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#B07040";
            }}
          >
            See Our Results →
          </a>
        </div>

        {/* Fine print */}
        <p className="font-sans text-xs text-neutral-400 mt-5 tracking-wide">
          30 minutes · No obligation · We&apos;ll come prepared
        </p>
      </div>
    </section>
  );
}
