import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalSection from "@/components/LegalSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | YRT by Novara π",
  alternates: { canonical: "/terms" },
  description: "Terms and conditions governing the use of YRT by Novara π services.",
  openGraph: {
    title: "Terms of Service | YRT by Novara π",
    description: "Terms and conditions governing the use of YRT by Novara π services.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "YRT by Novara π" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | YRT by Novara π",
    description: "Terms and conditions governing the use of YRT by Novara π services.",
    images: ["/opengraph-image"],
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-n-bg min-h-screen pt-32 pb-24 px-5 sm:px-8 md:px-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <p className="font-sans text-xs tracking-widest uppercase text-[#B07040] mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-n-dark mb-3">
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-neutral-500 mb-12">
            Last updated: June 2025
          </p>

          <div className="border-t border-neutral-200 pt-10">

            <LegalSection title="Agreement to terms">
              <p>
                By accessing or using the YRT by Novara π website and services, you agree to be bound
                by these Terms of Service. If you do not agree, please do not use our website
                or engage our services.
              </p>
            </LegalSection>

            <LegalSection title="Our services">
              <p>
                YRT by Novara π provides growth marketing services including paid advertising, SEO and AEO,
                website design and development, and related digital marketing services, primarily
                for aesthetics clinics, IVF centres, dental practices, and private clinics.
              </p>
              <p>
                The specific scope, deliverables, and fees for client engagements are set out in
                individual service agreements or proposals provided to you separately.
              </p>
            </LegalSection>

            <LegalSection title="Use of our website">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the website</li>
                <li>Reproduce, duplicate, or copy any content without permission</li>
                <li>Use automated tools to scrape or extract data from the website</li>
              </ul>
            </LegalSection>

            <LegalSection title="Intellectual property">
              <p>
                All content on this website, including text, graphics, logos, and design, is the
                property of YRT by Novara π and is protected by applicable intellectual property laws.
                You may not use our content without prior written consent.
              </p>
            </LegalSection>

            <LegalSection title="Client work and deliverables">
              <p>
                Ownership and licensing of creative work, ad assets, and other deliverables produced
                for clients are governed by the terms of the relevant client agreement. In the absence
                of a separate agreement, all deliverables remain the property of YRT by Novara π until full
                payment has been received.
              </p>
            </LegalSection>

            <LegalSection title="Results and guarantees">
              <p>
                Marketing results depend on many factors outside our direct control, including market
                conditions, platform algorithms, and client-side variables. While we work hard to
                achieve strong results, we make no guarantees of specific outcomes unless expressly
                stated in a written agreement.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, YRT by Novara π shall not be liable for any indirect,
                incidental, or consequential damages arising from your use of our website or services.
                Our total liability for any claim shall not exceed the fees paid by you in the three
                months preceding the claim.
              </p>
            </LegalSection>

            <LegalSection title="Governing law">
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </LegalSection>

            <LegalSection title="Changes to these terms">
              <p>
                We may update these Terms from time to time. Continued use of our website after
                changes are published constitutes acceptance of the updated Terms.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                For any questions about these Terms, please contact us at{" "}
                <a href="mailto:growth@yourevenueteam.com" className="text-[#B07040] hover:underline">
                  growth@yourevenueteam.com
                </a>.
              </p>
            </LegalSection>

          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              href="/"
              className="font-sans text-xs tracking-widest uppercase text-[#B07040] hover:underline"
            >
              ← Back to home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
