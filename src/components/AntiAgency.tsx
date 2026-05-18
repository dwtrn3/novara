"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const CARDS = [
  {
    num: "01",
    title: "The retainer trap",
    body: "You sign for 12 months. Month one is strategy. Month two is 'building foundations'. You see results — if ever — right before renewal, when they need you to re-sign.",
  },
  {
    num: "02",
    title: "The handoff problem",
    body: "The senior team that pitched you disappears after onboarding. Your account is managed by someone two years out of college running five other clients simultaneously.",
  },
  {
    num: "03",
    title: "Vanity over revenue",
    body: "Agencies optimise for metrics that look good in reports — impressions, followers, CPM. Not booked appointments. Not revenue. Not the number that actually matters to your clinic.",
  },
];

export default function AntiAgency() {
  const [leftVisible,   setLeftVisible]   = useState(false);
  const [cardsVisible,  setCardsVisible]  = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [hoveredCard,   setHoveredCard]   = useState<number | null>(null);

  const leftRef   = useRef<HTMLDivElement>(null);
  const cardsRef  = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === leftRef.current)   setLeftVisible(true);
          if (entry.target === cardsRef.current)  setCardsVisible(true);
          if (entry.target === bannerRef.current) setBannerVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    [leftRef, cardsRef, bannerRef].forEach((r) => {
      if (r.current) obs.observe(r.current);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full bg-n-bg py-16 md:py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-12 items-start">

          {/* Left — slides from left */}
          <div
            ref={leftRef}
            className="md:max-w-sm"
            style={{
              opacity:    leftVisible ? 1 : 0,
              transform:  leftVisible ? "translateX(0)" : "translateX(-60px)",
              transition: `opacity 1.5s ${EASE}, transform 1.5s ${EASE}`,
            }}
          >
            <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase mb-3">
              The problem
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-[#1a1a1a]">
              The traditional agency is designed to bill you, not grow you.
            </h2>

            <div className="w-10 h-px bg-[#B07040] my-5" />

            <p className="font-sans text-sm md:text-base leading-relaxed text-[#4a4a4a]">
              Most agencies win your business with a glossy deck, lock you into
              a 12-month retainer, then hand you off to a junior team you&apos;ve
              never met. You get monthly PDF reports full of vanity metrics —
              impressions, reach, &lsquo;brand awareness&rsquo; — while your actual revenue
              flatlines.
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#4a4a4a] mt-2">
              By month three, you&apos;re paying for their overhead. By month six,
              you&apos;re too deep in the contract to leave. By month twelve, you
              start over with someone new.
            </p>
          </div>

          {/* Right — cards slide up, staggered */}
          <div ref={cardsRef} className="flex flex-col gap-3">
            {CARDS.map((card, i) => (
              <div
                key={card.num}
                style={{
                  opacity:    cardsVisible ? 1 : 0,
                  transform:  cardsVisible ? "translateY(0)" : "translateY(50px)",
                  transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
                }}
              >
                <div
                  className="bg-white p-4 md:p-5 cursor-default"
                  style={{
                    border:     `1px solid ${hoveredCard === i ? "#B07040" : "#e5e5e5"}`,
                    transform:  hoveredCard === i ? "translateY(-4px)" : "translateY(0)",
                    boxShadow:  hoveredCard === i ? "0 4px 24px rgba(176,112,64,0.12)" : "none",
                    transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span className="font-sans text-2xl font-bold text-[#B07040] leading-none block mb-3">
                    {card.num}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#1a1a1a] mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#6b6b6b]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Novara Difference block ── */}
        <div
          ref={bannerRef}
          className="mt-8 md:mt-10"
          style={{
            opacity:    bannerVisible ? 1 : 0,
            transform:  bannerVisible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 1.4s ${EASE} 200ms, transform 1.4s ${EASE} 200ms`,
          }}
        >
          <div
            className="bg-[#0f0f0f] px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ borderLeft: "4px solid #B07040" }}
          >
            <div>
              <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase mb-3">
                The Novara difference
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-white leading-snug max-w-xl">
                &ldquo;We don&apos;t take retainers. We don&apos;t hand you off. We sit inside
                your clinic&apos;s growth — and we only win when you win.&rdquo;
              </p>
            </div>
            <a
              href="#how-we-work"
              className="font-sans border border-[#B07040] text-[#B07040] px-8 py-4 text-[12px] tracking-widest uppercase shrink-0 w-full md:w-auto text-center hover:bg-[#B07040] hover:text-white transition-all duration-300"
            >
              See how we work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
