"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Countdown timer ke tanggal rilis fiktif (misal: 60 hari ke depan)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 38,
    seconds: 15,
  });

  // Track pergerakan mouse untuk efek Ambient Glow interaktif
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Interval timer untuk hitung mundur detik
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
    <div className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col justify-between overflow-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Grid Pattern & Ambient Radial Spotlight */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`,
        }}
      />

      {/* Top Header / Branding */}
      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs tracking-[0.3em] font-semibold text-zinc-400 uppercase">
            Privé / Edition 01
          </span>
        </div>
        <div className="text-xs tracking-[0.2em] text-zinc-500 uppercase border border-zinc-800 rounded-full px-4 py-1.5 backdrop-blur-md">
          Status: Invitation Only
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 my-auto">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-300/90 text-xs tracking-widest uppercase mb-8 backdrop-blur-sm animate-fade-in">
          <span>The Next Frontier of Digital Luxury</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight max-w-5xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
          Crafting Something <br />
          <span className="font-serif italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
          We are quietly preparing an unprecedented digital experience. 
          Reserved for those who appreciate perfection in every pixel.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 my-12 max-w-2xl w-full">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md shadow-2xl relative group hover:border-amber-500/40 transition-all duration-500"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] text-zinc-500 uppercase mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-md">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Enter your VIP email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition-all duration-300 backdrop-blur-md pr-36"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)]"
              >
                Request Access
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm tracking-wide animate-fade-in">
              ✓ You are on the priority VIP list. Stay tuned.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-8 py-8 md:px-16 text-xs text-zinc-600 border-t border-zinc-900/80 gap-4">
        <div>&copy; {new Date().getFullYear()} Private Atelier. All rights reserved.</div>
        <div className="flex gap-6 tracking-widest uppercase text-[10px]">
          <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Contact VIP</a>
        </div>
      </footer>
    </div>
  );
}
