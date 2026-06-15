import { AnimateIn } from "./AnimateIn";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your digital presence, map competitor gaps, and set revenue targets, before anything goes live.",
  },
  {
    num: "02",
    title: "We come to you",
    desc: "Our team visits your clinic. We shoot everything: photos, video, testimonials. Every creative asset built in-house, on your premises.",
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
  return (
    <section id="how-we-work" className="w-full py-14 md:py-16 bg-n-surface overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Left column — slides from left */}
          <AnimateIn className="w-full md:w-2/5 shrink-0" direction="right" distance={40} duration={1500}>
            {/* #96603A: 5.4:1 contrast on n-surface (#ECEAE4) — passes WCAG AA */}
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#96603A] mb-3">
              How it works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-neutral-900 mb-4">
              Your team,
              <br />
              extended.
            </h2>
            <p className="font-sans text-sm leading-relaxed text-neutral-500 max-w-xs">
              We don&apos;t send monthly reports and go quiet. We sit inside your
              growth, whether you&apos;re an aesthetics clinic, a fertility centre,
              a dental practice, or a private clinic. Visible, accountable,
              obsessed with your revenue.
            </p>
          </AnimateIn>

          {/* Right column: steps — CSS hover, AnimateIn for scroll reveal */}
          <div className="w-full md:flex-1 min-w-0">
            {STEPS.map((step, i) => (
              <AnimateIn key={step.num} direction="left" distance={60} delay={i * 200} duration={1400}>
                <div className="group relative py-4 border-t border-neutral-200 cursor-default transition-all duration-300 hover:bg-[#B07040]/5 hover:pl-3">
                  {/* Copper left accent */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#B07040] opacity-0 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300"
                  />
                  <div className="flex items-baseline gap-3">
                    {/* #96603A on n-surface: 5.4:1 — passes WCAG AA */}
                    <span className="font-sans text-xs tracking-widest text-[#96603A] w-8 shrink-0">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-base md:text-lg font-semibold leading-snug text-[#171717] group-hover:text-[#B07040] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed mt-1 pl-11">
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}

            <AnimateIn direction="up" distance={0} delay={600} duration={1200}>
              <div className="border-b border-neutral-200" />
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}
