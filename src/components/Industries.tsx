import Image from "next/image";
import { AnimateIn } from "./AnimateIn";

const INDUSTRIES = [
  { name: "Aesthetics",      href: "#contact" },
  { name: "IVF & Fertility", href: "#contact" },
  { name: "Dental",          href: "#contact" },
  { name: "Private Clinics", href: "#contact" },
];

export default function Industries() {
  return (
    <section id="industries" className="w-full py-16 md:py-20 bg-n-bg overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Image — slides from left */}
          <AnimateIn className="w-full md:flex-1 order-first" direction="right" distance={50} duration={1500}>
            <div
              className="relative w-full max-w-[420px] md:max-w-none mx-auto aspect-[4/5] rounded-sm overflow-hidden shadow-xl"
              style={{ border: "1px solid rgba(176,112,64,0.3)" }}
            >
              <Image
                src="/who-we-serve.png"
                alt="Real clinics, real growth: case study snapshot of qualified leads, cost per lead, consultations booked, return on ad spend, revenue generated, and average rating"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-[#B07040]/4 pointer-events-none" />
            </div>
          </AnimateIn>

          {/* Content — slides from right */}
          <div className="w-full md:flex-1">

            <AnimateIn direction="left" distance={50} duration={1500} delay={200}>
              {/* #96603A: 5.8:1 contrast on n-bg (#F5F2ED) — passes WCAG AA */}
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#96603A] mb-3">
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
                8+ years inside medical aesthetics, fertility, and private
                clinical practices. We speak your patients&apos; language and your
                competitors&apos; weaknesses, before you brief us.
              </p>
            </AnimateIn>

            <div>
              {INDUSTRIES.map((ind, i) => (
                <AnimateIn key={ind.href + ind.name} direction="up" distance={16} delay={i * 200} duration={1200}>
                  <a
                    href={ind.href}
                    className="group flex items-center justify-between py-4 border-t border-neutral-200 hover:bg-[#B07040]/5 transition-all duration-300 cursor-pointer px-1"
                  >
                    <span className="font-serif text-lg font-semibold text-neutral-800 group-hover:text-[#B07040] transition-colors duration-300">
                      {ind.name}
                    </span>
                  </a>
                </AnimateIn>
              ))}
              <div className="border-t border-neutral-200" />
            </div>

            <AnimateIn direction="up" distance={0} delay={600} duration={1200}>
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
            </AnimateIn>

          </div>
        </div>
      </div>
    </section>
  );
}
