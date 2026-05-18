"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const FOUNDERS = [
  {
    initials: "F1",
    name: "[Founder Name 1]",
    role: "Co-Founder · Strategy & Growth",
    bio: "Leads client strategy and growth architecture. Spent 5+ years running performance campaigns for aesthetics and IVF clinics across India and the GCC. Believes every marketing decision should trace back to one number — revenue.",
    tags: ["Strategy", "Paid Ads", "Growth"],
  },
  {
    initials: "F2",
    name: "[Founder Name 2]",
    role: "Co-Founder · Creative & Brand",
    bio: "Heads creative direction and brand identity for every Novara client. Built visual identities for premium clinics and private practices that needed to look as good as the care they deliver. Obsessed with the gap between how a clinic feels in-person and how it looks online.",
    tags: ["Brand", "Creative", "Content"],
  },
  {
    initials: "F3",
    name: "[Founder Name 3]",
    role: "Co-Founder · Digital & SEO",
    bio: "Owns SEO, AEO, and web across all client accounts. Has built and ranked clinic websites in the most competitive medical search markets in the UK, India, and the Middle East. If your clinic isn't appearing in AI search results yet, this is why.",
    tags: ["SEO", "AEO", "Web"],
  },
];

export default function Founders() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible,  setCardsVisible]  = useState(false);
  const [hoveredCard,   setHoveredCard]   = useState<number | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === cardsRef.current)  setCardsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    [headerRef, cardsRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-n-bg overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6"
        >
          {/* Left: slides from left */}
          <div
            style={{
              opacity:    headerVisible ? 1 : 0,
              transform:  headerVisible ? "translateX(0)" : "translateX(-40px)",
              transition: `opacity 1.5s ${EASE}, transform 1.5s ${EASE}`,
            }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-3">
              Who we are
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
              Three founders.
              <br />
              One obsession.
            </h2>
          </div>

          {/* Right: slides from right */}
          <p
            className="md:max-w-xs md:text-right font-sans text-sm md:text-base leading-relaxed text-neutral-500"
            style={{
              opacity:    headerVisible ? 1 : 0,
              transform:  headerVisible ? "translateX(0)" : "translateX(40px)",
              transition: `opacity 1.5s ${EASE} 0.2s, transform 1.5s ${EASE} 0.2s`,
            }}
          >
            Combined 5+ years in aesthetics, IVF, dental, and private clinical
            marketing. We built Novara because we got tired of watching great
            clinics waste money on agencies that didn&apos;t care.
          </p>
        </div>

        {/* Divider */}
        <div
          className="border-t border-neutral-200 mt-8 mb-12"
          style={{
            opacity:    headerVisible ? 1 : 0,
            transition: `opacity 1.2s ${EASE} 0.4s`,
          }}
        />

        {/* ── Founder cards — scale + fade, staggered ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FOUNDERS.map((founder, i) => (
            <div
              key={founder.initials}
              style={{
                opacity:    cardsVisible ? 1 : 0,
                transform:  cardsVisible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
              }}
            >
              <div
                className="bg-white rounded-sm p-6 h-full cursor-default"
                style={{
                  border:     `1px solid ${hoveredCard === i ? "#B07040" : "#e5e5e5"}`,
                  transform:  hoveredCard === i ? "translateY(-6px)" : "translateY(0)",
                  boxShadow:  hoveredCard === i
                    ? "0 8px 32px rgba(176,112,64,0.12)"
                    : "0 1px 4px rgba(0,0,0,0.06)",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full aspect-square max-w-[72px] bg-[#B07040]/10 flex items-center justify-center rounded-sm">
                  <span className="font-serif text-5xl text-[#B07040] leading-none select-none">
                    {founder.initials}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-4">
                  {founder.name}
                </h3>

                <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#B07040] mt-1">
                  {founder.role}
                </p>

                <div className="border-t border-[#B07040]/30 mt-3 mb-4" />

                <p className="font-sans text-sm leading-relaxed text-neutral-500">
                  {founder.bio}
                </p>

                <div className="flex gap-2 flex-wrap mt-5">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-300 text-neutral-600 text-xs tracking-widest uppercase px-3 py-1 rounded-full hover:border-[#B07040] hover:text-[#B07040] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p
          className="font-sans text-sm leading-relaxed text-neutral-400 text-center italic mt-12"
          style={{
            opacity:    cardsVisible ? 1 : 0,
            transition: `opacity 1.2s ${EASE} 600ms`,
          }}
        >
          Names and photos coming soon — we&apos;re too busy getting our clients
          results to finish our own website.
        </p>

      </div>
    </section>
  );
}
