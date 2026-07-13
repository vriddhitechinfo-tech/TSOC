"use client";

import React from "react";
import { useStatsCounter } from "@/hooks/useStatsCounter";

export default function StatsTickerSection() {
  const { containerRef, yearsValRef, erosValRef, membersValRef } =
    useStatsCounter();

  return (
    <section
      ref={containerRef}
      className="py-16 bg-[#2A160E]/30 relative border-y border-[#FFB26A]/10"
    >
      {/* Gold glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB26A]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <span
              ref={yearsValRef}
              className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
            >
              0+
            </span>
            <span className="text-xs text-white font-bold uppercase tracking-wider block">
              Years Supporting Tax Pros
            </span>
            <p className="text-xs text-[#EDE9E0]/40">
              Established training, setups, and support structures since 2014
            </p>
          </div>
          <div className="space-y-1 py-6 md:py-0">
            <span
              ref={erosValRef}
              className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
            >
              0+
            </span>
            <span className="text-xs text-white font-bold uppercase tracking-wider block">
              Independent EROs Supported
            </span>
            <p className="text-xs text-[#EDE9E0]/40">
              Firms transitioned from splits to keeping 100% of their fees
            </p>
          </div>
          <div className="space-y-1">
            <span
              ref={membersValRef}
              className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
            >
              0+
            </span>
            <span className="text-xs text-white font-bold uppercase tracking-wider block">
              Active Community Members
            </span>
            <p className="text-xs text-[#EDE9E0]/40">
              Coworking, legal consultations, and business workshops year-round
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
