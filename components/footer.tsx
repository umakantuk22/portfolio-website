import * as React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#172338] bg-[#050811] py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-bold text-white">
            {PORTFOLIO_DATA.personal.name}
          </p>
          <p className="text-xs text-slate-500 font-mono">
            © {currentYear} • Full-Stack &amp; AI Engineer • Zero Backend
          </p>
        </div>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
          <a
            href={PORTFOLIO_DATA.personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
