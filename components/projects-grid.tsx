import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 border-b border-[#172338]/80 bg-[#050811]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-400">
            <span>✨</span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-5xl font-black tracking-tight text-white"
          >
            Featured Projects &amp; Systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Full-stack platforms, LangChain RAG architectures, and real-time distributed applications.
          </p>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
