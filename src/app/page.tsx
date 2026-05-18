import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Stats           = dynamic(() => import("@/components/Stats"),           { loading: () => null });
const AntiAgency      = dynamic(() => import("@/components/AntiAgency"),      { loading: () => null });
const Services        = dynamic(() => import("@/components/Services"),        { loading: () => null });
const Industries      = dynamic(() => import("@/components/Industries"),      { loading: () => null });
const HowWeWork       = dynamic(() => import("@/components/HowWeWork"),       { loading: () => null });
const Testimonials    = dynamic(() => import("@/components/Testimonials"),    { loading: () => null });
const Founders        = dynamic(() => import("@/components/Founders"),        { loading: () => null });
const ResultsSnapshot = dynamic(() => import("@/components/ResultsSnapshot"), { loading: () => null });
const CTABanner       = dynamic(() => import("@/components/CTABanner"),       { loading: () => null });
const Footer          = dynamic(() => import("@/components/Footer"),          { loading: () => null });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AntiAgency />
        <Services />
        <Industries />
        <HowWeWork />
        <Testimonials />
        <Founders />
        <ResultsSnapshot />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
