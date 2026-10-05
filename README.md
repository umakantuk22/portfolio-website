# Umakant Sharma — Production-Ready Developer Portfolio (Crimson Red UI)

A modern developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 📸 Profile Image Setup
Your portfolio is already configured to display your photo (`uk.jpg`) with the signature red backdrop box in both the **Hero** and **Who Am I** sections.

When you extract this project on your laptop:
1. Ensure your photo file **`uk.jpg`** is located in:
   ```
   portfolio/public/images/uk.jpg
   ```
   *(and/or alongside `portfolio_preview.html` for single-file browser preview)*.

---

## 🚀 How to Run Locally

### Option 1: Instant Single-File Browser Preview (Zero Setup)
1. Double-click **`portfolio_preview.html`** in your browser (Chrome, Edge, Brave, Safari).
2. It will display the entire portfolio, all 6 projects, services, about section, and your photo immediately offline.

### Option 2: Full Next.js 15 Development Server
1. Ensure **Node.js 18+** is installed on your laptop.
2. Open terminal in the `portfolio` directory:
   ```bash
   cd portfolio
   npm install
   npm run dev
   ```
3. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## 🛠 Features & Architecture
- **Theme:** Deep Dark Black (`#08080a`) with Crimson Red (`#dc2626`) accents matching the reference layout.
- **Hero Section:** 2-column layout with all-caps name, summary, red CTA button, and portrait card with the crimson red backdrop box.
- **Who Am I:** Inverted 2-column layout with portrait card, bio, GLA University education card, tech stack pills, and "Download CV ↗" button.
- **What Can I Do:** 6-card services grid covering Full-Stack, REST APIs, AI/RAG, WebSockets, System Design, and 150+ LeetCode DSA problems.
- **Projects Grid:** 6 verified projects featuring live Vercel deployments (Cult Fitness App, YouTube Watch Party) and GitHub repositories.
- **Contact:** Direct channels + zero-backend mailto contact form.
- **Static Export:** 100% ready for one-click deployment on Vercel or GitHub Pages.
