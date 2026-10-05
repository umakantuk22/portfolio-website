import * as React from "react";
import { Project } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const renderVisualMockup = () => {
    switch (project.id) {
      case "nexus-ops":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">gateway:action-validator</span>
              <span className="text-cyan-400 font-semibold">TENANT ISOLATED</span>
            </div>
            <div className="space-y-1.5 py-1.5 text-slate-300">
              <div className="text-white font-medium">Domain: &quot;Revenue &amp; Customer Operations&quot;</div>
              <div className="text-cyan-400">&gt; AI Risk Classification: Tier-1 (Approval Flow)</div>
              <div className="text-purple-400">&gt; Outbox Queue: Idempotent &bull; 21 Automated Tests Passed</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>RBAC + JWT Enforced</span>
              <span className="text-cyan-400">Docker &bull; Prisma</span>
            </div>
          </div>
        );
      case "ai-resume-copilot":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">pipeline:rag/langchain-match</span>
              <span className="text-cyan-400 font-semibold">CACHE HIT (SHA-256)</span>
            </div>
            <div className="space-y-1.5 py-1.5 text-slate-300">
              <div className="text-white font-medium">Role: &quot;Full-Stack &amp; AI Engineer&quot;</div>
              <div className="text-cyan-400">&gt; Semantic Match: 96.4% • LangChain Pipeline</div>
              <div className="text-purple-400">&gt; Failover: Primary Gemini &rarr; Backup Groq Ready</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>Bulk Recommendations: 100+</span>
              <span className="text-cyan-400">Top 1% Studio</span>
            </div>
          </div>
        );
      case "cult-fitness":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">api/v1/fitness/classes</span>
              <span className="text-cyan-400 font-semibold">200 OK • 18ms</span>
            </div>
            <div className="space-y-1 py-1.5 text-slate-300">
              <div className="text-white font-medium">Session: &quot;HIIT Conditioning&quot;</div>
              <div className="text-slate-400">Trainer: Certified Coach • 18/20 Slots</div>
              <div className="text-cyan-400">auth_mode: &quot;Bearer JWT (RS256)&quot;</div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>MongoDB Atlas Persistent Cluster</span>
            </div>
          </div>
        );
      case "youtube-watch-party":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">socket.io/watch-room#482</span>
              <span className="text-cyan-400 font-semibold">SYNCED • 8 Peers</span>
            </div>
            <div className="space-y-1 py-1.5 text-slate-300">
              <div className="text-cyan-400">&gt; event: &quot;player:seek&quot; (t: 04:12.450)</div>
              <div className="text-white">&gt; broadcast: state: &quot;PLAYING&quot;</div>
              <div className="text-slate-400">&gt; latency_drift: &plusmn;12ms (Target: &lt;50ms)</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>Host: Authenticated Leader</span>
              <span className="text-cyan-400">WebSocket Full-Duplex</span>
            </div>
          </div>
        );
      case "ai-summarizer":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">dual-model/router</span>
              <span className="text-cyan-400 font-semibold">Gemini + Groq</span>
            </div>
            <div className="space-y-1 py-1.5 text-slate-300">
              <div className="text-white">&gt; Provider: Groq Llama-3-70b</div>
              <div className="text-cyan-400">&gt; Dynamic Token Boundary Chunking</div>
              <div className="text-slate-400">&gt; Streaming: 480 tokens/sec</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>History: MongoDB Stored</span>
              <span className="text-cyan-400">Dynamic Switching</span>
            </div>
          </div>
        );
      case "instant-mechanic":
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">dispatch/relational-gateway</span>
              <span className="text-white font-semibold">PostgreSQL</span>
            </div>
            <div className="space-y-1 py-1.5 text-slate-300">
              <div className="text-white">&gt; SELECT * FROM mechanic_dispatches</div>
              <div className="text-cyan-400">&gt; Assigned: Tech #14 • Sector Noida West</div>
              <div className="text-emerald-400">&gt; SLA: On-site in 14 mins</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>Monorepo: Next.js + Express</span>
              <span>Normalized Schema</span>
            </div>
          </div>
        );
      case "grameencart":
      default:
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b from-[#091124] to-[#060a16] text-left font-mono text-[11px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-slate-400">marketplace/d2c-catalog</span>
              <span className="text-cyan-400 font-semibold">REST API Active</span>
            </div>
            <div className="space-y-1 py-1.5 text-slate-300">
              <div className="text-white">&gt; Producer: Mathura Organic Collective</div>
              <div className="text-cyan-400">&gt; Checkout: Direct D2C Flow</div>
              <div className="text-slate-400">&gt; Responsive Cart State: Synced</div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#1e293b] text-[10px] text-slate-400">
              <span>Mobile-First 360px</span>
              <span className="text-cyan-400">Direct Agricultural D2C</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article className="flex flex-col rounded-2xl border border-[#172338] bg-[#090e1a] overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] transition-all duration-300">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#050914] border-b border-[#172338]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-cyan-400 font-semibold">
            {project.id}
          </span>
          {project.badge && (
            <span className="text-[10px] rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 font-medium">
              {project.badge}
            </span>
          )}
        </div>
        {project.hasLiveDemo ? (
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LIVE ON VERCEL
          </div>
        ) : (
          <span className="text-[10px] font-mono text-slate-500">ENGINEERED</span>
        )}
      </div>

      {/* Visual Mockup Area (16:9 aspect-video for Zero CLS) */}
      <div className="relative w-full aspect-video border-b border-[#172338] overflow-hidden">
        {renderVisualMockup()}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-semibold text-cyan-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 text-xs text-slate-300 flex-1">
          {project.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default" className="text-[11px] py-0.5 px-2 bg-[#0d1629] border-[#1e293b] text-slate-200">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#172338] mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-5 text-xs font-bold text-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.25)]"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-slate-700 bg-[#0c1426] px-4 text-xs font-medium text-slate-200 hover:border-cyan-500/60 hover:text-white transition-all"
          >
            {project.liveUrl ? "GitHub ↗" : "GitHub Codebase ↗"}
          </a>
        </div>
      </div>
    </article>
  );
}
