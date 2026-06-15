import { AnimateIn } from "./AnimateIn";

const SERVICES = [
  { num: "01", name: "Paid Ads",          desc: "Google, Meta & Facebook, built to convert." },
  { num: "02", name: "SEO & AEO",         desc: "Search rankings and AI engine visibility." },
  { num: "03", name: "Website Building",  desc: "Premium sites, built and maintained by us." },
  { num: "04", name: "Ecommerce",         desc: "Full-stack store setup and ongoing operations." },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-20 bg-n-dark overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-16">

        <AnimateIn
          className="mb-10"
          direction="up"
        >
          <p className="font-sans text-xs tracking-[0.2em] text-[#B07040] uppercase mb-4">
            What we do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold italic leading-tight text-white">
            Four things.
            <br />
            Done exceptionally.
          </h2>
        </AnimateIn>

        <div>
          {SERVICES.map((s, i) => (
            <AnimateIn key={s.num} direction="left" distance={60} delay={i * 200}>
              <div className="group border-t border-white/10 hover:bg-white/[0.03] transition-all duration-300 cursor-default py-6 hover:py-8">

                <div className="md:hidden">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-widest text-[#B07040] shrink-0">
                      {s.num}
                    </span>
                    <span className="font-serif text-2xl text-white group-hover:text-[#B07040] transition-colors duration-300">
                      {s.name}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#6b6b6b] mt-1.5 ml-[26px]">
                    {s.desc}
                  </p>
                </div>

                <div className="hidden md:flex items-center">
                  <span className="font-mono text-[11px] tracking-widest text-[#B07040] w-16 shrink-0">
                    {s.num}
                  </span>
                  <span className="font-serif text-2xl lg:text-3xl text-white flex-1 px-8 group-hover:text-[#B07040] transition-colors duration-300">
                    {s.name}
                  </span>
                  <span className="font-sans text-sm text-[#6b6b6b] max-w-[260px] text-right">
                    {s.desc}
                  </span>
                </div>

              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
