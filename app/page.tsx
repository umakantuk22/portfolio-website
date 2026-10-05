import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MetricsStrip } from "@/components/metrics-strip";
import { ProjectsGrid } from "@/components/projects-grid";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { PortfolioChatbot } from "@/components/portfolio-chatbot";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-[#f8fafc] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Electric Cyan Cursor Light Dot (Desktop only) */}
      <CursorSpotlight />

      {/* Scope-Restricted Zero-Backend Portfolio Chatbot */}
      <PortfolioChatbot />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:text-black focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Metrics Strip + What I Do + My Tech Stack */}
        <MetricsStrip />

        {/* Section 3: Featured Projects */}
        <ProjectsGrid />

        {/* Section 4: Engineering Capabilities & About Umakant Sharma */}
        <About />

        {/* Section 5: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
