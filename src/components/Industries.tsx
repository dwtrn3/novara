"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const INDUSTRIES = [
  { name: "Aesthetics",      href: "#aesthetics" },
  { name: "IVF & Fertility", href: "#ivf" },
  { name: "Dental",          href: "#dental" },
  { name: "Private Clinics", href: "#private-clinics" },
];

export default function Industries() {
  const [imgVisible,  setImgVisible]  = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [rowsVisible, setRowsVisible] = useState(false);

  const imgRef  = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === imgRef.current)  setImgVisible(true);
          if (entry.target === textRef.current) setTextVisible(true);
          if (entry.target === rowsRef.current) setRowsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    [imgRef, textRef, rowsRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="industries" className="w-full py-16 md:py-20 bg-n-bg overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* ── Left: image — slides from left ── */}
          <div
            ref={imgRef}
            className="w-full md:flex-1 order-first"
            style={{
              opacity:    imgVisible ? 1 : 0,
              transform:  imgVisible ? "translateX(0)" : "translateX(-50px)",
              transition: `opacity 1.5s ${EASE}, transform 1.5s ${EASE}`,
            }}
          >
            <div
              className="relative h-[260px] md:h-[540px] w-full rounded-sm overflow-hidden shadow-xl"
              style={{ border: "1px solid rgba(176,112,64,0.3)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80"
                alt="Medical clinic interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#B07040]/4 pointer-events-none" />
            </div>
          </div>

          {/* ── Right: content — slides from right ── */}
          <div className="w-full md:flex-1">

            <div
              ref={textRef}
              style={{
                opacity:    textVisible ? 1 : 0,
                transform:  textVisible ? "translateX(0)" : "translateX(50px)",
                transition: `opacity 1.5s ${EASE} 0.2s, transform 1.5s ${EASE} 0.2s`,
              }}
            >
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-3">
                Who we serve
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
                We only work
                <br />
                where we know
                <br />
                the game.
              </h2>
              <p className="font-sans text-sm md:text-base leading-relaxed text-neutral-500 mt-4 mb-8">
                5+ years inside medical aesthetics, fertility, and private
                clinical practices. We speak your patients&apos; language — and your
                competitors&apos; weaknesses — before you brief us.
              </p>
            </div>

            {/* Industry rows — stagger up */}
            <div ref={rowsRef}>
              {INDUSTRIES.map((ind, i) => (
                <div
                  key={ind.href}
                  style={{
                    opacity:    rowsVisible ? 1 : 0,
                    transform:  rowsVisible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 1.2s ${EASE} ${i * 200}ms, transform 1.2s ${EASE} ${i * 200}ms`,
                  }}
                >
                  <a
                    href={ind.href}
                    className="group flex items-center justify-between py-4 border-t border-neutral-200 hover:bg-[#B07040]/5 transition-all duration-300 cursor-pointer px-1"
                  >
                    <span className="font-serif text-lg font-semibold text-neutral-800 group-hover:text-[#B07040] transition-colors duration-300">
                      {ind.name}
                    </span>
                    <span className="text-[#B07040] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                </div>
              ))}
              <div className="border-t border-neutral-200" />
            </div>

            <div
              style={{
                opacity:    rowsVisible ? 1 : 0,
                transition: `opacity 1.2s ${EASE} 600ms`,
              }}
            >
              <a
                href="#how-we-work"
                className="relative group inline-block font-sans text-sm tracking-wide text-[#B07040] mt-8 pb-0.5"
              >
                Explore our approach →
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#B07040] transition-all duration-300 ease-out group-hover:w-full"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
