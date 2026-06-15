import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { BASE_URL } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  "YRT by Novara π is your extended revenue department for aesthetics clinics, IVF centres, and dental practices. Paid ads, SEO, AEO, and web, all under one roof.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YRT by Novara π",
  url: BASE_URL,
  email: "growth@yourevenueteam.com",
  description: "YRT by Novara π: a revenue marketing agency with 8+ years of combined industry experience serving aesthetics clinics, IVF centres, dental practices, and private clinics across the UK, UAE, and India.",
  foundingDate: "2024",
  areaServed: ["GB", "AE", "IN"],
  knowsAbout: [
    "Aesthetics clinic marketing",
    "IVF clinic marketing",
    "Dental practice marketing",
    "Private clinic marketing",
    "Paid advertising",
    "SEO",
    "AEO",
  ],
};

const JSON_LD = JSON.stringify(jsonLd);

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "YRT by Novara π | Your Revenue Department",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "YRT by Novara π | Your Revenue Department",
    description: DESCRIPTION,
    type: "website",
    siteName: "YRT by Novara π",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "YRT by Novara π | Your Revenue Department" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YRT by Novara π | Your Revenue Department",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Static JSON-LD only — no user input, no XSS risk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
