"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 5,   prefix: "",  suffix: "+",  label: "Years of industry experience" },
  { value: 400, prefix: "",  suffix: "+",  label: "Campaigns launched" },
  { value: 2,   prefix: "£", suffix: "M+", label: "Spent on high-performance ads" },
  { value: 4,   prefix: "",  suffix: "×",  label: "Average lead growth" },
];

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function easeOutQuad(t: number) {
  return t * (2 - t);
}

export default function Stats() {
  const ref     = useRef<HTMLElement>(null);
  const started = useRef(false);
  const [counts,  setCounts]  = useState(STATS.map(() => 0));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        setVisible(true);

        STATS.forEach((stat, i) => {
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / 1600, 1);
            setCounts((prev) => {
              const next = [...prev];
              next[i] = Math.round(easeOutQuad(progress) * stat.value);
              return next;
            });
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} data-nav-light className="w-full" style={{ background: "#e8e5e0" }}>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={[
              "group relative flex flex-col items-center justify-center text-center",
              "py-10 px-6 cursor-default select-none",
              i > 0 ? "border-l border-white/10" : "",
              i >= 2 ? "border-t border-white/10 md:border-t-0" : "",
            ].filter(Boolean).join(" ")}
            style={{
              opacity:    visible ? 1 : 0,
              transform:  visible ? "scale(1)" : "scale(0.92)",
              transition: `opacity 1.4s ${EASE} ${i * 200}ms, transform 1.4s ${EASE} ${i * 200}ms`,
            }}
          >
            <span
              className="font-serif text-4xl md:text-5xl font-bold leading-none tabular-nums tracking-tight transition-colors duration-300"
              style={{ color: "#B07040" }}
            >
              {stat.prefix}{counts[i]}{stat.suffix}
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-neutral-700 mt-3 transition-colors duration-300 group-hover:text-neutral-900">
              {stat.label}
            </span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 transition-all duration-300 group-hover:w-10"
              style={{ background: "#B07040" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
