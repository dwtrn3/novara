"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your digital presence, map competitor gaps, and set revenue targets — before anything goes live.",
  },
  {
    num: "02",
    title: "We come to you",
    desc: "Our team visits your clinic. We shoot everything — photos, video, testimonials. Every creative asset built in-house, on your premises.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Ads go live. SEO and AEO kick in. Your website is live and converting. All on a timeline that respects how you operate.",
  },
  {
    num: "04",
    title: "Optimise & report",
    desc: "Monthly calls. Transparent dashboards. Every rupee tracked. We're accountable for your numbers, not just your deliverables.",
  },
];

export default function HowWeWork() {
  const [leftVisible,  setLeftVisible]  = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [hoveredStep,  setHoveredStep]  = useState<number | null>(null);

  const leftRef  = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === leftRef.current)  setLeftVisible(true);
          if (entry.target === stepsRef.current) setStepsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    [leftRef, stepsRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-we-work" className="w-full py-14 md:py-16 bg-n-surface overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* ── Left column — slides from left ── */}
          <div
            ref={leftRef}
            className="w-full md:w-2/5 shrink-0"
            style={{
              opacity:    leftVisible ? 1 : 0,
              transform:  leftVisible ? "translateX(0)" : "translateX(-40px)",
              transition: `opacity 1.5s ${EASE}, transform 1.5s ${EASE}`,
            }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-3">
              How it works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-neutral-900 mb-4">
              Your team,
              <br />
              extended.
            </h2>
            <p className="font-sans text-sm leading-relaxed text-neutral-500 max-w-xs">
              We don&apos;t send monthly reports and go quiet. We sit inside your
              growth — whether you&apos;re an aesthetics clinic, a fertility centre,
              a dental practice, or a private clinic. Visible, accountable,
              obsessed with your revenue.
            </p>
          </div>

          {/* ── Right column: steps — slide from right, staggered ── */}
          <div ref={stepsRef} className="w-full md:flex-1 min-w-0">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  opacity:    stepsVisible ? 1 : 0,
                  transform:  stepsVisible ? "translateX(0)" : "translateX(60px)",
                  transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
                }}
              >
                <div
                  className="relative py-4 border-t border-neutral-200 cursor-default transition-all duration-300"
                  style={{
                    background:  hoveredStep === i ? "rgba(176,112,64,0.05)" : "transparent",
                    paddingLeft: hoveredStep === i ? "12px" : "0px",
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Copper left accent */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B07040] transition-all duration-300"
                    style={{
                      opacity:         hoveredStep === i ? 1 : 0,
                      transform:       hoveredStep === i ? "scaleY(1)" : "scaleY(0)",
                      transformOrigin: "top",
                    }}
                  />

                  {/* Line 1: number + title */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-xs tracking-widest text-[#B07040] w-8 shrink-0">
                      {step.num}
                    </span>
                    <h3
                      className="font-serif text-base md:text-lg font-semibold leading-snug transition-colors duration-300"
                      style={{ color: hoveredStep === i ? "#B07040" : "#171717" }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Line 2: description */}
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed mt-1 pl-11">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Closing border */}
            <div
              className="border-b border-neutral-200"
              style={{
                opacity:    stepsVisible ? 1 : 0,
                transition: `opacity 1.2s ${EASE} 600ms`,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
