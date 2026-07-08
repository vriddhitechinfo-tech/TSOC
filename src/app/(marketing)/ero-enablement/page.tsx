"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { DollarSign, Award, Sliders, Building, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeeCalculator from "@/components/FeeCalculator";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function EROEnablementPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // General reveals
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
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Step nodes hover & draw-line scroll-scrub
      if (timelineRef.current) {
        const nodes = timelineRef.current.querySelectorAll(".gsap-step-node");
        
        // Stagger fade-in step nodes
        gsap.fromTo(
          nodes,
          { scale: 0.85, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            }
          }
        );
      }
    });

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

  const eroFaqs = [
    {
      question: "What exactly is an ERO?",
      answer: "An Electronic Return Originator (ERO) is an IRS-authorized tax professional who originates the electronic submission of tax returns. Becoming an ERO gives you the legal right to file taxes directly on behalf of clients under your own business entity."
    },
    {
      question: "How long does the IRS EFIN approval process take?",
      answer: "Typically, the IRS takes between 4 to 8 weeks to audit applications, run background checks, and issue an Electronic Filing Identification Number (EFIN). We recommend starting your application by October to ensure full clearance before tax season begins."
    },
    {
      question: "What is the cost of becoming an ERO?",
      answer: "The IRS does not charge a direct fee to apply for an EFIN. However, you will need to pay for digital fingerprinting and background processing through authorized providers, which usually costs between $50 and $100 depending on your state."
    },
    {
      question: "Do I need a physical retail storefront to be an ERO?",
      answer: "No, you can operate an ERO business home-based or virtually. However, you must comply with IRS security guidelines (Publication 4557), which mandate secure storage of taxpayer documents, password policies, and encrypted communication channels. We provide full blueprints to set this up."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#0a0605] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-amber-955/35 border border-amber-900/40 px-3 py-1 text-xs font-semibold text-[#60a5fa]">
            IRS ERO Support &amp; Training
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Stop Splitting Fees. Become an Independent ERO.
          </h1>
          <p className="text-sm text-stone-450 leading-relaxed">
            Preparing taxes under another ERO or franchise can cost you 30% to 50% of your total revenue. Our ERO Enablement program guides you through the process of getting your EFIN and setting up your own company.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("ero")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#60a5fa] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book an ERO Consultation
            </button>
          </div>
        </div>

        {/* Interactive Fee Split Calculator */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Fee-Split Calculator</h2>
            <p className="text-xs text-stone-500 mt-1">See how much revenue you stand to retain by acquiring your own EFIN credentials.</p>
          </div>
          <FeeCalculator />
        </div>

        {/* Benefits Grid */}
        <div>
          <h2 className="gsap-reveal text-lg font-bold text-center text-white mb-12 uppercase tracking-wider">
            Why Transition to Your Own EFIN?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gsap-reveal glass-card p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#0f0805] border border-amber-900/30 flex items-center justify-center text-[#60a5fa]">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Keep 100% of Revenue</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Keep every dollar your office generates. No percentage split models or royalty fees standard in franchise setups.
              </p>
            </div>

            <div className="gsap-reveal glass-card p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#0f0805] border border-amber-900/30 flex items-center justify-center text-[#60a5fa]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Full Brand Authority</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Market your business under your own name. Build custom client relationships and value that belongs to you.
              </p>
            </div>

            <div className="gsap-reveal glass-card p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#0f0805] border border-amber-900/30 flex items-center justify-center text-[#60a5fa]">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Control Your Pricing</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Define your own fee schedule, client discounts, and service offerings without standard franchise limits.
              </p>
            </div>

            <div className="gsap-reveal glass-card p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#0f0805] border border-amber-900/30 flex items-center justify-center text-[#60a5fa]">
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
        <div ref={timelineRef} className="glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">How to Become an ERO: Step-by-Step</h2>
            <p className="text-xs text-stone-500">
              The IRS process can be confusing, taking anywhere from 4 to 8 weeks. We eliminate the guesswork with direct enablement support.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:md:left-8 before:w-0.5 before:bg-amber-900/30">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="gsap-step-node relative flex items-start space-x-4 md:space-x-8 pl-1">
                <span className="flex h-8 w-8 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-lg bg-[#0f0805] border border-amber-900/40 text-[#60a5fa] font-extrabold text-xs md:text-sm z-10 hover:border-amber-400 transition-colors">
                  {step.num}
                </span>
                <div className="space-y-1.5 pt-1.5 md:pt-3">
                  <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-3xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={eroFaqs} title="ERO Enablement FAQs" />
        </div>

        {/* Call to Action consultation details */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Ready to secure your independence?</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Schedule an ERO application consultation. We will audit your pre-requisites and structure a timeline to get you approved before next tax season.
          </p>
          <button
            onClick={() => openModal("ero")}
            className="bg-gradient-to-r from-[#60a5fa] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-2.5 px-6 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider"
          >
            Start ERO Enablement Today
          </button>
        </div>
      </div>
    </div>
  );
}
