import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Stats           = dynamic(() => import("@/components/Stats"),           { loading: () => null });
const AntiAgency      = dynamic(() => import("@/components/AntiAgency"),      { loading: () => null });
const Services        = dynamic(() => import("@/components/Services"),        { loading: () => null });
const Industries      = dynamic(() => import("@/components/Industries"),      { loading: () => null });
const HowWeWork       = dynamic(() => import("@/components/HowWeWork"),       { loading: () => null });
const Testimonials    = dynamic(() => import("@/components/Testimonials"),    { loading: () => null });
const ResultsSnapshot = dynamic(() => import("@/components/ResultsSnapshot"), { loading: () => null });
const LeadForm        = dynamic(() => import("@/components/LeadForm"),        { loading: () => null });
const LeadFormModal   = dynamic(() => import("@/components/LeadFormModal"),   { loading: () => null });
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
        <ResultsSnapshot />
        <LeadForm />
      </main>
      <Footer />
      <LeadFormModal />
    </>
  );
}
