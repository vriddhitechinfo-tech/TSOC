"use client";

import React, { useEffect, useRef } from "react";
import { DollarSign, Award, Sliders, Building, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";
import FeeCalculator from "@/components/FeeCalculator";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";
import { ERO_ENABLEMENT_LINK, ERO_ENABLEMENT_CALL_LINK } from "@/lib/constants";

export default function EROEnablementPage() {
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const roadmapSteps = [
    {
      num: "01",
      title: "Business Structure",
      desc: "Incorporate your business correctly (LLC or S-Corp) and set up baseline entity compliance.",
    },
    {
      num: "02",
      title: "Compliance",
      desc: "Bring your security, document storage, and encrypted communications up to IRS Publication 4557 standards.",
    },
    {
      num: "03",
      title: "EFIN Approval",
      desc: "Submit your IRS e-Services EFIN application with ID.me verification and fingerprinting coordination.",
    },
    {
      num: "04",
      title: "Software Setup",
      desc: "While your application processes, we configure your software, set up users, and enroll bank products — so you can file the moment you're approved.",
    },
    {
      num: "05",
      title: "Office Setup",
      desc: "Set up CRM, software, and a seasonal growth plan for your independent office.",
    },
  ];

  const eroFaqs = [
    {
      question: "What is an EFIN?",
      answer: "An EFIN (Electronic Identification Number) is an IRS-issued number that allows you to file taxes directly on behalf of clients under your own business — keeping 100% of your fees."
    },
    {
      question: "How long does IRS EFIN approval take?",
      answer: "Typically 4 to 8 weeks. We recommend applying before October so you're approved and ready well before tax season."
    },
    {
      question: "What does it cost to become an ERO?",
      answer: "The IRS does not charge a fee for an EFIN. Fingerprinting and background processing through an authorized provider typically costs $50 to $100."
    },
    {
      question: "Do I need a physical storefront?",
      answer: "No. You can run your tax business from home or virtually. You just need to meet IRS security requirements (Publication 4557) — secure document storage, password policies, and encrypted communication. We give you the full blueprint."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#080808] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            ERO Support &amp; Training
          </span>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Become an Independent ERO &amp; Keep 100% Fees
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            Filing under another ERO or franchise can cost you 30&ndash;50% of your revenue. We guide you through getting your EFIN and setting up your own company.
          </p>
          <div className="pt-4">
            <a
              href={ERO_ENABLEMENT_CALL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book an ERO Consultation
            </a>
          </div>
        </div>

        {/* Interactive Fee Split Calculator */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wider">Fee-Split Calculator</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">See how much revenue you keep with your own EFIN.</p>
          </div>
          <FeeCalculator />
        </div>

        {/* Benefits Grid */}
        <div>
          <h2 className="gsap-reveal font-display text-xl sm:text-2xl font-black text-center text-white mb-12 uppercase tracking-wider">
            Why Transition to Your Own EFIN?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Keep 100% of Revenue",
                desc: "Keep every dollar your office generates. No split models or franchise royalty fees.",
              },
              {
                icon: Award,
                title: "Full Brand Authority",
                desc: "Market under your own name. The client relationships and brand value belong to you.",
              },
              {
                icon: Sliders,
                title: "Control Your Pricing",
                desc: "Set your own fee schedule, discounts, and service offerings — no franchise limits.",
              },
              {
                icon: Building,
                title: "Direct Bank Approvals",
                desc: "Client filing fees go from the refund bank straight into your corporate account.",
              },
            ].map((benefit, i) => (
              <TiltCard key={benefit.title} delay={i * 0.1} className="glass-card glass-card-hover p-6 space-y-4">
                <div className="h-9 w-9 rounded-md bg-[#161412] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A]">
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
            <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wider">How to Become an ERO: Step-by-Step</h2>
            <p className="text-xs text-[#EDE9E0]/50">
              The IRS process takes 4 to 8 weeks and trips people up. We remove the guesswork.
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
                    className="absolute left-5 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 h-4 w-4 rounded-full bg-[#161412] border-2 border-[#F4845F] shadow-[0_0_14px_rgba(244,132,95,0.6)]"
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#161412] border border-[#FFB26A]/40 text-[#FFB26A] font-extrabold text-sm">
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
                  className="relative z-10 ml-12 md:ml-0 inline-flex items-center gap-2.5 rounded-full bg-[#161412] border border-[#FFB26A]/40 px-5 py-3 shadow-[0_0_25px_rgba(255,178,106,0.2)]"
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
          <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">Ready to stop splitting fees?</h3>
          <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">
            Book an ERO consultation. We&apos;ll check your prerequisites and map a timeline to get you approved before next tax season.
          </p>
          <a
            href={ERO_ENABLEMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#080808] font-extrabold py-3 px-8 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider inline-block"
          >
            Start TaxPro EFN Enablement Today
          </a>
        </div>
      </div>
    </div>
  );
}
