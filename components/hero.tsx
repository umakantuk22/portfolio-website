"use client";

import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Hero() {
  const [imgSrc, setImgSrc] = React.useState(PORTFOLIO_DATA.personal.avatarUrl || "/images/uk.jpg");

  const handleImageError = () => {
    if (imgSrc === "/images/uk.jpg") {
      setImgSrc("/images/uk.jpg.jpg");
    } else if (imgSrc === "/images/uk.jpg.jpg") {
      setImgSrc("/images/uk.jpeg");
    } else if (imgSrc === "/images/uk.jpeg") {
      setImgSrc("/images/uk.png");
    } else if (imgSrc === "/images/uk.png") {
      setImgSrc("/uk.jpg");
    }
  };

  return (
    <section
      id="home"
      className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-[#172338]/80 bg-[#050811] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background radial cyan glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 shadow-sm">
              <span className="text-sm">🎓</span>
              <span>B.Tech CSE Graduate 2026</span>
            </div>

            {/* Massive Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]"
            >
              Full-Stack &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 drop-shadow-[0_0_30px_rgba(0,210,255,0.45)]">
                AI Engineer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Building intelligent web applications with modern technologies and AI to solve real-world problems.
            </p>

            {/* Profile / Location Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <span className="text-red-400">📍</span> Noida, India
              </span>
              <a
                href={PORTFOLIO_DATA.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <span>🐙</span> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <span className="text-sky-400 font-bold">in</span> LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.personal.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <span>⚡</span> LeetCode
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#090e1a] px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span className="text-cyan-400 font-bold">⚛️</span> MERN Stack
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#090e1a] px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span>☕</span> Java
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#090e1a] px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span>🐍</span> Python
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#090e1a] px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span className="text-cyan-400 font-bold">🔗</span> LangChain
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e293b] bg-[#090e1a] px-3.5 py-1.5 text-xs font-medium text-slate-200">
                <span className="text-purple-400 font-bold">🕸️</span> LangGraph
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* Highlighted Project Pill linked directly to Live App */}
              <div className="relative group">
                <a
                  href="https://uk-resume-copilot.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-full border border-cyan-500/50 bg-gradient-to-r from-[#0c162d] to-[#091124] px-4 py-2 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(0,210,255,0.2)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 text-sm">
                    ✨
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      <span>AI Resume Copilot Pro</span>
                      <span className="text-[10px]">↗</span>
                    </div>
                    <div className="text-[10px] text-cyan-400 font-mono">
                      Live Project • Top 1% Developer Studio
                    </div>
                  </div>
                </a>
                <div className="absolute -bottom-1 -left-1 flex h-4 w-4 items-center justify-center pointer-events-none">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                </div>
              </div>

              {/* View Projects -> Cyan/Blue gradient button */}
              <a
                href="#projects"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-6 text-sm font-bold text-white transition-all shadow-[0_0_25px_rgba(0,210,255,0.35)] active:translate-y-[1px]"
              >
                <span>View Projects</span>
                <span className="text-base">→</span>
              </a>

              {/* Contact Me -> Dark pill button */}
              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-slate-700 bg-[#090e1a] hover:border-cyan-500/60 hover:text-cyan-300 px-5 text-sm font-semibold text-slate-200 transition-all"
              >
                <span>✉</span>
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Umakant's Portrait with Glowing Neon Cyan Circular Ring */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/90 shadow-[0_0_90px_rgba(0,210,255,0.45)] pointer-events-none animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/30 blur-[1px] pointer-events-none" />

              <div className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full overflow-hidden bg-black flex items-center justify-center shadow-2xl">
                <img
                  src={imgSrc}
                  alt="Umakant Sharma - Full-Stack & AI Engineer"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Handwritten Label */}
              <div className="absolute -top-2 right-2 sm:-right-4 text-cyan-300 font-script text-2xl sm:text-3xl rotate-12 pointer-events-none flex flex-col items-center select-none drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">
                <span className="tracking-wide">Umakant</span>
                <span className="tracking-wide -mt-2">Sharma</span>
                <svg
                  className="w-8 h-8 text-cyan-400 -rotate-45 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
