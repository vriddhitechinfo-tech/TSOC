"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import VideoMeshBackground from "@/components/VideoMeshBackground";
import { useEcosystemGSAP } from "@/hooks/useEcosystemGSAP";
import { ecosystemPillars } from "@/data/homeData";

export default function EcosystemSection() {
  const { sectionRef, containerRef } = useEcosystemGSAP();

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#0A0908] overflow-hidden flex flex-col justify-center min-h-screen"
    >
      {/* Decorative gold gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB26A]/30 to-transparent" />
      {/* Ambient mesh background accent */}
      <VideoMeshBackground className="opacity-25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#161412]/50 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
            Our Core
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
            The Collective Growth Ecosystem
          </h2>
          <p className="text-xs text-[#EDE9E0]/50">
            Everything you need to grow — software, credentialing, community,
            and scaling systems.
          </p>
        </div>

        {/* Card Stack Grid/Container */}
        <div
          ref={containerRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:block lg:max-w-xs xl:max-w-sm lg:mx-auto lg:h-[350px] lg:mb-[400px] gap-6 w-full py-8"
        >
          {ecosystemPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="gsap-ecosystem-card opacity-0 lg:absolute lg:inset-0 glass-card p-6 md:p-8 flex flex-col justify-between border border-[#FFB26A]/10 bg-[#161412]/40 backdrop-blur shadow-xl relative select-none w-full h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-2.5 py-0.5 rounded">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="text-[#EDE9E0]/40 font-bold text-xs uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs uppercase font-bold tracking-wider text-[#FFB26A]">
                <span>{pillar.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
