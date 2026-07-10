"use client";

import React, { useEffect, useRef } from "react";
import StrategyCTA from "@/components/ui/StrategyCTA";
import { FileText, TrendingUp, ShieldAlert, Cpu } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (pageRef.current) {
      const reveals = pageRef.current.querySelectorAll(".gsap-reveal");
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#050A14] min-h-screen py-16 sm:py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,74,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFD94A]/35 border border-[#FFD94A]/40 px-3 py-1 text-xs font-semibold text-[#FFD94A]">
            More Than Tax Software
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Our Story &amp; Mission
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            At The Sector of Collectives, we believe tax professionals deserve more than software. We help tax professionals build businesses, secure independence, and develop year-round systems.
          </p>
        </div>

        {/* Narrative & Mottos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="gsap-reveal space-y-6 text-xs md:text-sm text-[#EDE9E0]/60 leading-relaxed">
            <h2 className="text-base font-bold text-white uppercase tracking-wider">Our Mission</h2>
            <p>
              To create a collaborative community where tax professionals have access to the tools, education, relationships, and opportunities needed to grow sustainable businesses.
            </p>
            <p>
              We stand against the high-commission franchise models that exploit independent preparers. We believe ERO status is the ultimate foundation for growth, enabling business owners to retain 100% of their revenues and structure offices on their own terms.
            </p>
            <p>
              Whether you are preparing your first return, configuring multi-site consoles, or white-labeling software for your own Service Bureau network, we provide live expert support every step of the way.
            </p>
            <div className="pt-4">
              <StrategyCTA />
            </div>
          </div>

          <TiltCard tilt={5} className="relative bg-[#1C2A47] border border-[#FFD94A]/30 rounded-xl p-8 md:p-12 text-center space-y-6 overflow-hidden">
            <FileText className="w-10 h-10 text-[#FFD94A] mx-auto" />
            <h3 className="text-xs font-bold tracking-wider text-[#EDE9E0]/50 uppercase">Our Community Motto</h3>
            <div className="text-2xl sm:text-3xl font-black tracking-wider text-white select-none">
              <span className="text-[#FFD94A]">Connect</span>
              <span className="text-[#FFD94A]/60 mx-2">•</span>
              <span className="text-[#FFD94A]">Create</span>
              <span className="text-[#FFD94A]/60 mx-2">•</span>
              <span className="text-white">Conquer</span>
            </div>
            <p className="text-[#EDE9E0]/50 text-xs max-w-sm mx-auto leading-relaxed">
              We connect tax leaders, help them create automated revenue setups, and guide them as they conquer their local tax markets.
            </p>
          </TiltCard>
        </div>

        {/* Value Pillars Grid */}
        <div>
          <h2 className="gsap-reveal text-lg font-bold text-center text-white mb-10 uppercase tracking-wider">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard className="glass-card glass-card-hover-emerald p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#1C2A47] border border-[#FFD94A]/30 flex items-center justify-center text-[#FFD94A] mb-2">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Revenue Growth</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                Prioritize cash-flow strategies. We focus on building year-round services like LLC filings, tax planning retainers, and bookkeeping alliances to sustain business outside Q1.
              </p>
            </TiltCard>

            <TiltCard delay={0.1} className="glass-card glass-card-hover p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#1C2A47] border border-[#FFD94A]/30 flex items-center justify-center text-[#FFD94A] mb-2">
                <ShieldAlert className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compliance Education</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                Operate securely. IRS requirements evolve constantly; we provide digital background reviews, secure ID.me guidelines, and attorney checks to verify EFIN compliance.
              </p>
            </TiltCard>

            <TiltCard delay={0.2} className="glass-card glass-card-hover p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#1C2A47] border border-[#FFD94A]/30 flex items-center justify-center text-[#FFD94A] mb-2">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Technology Integration</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                Ditch manual worksheets. We design automated pipelines for lead capture, calendar bookings, and encrypted document intakes, allowing you to double your intake.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}
