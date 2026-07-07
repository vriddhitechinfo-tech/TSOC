"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, ArrowRight, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServiceBureauGrowthPage() {
  const { openModal } = useModal();
  const [activePhase, setActivePhase] = useState(0);
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

  const phases = [
    {
      num: "Phase 1",
      title: "Business & Systems Audit",
      items: [
        "Operational review of current filing bottlenecks",
        "Volume & revenue model assessment",
        "Legacy software & technology evaluations",
        "Identification of high-margin growth opportunities",
      ],
      desc: "Before you add remote agents, we audit your baseline infrastructure to make sure your office is ready to absorb scaling volumes without compliance failure.",
    },
    {
      num: "Phase 2",
      title: "Offer & Revenue Development",
      items: [
        "White-label pricing & software fee configuration",
        "Revenue split & package structure design",
        "Year-round ancillary service offers",
        "Allied accounting partnership structures",
      ],
      desc: "We develop your Service Bureau offer. Learn how to structure pricing models that attract preparers while protecting your margins.",
    },
    {
      num: "Phase 3",
      title: "Implementation & Training",
      items: [
        "Tax Pro onboarding templates",
        "ERO support pathway configuration",
        "Junior staff onboarding & software walkthroughs",
        "Automated administrative workflow setup",
      ],
      desc: "Implement your onboarding engine. We provide ready-to-use document requests, training modules, and software management guides for your new network.",
    },
    {
      num: "Phase 4",
      title: "Scale & Expansion",
      items: [
        "Digital recruiting & marketing strategies",
        "Year-round revenue forecasting models",
        "Sub-site compliance audit parameters",
        "Community positioning & brand scaling",
      ],
      desc: "Scale your network. Learn how to run automated recruitment funnels, audit sub-site EFIN filings, and position your brand as a leading software provider.",
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
            Service Bureau Mentorship &amp; Scale
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Start a Tax Service Bureau. Scale Beyond Preparing.
          </h1>
          <p className="text-sm text-stone-400 leading-relaxed">
            Ready to expand beyond individual client filings? The Service Bureau model lets you license professional tax software, train other preparers, and build scaling recurring revenue streams.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("bureau")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Apply for Service Bureau Mentorship
            </button>
          </div>
        </div>

        {/* Phase Stepper Selection Component */}
        <div className="mb-24">
          <div className="gsap-reveal text-center mb-10">
            <h2 className="text-xl font-bold text-white">Our 4-Phase Growth Blueprint</h2>
            <p className="text-xs text-stone-500 mt-1">Select a phase below to review our mentorship deliverables.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Phase Selector Menu */}
            <div className="space-y-2">
              {phases.map((p, idx) => (
                <button
                  key={p.num}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    activePhase === idx
                      ? "bg-amber-950/45 border-amber-500/30 text-[#d4af37] font-semibold"
                      : "bg-[#18100a]/40 border-amber-900/30 text-stone-400 hover:bg-amber-950/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs">
                    <span className={`h-6 w-6 rounded flex items-center justify-center text-[10px] font-bold ${
                      activePhase === idx ? "bg-[#18100a] border border-amber-900/40 text-[#d4af37]" : "bg-amber-950/20 text-stone-500"
                    }`}>
                      {idx + 1}
                    </span>
                    <span>{p.title}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-stone-500" />
                </button>
              ))}
            </div>

            {/* Phase Detail Card */}
            <div className="gsap-reveal lg:col-span-2 glass-card p-6 md:p-8 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded">
                    {phases[activePhase].num} Details
                  </span>
                  <span className="text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider">Service Bureau Training Module</span>
                </div>

                <h3 className="text-lg font-bold text-white">{phases[activePhase].title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed">{phases[activePhase].desc}</p>
                
                <div className="h-px bg-amber-950/30 my-4" />

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-300">Deliverables include:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phases[activePhase].items.map((it) => (
                      <li key={it} className="flex items-start space-x-2 text-xs text-stone-450">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openModal("bureau")}
                  className="bg-[#18100a] hover:bg-amber-950 border border-amber-900/30 text-stone-300 hover:text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Request Phase Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="gsap-reveal space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Is This Mentorship Right For You?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ideal Service Bureau Candidates
            </h2>
            <p className="text-xs text-stone-400 leading-relaxed">
              Transitioning to a Service Bureau requires administrative maturity, solid tax experience, and leadership. We screen applicants to ensure our resources align with offices ready to scale.
            </p>
            <ul className="space-y-3.5 text-xs text-stone-400">
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-350 font-bold block uppercase tracking-wider text-[10px] mb-0.5">Established EROs</strong>
                  Tax business owners with active EFINs seeking to expand their reach.
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-350 font-bold block uppercase tracking-wider text-[10px] mb-0.5">Multi-preparer offices</strong>
                  Firms looking to deploy white-labeled software licenses and sub-office accounts.
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-350 font-bold block uppercase tracking-wider text-[10px] mb-0.5">Scaling networks</strong>
                  Professional EROs building remote agent pools or license models.
                </div>
              </li>
            </ul>
          </div>

          <div className="gsap-reveal glass-card p-8 text-center space-y-5">
            <Activity className="w-8 h-8 text-[#d4af37] mx-auto" />
            <h3 className="text-base font-bold text-white">Apply for Mentorship</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
              We accept a limited number of offices into our Service Bureau Growth Program each quarter. Secure an audit to verify if your systems are scaling-ready.
            </p>
            <button
              onClick={() => openModal("bureau")}
              className="bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-8 rounded-lg text-xs transition-colors mt-2 cursor-pointer uppercase tracking-wider"
            >
              Start Mentorship Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
