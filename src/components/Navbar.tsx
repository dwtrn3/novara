"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const LINKS = [
  { label: "Services",    href: "#services" },
  { label: "Industries",  href: "#industries" },
  { label: "How we work", href: "#how-we-work" },
  { label: "Results",     href: "#results" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] transition-all duration-300 ease-in-out"
      style={
        scrolled
          ? { boxShadow: "0 2px 20px rgba(0,0,0,0.4)", borderBottom: "1px solid rgba(255,255,255,0.1)" }
          : { boxShadow: "none", borderBottom: "1px solid transparent" }
      }
    >
      <div
        className={clsx(
          "max-w-7xl mx-auto px-5 sm:px-8 md:px-16 flex items-center justify-between transition-all duration-300 ease-in-out",
          scrolled ? "py-3" : "py-5"
        )}
      >
        {/* Logo */}
        <a
          href="/"
          className="font-sans font-medium text-[17px] tracking-[0.2em] uppercase text-white flex items-center shrink-0"
        >
          NOVARA<span className="font-serif text-[20px] text-[#B07040] ml-1.5 normal-case">π</span>
        </a>

        {/* Nav links — desktop center */}
        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative inline-block text-[11px] font-sans tracking-widest uppercase text-white/60 hover:text-[#B07040] transition-colors duration-300"
              >
                {link.label}
                {/* Copper underline: slides in left → right */}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#B07040] transition-all duration-300 ease-out group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right — CTA + hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Book a call — desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-sans tracking-widest uppercase border border-[#B07040] text-[#B07040] hover:bg-[#B07040] hover:text-white transition-all duration-300"
          >
            Book a call
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
          >
            <span
              className={clsx(
                "block h-px w-5 bg-white transition-all duration-300 origin-center",
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              )}
            />
            <span
              className={clsx(
                "block h-px w-5 bg-white transition-all duration-300",
                menuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={clsx(
                "block h-px w-5 bg-white transition-all duration-300 origin-center",
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={clsx(
          "md:hidden overflow-hidden bg-[#0a0a0a] border-t border-white/10 transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-5 pt-4 pb-6 gap-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-sans text-[13px] tracking-widest uppercase text-white/55 hover:text-[#B07040] transition-colors duration-200 py-4 border-b border-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center px-6 py-3 border border-[#B07040] text-[#B07040] text-[11px] font-sans tracking-widest uppercase hover:bg-[#B07040] hover:text-white transition-all duration-300"
            >
              Book a call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
