"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { DollarSign, Award, Sliders, Building } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EROEnablementPage() {
  const { openModal } = useModal();
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

  const roadmapSteps = [
    {
      num: "01",
      title: "ERO Application & IRS e-Services",
      desc: "Establish your secure IRS e-Services account. We guide you through completing the Electronic Return Originator application, ensuring error-free entry to avoid processing delays.",
    },
    {
      num: "02",
      title: "ID.me Verification Setup",
      desc: "Setup your ID.me security login. The IRS requires facial recognition and verification to access secure tax agent resources. We walk you through the credential verification steps.",
    },
    {
      num: "03",
      title: "Fingerprinting & Background Checks",
      desc: "Submit fingerprint cards for background screening. We help you locate authorized digital fingerprinting centers and map out submission protocols for rapid approval.",
    },
    {
      num: "04",
      title: "Business Structure & Compliance",
      desc: "Incorporate your business correctly. We recommend LLC or S-Corp setups, audit your office for physical/digital security compliance, and align with IRS standards.",
    },
    {
      num: "05",
      title: "Software & EFIN Activation",
      desc: "Link your approved EFIN with our professional tax software. Activate bank product connections, customize user privileges for staff, and file your first official return.",
    },
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#120b06] min-h-screen py-16 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-lg bg-amber-955/35 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#d4af37]">
            IRS ERO Support &amp; Training
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Stop Splitting Fees. Become an Independent ERO.
          </h1>
          <p className="text-sm text-stone-450 leading-relaxed">
            Preparing taxes under another ERO or franchise can cost you 30-50% of your revenue. Our ERO Enablement program guides you through the process of getting your EFIN and setting up your own company.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("ero")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book an ERO Consultation
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <h2 className="gsap-reveal text-lg font-bold text-center text-white mb-12 uppercase tracking-wider">
            Why Transition to Your Own EFIN?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Keep 100% of Revenue</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Keep every dollar your office generates. No percentage split models or royalty fees standard in franchise setups.
              </p>
            </div>

            <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Full Brand Authority</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Market your business under your own name. Build custom client relationships and value that belongs to you.
              </p>
            </div>

            <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37]">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Control Your Pricing</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Define your own fee schedule, client discounts, and service offerings without standard franchise limits.
              </p>
            </div>

            <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37]">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Direct Bank Approvals</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Receive client filing fees straight from refund processing banks directly into your own corporate bank account.
              </p>
            </div>
          </div>
        </div>

        {/* The Roadmap Timeline */}
        <div className="gsap-reveal glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">How to Become an ERO: Step-by-Step</h2>
            <p className="text-xs text-stone-500">
              The IRS process can be confusing, taking anywhere from 4 to 8 weeks. We eliminate the guesswork with direct enablement support.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:md:left-7.5 before:h-full before:w-0.5 before:bg-amber-950/40">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="relative flex items-start space-x-4 md:space-x-8 pl-1">
                <span className="flex h-8 w-8 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-lg bg-[#18100a] border border-amber-900/40 text-[#d4af37] font-extrabold text-xs md:text-base z-10">
                  {step.num}
                </span>
                <div className="space-y-1.5 pt-1.5 md:pt-4">
                  <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-3xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action consultation details */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">Ready to secure your independence?</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Schedule an ERO application consultation. We will audit your pre-requisites and structure a timeline to get you approved before next tax season.
          </p>
          <button
            onClick={() => openModal("ero")}
            className="bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-2.5 px-6 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider"
          >
            Start ERO Enablement Today
          </button>
        </div>
      </div>
    </div>
  );
}
