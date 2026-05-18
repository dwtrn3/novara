"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const SERVICES = [
  { num: "01", name: "Paid Ads",          desc: "Google, Meta & Facebook — built to convert." },
  { num: "02", name: "SEO & AEO",         desc: "Search rankings and AI engine visibility." },
  { num: "03", name: "Website Building",  desc: "Premium sites, built and maintained by us." },
  { num: "04", name: "Ecommerce",         desc: "Full-stack store setup and ongoing operations." },
];

export default function Services() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [rowsVisible,    setRowsVisible]    = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const rowsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headingRef.current) setHeadingVisible(true);
          if (entry.target === rowsRef.current)    setRowsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    [headingRef, rowsRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="w-full py-16 md:py-20 bg-n-dark overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        {/* Heading block — slides up */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4"
          style={{
            opacity:    headingVisible ? 1 : 0,
            transform:  headingVisible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 1.4s ${EASE}, transform 1.4s ${EASE}`,
          }}
        >
          <div>
            <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase mb-4">
              What we do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold italic leading-tight text-white">
              Four things.
              <br />
              Done exceptionally.
            </h2>
          </div>

          <a
            href="#services"
            className="relative group inline-block font-sans text-sm tracking-wide text-[#6b6b6b] hover:text-[#B07040] transition-colors duration-300 self-start md:self-auto pb-0.5"
          >
            All services →
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-px w-0 bg-[#B07040] transition-all duration-300 ease-out group-hover:w-full"
            />
          </a>
        </div>

        {/* Service rows — slide from right, staggered */}
        <div ref={rowsRef}>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              style={{
                opacity:    rowsVisible ? 1 : 0,
                transform:  rowsVisible ? "translateX(0)" : "translateX(60px)",
                transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
              }}
            >
              <div className="group border-t border-white/10 hover:bg-white/[0.03] transition-all duration-300 cursor-default py-6 hover:py-8">

                {/* ── Mobile layout ── */}
                <div className="md:hidden">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-widest text-[#B07040] shrink-0">
                      {s.num}
                    </span>
                    <span className="font-serif text-2xl text-white group-hover:text-[#B07040] transition-colors duration-300">
                      {s.name}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#6b6b6b] mt-1.5 ml-[26px]">
                    {s.desc}
                  </p>
                </div>

                {/* ── Desktop layout ── */}
                <div className="hidden md:flex items-center">
                  <span className="font-mono text-[11px] tracking-widest text-[#B07040] w-16 shrink-0">
                    {s.num}
                  </span>
                  <span className="font-serif text-2xl lg:text-3xl text-white flex-1 px-8 group-hover:text-[#B07040] transition-colors duration-300">
                    {s.name}
                  </span>
                  <span className="font-sans text-sm text-[#6b6b6b] max-w-[260px] text-right">
                    {s.desc}
                  </span>
                  <span
                    aria-hidden
                    className="font-sans text-[20px] text-[#B07040] ml-8 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    →
                  </span>
                </div>

              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
