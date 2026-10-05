"use client";

import * as React from "react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  isError?: boolean;
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "bot",
      text: "👋 Hi! I\x27m Umakant\x27s AI Assistant. Ask me anything about Umakant Sharma\x27s projects, tech stack, AI workflows, or background!",
    },
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (queryText?: string) => {
    const query = (queryText || input).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!queryText) setInput("");

    setTimeout(() => {
      const lower = query.toLowerCase();

      const isAboutUmakant =
        lower.includes("umakant") ||
        lower.includes("sharma") ||
        lower.includes("you") ||
        lower.includes("project") ||
        lower.includes("nexus") ||
        lower.includes("copilot") ||
        lower.includes("resume") ||
        lower.includes("cult") ||
        lower.includes("youtube") ||
        lower.includes("summariz") ||
        lower.includes("mechanic") ||
        lower.includes("grameen") ||
        lower.includes("skills") ||
        lower.includes("tech") ||
        lower.includes("stack") ||
        lower.includes("college") ||
        lower.includes("university") ||
        lower.includes("gla") ||
        lower.includes("education") ||
        lower.includes("experience") ||
        lower.includes("contact") ||
        lower.includes("email") ||
        lower.includes("phone") ||
        lower.includes("hire") ||
        lower.includes("github") ||
        lower.includes("linkedin") ||
        lower.includes("leetcode") ||
        lower.includes("dsa") ||
        lower.includes("location") ||
        lower.includes("noida") ||
        lower.includes("who are you") ||
        lower.includes("about") ||
        lower.includes("live") ||
        lower.includes("demo") ||
        lower.includes("hi") ||
        lower.includes("hello") ||
        lower.includes("hey") ||
        lower.includes("help");

      if (!isAboutUmakant) {
        setMessages((prev) => [
          ...prev,
          {
            id: "bot-" + Date.now(),
            sender: "bot",
            isError: true,
            text: "⚠️ Error: Scope Restricted. I am Umakant Sharma\x27s AI Portfolio Assistant and can only answer questions regarding Umakant\x27s background, technical skills, projects, experience, and contact details. Please ask a question related to Umakant!",
          },
        ]);
        return;
      }

      let responseText = "";

      if (lower.includes("nexus") || lower.includes("revenue") || lower.includes("gateway")) {
        responseText =
          "🚀 **NexusOps** is Umakant\x27s AI-Native Revenue & Customer Operations Platform.\n\n" +
          "• **Key Features**: Multi-tenant SaaS with tenant-level isolation, RBAC, CRM workflows, and an AI Action Gateway with automated approval controls and audit trails.\n" +
          "• **Stack**: Node.js, REST APIs, JWT, RBAC, Docker, Prisma, AI Workflows.\n" +
          "• **Live App**: [nexusops-kwz5.onrender.com](https://nexusops-kwz5.onrender.com)\n" +
          "• **GitHub**: [github.com/umakantuk22/nexusops](https://github.com/umakantuk22/nexusops)";
      } else if (lower.includes("resume") || lower.includes("copilot") || lower.includes("rag")) {
        responseText =
          "📄 **AI Resume Copilot Pro** is an intelligent resume tailoring engine built by Umakant.\n\n" +
          "• **Features**: RAG semantic matching, LangChain orchestration, SHA-256 caching for zero redundant LLM calls, and a multi-portal job recommendation pipeline.\n" +
          "• **Stack**: Next.js 14, TypeScript, Tailwind CSS, LangChain, Groq API, SHA-256.\n" +
          "• **Live Demo**: [uk-resume-copilot.vercel.app](https://uk-resume-copilot.vercel.app/)\n" +
          "• **GitHub**: [github.com/umakantuk22](https://github.com/umakantuk22)";
      } else if (lower.includes("project") || lower.includes("live") || lower.includes("work")) {
        responseText =
          "💻 **Umakant has built 7 notable engineering systems**:\n\n" +
          "1. **NexusOps** (Live on Render) — AI-Native Multi-Tenant Revenue & Ops Platform\n" +
          "2. **AI Resume Copilot Pro** (Live on Vercel) — RAG & LangChain Resume Tailoring Engine\n" +
          "3. **Cult Fitness App** (Live on Vercel) — MERN workout booking app\n" +
          "4. **YouTube Watch Party** (Live on Vercel) — WebSocket synchronized streaming\n" +
          "5. **AI Summarizer Platform** (GitHub) — Gemini & Groq LLM dynamic chunking\n" +
          "6. **Instant Mechanic Dashboard** (GitHub) — PostgreSQL & Next.js service platform\n" +
          "7. **GrameenCart** (GitHub) — D2C rural produce marketplace";
      } else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
        responseText =
          "⚡ **Umakant\x27s Core Technical Stack**:\n\n" +
          "• **Frontend**: Next.js (App Router), React 18/19, TypeScript, Tailwind CSS, Redux Toolkit\n" +
          "• **Backend & Systems**: Node.js, Express.js, REST APIs, WebSockets, JWT, RBAC\n" +
          "• **AI & LLM**: LangChain, RAG architectures, Google Gemini API, Groq, Vector Embeddings\n" +
          "• **Databases & DevOps**: PostgreSQL, MongoDB, Prisma ORM, Redis, Docker, Git/GitHub\n" +
          "• **DSA**: 150+ LeetCode problems solved with focus on arrays, dynamic programming, and graphs";
      } else if (lower.includes("education") || lower.includes("college") || lower.includes("university") || lower.includes("gla")) {
        responseText =
          "🎓 **Education**:\n\n" +
          "• **Degree**: Bachelor of Technology (B.Tech) in Computer Science & Engineering\n" +
          "• **Institution**: GLA University, Mathura\n" +
          "• **Timeline**: 2022 – 2026\n" +
          "• **Location**: Based in Noida, Uttar Pradesh, India";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("hire") || lower.includes("reach")) {
        responseText =
          "📬 **Get in touch with Umakant Sharma**:\n\n" +
          "• **Email**: uksharma9758uk@gmail.com\n" +
          "• **Phone**: +91-8650163800\n" +
          "• **Location**: Noida, Uttar Pradesh, India\n" +
          "• **LinkedIn**: [linkedin.com/in/umakant-sharma-655345361](https://www.linkedin.com/in/umakant-sharma-655345361/)\n" +
          "• **GitHub**: [github.com/umakantuk22](https://github.com/umakantuk22)";
      } else if (lower.includes("who are you") || lower.includes("about") || lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
        responseText =
          "👋 Hello! Umakant Sharma is a Full-Stack & AI Systems Engineer (B.Tech CSE \x2726 at GLA University, Mathura) based in Noida. He specializes in scalable web applications, enterprise SaaS architectures, and autonomous AI agent workflows (RAG, LangChain, Next.js, Node.js). How can I assist you with his portfolio today?";
      } else {
        responseText =
          "Umakant Sharma is a Full-Stack & AI Systems Engineer specializing in Next.js, Node.js, multi-tenant architectures, and RAG pipelines. Feel free to ask about his **projects (NexusOps, AI Resume Copilot)**, **tech stack**, **education at GLA University**, or **contact information**!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "bot-" + Date.now(),
          sender: "bot",
          text: responseText,
        },
      ]);
    }, 400);
  };

  return (
    <>
      <aside aria-label="Portfolio AI Assistant" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2.5 rounded-full border border-cyan-400/80 bg-gradient-to-r from-[#0b162f] to-[#071022] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(0,210,255,0.6)] hover:border-cyan-300 transition-all active:scale-95"
          aria-expanded={isOpen}
          aria-label="Open portfolio chatbot"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-cyan-300 font-bold">
            🤖 Ask Umakant AI
          </span>
          <span className="text-slate-400 text-xs font-normal">
            {isOpen ? "✕" : "💬"}
          </span>
        </button>
      </aside>

      {isOpen && (
        <section
          aria-label="Umakant Sharma AI Chat Assistant"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[520px] flex flex-col rounded-2xl border border-cyan-500/50 bg-[#060c1a]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,210,255,0.25)] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <div className="flex items-center justify-between border-b border-[#172338] bg-[#091224] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/50 bg-cyan-950/60 text-cyan-300 font-bold text-sm">
                🤖
              </div>
              <div>
                <h2 className="text-xs font-bold text-white flex items-center gap-1.5">
                  Umakant Sharma AI
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </h2>
                <p className="text-[10px] text-cyan-400 font-mono">
                  Scope-Restricted Portfolio Bot
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-base p-1"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="px-3 py-2 bg-[#090e1c] border-b border-[#141e30] flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <button
              onClick={() => handleSend("Tell me about NexusOps & AI Gateway")}
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-cyan-300 hover:border-cyan-400 transition-colors"
            >
              ⚡ NexusOps
            </button>
            <button
              onClick={() => handleSend("What are your top projects?")}
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-cyan-300 hover:border-cyan-400 transition-colors"
            >
              💻 Top Projects
            </button>
            <button
              onClick={() => handleSend("What is your tech stack?")}
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-cyan-300 hover:border-cyan-400 transition-colors"
            >
              🛠️ Skills
            </button>
            <button
              onClick={() => handleSend("How can I contact Umakant?")}
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-cyan-300 hover:border-cyan-400 transition-colors"
            >
              📬 Contact
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium"
                      : m.isError
                      ? "bg-red-950/70 border border-red-500/50 text-red-200"
                      : "bg-[#0c162e] border border-[#1d2d4a] text-slate-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-[#172338] bg-[#091224] p-2.5 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Umakant\x27s work, tech stack, projects..."
              className="flex-1 rounded-xl border border-[#1e2d48] bg-[#060c18] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-8 w-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold disabled:opacity-40 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-sm"
              aria-label="Send message"
            >
              ↑
            </button>
          </form>
        </section>
      )}
    </>
  );
}
