import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

export function About() {
  const { personal, education, certifications, skills } = PORTFOLIO_DATA;

  const corePillars = [
    {
      title: "Full-Stack Web Development",
      desc: "Building production-grade web systems with modern React, Next.js 15, Node.js, and MongoDB with clean modular architectures.",
      badge: "Full-Stack",
      icon: "⚛️",
    },
    {
      title: "AI Integration & RAG Pipelines",
      desc: "Architecting LangChain and LangGraph workflows, multi-model failover routing, and SHA-256 caching for sub-50ms inference latency.",
      badge: "AI & GenAI",
      icon: "🤖",
    },
    {
      title: "RESTful API Architecture",
      desc: "Designing stateless Express & FastAPI backends with JWT authentication, role-based access control, and predictable HTTP contracts.",
      badge: "Backend",
      icon: "⚡",
    },
    {
      title: "Real-Time WebSocket Synchronization",
      desc: "Implementing low-latency full-duplex room synchronization using Socket.IO for multi-user state parity and concurrency.",
      badge: "Real-Time",
      icon: "🔄",
    },
  ];

  return (
    <>
      {/* Experience / Capabilities Section */}
      <section
        id="experience"
        className="py-20 sm:py-28 border-b border-[#172338]/80 bg-[#060a16]"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-20 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400">
              ENGINEERING APPROACH
            </div>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white"
            >
              How I Engineer Software Solutions.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Applying strong algorithmic foundations and system design fundamentals to build scalable, resilient digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-8 space-y-3 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,210,255,0.1)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="rounded-full bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 text-[11px] font-mono font-semibold text-cyan-300">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section
        id="about"
        className="py-20 sm:py-28 border-b border-[#172338]/80 bg-[#050811]"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-20 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400">
              BACKGROUND &amp; CREDENTIALS
            </div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white"
            >
              About Umakant Sharma.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Bio, Education, LeetCode */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-base text-slate-300 leading-relaxed">
                {personal.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Education Bento Card */}
              <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-7 space-y-3">
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Academic Degree
                </div>
                <h3 className="text-xl font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-sm font-medium text-slate-300">
                  {education.institution} • {education.location}
                </p>
                <div className="inline-flex items-center rounded-lg bg-[#0f172a] border border-[#1e293b] px-3 py-1 text-xs font-mono text-cyan-300">
                  Expected Graduation: {education.period}
                </div>
              </div>

              {/* LeetCode Problem Solving Card */}
              <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-7 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                    Data Structures &amp; Algorithms
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    150+ LeetCode Problems Solved
                  </h4>
                  <p className="text-xs text-slate-400">
                    Arrays, dynamic programming, two pointers, trees, and hash maps
                  </p>
                </div>
                <a
                  href={personal.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex min-h-[40px] items-center justify-center rounded-full border border-cyan-500/40 bg-[#0c162d] px-5 text-xs font-semibold text-white hover:border-cyan-400 transition-colors"
                >
                  Profile ↗
                </a>
              </div>
            </div>

            {/* Right: Skills Matrix & Certifications */}
            <div className="lg:col-span-5 space-y-8">
              {/* Technical Stack Matrix */}
              <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-7 space-y-6">
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Verified Technical Stack
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-400">Languages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.languages.map((item) => (
                      <Badge key={item} variant="default" className="text-xs bg-[#0c1426] border-[#1e293b] text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-400">Backend &amp; APIs</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.backend.map((item) => (
                      <Badge key={item} variant="default" className="text-xs bg-[#0c1426] border-[#1e293b] text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-400">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frontend.map((item) => (
                      <Badge key={item} variant="default" className="text-xs bg-[#0c1426] border-[#1e293b] text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-400">AI &amp; System Concepts</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.aiAndTools.concat(skills.systemDesign).map((item) => (
                      <Badge key={item} variant="default" className="text-xs bg-[#0c1426] border-[#1e293b] text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-400">Databases</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.databases.map((item) => (
                      <Badge key={item} variant="default" className="text-xs bg-[#0c1426] border-[#1e293b] text-slate-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl border border-[#172338] bg-[#090e1a] p-6 sm:p-7 space-y-4">
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Verified Certifications
                </div>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-col border-b border-[#1e293b] pb-3 last:border-none last:pb-0"
                    >
                      <span className="text-sm font-semibold text-white">
                        {cert.name}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {cert.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
