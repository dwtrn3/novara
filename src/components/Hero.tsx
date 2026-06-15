"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { openLeadModal } from "@/lib/leadModalStore";

const INDUSTRIES_TRUST = [
  "Aesthetics",
  "IVF & Fertility",
  "Dental",
  "Private Clinics",
  "Multi-Channel Clinics",
];

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero">

      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <div className="md:hidden relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#141414]">

        {/* Decorative copper glows — replace the background photo on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(176,112,64,0.28) 0%, rgba(176,112,64,0) 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-24 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(176,112,64,0.16) 0%, rgba(176,112,64,0) 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(176,112,64,0.12) 0%, rgba(176,112,64,0) 70%)" }}
        />

        {/* Content — slides up on load */}
        <div
          className={`relative z-20 flex flex-col h-full px-5 pt-24 pb-8 ${
            animated ? "animate-slideUp" : "opacity-0"
          }`}
        >
          {/* Top: headline + body */}
          <div className="flex flex-col gap-4 shrink-0">
            <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase">
              Aesthetics · IVF · Dental · Private Clinics
            </p>

            <h1 className="font-serif font-bold text-[46px] leading-[0.92] text-[#F5F2ED]">
              Your revenue
              <br />
              department.
            </h1>

            <div aria-hidden="true" className="w-8 h-px bg-[#B07040] my-1" />

            <p className="font-sans text-sm md:text-base leading-relaxed text-[#F5F2ED]/70 max-w-[280px]">
              We bring a full production crew to your clinic, shoot everything,
              run your ads, and own your growth.
            </p>
            <p className="font-sans text-sm text-[#B07040] mt-1">
              Not an agency. An extension of you.
            </p>
          </div>

          {/* Middle: production-shoot photo */}
          <div className="relative flex-1 min-h-[140px] my-5 rounded-sm overflow-hidden border border-[#F5F2ED]/10">
            <Image
              src="/images/hero-clinic-shoot.jpg"
              alt="Novara team filming a professional content shoot at an aesthetics clinic"
              fill
              className="object-cover"
              style={{ objectPosition: "center top" }}
              quality={90}
            />
            <div className="absolute inset-0 bg-[#B07040]/10 pointer-events-none" />
          </div>

          {/* Bottom: trust bar + CTAs */}
          <div className="flex flex-col gap-3 shrink-0">
            <div aria-hidden="true" className="w-full h-px bg-[#F5F2ED]/10 mb-1" />
            <div className="flex flex-col gap-2 mb-1">
              <span className="font-sans text-[8px] tracking-[0.14em] text-[#F5F2ED]/30 uppercase">
                Industries we serve
              </span>
              <div className="overflow-hidden relative w-full">
                <div className="flex gap-6 items-center animate-marquee whitespace-nowrap w-max">
                  {[...INDUSTRIES_TRUST, ...INDUSTRIES_TRUST].map((label, i) => (
                    <span
                      key={i}
                      className="font-serif italic text-sm text-[#F5F2ED]/55 whitespace-nowrap shrink-0"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openLeadModal}
              className="font-sans bg-[#B07040] text-[#F5F2ED] w-full py-4 text-xs tracking-[0.1em] uppercase text-center"
            >
              Book a discovery call
            </button>
            <a
              href="#results"
              className="font-sans text-sm text-[#F5F2ED]/60 text-center w-full py-3.5 border border-[#F5F2ED]/20"
            >
              See our results →
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below md) ── */}
      <div className="hidden md:flex flex-col min-h-screen bg-n-dark">

        {/* Main content row */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full flex flex-row gap-12 items-center py-24 pt-28">

            {/* Left: text — slides in from left */}
            <div
              className={`flex-1 ${animated ? "animate-slideFromLeft" : "opacity-0"}`}
            >
              <p className="font-sans text-xs tracking-[0.2em] text-n-copper uppercase mb-8">
                Aesthetics · IVF · Dental · Private Clinics
              </p>

              <h1 className="font-serif text-[100px] font-bold leading-[0.92] tracking-tight text-n-bg">
                Your revenue
                <br />
                department.
              </h1>

              <div aria-hidden="true" className="w-12 h-px bg-n-copper my-8" />

              <p className="font-sans text-sm md:text-base leading-relaxed text-n-muted max-w-sm">
                We bring a full production crew to your clinic, shoot everything,
                run your ads, and own your growth.
              </p>
              <p className="font-sans text-sm text-n-copper mt-2">
                Not an agency. An extension of you.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <button
                  type="button"
                  onClick={openLeadModal}
                  className="font-sans bg-n-copper text-n-bg px-9 py-4 text-xs tracking-[0.1em] uppercase hover:bg-[#C8834A] transition-colors duration-300"
                >
                  Book a discovery call
                </button>
                <a
                  href="#results"
                  className="font-sans text-sm text-n-bg/40 hover:text-n-bg/80 transition-colors"
                >
                  See our results →
                </a>
              </div>
            </div>

            {/* Right: image — slides in from right with slight delay */}
            <div
              className={`flex-1 w-full ${animated ? "animate-slideFromRight" : "opacity-0"}`}
              style={animated ? { animationDelay: "0.1s" } : undefined}
            >
              <div className="relative h-[520px] w-full border-l-2 border-n-copper/30">
                <Image
                  src="/images/hero-clinic-shoot.jpg"
                  alt="Novara team filming a professional content shoot at an aesthetics clinic"
                  fill
                  className="object-cover hero-img"
                  style={{ objectPosition: "30% center" }}
                  quality={95}
                  priority
                />
                <div className="absolute inset-0 bg-[#B07040]/6 pointer-events-none z-10" />
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#141414] via-[#141414]/50 to-transparent z-20 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Desktop trust bar */}
        <div className="border-t border-n-bg/10 py-5 flex items-center gap-12 px-8 md:px-16">
          <span className="font-sans text-[9px] tracking-[0.2em] text-n-bg/25 uppercase whitespace-nowrap shrink-0">
            Industries we serve
          </span>
          <div className="overflow-hidden relative w-full">
            <div className="flex gap-16 items-center animate-marquee whitespace-nowrap w-max">
              {[...INDUSTRIES_TRUST, ...INDUSTRIES_TRUST].map((label, i) => (
                <span
                  key={i}
                  className="font-serif italic text-base md:text-lg text-n-bg/60 hover:text-n-bg/90 tracking-wide whitespace-nowrap transition-colors duration-300 shrink-0"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
