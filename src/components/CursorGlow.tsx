"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * A soft golden glow that follows the cursor across the entire site.
 * Position and visibility are pushed directly to the DOM via refs (no React
 * state per mousemove) to avoid the render/layout overhead that a
 * state-driven version would incur on a high-frequency event.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    let frame: number | null = null;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = null;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,217,74,0.16), rgba(255,217,74,0.05) 35%, transparent 65%)`;
    };

    const handleMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const handleLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="fixed inset-0 z-[45] pointer-events-none transition-opacity duration-500"
      style={{ opacity: 0, mixBlendMode: "screen" }}
    />
  );
}
