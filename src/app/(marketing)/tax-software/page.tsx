"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { Check, ShieldCheck, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SoftwareCarousel from "@/components/SoftwareCarousel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TiltCard from "@/components/motion/TiltCard";
import VideoMeshBackground from "@/components/VideoMeshBackground";

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
          users: 500,
          returns: 50,
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
    <div ref={pageRef} className="relative overflow-hidden bg-[#050A14] min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,74,0.07)_0%,transparent_60%)] pointer-events-none -z-10" />

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
              <span className="gsap-reveal inline-flex w-fit items-center rounded-full bg-[#FFD94A]/10 border border-[#FFD94A]/20 px-3 py-1 text-xs font-semibold text-[#FFD94A]">
                Professional Tax Software for Tax Preparers
              </span>
              <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-snug text-white">
                Cloud-Based Tax Software Built for Profitability
              </h1>
              <p className="gsap-reveal text-sm text-[#EDE9E0]/55 leading-relaxed line-clamp-3">
                Access robust, reliable, and compliant tax software. File federal and state returns quickly, offer bank products directly, and grow a tax business with zero limits.
              </p>
              <div className="gsap-reveal flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => openModal("demo")}
                  className="bg-[#FFD94A] hover:bg-[#FFAA2A] text-[#050A14] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  See the Software in Action
                </button>
                <button
                  onClick={() => openModal("demo")}
                  className="bg-[#1C2A47] text-[#EDE9E0]/70 hover:text-white border border-[#FFD94A]/20 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Request Free Live Demo
                </button>
              </div>
            </div>

            {/* Right: Dashboard Image with Floating Animation */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-[#FFD94A]/20 shadow-2xl shadow-black/60" style={{animation: 'float 6s ease-in-out infinite'}}>
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0d1526] border-b border-[#FFD94A]/15 flex items-center px-4 gap-1.5 z-10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD94A]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD94A]/65" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD94A]/90" />
                <span className="ml-4 text-xs text-[#EDE9E0]/30 font-mono">Pro Tax Software — Dashboard</span>
              </div>
              <Image
                src="/tax_software_dashboard.png"
                alt="Professional tax software dashboard showing client management, filing status, and return analytics"
                width={1440}
                height={810}
                className="w-full h-full object-cover mt-8"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#1C2A47]/60 to-[#0d1526] border border-[#FFD94A]/15 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={usersValRef}
                className="text-4xl md:text-5xl font-black text-[#FFD94A] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Professional Users
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Tax preparers and EROs filing returns on our platform
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={returnsValRef}
                className="text-4xl md:text-5xl font-black text-[#FFD94A] font-mono block"
              >
                0K+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Returns Filed Annually
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Federal and state returns processed through our cloud platform
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={upTimeValRef}
                className="text-4xl md:text-5xl font-black text-[#FFD94A] font-mono block"
              >
                0%
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Uptime Guarantee
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Enterprise-grade reliability for mission-critical filing season
              </p>
            </div>
          </div>
        </div>

        {/* Walkthrough Carousel Section */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">Product Walkthrough</h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-1">Review the core workspaces and integrations within the cloud filing platform.</p>
          </div>
          <SoftwareCarousel />
        </div>

        {/* Software Video Library — full playlist walkthrough */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wider">Watch the Software in Action</h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-1">Full video walkthroughs covering every workspace, integration, and filing workflow — browse the playlist below.</p>
          </div>
          <div className="glass-card p-2 sm:p-3 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#FFD94A]/15">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=PLvdGo5rAYt9iPbTwaMWjXnfGmJfPaAzi6"
                title="The Sector of Collectives — Tax Software Video Library"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard className="glass-card glass-card-hover p-6 space-y-4">
            <div className="h-9 w-9 rounded-md bg-[#0d1526] border border-[#FFD94A]/15 flex items-center justify-center text-[#FFD94A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Full IRS Compliance &amp; Review</h3>
            <p className="text-xs text-[#EDE9E0]/55 leading-relaxed">
              Never worry about compliance audits. Our software includes auto-diagnostics that scan returns for missing disclosures, invalid entries, and IRS red flags prior to filing.
            </p>
          </TiltCard>

          <TiltCard delay={0.1} className="glass-card-hover p-6 space-y-4 border border-[#FFD94A]/15 bg-[#1C2A47]/20 rounded-xl">
            <div className="h-9 w-9 rounded-md bg-[#0d1526] border border-[#FFD94A]/15 flex items-center justify-center text-[#FFD94A]">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Integrated Bank Products</h3>
            <p className="text-xs text-[#EDE9E0]/55 leading-relaxed">
              Enroll in top refund bank partners. Offer refund advances to clients and deduct tax preparation fees directly from refunds, making client payments seamless.
            </p>
          </TiltCard>

          <TiltCard delay={0.2} className="glass-card glass-card-hover p-6 space-y-4">
            <div className="h-9 w-9 rounded-md bg-[#0d1526] border border-[#FFD94A]/15 flex items-center justify-center text-[#FFD94A]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Unlimited Multi-User Console</h3>
            <p className="text-xs text-[#EDE9E0]/55 leading-relaxed">
              Add junior preparers or establish remote offices easily. Our multi-site console keeps files isolated, tracking individual filing volumes and performance metrics.
            </p>
          </TiltCard>
        </div>

        {/* Pricing / Packages */}
        <div>
          <div className="gsap-reveal text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Choose Your Software Setup</h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-2">
              Whether you are an independent preparer or scaling a multi-site enterprise, we have a custom software package for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg, idx) => (
              <TiltCard
                key={pkg.name}
                tilt={5}
                delay={idx * 0.12}
                className={`flex flex-col justify-between bg-[#0d1526]/40 border border-[#FFD94A]/15 rounded-xl p-8 relative ${
                  pkg.isPopular ? "border-[#FFD94A]/35 shadow-xl shadow-[#FFD94A]/5 bg-[#1C2A47]/60" : ""
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] text-[#050A14] font-extrabold text-xs tracking-widest px-3 py-1 rounded uppercase">
                    E-file Standard
                  </span>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{pkg.name}</h3>
                    <p className="text-xs text-[#EDE9E0]/35 mt-2">{pkg.desc}</p>
                  </div>

                  <div className="text-xl font-black text-[#FFD94A] font-mono">
                    {pkg.priceText}
                  </div>

                  <hr className="border-[#FFD94A]/10" />

                  <ul className="space-y-3.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2.5 text-xs text-[#EDE9E0]/60">
                        <Check className="w-3.5 h-3.5 text-[#FFD94A] shrink-0 mt-0.5" />
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
                        ? "bg-[#FFD94A] hover:bg-[#FFAA2A] text-[#050A14] shadow-lg"
                        : "bg-[#1C2A47] hover:bg-[#243352] border border-[#FFD94A]/20 text-[#FFD94A]"
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD94A] bg-[#FFD94A]/10 border border-[#FFD94A]/20 px-3 py-1 rounded inline-block">
              User Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Tax Professionals Trusting Our Platform
            </h2>
            <p className="text-xs text-[#EDE9E0]/35">
              Real stories from preparers and EROs who rely on our software to file with confidence and scale their businesses.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={softwareFaqs} title="Professional Tax Software FAQs" />
        </div>

        {/* Community Banner */}
        <TiltCard tilt={3} className="glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFD94A] bg-[#FFD94A]/10 border border-[#FFD94A]/20 px-3 py-1 rounded">
              Tax Software Community
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Join More Than Just a Software Company</h3>
            <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
              When you purchase professional tax software through The Sector of Collectives, you gain access to our live coworking community, Tech Tuesday workshops, and year-round business advice resources.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => openModal("software")}
              className="bg-[#FFD94A] hover:bg-[#FFAA2A] text-[#050A14] font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Get Started Now
            </button>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

