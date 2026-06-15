import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | YRT by Novara π",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-5 text-center">
      <span className="font-serif text-[120px] md:text-[180px] leading-none text-[#B07040] select-none">
        404
      </span>
      <h1 className="font-sans text-white text-xl md:text-2xl tracking-widest uppercase mt-4 mb-4">
        Page not found
      </h1>
      <p className="font-sans text-neutral-400 text-sm max-w-sm leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-3 border border-[#B07040] text-[#B07040] font-sans text-xs tracking-widest uppercase hover:bg-[#B07040] hover:text-white transition-all duration-300"
      >
        Back to home
      </Link>
      <Link
        href="/"
        className="font-sans font-medium text-[15px] tracking-[0.2em] uppercase text-white flex items-center mt-16"
      >
        YRT by Novara<span className="font-serif text-[18px] text-[#B07040] ml-1.5 normal-case">π</span>
      </Link>
    </main>
  );
}
