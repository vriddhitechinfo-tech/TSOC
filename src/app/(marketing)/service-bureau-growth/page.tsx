"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, Activity, Download, Mail, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function ServiceBureauGrowthPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const officesValRef = useRef<HTMLSpanElement>(null);
  const revenueValRef = useRef<HTMLSpanElement>(null);
  const preparersValRef = useRef<HTMLSpanElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Stats Counter Animation
      if (statsContainerRef.current) {
        const statsData = { offices: 0, revenue: 0, preparers: 0 };
        gsap.to(statsData, {
          offices: 150,
          revenue: 500,
          preparers: 5000,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (officesValRef.current) {
              officesValRef.current.innerText = `${Math.floor(statsData.offices)}+`;
            }
            if (revenueValRef.current) {
              revenueValRef.current.innerText = `$${Math.floor(statsData.revenue).toLocaleString()}K`;
            }
            if (preparersValRef.current) {
              preparersValRef.current.innerText = `${Math.floor(statsData.preparers).toLocaleString()}+`;
            }
          },
        });
      }

      // General reveals
      if (pageRef.current) {
        gsap.fromTo(
          pageRef.current.querySelectorAll(".gsap-reveal"),
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
    });

    return () => {
      ctx.revert();
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
      desc: "Before you add remote agents, we audit your infrastructure so your office can absorb higher volume without compliance gaps.",
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

  const sbFaqs = [
    {
      question: "What exactly is a Tax Service Bureau?",
      answer: "A Service Bureau packages and sub-licenses professional tax software to other independent preparers. Instead of just filing returns, you build a network of preparers, support their offices, and earn residual revenue on every return filed."
    },
    {
      question: "How much volume do I need to start a Service Bureau?",
      answer: "We recommend preparing at least 150 returns annually under your own EFIN before launching a Service Bureau, ensuring you have the operational base to support sub-offices."
    },
    {
      question: "What software branding options do you offer?",
      answer: "Under our Expansion Access program, you can custom-brand the cloud tax software interface. Your preparers will log into a portal branded with your logo, company name, custom default fees, and support links."
    },
    {
      question: "How long does the mentorship support last?",
      answer: "Mentorship is year-round. We guide systems audit in Q2-Q3, recruitment in Q4, and active operational support during tax filing season."
    }
  ];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFormSubmitted(true);
      
      // Trigger dynamic file download of a mock PDF
      const link = document.createElement("a");
      link.href = "data:text/plain;charset=utf-8," + encodeURIComponent("The Sector of Collectives - Service Bureau Phase Audit Checklist");
      link.download = "tsoc-service-bureau-checklist.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#080808] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-5xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            Service Bureau Mentorship &amp; Scale
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Build &amp; Scale Your Tax Service Bureau
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed max-w-3xl mx-auto">
            Expand beyond individual filings. License professional tax software, train other preparers, and build recurring revenue.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("bureau")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Apply for Service Bureau Mentorship
            </button>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#0F0D0C]/80 to-[#0F0D0C] border border-[#FFB26A]/30 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={officesValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Sub-Offices Supported
              </span>
              <p className="text-xs text-[#EDE9E0]/50">
                Tax professionals managing networks through our platform
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={revenueValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                $0K
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Average Recurring Revenue
              </span>
              <p className="text-xs text-[#EDE9E0]/50">
                Additional annual income from sub-office licensing fees
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={preparersValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Preparers in Network
              </span>
              <p className="text-xs text-[#EDE9E0]/50">
                Professional tax preparers scaling through our model
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 rounded inline-block">
              Service Bureau Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Proven Growth Across Our Network
            </h2>
            <p className="text-xs text-[#EDE9E0]/50">
              Tax pros who moved to the Service Bureau model and built lasting recurring revenue.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* 4-Phase Growth Blueprint — centered single-column layout */}
        <div className="relative pt-6">
          <div className="gsap-reveal text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Our 4-Phase Growth Blueprint</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">Each phase and its deliverables.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {phases.map((p) => (
              <TiltCard
                key={p.num}
                tilt={4}
                className="glass-card p-6 md:p-8 space-y-4 border border-[#FFB26A]/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 rounded">
                    {p.num} Details
                  </span>
                  <span className="text-xs text-[#FFB26A] font-semibold uppercase tracking-wider">Growth Blueprint</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">{p.title}</h3>
                <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">{p.desc}</p>

                <div className="h-px bg-[#FFB26A]/20 my-4" />

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#EDE9E0]/70">Deliverables include:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/55">
                        <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Lead Magnet Download Section */}
        <div className="gsap-reveal bg-gradient-to-r from-[#141210] to-[#1A1714] border border-[#FFB26A]/30 rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
                <Download className="w-3.5 h-3.5" />
                <span>Resource</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Download Service Bureau Phase Audit Checklist
              </h2>
              <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                A checklist covering operational audits, software pricing, sub-office compliance, and preparer onboarding.
              </p>
            </div>
            <div className="lg:col-span-5">
              {isFormSubmitted ? (
                <div className="bg-[#FFB26A]/10 border border-[#FFB26A]/40 rounded-xl p-6 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-[#FFB26A] mx-auto" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Checklist Download Started!</h4>
                  <p className="text-xs text-[#EDE9E0]/60">Your audit checklist PDF has been generated. Check your browser downloads.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#EDE9E0]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email..."
                      className="w-full bg-[#0A0908] border border-[#FFB26A]/20 rounded-lg pl-10 pr-4 py-3 text-xs text-white placeholder-[#EDE9E0]/40 focus:outline-none focus:border-[#FFB26A] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-6 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Generating PDF..." : "Download Free Checklist"}</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Speak with an Advisor Strip */}
        <div className="gsap-reveal bg-[#FFB26A]/8 border border-[#FFB26A]/30 rounded-2xl py-8 px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-base font-black text-white uppercase tracking-wider">Ready to start your Service Bureau?</h3>
            <p className="text-xs text-[#EDE9E0]/60">Our team will walk you through every step. No pressure — just a conversation.</p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => openModal("bureau")}
              className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3 px-6 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Candidate Fit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="gsap-reveal space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EDE9E0]/50 block">
              IS THIS MENTORSHIP RIGHT FOR YOU?
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              WHO WE WORK WITH
            </h2>
            <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
              A Service Bureau takes admin maturity, solid tax experience, and leadership. We screen applicants so our resources go to offices ready to scale.
            </p>
            <ul className="space-y-3.5 text-xs text-[#EDE9E0]/60">
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#EDE9E0]/65 font-bold block uppercase tracking-wider text-xs mb-0.5">Established EROs</strong>
                  Tax business owners with active EFINs seeking to expand their reach.
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#EDE9E0]/65 font-bold block uppercase tracking-wider text-xs mb-0.5">Multi-preparer offices</strong>
                  Firms looking to deploy white-labeled software licenses and sub-office accounts.
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#EDE9E0]/65 font-bold block uppercase tracking-wider text-xs mb-0.5">Scaling networks</strong>
                  Professional EROs building remote agent pools or license models.
                </div>
              </li>
            </ul>
          </div>

          <TiltCard tilt={5} className="glass-card glass-card-hover p-8 text-center space-y-5">
            <Activity className="w-8 h-8 text-[#FFB26A] mx-auto" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Build My Network</h3>
            <p className="text-xs text-[#EDE9E0]/50 max-w-sm mx-auto leading-relaxed">
              We accept a limited number of offices each quarter. Book an audit to check whether your systems are scaling-ready.
            </p>
            <button
              onClick={() => openModal("bureau")}
              className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-8 rounded-lg text-xs transition-colors mt-2 cursor-pointer uppercase tracking-wider"
            >
              Start Mentorship Application
            </button>
          </TiltCard>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={sbFaqs} title="FAQs" />
        </div>
      </div>
    </div>
  );
}

