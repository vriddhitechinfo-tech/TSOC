"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, ShieldCheck, DollarSign, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SoftwareCarousel from "@/components/SoftwareCarousel";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function TaxSoftwarePage() {
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

  const packages = [
    {
      name: "Individual Preparer",
      desc: "Perfect for independent preparers getting started with professional filing tools.",
      priceText: "Flexible Pricing",
      features: [
        "1040, Schedule C, & All State Forms",
        "Cloud-based software access",
        "E-file capabilities & tracking",
        "Direct software walkthrough guides",
        "Email & basic chat support",
        "Basic training resources",
      ],
      ctaText: "See the Software in Action",
      action: () => openModal("demo"),
    },
    {
      name: "ERO Growth",
      desc: "Ideal for established or expanding EROs managing office locations and bank integrations.",
      priceText: "Maximizes Margins",
      isPopular: true,
      features: [
        "All Individual features",
        "Corporate & Business filings (1120, 1065, etc.)",
        "Bank product enrollment support",
        "Multi-user office licensing",
        "Dedicated tech advisor support",
        "EFIN application review guidance",
      ],
      ctaText: "Request Free Live Demo",
      action: () => openModal("demo"),
    },
    {
      name: "Service Bureau Enterprise",
      desc: "For leaders licensing and supporting other tax professionals under their own brand.",
      priceText: "Custom Licensing",
      features: [
        "All ERO Growth features",
        "White-label software branding options",
        "Sub-site EFIN management console",
        "Custom fee structure settings",
        "Service Bureau operations mentorship",
        "Priority 24/7 technical hotline",
      ],
      ctaText: "See Enterprise in Action",
      action: () => openModal("demo"),
    },
  ];

  const softwareFaqs = [
    {
      question: "Is the tax software cloud-based?",
      answer: "Yes, our professional tax software is fully cloud-based. You and your preparers can access files, prepare returns, and track e-file statuses securely from any web browser on desktop, tablet, or mobile devices with no local installations required."
    },
    {
      question: "Do you support business and corporate tax filings?",
      answer: "Yes, our ERO Growth and Service Bureau tiers support comprehensive business filings, including Form 1120 (Corporations), Form 1120-S (S-Corporations), Form 1065 (Partnerships), Form 990 (Non-Profits), and Form 706/709 (Estates/Trusts), alongside all state forms."
    },
    {
      question: "How do refund bank products and advances work?",
      answer: "We are integrated with the industry's leading bank product processors (like TPG, Republic Bank, and Refund Advantage). During filing, you can offer clients options to deduct prep fees directly from their refund, or request refund advances of up to $6,000, which pays out within hours of IRS acknowledgement."
    },
    {
      question: "Can I customize software fees under my own brand?",
      answer: "Absolutely. Under our Service Bureau Enterprise program, you can white-label the software dashboard under your own company name and logo, set custom service fee defaults, and configure automatic document prep fee splits for your remote agents."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#120b06] min-h-screen py-16 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-lg bg-amber-955/35 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#fda85d]">
            Professional Tax Software for Tax Preparers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Cloud-Based Tax Software Built for Profitability
          </h1>
          <p className="text-sm text-stone-400 leading-relaxed">
            Access robust, reliable, and compliant tax software. File federal and state returns quickly, offer bank products directly, and grow a tax business with zero limits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => openModal("demo")}
              className="bg-[#fda85d] text-black hover:bg-[#c29e2f] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              See the Software in Action
            </button>
            <button
              onClick={() => openModal("demo")}
              className="bg-[#18100a] text-stone-300 hover:text-white border border-amber-900/30 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Request Free Live Demo
            </button>
          </div>
        </div>

        {/* Walkthrough Carousel Section */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">Product Walkthrough</h2>
            <p className="text-xs text-stone-500 mt-1">Review the core workspaces and integrations within the cloud filing platform.</p>
          </div>
          <SoftwareCarousel />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gsap-reveal glass-card p-6 space-y-4">
            <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#fda85d]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Full IRS Compliance &amp; Review</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Never worry about compliance audits. Our software includes auto-diagnostics that scan returns for missing disclosures, invalid entries, and IRS red flags prior to filing.
            </p>
          </div>

          <div className="gsap-reveal glass-card-hover-emerald p-6 space-y-4 border border-emerald-950 bg-[#160f0a]/30 rounded-xl">
            <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#fda85d]">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Integrated Bank Products</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Enroll in top refund bank partners. Offer refund advances to clients and deduct tax preparation fees directly from refunds, making client payments seamless.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-4">
            <div className="h-9 w-9 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#fda85d]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Unlimited Multi-User Console</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Add junior preparers or establish remote offices easily. Our multi-site console keeps files isolated, tracking individual filing volumes and performance metrics.
            </p>
          </div>
        </div>

        {/* Pricing / Packages */}
        <div>
          <div className="gsap-reveal text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Choose Your Software Setup</h2>
            <p className="text-xs text-stone-500 mt-2">
              Whether you are an independent preparer or scaling a multi-site enterprise, we have a custom software package for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`gsap-reveal flex flex-col justify-between bg-[#1d140e]/30 border border-amber-900/20 rounded-xl p-8 relative ${
                  pkg.isPopular ? "border-[#fda85d]/35 shadow-xl shadow-[#fda85d]/5 bg-[#221811]/45" : ""
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fda85d] text-black font-extrabold text-[9px] tracking-widest px-3 py-1 rounded uppercase">
                    E-file Standard
                  </span>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{pkg.name}</h3>
                    <p className="text-xs text-stone-500 mt-2">{pkg.desc}</p>
                  </div>

                  <div className="text-xl font-black text-[#fda85d] font-mono">
                    {pkg.priceText}
                  </div>

                  <hr className="border-amber-950/20" />

                  <ul className="space-y-3.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2.5 text-xs text-stone-400">
                        <Check className="w-3.5 h-3.5 text-[#fda85d] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={pkg.action}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-extrabold transition-all cursor-pointer uppercase tracking-wider ${
                      pkg.isPopular 
                        ? "bg-gradient-to-r from-[#fda85d] to-[#f59e0b] text-black hover:from-[#c29e2f] hover:to-[#e08d03]"
                        : "bg-[#18100a] hover:bg-amber-950 border border-amber-900/30 text-[#fda85d]"
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={softwareFaqs} title="Professional Tax Software FAQs" />
        </div>

        {/* Community Banner */}
        <div className="gsap-reveal glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded">
              Tax Software Community
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Join More Than Just a Software Company</h3>
            <p className="text-xs text-stone-450 leading-relaxed">
              When you purchase professional tax software through The Sector of Collectives, you gain access to our live coworking community, Tech Tuesday workshops, and year-round business advice resources.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => openModal("software")}
              className="bg-gradient-to-r from-[#fda85d] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
