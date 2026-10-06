export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  hasLiveDemo: boolean;
  architectureType: "realtime" | "ai" | "saas" | "ecommerce";
  badge?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Umakant Sharma",
    role: "Full-Stack & AI Engineer",
    titlePrimary: "Full-Stack &",
    titleAccent: "AI Engineer",
    tagline:
      "Building intelligent web applications with modern technologies and AI to solve real-world problems.",
    badge: "B.Tech CSE Graduate 2026",
    location: "Noida, India",
    email: "uksharma9758uk@gmail.com",
    phone: "+91-8650163800",
    avatarUrl: "/images/uk.jpg",
    links: {
      github: "https://github.com/umakantuk22",
      linkedin: "https://www.linkedin.com/in/umakant-sharma-655345361/",
      leetcode: "https://leetcode.com/u/Umakantsharma/",
      resumePdf: "/resume.pdf",
    },
    heroTechBadges: [
      { name: "MERN Stack", icon: "react" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "LangChain", icon: "link" },
      { name: "LangGraph", icon: "graph" },
    ],
    featuredBanner: {
      title: "AI Resume Copilot Pro",
      subtitle: "Live Project • Top 1% Developer Studio",
      url: "https://uk-resume-copilot.vercel.app/",
    },
    whatIDo: {
      title: "What I Do",
      description:
        "I build scalable web applications, integrate AI solutions, work with modern tools and frameworks, and continuously learn to create meaningful impact through technology.",
      handwrittenNote: "Let's build something great!",
    },
    stats: [
      {
        icon: "code",
        value: "150+",
        label: "DSA Problems",
        sublabel: "(LeetCode)",
      },
      {
        icon: "projects",
        value: "4+",
        label: "Live Deployed Systems",
        sublabel: "(Vercel + Render)",
      },
      {
        icon: "grad",
        value: "2026",
        label: "B.Tech CSE Graduate",
        sublabel: "(GLA University)",
      },
      {
        icon: "star",
        value: "1%",
        label: "Dedicated to",
        sublabel: "Continuous Learning",
      },
    ],
    aboutBio: [
      "I am a Computer Science undergraduate at GLA University with a strong foundation in Data Structures & Algorithms and hands-on experience developing production-grade web systems. My core engineering focus lies in architecting modular backends, designing robust RESTful APIs, and integrating Generative AI / LLM workflows with deterministic software patterns.",
      "I enjoy solving challenging engineering problems—from implementing sub-50ms caching layers and failover LLM routing to building real-time WebSocket state synchronization. I am seeking entry-level Software Engineering, Full-Stack, or AI/Backend roles where I can contribute to high-impact systems.",
    ],
  },
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "Docker"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
    coreCS: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    aiAndTools: [
      "AI Action Gateways",
      "LangChain",
      "LangGraph",
      "LLM APIs (Gemini, Groq)",
      "Prompt Engineering",
      "RAG Architecture",
      "Git & GitHub",
      "JWT & RBAC",
      "Vercel",
    ],
    systemDesign: [
      "Multi-Tenant Isolation",
      "AI Risk Classification",
      "REST API Design",
      "In-Memory Caching (TTL)",
      "Outbox Pattern & Idempotency",
      "WebSocket Sync",
    ],
  },
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "GLA University",
    location: "Mathura, India",
    period: "2022 – 2026",
  } as Education,
  certifications: [
    {
      name: "Java Programming",
      issuer: "Infosys Springboard",
    },
    {
      name: "Database Management System",
      issuer: "NPTEL",
    },
    {
      name: "RESTful API Design & Development",
      issuer: "Udemy",
    },
  ] as Certification[],
  achievements: [
    "Solved 150+ Data Structures & Algorithms problems on LeetCode focusing on array algorithms, dynamic programming, and trees",
    "Engineered and deployed multiple full-stack and AI-integrated production web applications on Vercel and Render",
  ],
  projects: [
    {
      id: "nexus-ops",
      title: "NexusOps",
      subtitle: "AI-Native Revenue & Customer Operations Platform",
      description:
        "Multi-tenant SaaS platform for revenue and customer operations featuring organization-level tenant isolation, RBAC, CRM workflows, and an AI Action Gateway with automated approval controls.",
      highlights: [
        "Built multi-tenant SaaS platform for revenue and customer operations with organization-level isolation, RBAC, authentication, CRM workflows, and secure REST APIs",
        "Designed an AI Action Gateway with tool validation, risk classification, approval workflows, action expiry, idempotency, and audit trails for controlled AI operations",
        "Implemented tenant-aware authorization, security middleware, request validation, rate limiting, health/readiness endpoints, and structured operational logging",
        "Implemented outbox-style workflow processing with retries, dead-letter handling, idempotency, and entitlement/usage controls, backed by 21 automated domain and security tests",
      ],
      tags: ["Node.js", "REST APIs", "JWT", "RBAC", "Docker", "AI Workflows", "Prisma"],
      liveUrl: "https://nexusops-kwz5.onrender.com",
      githubUrl: "https://github.com/umakantuk22/nexusops",
      hasLiveDemo: true,
      architectureType: "saas",
      badge: "Live on Render",
    },
    {
      id: "ai-resume-copilot",
      title: "AI Resume Copilot Pro",
      subtitle: "RAG-Driven Resume Optimization & Multi-Portal Job Engine",
      description:
        "Modular full-stack AI platform analyzing resumes against targeted job descriptions using RAG semantic matching, LangChain orchestration, and multi-model failover.",
      highlights: [
        "Implemented Retrieval-Augmented Generation (RAG) pipeline to enhance contextual accuracy of resume matching",
        "Developed multi-model LLM routing layer with failover clustering to ensure 100% prompt response uptime",
        "Engineered SHA-256 in-memory caching with TTL eviction to eliminate redundant processing and reduce API costs",
        "Constructed automated multi-portal job recommendation pipeline generating 100+ listings with CSV export",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "RAG", "LangChain", "LLM APIs", "Vercel"],
      liveUrl: "https://uk-resume-copilot.vercel.app/",
      githubUrl: "https://github.com/umakantuk22",
      hasLiveDemo: true,
      architectureType: "ai",
      badge: "Top 1% Developer Studio",
    },
    {
      id: "cult-fitness",
      title: "Cult Fitness App",
      subtitle: "Full-Stack Fitness Class Booking & Workout Management Platform",
      description:
        "A full-stack fitness application engineered with the MERN stack for booking workout sessions and managing personal training routines.",
      highlights: [
        "Engineered secure JWT-based authentication and authorization with protected route middleware",
        "Designed RESTful API endpoints for class scheduling, trainer allocations, and user reservations",
        "Constructed a responsive, mobile-first frontend in React.js with real-time booking updates",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      liveUrl: "https://cult-fitness-ten.vercel.app/",
      githubUrl: "https://github.com/umakantuk22",
      hasLiveDemo: true,
      architectureType: "saas",
    },
    {
      id: "youtube-watch-party",
      title: "YouTube Watch Party System",
      subtitle: "Real-Time Synchronized Video Streaming with WebSockets",
      description:
        "Synchronized video streaming web application enabling multiple participants to watch YouTube videos in real-time rooms with sub-second state parity.",
      highlights: [
        "Implemented bidirectional WebSocket architecture with Socket.IO for synchronized play, pause, and seek events",
        "Architected room-based permissions with Role-Based Access Control (Host, Moderator, Participant)",
        "Integrated YouTube IFrame Player API for seamless client-side playback state synchronization",
      ],
      tags: ["React.js", "WebSockets", "Socket.IO", "Node.js", "Express", "YouTube API"],
      liveUrl: "https://youtube-watch-party-lovat.vercel.app/",
      githubUrl: "https://github.com/umakantuk22",
      hasLiveDemo: true,
      architectureType: "realtime",
    },
    {
      id: "ai-summarizer",
      title: "AI Summarizer Platform",
      subtitle: "Dynamic Multi-LLM Text Summarization Engine",
      description:
        "Full-stack AI text summarization platform offering dynamic switching between Google Gemini and Groq with persistent user history.",
      highlights: [
        "Engineered dual-model routing architecture allowing seamless runtime switching between Gemini and Groq",
        "Designed REST APIs for text chunking, token boundary management, and summary generation",
        "Integrated MongoDB for persistent summary history tracking and structured export",
      ],
      tags: ["MERN Stack", "Gemini API", "Groq API", "REST APIs", "MongoDB"],
      githubUrl: "https://github.com/umakantuk22",
      hasLiveDemo: false,
      architectureType: "ai",
    },
    {
      id: "instant-mechanic",
      title: "Instant Mechanic Dashboard",
      subtitle: "Vehicle Service Dispatch & Operations Management",
      description:
        "Full-stack dashboard for mechanic dispatch, vehicle maintenance tracking, and relational booking management.",
      highlights: [
        "Architected modular monorepo dividing an Express REST API backend and a Next.js client interface",
        "Designed normalized relational database schemas on PostgreSQL for service orders and mechanics",
        "Implemented reactive dashboard interfaces for live order status monitoring and booking workflow",
      ],
      tags: ["Next.js", "Express.js", "PostgreSQL", "Node.js", "REST APIs"],
      githubUrl: "https://github.com/umakantuk22/instant-mechanic-dashboard",
      hasLiveDemo: false,
      architectureType: "saas",
    },
    {
      id: "grameencart",
      title: "GrameenCart",
      subtitle: "Direct-to-Consumer Rural Produce E-Commerce Platform",
      description:
        "A full-stack e-commerce marketplace connecting rural agricultural producers directly with regional consumers.",
      highlights: [
        "Built responsive shopping interface with category filtering, item catalogs, and cart state management",
        "Developed RESTful backend services managing product inventories, pricing models, and checkout workflows",
        "Optimized mobile navigation and bundle delivery for seamless usage across 360px+ devices",
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/umakantuk22",
      hasLiveDemo: false,
      architectureType: "ecommerce",
    },
  ] as Project[],
};
