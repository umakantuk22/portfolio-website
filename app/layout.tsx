import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
  description: PORTFOLIO_DATA.personal.tagline,
  keywords: [
    "Umakant Sharma",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Next.js",
    "React",
    "Node.js",
    "GLA University",
    "MERN Stack",
    "RAG",
    "GenAI Developer",
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umakantuk22.github.io/portfolio-website/",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.tagline,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-violet-600/30 selection:text-violet-200">
        {children}
      </body>
    </html>
  );
}
