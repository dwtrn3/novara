"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const RESULTS = [
  {
    tag: "Aesthetics · Dubai",
    stat: "3× appointments",
    context: "In the first 60 days of going live",
  },
  {
    tag: "IVF · India",
    stat: "4× more leads",
    context: "At 40% lower cost per lead",
  },
  {
    tag: "Private Clinic · UK",
    stat: "+70% new patients",
    context: "Within 90 days of launch",
  },
];

export default function ResultsSnapshot() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [rowsVisible,   setRowsVisible]   = useState(false);
  const [hoveredRow,    setHoveredRow]    = useState<number | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === rowsRef.current)   setRowsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    [headerRef, rowsRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" className="w-full py-12 md:py-16 bg-[#0a0a0a] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          style={{
            opacity:    headerVisible ? 1 : 0,
            transform:  headerVisible ? "translateY(0)" : "translateY(-16px)",
            transition: `opacity 1.2s ${EASE}, transform 1.2s ${EASE}`,
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040]">
              Results
            </p>
            <a
              href="/results"
              className="relative group inline-block font-sans text-sm text-neutral-400 hover:text-[#B07040] transition-colors duration-300 pb-0.5"
            >
              View all case studies →
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-[#B07040] transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          </div>
          <div className="border-t border-white/10" />
        </div>

        {/* ── Result rows — slide up, staggered ── */}
        <div ref={rowsRef}>
          {RESULTS.map((row, i) => (
            <div
              key={row.tag}
              style={{
                opacity:    rowsVisible ? 1 : 0,
                transform:  rowsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
              }}
            >
              <div
                className="relative flex flex-col md:flex-row md:items-center py-5 md:py-6 border-t border-white/10 cursor-pointer transition-colors duration-300"
                style={{
                  background: hoveredRow === i ? "rgba(255,255,255,0.03)" : "transparent",
                }}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Copper left border accent */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B07040] transition-all duration-300"
                  style={{
                    opacity:         hoveredRow === i ? 1 : 0,
                    transform:       hoveredRow === i ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                  }}
                />

                {/* ── Desktop 3-col layout ── */}
                <div className="hidden md:flex md:items-center w-full gap-8">
                  <div className="w-40 shrink-0">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-500">
                      {row.tag}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span
                      className="font-serif text-3xl md:text-4xl font-bold leading-none whitespace-nowrap transition-colors duration-300"
                      style={{ color: hoveredRow === i ? "#B07040" : "#ffffff" }}
                    >
                      {row.stat}
                    </span>
                  </div>

                  <div className="w-48 md:w-56 shrink-0 text-right">
                    <p className="font-sans text-sm text-neutral-400 leading-snug">
                      {row.context}
                    </p>
                  </div>
                </div>

                {/* ── Mobile stacked layout ── */}
                <div className="md:hidden w-full text-center">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
                    {row.tag}
                  </p>
                  <p
                    className="font-serif text-2xl font-bold leading-none transition-colors duration-300"
                    style={{ color: hoveredRow === i ? "#B07040" : "#ffffff" }}
                  >
                    {row.stat}
                  </p>
                  <p className="font-sans text-sm text-neutral-400 mt-2">
                    {row.context}
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* Closing border */}
          <div
            className="border-b border-white/10"
            style={{
              opacity:    rowsVisible ? 1 : 0,
              transition: `opacity 1.2s ${EASE} 600ms`,
            }}
          />
        </div>

      </div>
    </section>
  );
}
