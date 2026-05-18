import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  "Novara π is your extended revenue department for aesthetics clinics, IVF centres, and dental practices. Paid ads, SEO, AEO, and web — all under one roof.";

export const metadata: Metadata = {
  title: "Novara π — Your Revenue Department",
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Novara π — Your Revenue Department",
    description: DESCRIPTION,
    type: "website",
    siteName: "Novara π",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novara π — Your Revenue Department",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
