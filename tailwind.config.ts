import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050811",
        foreground: "#f8fafc",
        surface: {
          DEFAULT: "#090e1a",
          hover: "#0f172a",
          border: "#172338",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#00d2ff",
          cyan: "#38bdf8",
          blue: "#2563eb",
          hover: "#0284c7",
          subtle: "rgba(0, 210, 255, 0.12)",
        },
        border: "#172338",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        script: ["'Caveat'", "'Brush Script MT'", "'Segoe Script'", "cursive"],
      },
      screens: {
        xs: "360px",
      },
      boxShadow: {
        "cyan-glow": "0 0 50px -10px rgba(0, 210, 255, 0.35)",
        "halo-glow": "0 0 90px 10px rgba(0, 180, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
