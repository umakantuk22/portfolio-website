import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function MetricsStrip() {
  const { stats, whatIDo } = PORTFOLIO_DATA.personal;

  return (
    <section className="py-12 border-b border-[#172338]/80 bg-[#060a16]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Metric Cards in a row */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
            {/* Stat 1: 150+ DSA Problems */}
            <div className="flex flex-col items-start gap-3 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/40 bg-[#091124] text-cyan-400 font-mono text-sm font-bold shadow-sm">
                &lt;/&gt;
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  150+
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  DSA Problems
                </div>
                <div className="text-[11px] text-slate-400">
                  (LeetCode)
                </div>
              </div>
            </div>

            {/* Stat 2: 2+ Real World Projects */}
            <div className="flex flex-col items-start gap-3 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/40 bg-[#091124] text-cyan-400 text-base shadow-sm">
                🖼️
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  2+
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  Real World Projects
                </div>
                <div className="text-[11px] text-slate-400">
                  (MERN + AI)
                </div>
              </div>
            </div>

            {/* Stat 3: 2026 B.Tech CSE */}
            <div className="flex flex-col items-start gap-3 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/40 bg-[#091124] text-cyan-400 text-base shadow-sm">
                🎓
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  2026
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  B.Tech CSE Graduate
                </div>
                <div className="text-[11px] text-slate-400">
                  (GLA University)
                </div>
              </div>
            </div>

            {/* Stat 4: 1% Continuous Learning */}
            <div className="flex flex-col items-start gap-3 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/40 bg-[#091124] text-cyan-400 text-base shadow-sm">
                ⭐
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  1%
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">
                  Dedicated to
                </div>
                <div className="text-[11px] text-slate-400">
                  Continuous Learning
                </div>
              </div>
            </div>
          </div>

          {/* Right: What I Do Card exactly matching the image */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-[#0c162e] to-[#070d1c] p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,210,255,0.12)]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-base font-bold">
                  <span className="text-lg">💡</span>
                  <span>{whatIDo.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {whatIDo.description}
                </p>
              </div>

              {/* Handwritten cursive note with arrow */}
              <div className="pt-4 flex items-center justify-end gap-2 text-cyan-300 font-script text-lg sm:text-xl select-none">
                <span>{whatIDo.handwrittenNote}</span>
                <span className="text-xl">⤷</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Tech Stack Row below metrics matching screenshot */}
        <div id="skills" className="pt-12 border-t border-[#172338]/60 mt-8 space-y-5">
          <div className="flex items-center gap-2.5 text-white font-bold text-lg">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 text-sm">
              🗂️
            </span>
            <span>My Tech Stack</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* React */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all cursor-pointer" title="React.js">
              <span className="text-xl font-bold">⚛️</span>
            </div>
            {/* Node */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-emerald-400 hover:border-emerald-400 transition-all cursor-pointer" title="Node.js">
              <span className="text-base font-bold font-mono">JS</span>
            </div>
            {/* MongoDB */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-emerald-500 hover:border-emerald-400 transition-all cursor-pointer" title="MongoDB">
              <span className="text-xl font-bold">🍃</span>
            </div>
            {/* JavaScript */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-amber-400 hover:border-amber-400 transition-all cursor-pointer" title="JavaScript">
              <span className="text-xs font-bold font-mono bg-amber-400 text-black px-1 rounded">JS</span>
            </div>
            {/* TypeScript */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-sky-400 hover:border-sky-400 transition-all cursor-pointer" title="TypeScript">
              <span className="text-xs font-bold font-mono bg-sky-500 text-white px-1 rounded">TS</span>
            </div>
            {/* Python */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-yellow-400 hover:border-yellow-400 transition-all cursor-pointer" title="Python">
              <span className="text-lg">🐍</span>
            </div>
            {/* Java */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1e293b] bg-[#090e1a] text-rose-400 hover:border-rose-400 transition-all cursor-pointer" title="Java">
              <span className="text-lg">☕</span>
            </div>

            {/* LangChain Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#090e1a] px-4 py-2 text-xs font-medium text-slate-200 hover:border-cyan-400 transition-all cursor-pointer">
              <span className="text-cyan-400">🔗</span>
              <span>LangChain</span>
            </div>

            {/* LangGraph Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#090e1a] px-4 py-2 text-xs font-medium text-slate-200 hover:border-purple-400 transition-all cursor-pointer">
              <span className="text-purple-400">🕸️</span>
              <span>LangGraph</span>
            </div>

            {/* Git Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-[#090e1a] px-4 py-2 text-xs font-medium text-slate-200 hover:border-orange-400 transition-all cursor-pointer">
              <span className="text-orange-500">🔶</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
