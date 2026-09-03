"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/motion/TiltCard";
import { BOOK_STRATEGY_SESSION_CALL_LINK, withUtm } from "@/lib/constants";

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
      desc: "Professional tax software with unlimited federal and state e-filing, bank product integrations, and compliance diagnostics.",
      href: "/tax-software",
      tag: "Software",
    },
    {
      num: "02",
      title: "TaxPro EFIN Enablement Program",
      desc: "Stop splitting your filing fees. We help you get your own EFIN, handle fingerprinting, and set up an independent office.",
      href: "/ero-enablement",
      tag: "Compliance",
    },
    {
      num: "03",
      title: "Service Bureau Growth Program",
      desc: "Host software under your own brand. Build remote preparer networks and set your own revenue splits.",
      href: "/service-bureau-growth",
      tag: "Scaling",
    },
    {
      num: "04",
      title: "Open Office Community",
      desc: "Weekly Zoom coworking hours, software reviews, peer networking, and live consultations with corporate attorneys.",
      href: "/open-office",
      tag: "Community",
    },
    {
      num: "05",
      title: "Technology & Automation Support",
      desc: "Custom CRM pipelines, SMS follow-ups, secure document portals, and calendar booking — built for tax offices.",
      href: "/technology-support",
      tag: "Systems",
    },
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#0A0908] min-h-screen py-16 sm:py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            How We Support Tax Professionals
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Our Business Scaling Programs
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            The infrastructure, software, IRS compliance, and coworking network to scale a profitable tax practice.
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
                  <span className="text-xs font-bold text-[#FFB26A] font-mono">
                    {srv.num}
                  </span>
                  <span className="text-xs font-bold text-[#EDE9E0]/60 uppercase tracking-widest bg-[#161412] border border-[#FFB26A]/30 px-2.5 py-0.5 rounded">
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
                  className="inline-flex items-center gap-1.5 bg-[#161412] hover:bg-[#FFB26A] border border-[#FFB26A]/30 text-[#FFB26A] hover:text-[#0A0908] px-5 py-2.5 rounded-lg text-xs font-extrabold transition-all uppercase tracking-wider"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="gsap-reveal text-center max-w-xl mx-auto mt-20 space-y-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wider">
            Not sure where to start?
          </h2>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            Book a strategy session. We&apos;ll map the right programs to your goals.
          </p>
          <a
            href={withUtm(BOOK_STRATEGY_SESSION_CALL_LINK, "services-strategy-session")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#0A0908] font-extrabold py-3 px-8 text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Book Your Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}
