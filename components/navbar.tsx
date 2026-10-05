"use client";

import * as React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050811]/90 backdrop-blur-md border-b border-[#172338]/80 transition-colors">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo - Exactly like image: [U] Umakant Sharma */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1"
          aria-label="Umakant Sharma - Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0c162d] to-[#080d1b] border border-cyan-500/50 text-cyan-400 font-extrabold text-lg shadow-sm group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all">
            U
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-100 transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </Link>

        {/* Center Navigation Links - Clean sans-serif */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-0.5 ${
                link.active
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-0.5"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Button: [ 📥 Resume / CV ] matching screenshot */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.links.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-cyan-500/40 bg-[#0b1222] px-5 text-xs font-semibold text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] transition-all"
          >
            <svg
              className="h-4 w-4 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume / CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#090e1a] text-slate-300 hover:text-white hover:bg-[#0f172a]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#172338] bg-[#070b16] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center min-h-[44px] rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-[#0f172a] hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#172338] flex flex-col gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-cyan-500/50 bg-[#0c162d] px-4 py-2.5 text-xs font-semibold text-white hover:bg-cyan-950/40 transition-colors"
            >
              <span>Download Resume / CV ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
