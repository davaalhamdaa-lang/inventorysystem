"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Countdown timer ke peluncuran Inventory System
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 14,
    minutes: 22,
    seconds: 45,
  });

  // Otomatis ubah Title Page dan Favicon secara dinamis
  useEffect(() => {
    // 1. Ubah Judul Tab Browser
    document.title = "Dava Alhamda — Next-Gen Inventory System";

    // 2. Buat Favicon Emas Monogram "DA" secara otomatis (SVG Data URI)
    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="24" fill="#09090b"/>
        <path d="M 30 25 L 55 25 C 70 25 70 50 55 50 L 30 50 Z M 30 50 L 60 50 C 75 50 75 75 60 75 L 30 75 Z" fill="none" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="72" cy="75" r="5" fill="#f59e0b"/>
      </svg>
    `;
    const encodedSvg = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = encodedSvg;
  }, []);

  // Track pergerakan mouse untuk efek Ambient Glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between overflow-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Grid Lines Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-70"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.09), transparent 45%)`,
        }}
      />

      {/* Top Header / Branding */}
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16 border-b border-zinc-900/60 backdrop-blur-sm">
  {/* Logo & Branding */}
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-[0_0_15px_rgba(217,119,6,0.2)]">
      <div className="h-full w-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-serif font-bold text-amber-400 text-sm tracking-tighter">
        DA
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold tracking-wider text-zinc-100 uppercase">
        DAVA ALHAMDA
      </span>
      <span className="text-[10px] tracking-[0.25em] text-amber-500/80 font-mono uppercase">
        Inventory Engine v1.0
      </span>
    </div>
  </div>

  {/* Tombol Menuju Documentation Page */}
  <Link
    href="/docs"
    className="flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs text-amber-300 font-medium hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.15)]"
  >
    <span>Explore Docs</span>
    <span className="text-sm">→</span>
  </Link>
</header>

      {/* Hero Content Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 my-auto py-12">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(217,119,6,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          Precision Asset Intelligence
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight max-w-5xl leading-[1.08] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
          The Future of <br />
          <span className="font-serif italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Inventory Management
          </span>
        </h1>

        {/* Subtitle with Author Credit */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
          An ultra-high performance enterprise inventory ecosystem engineered by{" "}
          <span className="text-zinc-100 font-medium underline underline-offset-4 decoration-amber-500/50">
            Dava Alhamda
          </span>
          . Seamless tracking, real-time analytics, and absolute precision.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 my-12 max-w-2xl w-full">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md shadow-2xl relative group hover:border-amber-500/40 transition-all duration-500"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white group-hover:scale-105 transition-transform duration-300 font-mono">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[9px] sm:text-xs tracking-[0.25em] text-zinc-500 uppercase mt-2 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* VIP Early Access Form */}
        <div className="w-full max-w-md">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Enter work email for VIP demo..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-full bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition-all duration-300 backdrop-blur-md pr-36 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.35)]"
              >
                Get Access
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm tracking-wide animate-fade-in shadow-[0_0_20px_rgba(217,119,6,0.15)]">
              ✓ Access requested. Dava Alhamda's team will contact you shortly.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
     <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-8 py-8 md:px-16 text-xs text-zinc-500 border-t border-zinc-900/80 gap-4 bg-zinc-950/40 backdrop-blur-md">
  <div className="flex items-center gap-2">
    <span>&copy; {new Date().getFullYear()} Inventory System.</span>
    <span className="text-zinc-700">|</span>
    <span>Crafted by <strong className="text-zinc-300 font-normal">Dava Alhamda</strong></span>
  </div>
  <div className="flex gap-6 tracking-widest uppercase text-[10px]">
    {/* Tautan navigasi internal */}
    <Link href="/docs" className="hover:text-amber-400 transition-colors">
      Documentation
    </Link>
    <a href="#" className="hover:text-amber-400 transition-colors">System Status</a>
    <a href="#" className="hover:text-amber-400 transition-colors">Direct Contact</a>
  </div>
</footer>
    </div>
  );
}
