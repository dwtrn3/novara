import { AnimateIn } from "./AnimateIn";

const RESULTS = [
  {
    tag: "Aesthetics · Dubai",
    stat: "3× appointments",
    context: "In the first 60 days of going live",
  },
  {
    tag: "IVF · India",
    stat: "4× more leads",
    context: "At 40% lower cost per lead",
  },
  {
    tag: "Private Clinic · UK",
    stat: "+70% new patients",
    context: "Within 90 days of launch",
  },
];

export default function ResultsSnapshot() {
  return (
    <section id="results" className="w-full py-12 md:py-16 bg-[#0a0a0a] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        {/* Header — slides down */}
        <AnimateIn direction="down" distance={16} duration={1200}>
          <div className="mb-6">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B07040]">
              Results
            </p>
          </div>
          <div className="border-t border-white/10" />
        </AnimateIn>

        {/* Result rows — CSS hover, AnimateIn for scroll reveal */}
        <div>
          {RESULTS.map((row, i) => (
            <AnimateIn key={row.tag} direction="up" distance={40} delay={i * 200} duration={1400}>
              <div className="group relative flex flex-col md:flex-row md:items-center py-5 md:py-6 border-t border-white/10 cursor-pointer transition-colors duration-300 hover:bg-white/[0.03]">
                {/* Copper left border accent */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B07040] opacity-0 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300"
                />

                {/* Desktop 3-col layout */}
                <div className="hidden md:flex md:items-center w-full gap-8">
                  <div className="w-40 shrink-0">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-500">
                      {row.tag}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-serif text-3xl md:text-4xl font-bold leading-none whitespace-nowrap text-white group-hover:text-[#B07040] transition-colors duration-300">
                      {row.stat}
                    </span>
                  </div>
                  <div className="w-48 md:w-56 shrink-0 text-right">
                    <p className="font-sans text-sm text-neutral-400 leading-snug">
                      {row.context}
                    </p>
                  </div>
                </div>

                {/* Mobile stacked layout */}
                <div className="md:hidden w-full text-center">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-neutral-500 mb-2">
                    {row.tag}
                  </p>
                  <p className="font-serif text-2xl font-bold leading-none text-white group-hover:text-[#B07040] transition-colors duration-300">
                    {row.stat}
                  </p>
                  <p className="font-sans text-sm text-neutral-400 mt-2">
                    {row.context}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}

          <AnimateIn direction="up" distance={0} delay={600} duration={1200}>
            <div className="border-b border-white/10" />
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
