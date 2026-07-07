"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  Check, 
  ArrowRight, 
  Building2, 
  LineChart, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Fingerprint, 
  Briefcase, 
  CreditCard, 
  Megaphone,
  FileText
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const { openModal } = useModal();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const revenueRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register scroll trigger plugin on the client side
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 1. Hero Load Animations
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll(".gsap-hero-el");
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out", 
          stagger: 0.12 
        }
      );
    }

    // 2. About Scroll Animations
    if (aboutRef.current) {
      const parts = aboutRef.current.querySelectorAll(".gsap-about-el");
      gsap.fromTo(
        parts,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // 3. Services Scroll Animations
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".gsap-service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // 4. Revenue Scroll Animations
    if (revenueRef.current) {
      const cards = revenueRef.current.querySelectorAll(".gsap-revenue-card");
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: revenueRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // 5. Tech Scroll Animations
    if (techRef.current) {
      const el = techRef.current.querySelectorAll(".gsap-tech-el");
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // 6. Pricing Scroll Animations
    if (pricingRef.current) {
      const tiers = pricingRef.current.querySelectorAll(".gsap-tier-card");
      gsap.fromTo(
        tiers,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // Clean up scroll triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const services = [
    {
      title: "Tax Software Access",
      desc: "Launch your tax business with professional tax software designed for growth.",
      bestFor: ["New Tax Preparers", "Independent Tax Professionals", "Growing Tax Firms"],
      includes: [
        "Professional tax software access",
        "Bank product enrollment opportunities",
        "Training resources & walkthroughs",
        "Technical support",
        "Community access",
      ],
      ctaText: "Purchase Software",
      action: () => openModal("software"),
      link: "/tax-software",
    },
    {
      title: "ERO Enablement Program",
      desc: "Stop splitting fees and start taking greater control of your business by becoming an ERO.",
      bestFor: ["Experienced Preparers", "Tax Firm Leaders", "Aspiring Entrepreneurs"],
      includes: [
        "ERO application guidance",
        "IRS e-Services setup",
        "ID.me & fingerprinting support",
        "Compliance review",
        "Business structure recommendations",
        "Software implementation support",
      ],
      ctaText: "Schedule ERO Consultation",
      action: () => openModal("ero"),
      link: "/ero-enablement",
    },
    {
      title: "Service Bureau Growth Program",
      desc: "Build a tax business that supports, structures, and licenses other tax professionals.",
      bestFor: ["Established EROs", "Multi-preparer firms", "Growing tax offices"],
      includes: [
        "Phase 1: Business & Systems Audit",
        "Phase 2: Offer & Pricing Strategy",
        "Phase 3: Tax Pro Onboarding Systems",
        "Phase 4: Scale & Recruitment",
        "Team training & workflow setup",
        "Partnership planning",
      ],
      ctaText: "Apply for Mentorship",
      action: () => openModal("bureau"),
      link: "/service-bureau-growth",
    },
    {
      title: "Open Office Community",
      desc: "Where access meets opportunity. Live coworking and expert support throughout the year.",
      bestFor: ["All Tax Professionals", "Accounting Business Owners", "Freelance Bookkeepers"],
      includes: [
        "Live weekly office hours",
        "Direct software support",
        "Attorney Q&A sessions",
        "Bookkeeping guidance",
        "Business growth workshops",
        "Peer networking events",
      ],
      ctaText: "Join The Open Office",
      action: () => openModal("openoffice"),
      link: "/open-office",
    },
  ];

  const revenueOpportunities = [
    { name: "Business Formation Services", desc: "Help clients register LLCs, corporations, and DBAs.", icon: Building2 },
    { name: "Tax Planning & Advisory", desc: "High-ticket strategic consulting beyond annual filings.", icon: LineChart },
    { name: "Bookkeeping Partnerships", desc: "Build year-round retainer income stream.", icon: Calendar },
    { name: "Financial Literacy Programs", desc: "Educate your community and upsell courses.", icon: GraduationCap },
    { name: "Virtual Mailbox Services", desc: "Provide business address services for remote entities.", icon: Mail },
    { name: "Fingerprinting Services", desc: "Add local identity services to drive walk-in traffic.", icon: Fingerprint },
    { name: "Business Consulting", desc: "General operations advisory for local enterprises.", icon: Briefcase },
    { name: "Credit & Funding Partnerships", desc: "Guide clients through business funding applications.", icon: CreditCard },
    { name: "Referral Programs", desc: "Earn commission by connecting clients with allied professionals.", icon: Megaphone },
  ];

  return (
    <div className="relative overflow-hidden bg-[#120b06] min-h-screen">
      {/* Subtle modern golden background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.04)_0%,transparent_50%)] pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="gsap-hero-el inline-flex items-center rounded-lg bg-amber-950/30 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#d4af37] mb-6">
            The Sector Tax Software & Community
          </span>
          <h1 className="gsap-hero-el text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            Helping Tax Professionals Launch, Grow, and Scale Profitable Businesses
          </h1>
          <p className="gsap-hero-el text-sm md:text-base text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tax software is just the beginning. Whether you&apos;re a new tax preparer, an established ERO, or an aspiring Service Bureau owner, The Sector gives you the systems, mentorship, and community to conquer the industry.
          </p>

          {/* Quick Pillars Grid */}
          <div className="gsap-hero-el grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-left">
            {[
              "Tax Software Access",
              "ERO Enablement",
              "Service Bureau Growth",
              "Open Office Community",
              "Tax Business Coaching",
              "Technology & Automation",
            ].map((pillar) => (
              <div key={pillar} className="flex items-center space-x-2 text-xs text-stone-250">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-500/10 border border-amber-900/35 text-[#d4af37]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="font-semibold">{pillar}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="gsap-hero-el flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openModal("strategy")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black px-8 py-3.5 text-xs font-extrabold shadow-md hover:shadow-[#d4af37]/10 transition-all cursor-pointer uppercase tracking-wider"
            >
              Get Started Today
            </button>
            <button
              onClick={() => openModal("strategy")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1a100a] border border-amber-900/40 hover:border-amber-500/45 px-8 py-3.5 text-xs font-bold text-stone-300 hover:text-white transition-all cursor-pointer uppercase tracking-wider"
            >
              Book a Strategy Call
            </button>
            <Link
              href="/tax-software"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1a100a]/40 border border-amber-900/30 hover:bg-[#1a100a] px-8 py-3.5 text-xs font-semibold text-[#d4af37] hover:text-white transition-all"
            >
              View Software Packages
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section ref={aboutRef} className="py-20 border-t border-amber-950/20 bg-amber-955/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-about-el space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-600">
                More Than Tax Software
              </h2>
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                At The Sector, we believe tax professionals deserve more than tools.
              </p>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                Our collaborative community combines professional tax software, ERO Application setup, scaling strategies, and live access to experts who understand what it takes to succeed. Whether you&apos;re filing your first return or scaling a multi-location brand, we&apos;re committed to your independence.
              </p>
              <div className="pt-4 border-t border-amber-950/20 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Our Mission</h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  To create a collaborative community where tax professionals have access to the tools, education, relationships, and opportunities needed to grow sustainable businesses.
                </p>
              </div>
            </div>

            <div className="gsap-about-el relative bg-[#18100a] border border-amber-900/30 rounded-xl p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6">
              <FileText className="w-10 h-10 text-[#d4af37]/80" />
              <h3 className="text-xs font-bold tracking-wider text-stone-500 uppercase">Our Community Motto</h3>
              <div className="text-2xl sm:text-3xl font-black tracking-wider text-white select-none">
                <span className="text-[#d4af37]">Connect</span>
                <span className="text-amber-900/60 mx-2">•</span>
                <span className="text-amber-500">Create</span>
                <span className="text-amber-900/60 mx-2">•</span>
                <span className="text-white">Conquer</span>
              </div>
              <p className="text-stone-500 text-[10px] max-w-xs leading-relaxed">
                Connect with peers. Create scalable revenue models. Conquer the tax industry on your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section ref={servicesRef} className="py-20 border-t border-amber-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-550 mb-3">
              How We Support Tax Professionals
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tailored Pathways for Every Stage of Your Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div 
                key={service.title} 
                className="gsap-service-card flex flex-col justify-between glass-card glass-card-hover p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] bg-amber-950/30 border border-amber-900/40 px-2.5 py-0.5 rounded">
                      Program 0{idx + 1}
                    </span>
                    <Link href={service.link} className="text-[10px] font-bold text-stone-500 hover:text-[#d4af37] transition-colors flex items-center gap-1 uppercase tracking-wider">
                      Read Guide 
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">{service.desc}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Includes:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.includes.map((inc) => (
                        <li key={inc} className="flex items-start space-x-2 text-xs text-stone-400">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider mr-1.5">Best For:</span>
                    {service.bestFor.map((bf) => (
                      <span key={bf} className="bg-amber-950/30 border border-amber-900/30 text-[9px] font-semibold text-stone-400 px-2 py-0.5 rounded">
                        {bf}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={service.action}
                    className="w-full text-center bg-[#1a100a] hover:bg-amber-950 border border-amber-900/30 text-stone-300 hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    {service.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Revenue Expansion Services */}
      <section ref={revenueRef} className="py-20 border-t border-amber-950/20 bg-amber-955/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:sticky lg:top-24 space-y-6">
              <span className="inline-flex items-center rounded-lg bg-amber-950/30 border border-amber-900/40 px-2.5 py-1 text-xs font-semibold text-[#d4af37]">
                Revenue Expansion
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Build Income Beyond Tax Season
              </h2>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                Many tax professionals struggle during Q2, Q3, and Q4 once tax season ends. We help our community identify and setup additional services to increase client retention and drive consistent year-round revenue streams.
              </p>
              <button
                onClick={() => openModal("strategy")}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-6 text-xs transition-colors shadow-md hover:shadow-[#d4af37]/10 cursor-pointer uppercase tracking-wider"
              >
                Explore Revenue Opportunities
              </button>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {revenueOpportunities.map((op) => {
                const IconComponent = op.icon;
                return (
                  <div key={op.name} className="gsap-revenue-card glass-card glass-card-hover-emerald p-5">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-[#d4af37]">
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <h3 className="text-xs font-bold text-white">{op.name}</h3>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed">{op.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technology & Automation */}
      <section ref={techRef} className="py-20 border-t border-amber-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Simplify Your Business Operations
              </h2>
              <p className="gsap-tech-el text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Tax Business Automation &amp; CRM Setup
              </p>
              <p className="gsap-tech-el text-xs md:text-sm text-stone-400 leading-relaxed">
                Stop wasting hours on manual paperwork, endless client follow-ups, and calendar scheduling. Learn how to use technology to save time, improve client communication, and create bulletproof compliance systems.
              </p>
              
              <ul className="gsap-tech-el grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "CRM System Integration",
                  "Automated Client Follow-ups",
                  "Lead Generation Pipelines",
                  "Appointment Scheduling",
                  "Interactive Workflow Design",
                  "AI Integration Support",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-xs text-stone-350">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="gsap-tech-el pt-2">
                <Link
                  href="/technology-support"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-300 hover:text-[#d4af37] uppercase tracking-wider transition-colors"
                >
                  Learn About Automation 
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="gsap-tech-el relative border border-amber-900/30 bg-[#160f0a] rounded-xl p-6 md:p-8 overflow-hidden select-none">
              <span className="text-[10px] font-bold tracking-wider text-stone-500 uppercase block mb-6">Workflow Blueprint</span>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center space-x-4 bg-[#120b06] border border-amber-900/20 p-3.5 rounded-lg">
                  <div className="h-7 w-7 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37] font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Lead Capture Auto-sync</h4>
                    <p className="text-[10px] text-stone-500">Facebook &amp; Web leads auto-routed to ERO CRM</p>
                  </div>
                </div>
                {/* Line */}
                <div className="h-5 w-0.5 bg-amber-950/60 ml-7" />
                {/* Step 2 */}
                <div className="flex items-center space-x-4 bg-[#120b06] border border-amber-900/20 p-3.5 rounded-lg">
                  <div className="h-7 w-7 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37] font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Secure Intake Form &amp; Document Upload</h4>
                    <p className="text-[10px] text-stone-500">Encrypted portal request sent via auto-text &amp; email</p>
                  </div>
                </div>
                {/* Line */}
                <div className="h-5 w-0.5 bg-amber-950/60 ml-7" />
                {/* Step 3 */}
                <div className="flex items-center space-x-4 bg-[#120b06] border border-amber-900/20 p-3.5 rounded-lg">
                  <div className="h-7 w-7 rounded-md bg-[#18100a] border border-amber-900/30 flex items-center justify-center text-[#d4af37] font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Automated Prep Review Notification</h4>
                    <p className="text-[10px] text-stone-500">EFIN tax preparer notified, tax return prepped &amp; signed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Membership Options */}
      <section ref={pricingRef} className="py-20 border-t border-amber-955/10 bg-amber-955/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Membership Options
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Choose Your Level of Access
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="gsap-tier-card flex flex-col justify-between glass-card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Community Access</h3>
                  <p className="text-xs text-stone-500 mt-2">For professionals seeking foundational training, software, and networking.</p>
                </div>
                <div className="h-px bg-amber-900/20" />
                <ul className="space-y-3.5 text-xs text-stone-400">
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Professional tax software access</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Weekly open office live hours</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Basic software walkthrough guides</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Peer-to-peer networking community</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => openModal("strategy")}
                  className="w-full text-center bg-[#1a100a] hover:bg-amber-950 border border-amber-900/30 text-stone-300 hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Select Community
                </button>
              </div>
            </div>

            {/* Card 2 - Growth */}
            <div className="gsap-tier-card flex flex-col justify-between bg-[#24170f] border border-amber-500/35 relative rounded-xl p-8 shadow-xl shadow-amber-500/5">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded">
                Most Popular
              </span>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Growth Access</h3>
                  <p className="text-xs text-stone-300 mt-2">For tax professionals focused on expanding revenue streams and building automated operations.</p>
                </div>
                <div className="h-px bg-amber-900/30" />
                <ul className="space-y-3.5 text-xs text-stone-150">
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Everything in Community Access</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>ERO Enablement roadmap &amp; support</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Revenue expansion systems guides</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>CRM setup templates &amp; client automations</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Live Attorney Q&amp;A sessions</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => openModal("strategy")}
                  className="w-full text-center bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Select Growth
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gsap-tier-card flex flex-col justify-between glass-card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Expansion Access</h3>
                  <p className="text-xs text-stone-500 mt-2">For EROs and Service Bureau owners seeking advanced scale, white-label setup, and team scaling.</p>
                </div>
                <div className="h-px bg-amber-900/20" />
                <ul className="space-y-3.5 text-xs text-stone-400">
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Everything in Growth Access</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Service Bureau mentorship &amp; audit</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>White-label software deployment</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Team recruitment &amp; onboarding guides</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Direct 1-on-1 advisor strategy sessions</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => openModal("strategy")}
                  className="w-full text-center bg-[#1a100a] hover:bg-amber-950 border border-amber-900/30 text-stone-300 hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Select Expansion
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Tax Professionals Choose The Sector */}
      <section className="py-20 border-t border-amber-955/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                We Understand the Industry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Built by Tax Pros, for Tax Pros
              </h2>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                With over a decade of experience supporting independent preparers, EROs, and Service Bureau owners, we know the roadblocks you face. We focus on building systems that outlast tax season.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Revenue Growth Strategy",
                  "Compliance Education Guides",
                  "Modern Technology Tools",
                  "Weekly Community Support",
                  "Long-Term Sustainability",
                  "Business Development Mentor",
                ].map((pillar) => (
                  <div key={pillar} className="flex items-center space-x-2 text-xs text-stone-350">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#18100a] border border-amber-905/30 rounded-xl p-6 relative">
                <p className="text-xs md:text-sm italic text-stone-300 leading-relaxed">
                  &quot;Access to professional software was great, but the ERO coaching completely changed my trajectory. I went from splitting 30% of my fees to keeping 100% of my revenues and building my own office.&quot;
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="h-7 w-7 rounded-md bg-[#120b06] border border-amber-900/30 flex items-center justify-center text-[10px] font-bold text-stone-400">
                    TM
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white">Tasha M.</h4>
                    <p className="text-[9px] text-stone-550">ERO &amp; Firm Owner, Atlanta</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#18100a] border border-amber-905/30 rounded-xl p-6 relative">
                <p className="text-xs md:text-sm italic text-stone-300 leading-relaxed">
                  &quot;Running a Service Bureau felt overwhelming until I went through the Growth Program. Having step-by-step audit forms, compliance blueprints, and tech automations made all the difference.&quot;
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="h-7 w-7 rounded-md bg-[#120b06] border border-amber-900/30 flex items-center justify-center text-[10px] font-bold text-stone-400">
                    DC
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white">David C.</h4>
                    <p className="text-[9px] text-stone-550">Service Bureau Owner, Dallas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
