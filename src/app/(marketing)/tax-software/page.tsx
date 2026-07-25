"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, ShieldCheck, DollarSign, Users, Sparkles, Star, Zap, Crown, ArrowRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SoftwareCarousel from "@/components/SoftwareCarousel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TiltCard from "@/components/motion/TiltCard";
import VideoMeshBackground from "@/components/VideoMeshBackground";
import { TAX_SOFTWARE_LOGIN_LINK, TALK_TO_TEAM_CALENDAR_LINK, SOFTWARE_RENEWAL_LINK } from "@/lib/constants";

export default function TaxSoftwarePage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const usersValRef = useRef<HTMLSpanElement>(null);
  const returnsValRef = useRef<HTMLSpanElement>(null);
  const upTimeValRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Stats Counter Animation
      if (statsContainerRef.current) {
        const statsData = { users: 0, returns: 0, uptime: 0 };
        gsap.to(statsData, {
          users: 200,
          returns: 25,
          uptime: 99.9,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (usersValRef.current) {
              usersValRef.current.innerText = `${Math.floor(statsData.users)}+`;
            }
            if (returnsValRef.current) {
              returnsValRef.current.innerText = `${Math.floor(statsData.returns)}K+`;
            }
            if (upTimeValRef.current) {
              upTimeValRef.current.innerText = `${statsData.uptime.toFixed(1)}%`;
            }
          },
        });
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
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const packages = [
    {
      name: "Tax Pro",
      desc: "Perfect for independent tax preparers getting started with professional filing tools.",
      priceText: "Flexible Pricing",
      features: [
        "1040, Schedule C, & All State Forms",
        "Cloud-based software access",
        "E-file capabilities & tracking",
        "Software walkthrough guides",
        "Email & chat support",
        "Community access",
      ],
      ctaText: "See the Software in Action",
      action: () => openModal("demo"),
    },
    {
      name: "ERO Office",
      desc: "Ideal for established or growing EROs managing office locations and bank integrations.",
      priceText: "Maximizes Margins",
      isPopular: true,
      features: [
        "All Tax Pro features",
        "Corporate & Business filings (1120, 1065, etc.)",
        "Bank product enrollment support",
        "Multi-user office licensing",
        "Dedicated tech advisor support",
        "EFIN application review guidance",
      ],
      ctaText: "Request a Live Demo",
      action: () => openModal("strategy"),
    },
    {
      name: "Service Bureau Enterprise",
      desc: "For leaders licensing and supporting other tax professionals under their own brand.",
      priceText: "Custom Licensing",
      features: [
        "All ERO Office features",
        "White-label software branding options",
        "Sub-site EFIN management console",
        "Custom fee structure settings",
        "Service Bureau operations mentorship",
        "Priority 24/7 technical hotline",
      ],
      ctaText: "Contact Us",
      action: () => openModal("strategy"),
    },
  ];

  const softwareFaqs = [
    {
      question: "Is the software cloud-based?",
      answer: "Yes. You can access it from any browser — no downloads or installs needed. File returns, track statuses, and manage clients from anywhere."
    },
    {
      question: "Do you support business tax filings?",
      answer: "Yes. Our ERO Office and Service Bureau tiers support corporate and business filings, including Forms 1120, 1120-S, 1065, 990, and more, along with all state forms."
    },
    {
      question: "How do bank products work?",
      answer: "We work with leading bank partners (TPG, Republic Bank, Refund Advantage). Clients can have prep fees deducted directly from their refund, or request refund advances paid out within hours of IRS acknowledgement."
    },
    {
      question: "Can I white-label the software?",
      answer: "Yes. Under our Service Bureau Enterprise plan, you can brand the dashboard under your own company name and logo, set custom fee defaults, and manage your remote agents."
    }
  ];

  return (
    <div
      ref={pageRef}
      className="relative overflow-hidden bg-[#0A0908] min-h-screen"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.10)_0%,transparent_60%)] pointer-events-none -z-10" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      {/* Hero Section with Left/Right Split */}
      <section className="relative pt-6 pb-20 lg:py-20 overflow-hidden">
        <VideoMeshBackground className="opacity-15" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10 h-auto lg:h-[520px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
            {/* Left: Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <span className="gsap-reveal inline-flex w-fit items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
                Professional Tax Software for Tax Preparers
              </span>
              <h1 className="gsap-reveal text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black tracking-tight leading-tight text-white">
                Tax Software Built for Growth
              </h1>
              <p className="gsap-reveal text-sm text-[#EDE9E0]/55 leading-relaxed line-clamp-3">
                Access reliable, and compliant tax software. File federal and
                state returns quickly, offer bank products directly, and grow a
                tax business with zero limits.
              </p>
              <div className="gsap-reveal flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={TAX_SOFTWARE_LOGIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md text-center flex items-center justify-center"
                >
                  See the Software in Action
                </a>
                <button
                  onClick={() => openModal("demo")}
                  className="bg-[#161412] text-[#EDE9E0]/70 hover:text-white border border-[#FFB26A]/20 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all text-center cursor-pointer flex items-center justify-center"
                >
                  Request a Live Demo
                </button>
                <a
                  href={TAX_SOFTWARE_LOGIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161412] text-[#FFB26A] hover:text-white border border-[#FFB26A]/30 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all text-center"
                >
                  Software Login
                </a>
              </div>
            </div>

            {/* Right: Dashboard Image with Floating Animation */}
            <div
              className="relative h-full rounded-2xl overflow-hidden border border-[#FFB26A]/20 shadow-2xl shadow-black/60"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0F0D0C] border-b border-[#FFB26A]/15 flex items-center px-4 gap-1.5 z-10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/20" />
                <span className="text-[10px] font-mono text-[#EDE9E0]/30 ml-2">
                  tsoc-software-dashboard.v16
                </span>
              </div>
              <div className="pt-8 h-full">
                <SoftwareCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#161412]/60 to-[#0F0D0C] border border-[#FFB26A]/15 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={usersValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Tax Pros
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Tax preparers and EROs filing returns on our platform
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={returnsValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0K+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Returns Filed
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Federal and state returns processed through our platform
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={upTimeValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0%
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Uptime Guarantee
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Reliable cloud access when you need it most
              </p>
            </div>
          </div>
        </div>

        {/* Walkthrough Carousel Section */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">
              Product Walkthrough
            </h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-1">
              Review core workspaces and platform features in real time.
            </p>
          </div>
          <SoftwareCarousel />
        </div>

        {/* Software Video Library */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">
              Watch the Software in Action
            </h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-1">
              Full video walkthroughs covering every workspace and filing
              workflow.
            </p>
          </div>
          <div className="glass-card p-2 sm:p-3 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#FFB26A]/15">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/p75X7wEiFrY"
                title="The Sector of Collectives — Tax Software Video Library"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid — Icon & Title Only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard
            delay={0}
            className="glass-card-hover p-6 border border-[#FFB26A]/15 bg-[#161412]/20 rounded-xl flex items-center space-x-4"
          >
            <div className="h-10 w-10 shrink-0 rounded-md bg-[#0F0D0C] border border-[#FFB26A]/20 flex items-center justify-center text-[#FFB26A]">
              <ShieldCheck className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Full IRS Compliance &amp; Review
            </h3>
          </TiltCard>

          <TiltCard
            delay={0.1}
            className="glass-card-hover p-6 border border-[#FFB26A]/15 bg-[#161412]/20 rounded-xl space-y-3"
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 shrink-0 rounded-md bg-[#0F0D0C] border border-[#FFB26A]/20 flex items-center justify-center text-green-400">
                <DollarSign className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Bank Product Integration
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["TPG", "Republic Bank", "Refund Advantage"].map((bank) => (
                <span
                  key={bank}
                  className="bg-[#161412]/80 border border-[#FFB26A]/20 text-[10px] font-extrabold text-[#FFB26A] px-2 py-0.5 rounded tracking-wider uppercase"
                >
                  {bank}
                </span>
              ))}
            </div>
          </TiltCard>

          <TiltCard
            delay={0.2}
            className="glass-card-hover p-6 border border-[#FFB26A]/15 bg-[#161412]/20 rounded-xl flex items-center space-x-4"
          >
            <div className="h-10 w-10 shrink-0 rounded-md bg-[#0F0D0C] border border-[#FFB26A]/20 flex items-center justify-center text-green-400">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Form Uploads
            </h3>
          </TiltCard>
        </div>

        {/* Pricing / Packages */}
        <div className="space-y-16">
          <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              Membership &amp; Pricing Plans
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Transparent Membership Built For Scale
            </h2>
            <p className="text-xs text-[#EDE9E0]/50 max-w-2xl mx-auto leading-relaxed">
              Pick the membership tier designed for your business stage — from independent Tax Pros to multi-office Service Bureaus.
            </p>
          </div>

          {/* Quick Summary Table */}
          <div className="gsap-reveal max-w-4xl mx-auto bg-[#140A06]/80 border border-[#FFB26A]/20 rounded-xl p-4 sm:p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-xs font-extrabold text-[#FFB26A] uppercase tracking-widest mb-4 text-center">
              Membership Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Collaborate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: Tax Pros</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$97</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>

              <div className="bg-[#24130C] border border-[#FFB26A]/40 rounded-lg p-4 flex items-center justify-between shadow-md relative">
                <span className="absolute -top-2 right-3 bg-[#FFB26A] text-[#0A0908] font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                  Popular
                </span>
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Accelerate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: EROs</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$297</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>

              <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Dominate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: Service Bureaus</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$597</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Detailed Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* TIER 1: COLLABORATE */}
            <TiltCard
              tilt={4}
              delay={0}
              className="flex flex-col justify-between bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-2xl p-6 sm:p-8 relative space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                    TIER ONE
                  </span>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/50 uppercase tracking-wider">
                    For Tax Pros
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    COLLABORATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$97</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/10 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">Perfect For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    New Tax Professionals, Existing Preparers, Virtual Assistants, Bookkeepers &amp; Professionals learning the business.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/5 border border-[#FFB26A]/20 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/70 mb-0.5">Focus</span>
                  Learn. Implement. Build confidence.
                </div>

                <hr className="border-[#FFB26A]/10" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Includes:</p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Weekly Open Office", desc: "Unlimited coworking sessions" },
                      { title: "Tech Tuesday", desc: "Technology Training, Automation, CRM, AI, Marketing" },
                      { title: "Live Q&A", desc: "Ask questions in real time" },
                      { title: "Accountability", desc: "Body doubling, Implementation hours, Goal tracking" },
                      { title: "Resource Library", desc: "Templates, Checklists, Downloads, Worksheets" },
                      { title: "Community", desc: "Networking, Partner introductions, Referral opportunities" },
                      { title: "Member Pricing", desc: "Discounted workshops, Courses, Events, Software support" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/70">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/60">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Learn tax faster</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Stop getting stuck</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Meet peers &amp; mentors</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build confidence</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Create your first systems</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("software")}
                  className="w-full py-3 px-4 rounded-lg text-xs font-extrabold bg-[#1C0F0A] hover:bg-[#28160E] border border-[#FFB26A]/30 text-[#FFB26A] hover:text-white transition-all cursor-pointer uppercase tracking-wider shadow-md"
                >
                  Join Collaborate — $97/mo
                </button>
              </div>
            </TiltCard>

            {/* TIER 2: ACCELERATE (MOST POPULAR) */}
            <TiltCard
              tilt={4}
              delay={0.1}
              className="flex flex-col justify-between bg-[#24130C]/95 border-2 border-[#FFB26A] rounded-2xl p-6 sm:p-8 relative space-y-6 shadow-2xl shadow-[#FFB26A]/10 scale-[1.02]"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB26A] to-[#F4845F] text-[#0A0908] font-black text-xs tracking-widest px-4 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>

              <div className="space-y-5">
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A0908] bg-[#FFB26A] px-2.5 py-1 rounded font-mono">
                    TIER TWO
                  </span>
                  <span className="text-[10px] font-bold text-[#FFB26A] uppercase tracking-wider">
                    For EROs &amp; Growing Firms
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    ACCELERATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$297</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/20 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    EROs, Growing Firms, Firm Owners &amp; Professionals managing team members.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/10 border border-[#FFB26A]/30 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/80 mb-0.5">Focus</span>
                  Build a real business. Increase revenue. Scale confidently.
                </div>

                <hr className="border-[#FFB26A]/20" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#FFB26A] uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Everything in Collaborate PLUS:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Monthly Strategy Session", desc: "Growth planning, Quarterly planning, Revenue planning" },
                      { title: "ERO Roundtables", desc: "Compliance, Operations, Bank Products, IRS Updates, Industry changes" },
                      { title: "Concierge Support", desc: "Priority Office Hours, Questions answered faster, Implementation assistance" },
                      { title: "CRM Support", desc: "GoHighLevel, Automation, Funnels, Pipelines, Forms" },
                      { title: "Client Experience Systems", desc: "Onboarding, Retention, Review systems, Referral systems" },
                      { title: "AI Business Systems", desc: "Prompt Library, AI Assistants, Workflow Automations" },
                      { title: "Revenue Growth Workshops", desc: "New services, Pricing, Packaging, Recurring Revenue" },
                      { title: "Member Marketplace", desc: "Promote your services, Find collaborators, Referral opportunities" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/85">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/30 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/70">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build a real business</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Increase revenue &amp; margins</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Improve client operations</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Scale team confidently</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("ero")}
                  className="w-full py-3.5 px-4 rounded-lg text-xs font-black bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#0A0908] transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FFB26A]/20"
                >
                  Get Accelerate — $297/mo
                </button>
              </div>
            </TiltCard>

            {/* TIER 3: DOMINATE */}
            <TiltCard
              tilt={4}
              delay={0.2}
              className="flex flex-col justify-between bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-2xl p-6 sm:p-8 relative space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                    TIER THREE
                  </span>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/50 uppercase tracking-wider">
                    Service Bureaus
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    DOMINATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$597</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/10 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">Designed For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    Service Bureaus, Multi-office Firms, Firm Owners &amp; Industry Leaders.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/5 border border-[#FFB26A]/20 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/70 mb-0.5">Focus</span>
                  Build a self-sustaining firm. Create recurring revenue. Scale multiple locations.
                </div>

                <hr className="border-[#FFB26A]/10" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#FFB26A] uppercase tracking-wider flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" /> Everything in Accelerate PLUS:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Monthly Executive Advisory", desc: "Leadership calls, Scaling, Hiring, Growth planning" },
                      { title: "Service Bureau Leadership", desc: "Recruiting, Retention, Office growth, Expansion" },
                      { title: "Team Training", desc: "Invite staff, Tax Pros, EROs, Managers, Virtual Assistants (Everyone trains together)" },
                      { title: "Business Audits", desc: "Marketing, Systems, Operations, Sales, Client Journey, Automation" },
                      { title: "Partner Introductions", desc: "Preferred Vendors, Technology Partners, Funding, Bookkeeping, Legal, Insurance, Marketing" },
                      { title: "Priority Concierge", desc: "Fastest response times, Dedicated implementation guidance, Resource coordination" },
                      { title: "Early Access", desc: "Beta trainings, Templates, Programs, Pilot opportunities" },
                      { title: "Private Leadership Community", desc: "Mastermind, CEO discussions, Collaboration, Joint Ventures" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/70">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/60">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build a self-sustaining firm</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Create recurring revenue</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Grow &amp; train your entire team</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Scale multiple office locations</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Become a regional market leader</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("bureau")}
                  className="w-full py-3 px-4 rounded-lg text-xs font-extrabold bg-[#1C0F0A] hover:bg-[#28160E] border border-[#FFB26A]/30 text-[#FFB26A] hover:text-white transition-all cursor-pointer uppercase tracking-wider shadow-md"
                >
                  Apply for Dominate — $597/mo
                </button>
              </div>
            </TiltCard>
          </div>

          {/* Specialized Benefits by Audience Section */}
          <div className="gsap-reveal space-y-8 pt-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
                Tailored Growth Pathways
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Specialized Benefits by Audience
              </h3>
              <p className="text-xs text-[#EDE9E0]/45">
                Every tier is meticulously structured to solve the unique challenges of your specific role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Audience 1: Tax Professionals */}
              <div className="bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/15">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">Tax Professionals</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Collaborate ($97/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/40 uppercase bg-[#1C0F0A] px-2 py-1 rounded border border-[#FFB26A]/10">
                    Tier 1
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Weekly tax education",
                    "Tax law updates",
                    "Open Office coworking",
                    "Tech Tuesday workshops",
                    "Resource library",
                    "Accountability sessions",
                    "Community networking",
                    "Member discounts",
                    "Referral opportunities",
                    "Pathway to becoming an ERO",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/75">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audience 2: EROs */}
              <div className="bg-[#24130C]/90 border border-[#FFB26A]/35 rounded-xl p-6 space-y-4 shadow-lg shadow-[#FFB26A]/5">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/25">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">EROs &amp; Firm Owners</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Accelerate ($297/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#0A0908] uppercase bg-[#FFB26A] px-2 py-1 rounded font-extrabold">
                    Tier 2
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#FFB26A]/90 italic">Everything above plus:</p>
                <ul className="space-y-2">
                  {[
                    "ERO implementation support",
                    "EFIN operational guidance",
                    "IRS operations best practices",
                    "CRM and automation systems",
                    "Pricing strategy",
                    "Client onboarding systems",
                    "Bank product guidance",
                    "Marketing systems",
                    "Referral systems",
                    "Monthly strategy sessions",
                    "Priority concierge support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/85">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audience 3: Service Bureaus */}
              <div className="bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/15">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">Service Bureaus</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Dominate ($597/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/40 uppercase bg-[#1C0F0A] px-2 py-1 rounded border border-[#FFB26A]/10">
                    Tier 3
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#FFB26A]/90 italic">Everything above plus:</p>
                <ul className="space-y-2">
                  {[
                    "Multi-office growth strategy",
                    "Recruiting systems",
                    "Office onboarding SOPs",
                    "Team leadership training",
                    "Service Bureau operations",
                    "Performance dashboards",
                    "Scaling systems",
                    "Executive advisory",
                    "Leadership mastermind",
                    "Preferred partner access",
                    "Team-wide Open Office access",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/75">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              User Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Tax Pros Trusting Our Platform
            </h2>
            <p className="text-xs text-[#EDE9E0]/35">
              Real stories from Tax Pros who rely on our software to file with
              confidence and scale their businesses.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={softwareFaqs} title="FAQs" />
        </div>

        {/* Community Banner — Software Includes Ecosystem */}
        <TiltCard
          tilt={3}
          className="glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded">
              Tax Software + Community Access
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">
              More Than Software — You&apos;re Joining an Ecosystem
            </h3>
            <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
              When you get our software, you gain full access to The Open Office
              — daily live co-working sessions, Tech Tuesday training, Business
              Support, and year-round education.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {[
                "The Open Office Access",
                "Live Coworking",
                "Tech Tuesday Workshops",
                "Business Support",
                "Year-Round Education",
                "Attorney Q&As",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-[#EDE9E0]/70 font-semibold"
                >
                  <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => openModal("software")}
              className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Get Started Now
            </button>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
