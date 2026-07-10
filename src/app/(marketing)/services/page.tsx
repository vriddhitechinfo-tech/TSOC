"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/motion/TiltCard";

export default function ServicesPage() {
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

  const serviceList = [
    {
      num: "01",
      title: "Tax Software Access",
      desc: "Get professional-grade tax software with unlimited federal/state e-filing, bank product integrations, and diagnostic compliance checks.",
      href: "/tax-software",
      tag: "Software",
    },
    {
      num: "02",
      title: "ERO Enablement Program",
      desc: "Stop splitting your hard-earned filing fees. We help you obtain your own EFIN, manage digital fingerprinting, and secure independent office setups.",
      href: "/ero-enablement",
      tag: "Compliance",
    },
    {
      num: "03",
      title: "Service Bureau Growth Program",
      desc: "License and host software under your own brand name. Build remote preparer networks and setup custom revenue-split structures.",
      href: "/service-bureau-growth",
      tag: "Scaling",
    },
    {
      num: "04",
      title: "Open Office Community",
      desc: "Participate in weekly Zoom coworking hours, direct software reviews, peer networking, and live legal consultations with corporate attorneys.",
      href: "/open-office",
      tag: "Community",
    },
    {
      num: "05",
      title: "Technology & Automation Support",
      desc: "Eliminate manual intake pipelines. We build custom CRM pipelines, SMS follow-up triggers, secure document portals, and calendar interfaces.",
      href: "/technology-support",
      tag: "Systems",
    },
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#050A14] min-h-screen py-16 sm:py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,74,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFD94A]/35 border border-[#FFD94A]/40 px-3 py-1 text-xs font-semibold text-[#FFD94A]">
            How We Support Tax Professionals
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Our Business Scaling Programs
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            We provide the infrastructure, software tools, IRS compliance setups, and coworking networks required to scale a profitable tax practice.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {serviceList.map((srv, i) => (
            <TiltCard
              key={srv.num}
              tilt={4}
              delay={i * 0.06}
              className="glass-card glass-card-hover p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-[#FFD94A] font-mono">
                    {srv.num}
                  </span>
                  <span className="text-xs font-bold text-[#EDE9E0]/60 uppercase tracking-widest bg-[#1C2A47] border border-[#FFD94A]/30 px-2.5 py-0.5 rounded">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">{srv.title}</h3>
                <p className="text-xs text-[#EDE9E0]/55 leading-relaxed max-w-3xl">
                  {srv.desc}
                </p>
              </div>
              
              <div className="shrink-0">
                <Link
                  href={srv.href}
                  className="inline-flex items-center gap-1.5 bg-[#1C2A47] hover:bg-[#FFD94A] border border-[#FFD94A]/30 text-[#FFD94A] hover:text-white px-5 py-2.5 rounded-lg text-xs font-extrabold transition-all uppercase tracking-wider"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
