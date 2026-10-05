"use client";

import * as React from "react";

export function CursorSpotlight() {
  const [mounted, setMounted] = React.useState(false);
  const [position, setPosition] = React.useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".project-card") ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(0, 210, 255, 0.08), transparent 80%)`,
        }}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out ${
          isHovered
            ? "w-8 h-8 bg-cyan-400/20 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,210,255,0.7)]"
            : "w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_14px_#00d2ff,0_0_25px_rgba(0,210,255,0.8)]"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
