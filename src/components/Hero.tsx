"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOGOS = [
  <svg key="aura" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="21" fontFamily="Georgia, serif" fontSize="18" fontWeight="400" fill="white" letterSpacing="2">AURA</text>
    <text x="58" y="21" fontFamily="Georgia, serif" fontSize="11" fontWeight="400" fill="white" letterSpacing="1" opacity="0.6">CLINIC</text>
  </svg>,
  <svg key="lumiere" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="20" fontFamily="Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" fill="white" letterSpacing="1.5">Lumière</text>
  </svg>,
  <svg key="nova" height="28" viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="14" r="5" fill="none" stroke="white" strokeWidth="1"/>
    <circle cx="8" cy="14" r="2" fill="white"/>
    <text x="20" y="19" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="500" fill="white" letterSpacing="2">NOVA IVF</text>
  </svg>,
  <svg key="revive" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="18" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="300" fill="white" letterSpacing="5">REVIVE</text>
    <line x1="0" y1="23" x2="72" y2="23" stroke="white" strokeWidth="0.5" opacity="0.4"/>
  </svg>,
  <svg key="pearl" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="10" width="8" height="8" transform="rotate(45 4 14)" fill="none" stroke="white" strokeWidth="1"/>
    <text x="16" y="19" fontFamily="Georgia, serif" fontSize="13" fontWeight="400" fill="white" letterSpacing="1.5">Pearl Dental</text>
  </svg>,
  <svg key="harley" height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="16" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="500" fill="white" letterSpacing="3">HARLEY STREET</text>
    <text x="0" y="26" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="300" fill="white" letterSpacing="4" opacity="0.6">CLINIC</text>
  </svg>,
  <svg key="serene" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20 C6 10 14 6 14 6 C14 6 14 16 6 20Z" fill="white" opacity="0.8"/>
    <text x="20" y="19" fontFamily="Georgia, serif" fontSize="15" fontStyle="italic" fontWeight="400" fill="white" letterSpacing="1">Serene</text>
  </svg>,
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

        {/* Background image */}
        <Image
          src="/images/hero-clinic-shoot.jpg"
          alt="Novara team filming at an aesthetics clinic"
          fill
          className="object-cover"
          style={{ objectPosition: "center top" }}
          priority
          quality={95}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/88 via-[#141414]/78 to-[#141414]/93 z-10" />

        {/* Content overlaid on image — slides up on load */}
        <div
          className={`absolute inset-0 z-20 flex flex-col justify-between px-5 pt-20 pb-8 ${
            animated ? "animate-slideUp" : "opacity-0"
          }`}
        >
          {/* Top: headline + body */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase">
              Aesthetics · IVF · Dental · Private Clinics
            </p>

            <h1 className="font-serif font-bold text-[46px] leading-[0.92] text-[#F5F2ED]">
              Your revenue
              <br />
              department.
            </h1>

            <div className="w-8 h-px bg-[#B07040] my-1" />

            <p className="font-sans text-sm md:text-base leading-relaxed text-[#F5F2ED]/70 max-w-[280px]">
              We bring a full production crew to your clinic, shoot everything,
              run your ads, and own your growth.
            </p>
            <p className="font-sans text-sm text-[#B07040] mt-1">
              Not an agency. An extension of you.
            </p>
          </div>

          {/* Bottom: trust bar + CTAs */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-px bg-[#F5F2ED]/10 mb-1" />
            <div className="flex items-center gap-3 overflow-hidden mb-1">
              <span className="font-sans text-[8px] tracking-[0.14em] text-[#F5F2ED]/20 uppercase flex-shrink-0">
                Trusted by
              </span>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-14 h-4 bg-[#F5F2ED]/10 rounded-sm flex-shrink-0"
                />
              ))}
            </div>

            <a
              href="#contact"
              className="font-sans bg-[#B07040] text-[#F5F2ED] w-full py-4 text-xs tracking-[0.1em] uppercase text-center"
            >
              Book a discovery call
            </a>
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

              <div className="w-12 h-px bg-n-copper my-8" />

              <p className="font-sans text-sm md:text-base leading-relaxed text-n-muted max-w-sm">
                We bring a full production crew to your clinic, shoot everything,
                run your ads, and own your growth.
              </p>
              <p className="font-sans text-sm text-n-copper mt-2">
                Not an agency. An extension of you.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a
                  href="#contact"
                  className="font-sans bg-n-copper text-n-bg px-9 py-4 text-xs tracking-[0.1em] uppercase hover:bg-[#C8834A] transition-colors duration-300"
                >
                  Book a discovery call
                </a>
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
            Trusted by
          </span>
          <div className="overflow-hidden relative w-full">
            <div className="flex gap-16 items-center animate-marquee whitespace-nowrap w-max">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="opacity-60 hover:opacity-90 transition-opacity shrink-0"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
