"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<"architecture" | "ai" | "security">("architecture");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Documentation — Next-Gen Inventory Engine by Dava Alhamda";

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col justify-between overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Grid Pattern & Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 119, 6, 0.08), transparent 40%)`,
        }}
      />

      {/* Navigation Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16 border-b border-zinc-900/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-[0_0_15px_rgba(217,119,6,0.2)]">
              <div className="h-full w-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-serif font-bold text-amber-400 text-xs tracking-tighter group-hover:bg-amber-500 group-hover:text-black transition-all">
                DA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-zinc-200 uppercase">
                DAVA ALHAMDA
              </span>
              <span className="text-[9px] tracking-[0.25em] text-amber-500/80 font-mono uppercase">
                System Blueprint
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xs text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-widest"
          >
            ← Back to Teaser
          </Link>
          <span className="hidden sm:inline-block text-xs px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-mono">
            v1.0 Blueprint Spec
          </span>
        </div>
      </header>

      {/* Main Documentation Body */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full flex-1">
        
        {/* Document Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[11px] tracking-widest uppercase mb-4 backdrop-blur-sm">
            Architecture & Vision Documentation
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Next-Gen Inventory Engine <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Technical & Creative Blueprint
            </span>
          </h1>
          <p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
            Dirancang oleh <strong className="text-zinc-200 font-medium">Dava Alhamda</strong>, sistem inventaris ini menggabungkan *predictive AI analytics*, *ultra-low latency tracking*, dan estetika *executive grade dashboard*.
          </p>
        </div>

        {/* INFOGRAPHIC SECTION 1: Key Metrics & System Pillars */}
        <section className="mb-20">
          <h2 className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            01 / Key Concept Metrics (Infographic)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                value: "99.98%",
                label: "Stock Accuracy",
                desc: "Real-time RFID & Barcode multi-warehouse sync with zero drift.",
              },
              {
                value: "< 12ms",
                label: "Query Latency",
                desc: "High-speed database indexing designed for high transaction volume.",
              },
              {
                value: "AI Auto",
                label: "Predictive Reorder",
                desc: "Algoritma prediksi kebutuhan stok berdasarkan tren historis.",
              },
              {
                value: "Zero-Trust",
                label: "Role-Based Audit",
                desc: "Setiap mutasi aset tercatat permanen dalam immutable log ledger.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all"></div>
                <div className="text-3xl font-mono font-light text-amber-400 mb-2">
                  {card.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mb-1">
                  {card.label}
                </div>
                <div className="text-xs text-zinc-500 font-light leading-normal">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFOGRAPHIC SECTION 2: Interactive Concept Pipeline */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xs font-mono tracking-[0.3em] text-amber-500 uppercase flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                02 / Core Innovations & Architecture
              </h2>
              <p className="text-xl font-light text-zinc-200 mt-1">
                Fitur Eksklusif Bernilai Tinggi (*High-End System Concepts*)
              </p>
            </div>

            {/* Interactive Tab Controls */}
            <div className="flex p-1 bg-zinc-900/80 border border-zinc-800 rounded-full w-fit">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === "architecture"
                    ? "bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(217,119,6,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Workflow Engine
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === "ai"
                    ? "bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(217,119,6,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                AI Stock Forecaster
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === "security"
                    ? "bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(217,119,6,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Enterprise Audit
              </button>
            </div>
          </div>

          {/* Interactive Tab Panels */}
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800/80 backdrop-blur-xl relative">
            {activeTab === "architecture" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <div className="text-amber-400 font-mono text-xs tracking-widest uppercase">
                    Step 01: Inbound Processing
                  </div>
                  <h3 className="text-xl font-medium text-white">Automated Goods Receipt</h3>
                  <p className**Dokumentasi Konsep: Smart Inventory & Automated Asset Tracking**

Dokumentasi ini merancang arsitektur sistem inventaris modern yang menggabungkan presisi *real-time tracking*, analitik prediktif berbasis AI, dan visualisasi data yang intuitif.

---

**Infografis Alur Konsep & Arsitektur**
