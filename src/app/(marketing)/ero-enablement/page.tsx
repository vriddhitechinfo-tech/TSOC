"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { DollarSign, Award, Sliders, Building, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";
import FeeCalculator from "@/components/FeeCalculator";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";

export default function EROEnablementPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Roadmap progress line draws itself as the timeline scrolls through view
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.75"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

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

    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const roadmapSteps = [
    {
      num: "01",
      title: "Business Structure & Setup",
      desc: "Incorporate your business correctly. We recommend LLC or S-Corp setups and help you align with IRS physical and digital security compliance standards.",
    },
    {
      num: "02",
      title: "Compliance Review",
      desc: "We audit your office setup — document storage, password policies, encrypted communications — to make sure you meet IRS Publication 4557 standards before applying.",
    },
    {
      num: "03",
      title: "EFIN Application & IRS e-Services",
      desc: "Set up your IRS e-Services account and submit your EFIN application. We guide you through every field to avoid delays and errors. Includes ID.me verification and fingerprinting support.",
    },
    {
      num: "04",
      title: "Software Setup",
      desc: "While your application is processing, we get your tax software configured, users set up, and bank product connections enrolled so you\'re ready to file the moment you\'re approved.",
    },
    {
      num: "05",
      title: "Activation & First Return",
      desc: "Link your approved EFIN to your software. Activate bank products, set user permissions for your team, and file your first return as an independent ERO.",
    },
  ];

  const eroFaqs = [
    {
      question: "What is an ERO?",
      answer: "An ERO (Electronic Return Originator) is an IRS-authorized tax professional who has their own EFIN (Electronic Filing Identification Number). Having an EFIN means you can file taxes directly on behalf of clients under your own business — without splitting fees with anyone else."
    },
    {
      question: "How long does the IRS EFIN approval take?",
      answer: "Typically 4 to 8 weeks. We recommend starting before October so you're approved and ready well before tax season."
    },
    {
      question: "What does it cost to become an ERO?",
      answer: "The IRS doesn't charge a fee to apply for an EFIN. You'll need to pay for fingerprinting and background processing through an authorized provider, which typically costs $50 to $100 depending on your state."
    },
    {
      question: "Do I need a physical storefront?",
      answer: "No. You can run your ERO business from home or virtually. You just need to meet IRS security requirements (Publication 4557) — secure document storage, password policies, and encrypted communication. We give you the full blueprint."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#140A06] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            ERO Support & Training
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Stop Splitting Fees. Become an Independent ERO.
          </h1>
          <p className="text-sm text-[#EDE9E0]/55 leading-relaxed">
            Preparing taxes under another ERO or franchise can cost you 30% to 50% of your total revenue. Our ERO Enablement program guides you through the process of getting your EFIN and setting up your own company.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("ero")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book an ERO Consultation
            </button>
          </div>
        </div>

        {/* Interactive Fee Split Calculator */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Fee-Split Calculator</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">See how much revenue you stand to retain by acquiring your own EFIN credentials.</p>
          </div>
          <FeeCalculator />
        </div>

        {/* Benefits Grid */}
        <div>
          <h2 className="gsap-reveal text-lg font-bold text-center text-white mb-12 uppercase tracking-wider">
            Why Transition to Your Own EFIN?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Keep 100% of Revenue",
                desc: "Keep every dollar your office generates. No percentage split models or royalty fees standard in franchise setups.",
              },
              {
                icon: Award,
                title: "Full Brand Authority",
                desc: "Market your business under your own name. Build custom client relationships and value that belongs to you.",
              },
              {
                icon: Sliders,
                title: "Control Your Pricing",
                desc: "Define your own fee schedule, client discounts, and service offerings without standard franchise limits.",
              },
              {
                icon: Building,
                title: "Direct Bank Approvals",
                desc: "Receive client filing fees straight from refund processing banks directly into your own corporate bank account.",
              },
            ].map((benefit, i) => (
              <TiltCard key={benefit.title} delay={i * 0.1} className="glass-card glass-card-hover p-6 space-y-4">
                <div className="h-9 w-9 rounded-md bg-[#2A160E] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A]">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{benefit.title}</h3>
                <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">{benefit.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* The Roadmap Timeline */}
        <div ref={timelineRef} className="glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">How to Become an ERO: Step-by-Step</h2>
            <p className="text-xs text-[#EDE9E0]/50">
              The IRS process can be confusing, taking anywhere from 4 to 8 weeks. We eliminate the guesswork with direct enablement support.
            </p>
          </div>

          <div className="relative">
            {/* Track */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-[#FFB26A]/25" />
            {/* Progress line — draws itself as you scroll */}
            <motion.div
              className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#FFB26A] via-[#F4845F] to-[#F4845F] shadow-[0_0_12px_rgba(255,178,106,0.45)]"
              style={{ scaleY: lineScale }}
            />

            <div className="space-y-10 md:space-y-14">
              {roadmapSteps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative md:grid md:grid-cols-[1fr_5rem_1fr] md:items-center"
                >
                  {/* Node dot on the line */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 320, damping: 14, delay: 0.1 }}
                    className="absolute left-5 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 h-4 w-4 rounded-full bg-[#2A160E] border-2 border-[#F4845F] shadow-[0_0_14px_rgba(244,132,95,0.6)]"
                  />
                  {/* Connector arm (desktop) */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className={`hidden md:block absolute top-1/2 left-1/2 h-px w-8 bg-[#FFB26A]/40 ${
                      i % 2 === 0 ? "-translate-x-full -ml-2 origin-right" : "ml-2 origin-left"
                    }`}
                  />

                  {/* Step card */}
                  <TiltCard
                    tilt={6}
                    fromX={i % 2 === 0 ? -48 : 48}
                    fromY={24}
                    delay={0.15}
                    className={`glass-card glass-card-hover p-5 md:p-6 ml-12 md:ml-0 space-y-2.5 ${
                      i % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2A160E] border border-[#FFB26A]/40 text-[#FFB26A] font-extrabold text-sm">
                        {step.num}
                      </span>
                      <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
                    </div>
                    <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">{step.desc}</p>
                  </TiltCard>
                </div>
              ))}

              {/* Finish milestone */}
              <div className="relative md:flex md:justify-center">
                <TiltCard
                  tilt={6}
                  fromY={20}
                  className="relative z-10 ml-12 md:ml-0 inline-flex items-center gap-2.5 rounded-full bg-[#2A160E] border border-[#FFB26A]/40 px-5 py-3 shadow-[0_0_25px_rgba(255,178,106,0.2)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F4845F]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    EFIN Approved — You&apos;re an Independent ERO
                  </span>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={eroFaqs} title="FAQs" />
        </div>

        {/* Call to Action consultation details */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Ready to secure your independence?</h3>
          <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">
            Schedule an ERO application consultation. We will audit your pre-requisites and structure a timeline to get you approved before next tax season.
          </p>
          <button
            onClick={() => openModal("ero")}
            className="bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#140A06] font-extrabold py-2.5 px-6 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider"
          >
            Start ERO Enablement Today
          </button>
        </div>
      </div>
    </div>
  );
}
