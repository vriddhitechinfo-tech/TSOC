"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, ArrowRight, Activity, Download, Mail, User, Phone, CheckCircle, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function ServiceBureauGrowthPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftMenuRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const officesValRef = useRef<HTMLSpanElement>(null);
  const revenueValRef = useRef<HTMLSpanElement>(null);
  const preparersValRef = useRef<HTMLSpanElement>(null);

  // Lead magnet state
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track active scroll phase
  const [activeScrollPhase, setActiveScrollPhase] = useState(0);

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

      // Pinned side-by-side scrolling logic
      if (containerRef.current && leftMenuRef.current) {
        // Pin left menu during scroll of container
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom 90%",
          pin: leftMenuRef.current,
          pinSpacing: false,
          scrub: true,
        });

        // Track active section as right blocks pass viewport middle
        const sections = containerRef.current.querySelectorAll(".phase-scroll-block");
        sections.forEach((sec, idx) => {
          ScrollTrigger.create({
            trigger: sec,
            start: "top 45%",
            end: "bottom 45%",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveScrollPhase(idx);
              }
            },
          });
        });
      }
    });

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

  const sbFaqs = [
    {
      question: "What exactly is a Tax Service Bureau?",
      answer: "A Service Bureau packages and sub-licenses professional tax software to other independent preparers. Instead of just filing client returns, you build a network of preparers or sub-offices, support their compliance, and earn residual revenue on every return they file."
    },
    {
      question: "How much volume do I need to start a Service Bureau?",
      answer: "We recommend that offices prepare at least 150-200 returns annually under their own EFIN before launching a Service Bureau. This ensures your office has the operational experience, software understanding, and support infrastructure needed to support other preparers."
    },
    {
      question: "What software branding options do you offer?",
      answer: "Under our Expansion Access program, you can custom-brand the cloud tax software interface. Your preparers will log into a portal branded with your logo, company name, custom default fees, and support links."
    },
    {
      question: "How long does the mentorship support last?",
      answer: "Mentorship is a year-round relationship. We provide standard structural auditing during Q2 and Q3, setup systems and recruitment pipelines in Q4, and offer active operational support and audit mitigation checks during the Q1 tax filing season."
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

  const scrollToPhaseBlock = (index: number) => {
    const targetBlock = document.getElementById(`phase-block-${index}`);
    if (targetBlock) {
      targetBlock.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#140A06] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            Service Bureau Mentorship &amp; Scale
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Start a Tax Service Bureau. Scale Beyond Preparing.
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            Ready to expand beyond individual client filings? The Service Bureau model lets you license professional tax software, train other preparers, and build scaling recurring revenue streams.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("bureau")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Apply for Service Bureau Mentorship
            </button>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#1C0F0A]/80 to-[#1C0F0A] border border-[#FFB26A]/30 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
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
              Tax professionals who transitioned to Service Bureau models and built sustainable, scaling revenue streams.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* Pinned Scroll-Scrub Phase Section */}
        <div className="relative pt-6">
          <div className="gsap-reveal text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Our 4-Phase Growth Blueprint</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">Scroll down to trace each phase of our mentorship deliverables.</p>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative pb-16">
            {/* Left Column - Pinned Menu (Desktop only) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start space-y-3" ref={leftMenuRef}>
              <div className="bg-[#2A160E]/80 border border-[#FFB26A]/30 rounded-xl p-4 space-y-2">
                <span className="text-xs font-bold text-[#EDE9E0]/50 uppercase tracking-widest block mb-2">Phase Navigator</span>
                {phases.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => scrollToPhaseBlock(idx)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition-all duration-200 cursor-pointer flex items-center justify-between focus:outline-none ${
                      activeScrollPhase === idx
                        ? "bg-[#FFB26A]/10 border-[#FFB26A]/40 text-[#FFB26A] font-bold"
                        : "bg-transparent border-transparent text-[#EDE9E0]/50 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`h-6 w-6 rounded flex items-center justify-center text-xs font-bold border ${
                        activeScrollPhase === idx ? "bg-[#2A160E] border-[#FFB26A]/40 text-[#FFB26A]" : "bg-[#140A06] border-[#FFB26A]/30 text-[#EDE9E0]/40"
                      }`}>
                        {idx + 1}
                      </span>
                      <span>{p.title}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeScrollPhase === idx ? "translate-x-0.5 text-[#FFB26A]" : "text-transparent"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Scrollable Content Blocks */}
            <div className="lg:col-span-8 space-y-12">
              {phases.map((p, idx) => (
                <TiltCard
                  key={p.num}
                  id={`phase-block-${idx}`}
                  tilt={4}
                  className="phase-scroll-block glass-card p-6 md:p-8 space-y-4 border border-[#FFB26A]/20 scroll-mt-24 transition-opacity duration-300"
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
        </div>


        {/* Candidate Fit Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="gsap-reveal space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EDE9E0]/50 block">
              Is This Mentorship Right For You?
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
              Who We Work With
            </h2>
            <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
              Transitioning to a Service Bureau requires administrative maturity, solid tax experience, and leadership. We screen applicants to ensure our resources align with offices ready to scale.
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
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Apply for Mentorship</h3>
            <p className="text-xs text-[#EDE9E0]/50 max-w-sm mx-auto leading-relaxed">
              We accept a limited number of offices into our Service Bureau Growth Program each quarter. Secure an audit to verify if your systems are scaling-ready.
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
