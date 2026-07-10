"use client";

import React from "react";

/**
 * Ambient background video — pure black backdrop in the source file, so
 * `mix-blend-mode: screen` makes the black disappear against the page's
 * dark background and only the light dot/line animation shows through.
 * No chroma-key processing needed since black-on-screen-blend is a no-op.
 */
export default function VideoMeshBackground({ className = "" }: { className?: string }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${className}`}
      style={{ mixBlendMode: "screen" }}
    >
      <source src="/website-bg.mp4" type="video/mp4" />
    </video>
  );
}
