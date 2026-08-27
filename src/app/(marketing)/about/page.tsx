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
    <div ref={pageRef} className="relative overflow-hidden bg-[#0A0908] min-h-screen py-16 sm:py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            More Than Tax Software
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Our Story &amp; Mission
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            Tax professionals deserve more than software. We help you build a business, secure independence, and run year-round systems.
          </p>
        </div>

        {/* Narrative & Mottos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="gsap-reveal space-y-6 text-xs md:text-sm text-[#EDE9E0]/60 leading-relaxed">
            <h2 className="text-base font-bold text-white uppercase tracking-wider">Our Mission</h2>
            <p>
              To build a community where tax professionals get the tools, education, and relationships to grow sustainable businesses.
            </p>
            <p>
              We reject the high-commission franchise models that exploit independent preparers. ERO status is the foundation for growth: keep 100% of your revenue and run your office on your own terms.
            </p>
            <p>
              First return or a multi-site Service Bureau network — you get live expert support at every step.
            </p>
            <div className="pt-4">
              <StrategyCTA />
            </div>
          </div>

          <TiltCard tilt={5} className="relative bg-[#161412] border border-[#FFB26A]/30 rounded-xl p-8 md:p-12 text-center space-y-6 overflow-hidden">
            <FileText className="w-10 h-10 text-[#FFB26A] mx-auto" />
            <h3 className="text-xs font-bold tracking-wider text-[#EDE9E0]/50 uppercase">Our Community Motto</h3>
            <div className="text-2xl sm:text-3xl font-black tracking-wider text-white select-none">
              <span className="text-[#FFB26A]">Connect</span>
              <span className="text-[#FFB26A]/60 mx-2">•</span>
              <span className="text-[#FFB26A]">Create</span>
              <span className="text-[#FFB26A]/60 mx-2">•</span>
              <span className="text-white">Conquer</span>
            </div>
            <p className="text-[#EDE9E0]/50 text-xs max-w-sm mx-auto leading-relaxed">
              We connect tax leaders, help them build automated revenue systems, and back them as they win their local markets.
            </p>
          </TiltCard>
        </div>

        {/* Value Pillars Grid */}
        <div>
          <h2 className="gsap-reveal text-lg font-bold text-center text-white mb-10 uppercase tracking-wider">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard className="glass-card glass-card-hover-emerald p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#161412] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] mb-2">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Revenue Growth</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                Year-round cash flow. LLC filings, tax planning retainers, and bookkeeping partnerships keep revenue coming in outside Q1.
              </p>
            </TiltCard>

            <TiltCard delay={0.1} className="glass-card glass-card-hover-emerald p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#161412] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] mb-2">
                <ShieldAlert className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compliance Education</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                IRS rules keep changing. We provide background reviews, ID.me guidance, and attorney checks to keep your EFIN compliant.
              </p>
            </TiltCard>

            <TiltCard delay={0.2} className="glass-card glass-card-hover p-6 space-y-3">
              <div className="h-9 w-9 rounded-md bg-[#161412] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] mb-2">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Technology Integration</h3>
              <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
                Drop the manual worksheets. Automated pipelines for lead capture, booking, and encrypted document intake let you take on more clients.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>
    </div>
  );
}
