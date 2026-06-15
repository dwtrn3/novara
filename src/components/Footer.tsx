"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const NAV_LINKS = [
  { label: "Services",    href: "#services" },
  { label: "Industries",  href: "#industries" },
  { label: "How we work", href: "#how-we-work" },
  { label: "Results",     href: "#results" },
];


function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      className="relative inline-block font-sans text-xs tracking-widest uppercase text-neutral-500 pb-0.5 transition-colors duration-300"
      style={{ color: hovered ? "#B07040" : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px bg-[#B07040] transition-all duration-300 ease-out"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </Link>
  );
}

export default function Footer() {
  const [bookHovered, setBookHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (footerRef.current) obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-n-dark"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 1.4s ${EASE}, transform 1.4s ${EASE}`,
      }}
    >

      {/* ── Top bar ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-6 flex items-center justify-between border-b border-white/10">
        <span className="font-sans font-medium text-[16px] tracking-[0.2em] uppercase text-white flex items-center">
          YRT by Novara<span className="font-serif text-[20px] text-[#B07040] ml-1.5 normal-case">π</span>
        </span>
        <a
          href="mailto:growth@yourevenueteam.com"
          className="font-sans text-sm text-neutral-400 hover:text-[#B07040] transition-colors duration-300"
        >
          growth@yourevenueteam.com
        </a>
      </div>

      {/* ── Main body ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Left: tagline + socials */}
          <div className="text-center md:text-left">
            <p className="font-sans text-sm leading-relaxed text-neutral-400 max-w-xs mx-auto md:mx-0">
              Your extended revenue department for aesthetics clinics, IVF
              centres, dental practices, and private clinics that want to grow.
            </p>
          </div>

          {/* Center: large logo anchor */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="border-t border-[#B07040]/30 w-full mb-6" />
            <span className="font-sans font-medium text-[13px] tracking-[0.25em] uppercase text-neutral-500 mb-3">
              Est. 2024
            </span>
            <p className="font-serif text-5xl md:text-6xl font-bold text-white leading-none">
              YRT by Novara
            </p>
            <span className="font-serif text-3xl text-[#B07040] mt-1 leading-none">π</span>
            <div className="border-b border-[#B07040]/30 w-full mt-6" />
          </div>

          {/* Right: work with us CTA */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040] mb-5">
              Work with us
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border px-8 py-3 font-sans text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                borderColor:     "#B07040",
                color:           bookHovered ? "#ffffff" : "#B07040",
                background:      bookHovered ? "#B07040" : "transparent",
                transform:       bookHovered ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={() => setBookHovered(true)}
              onMouseLeave={() => setBookHovered(false)}
            >
              Book a Call
            </a>
            <a
              href="mailto:growth@yourevenueteam.com"
              className="font-sans text-sm text-neutral-400 hover:text-[#B07040] transition-colors duration-300 mt-4"
            >
              growth@yourevenueteam.com
            </a>
          </div>
        </div>

        {/* ── Nav links row ── */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {NAV_LINKS.map((link, i) => (
            <div key={link.href} className="flex items-center gap-6">
              <NavLink href={link.href} label={link.label} />
              {i < NAV_LINKS.length - 1 && (
                <span aria-hidden className="text-white/10 select-none">·</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-sans text-xs text-neutral-600">© 2026 YRT by Novara π</span>
        <div className="flex gap-5">
          <Link href="/privacy" className="font-sans text-xs text-neutral-600 hover:text-[#B07040] transition-colors duration-300">
            Privacy
          </Link>
          <Link href="/terms" className="font-sans text-xs text-neutral-600 hover:text-[#B07040] transition-colors duration-300">
            Terms
          </Link>
        </div>
      </div>

    </footer>
  );
}
