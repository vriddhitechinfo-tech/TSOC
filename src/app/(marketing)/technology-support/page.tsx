"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TiltCard from "@/components/motion/TiltCard";
import VideoMeshBackground from "@/components/VideoMeshBackground";

export default function TechnologySupportPage() {
  const { openModal } = useModal();
  const blueprintRef = useRef<HTMLDivElement>(null);

  const pageRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const pipelineLineRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const officesValRef = useRef<HTMLSpanElement>(null);
  const automationValRef = useRef<HTMLSpanElement>(null);
  const timeValRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Stats Counter Animation
      if (statsContainerRef.current) {
        const statsData = { offices: 0, automation: 0, time: 0 };
        gsap.to(statsData, {
          offices: 300,
          automation: 75,
          time: 50,
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
            if (automationValRef.current) {
              automationValRef.current.innerText = `${Math.floor(statsData.automation)}%`;
            }
            if (timeValRef.current) {
              timeValRef.current.innerText = `${Math.floor(statsData.time)}%`;
            }
          },
        });
      }

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

      // Blueprint animation handled in separate useEffect below
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // ── Operational pipeline: reversible scroll reveal per row ───────────────
  useEffect(() => {
    if (!pipelineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Spine draws downward on scroll, retracts on scroll back up (scrub is
      // inherently bidirectional — no toggleActions needed).
      if (pipelineLineRef.current) {
        gsap.fromTo(
          pipelineLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: pipelineRef.current,
              start: "top 70%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          }
        );
      }

      // Each row (node + connector + card) plays in on the way down and
      // reverses out on the way back up past its own trigger point.
      const rows = pipelineRef.current!.querySelectorAll(".pipeline-row");
      rows.forEach((row) => {
        const node = row.querySelector(".pipeline-node");
        const connector = row.querySelector(".pipeline-connector");
        const card = row.querySelector(".pipeline-card");
        const fromX = row.getAttribute("data-side") === "right" ? 44 : -44;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (node) {
          tl.fromTo(node, { scale: 0 }, { scale: 1, duration: 0.4, ease: "back.out(2.5)" });
        }
        if (connector) {
          tl.fromTo(connector, { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: "power2.out" }, "<0.1");
        }
        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, x: fromX, y: 16 },
            { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" },
            "<"
          );
        }
      });
    }, pipelineRef);

    return () => ctx.revert();
  }, []);

  // ── Blueprint stacked-deck scroll animation ──────────────────────────────
  useEffect(() => {
    if (!blueprintRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = blueprintRef.current;
    const sectionEl = wrapper.parentElement as HTMLElement;
    const cards = Array.from(wrapper.querySelectorAll(".blueprint-card")) as HTMLElement[];
    const total = cards.length;
    const GAP = 16;
    const STACK_DEPTH = 9; // px offset per card in the stack

    // Defer until after browser layout so getBoundingClientRect is accurate
    const raf = requestAnimationFrame(() => {
      // Measure each card's natural height
      const heights = cards.map((c) => c.getBoundingClientRect().height || c.offsetHeight || 140);

      // Compute each card's final Y position in the vertical list
      let cumY = 0;
      const finalYs = heights.map((h) => {
        const y = cumY;
        cumY += h + GAP;
        return y;
      });
      const totalListHeight = cumY - GAP;

      // Set wrapper height = final layout height so page flow is preserved
      gsap.set(wrapper, { position: "relative", height: totalListHeight });

      // Stack every card at y=0 with depth offsets (card[0] on top)
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          y: i * STACK_DEPTH,
          scale: 1 - i * 0.035,
          opacity: Math.max(0.25, 1 - i * 0.18),
          zIndex: total - i,
          transformOrigin: "top center",
        });
      });

      // For each card, create a ScrollTrigger that scrubs it from stack → final position
      cards.forEach((card, i) => {
        // Each card starts releasing after the previous one has mostly landed
        const startOffset = i * 110; // px of scroll per card
        gsap.to(card, {
          y: finalYs[i],
          scale: 1,
          opacity: 1,
          zIndex: i + 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: `top+=${startOffset} 55%`,
            end: `top+=${startOffset + 90} 55%`,
            scrub: 0.6,
          },
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const automationSteps = [
    {
      num: "01",
      title: "Lead Acquisition & Route",
      tool: "Facebook Leads / Web Forms / CRM Router",
      desc: "Incoming leads from Facebook ads, search campaigns, or landing pages are instantly captured, validated for email/phone, and routed to your available preparers within seconds.",
    },
    {
      num: "02",
      title: "Client Intake & Document Request",
      tool: "Secure Portal / Encrypted Request API",
      desc: "An automated SMS and email sequences invite the lead to access a secure, customized document upload portal. No manual copy-pasting of W-2s, 1099s, or IDs.",
    },
    {
      num: "03",
      title: "Auto-Review & Preparer Assign",
      tool: "Task Management / EFIN Queue",
      desc: "Once all required items are uploaded, the status changes in the CRM. The task is queued, and the designated preparer is notified via Slack or email to review and prepare.",
    },
    {
      num: "04",
      title: "Consent, Signature, & Bank Setup",
      tool: "e-Sign Integration / Bank Enrollment",
      desc: "The completed return is sent for client review and signature. Fees are configured to pull directly from the refund bank, and signatures are collected digitally.",
    },
    {
      num: "05",
      title: "E-file Sync & Automated Review",
      tool: "Automated Feedback Loops",
      desc: "Once e-filed, client records in the CRM are updated with tracking. An automated follow-up asks for a Google Review and drops the client into a year-round relationship campaign.",
    },
  ];

  const pipelineSteps = [
    {
      num: "1",
      time: "Instant",
      title: "Lead Capture & Routing",
      accent: "gold" as const,
      points: ["Facebook Leads & Web Forms", "Instant CRM assignment", "Real-time lead validation"],
    },
    {
      num: "2",
      time: "< 5 sec",
      title: "CRM Routing & Validation",
      accent: "blue" as const,
      points: ["Duplicate & data validation", "Preparer workload balancing", "Automatic queue sync"],
    },
    {
      num: "3",
      time: "< 2 min",
      title: "Secure SMS Intake Request",
      accent: "emerald" as const,
      points: ["Secure portal link", "Encrypted document upload", "Automated reminder sequences"],
    },
    {
      num: "4",
      time: "Same day",
      title: "Filer Assignment & Review",
      accent: "gold" as const,
      points: ["Task queue alert", "Slack / email notification", "Preparer review checklist"],
    },
    {
      num: "5",
      time: "Auto-looped",
      title: "Filing Accepted & Loop",
      accent: "blue" as const,
      points: ["Review & e-file confirmation", "Automated year-round follow-up", "Client retention campaign"],
      highlight: true,
    },
  ];

  const PIPELINE_ACCENTS = {
    gold: {
      border: "border-l-[#FF9F76]",
      text: "text-[#FF9F76]",
      pill: "bg-gradient-to-r from-[#FF9F76] to-[#F4845F] text-[#140A06]",
    },
    blue: {
      border: "border-l-[#FF9F76]",
      text: "text-[#FF9F76]",
      pill: "bg-gradient-to-r from-[#FF9F76] to-[#FF9F76] text-[#140A06]",
    },
    emerald: {
      border: "border-l-[#FF9F76]",
      text: "text-[#FF9F76]",
      pill: "bg-gradient-to-r from-[#FF9F76] to-[#FF9F76] text-[#140A06]",
    },
  };

  const techFaqs = [
    {
      question: "Which CRM software does The Sector of Collectives support?",
      answer: "We support integrations across popular CRM platforms such as GoHighLevel, ActiveCampaign, HubSpot, and Salesforce. We provide pre-built snapshot templates configured with tax preparer intake pipelines, automated appointment bookings, and SMS follow-ups."
    },
    {
      question: "Is client documentation secure during intake uploads?",
      answer: "Security is our highest priority. All document upload portals utilize bank-grade 256-bit SSL encryption. Tax documents (W-2s, SSN cards, government IDs) are saved directly in secure cloud repositories compliant with IRS Publication 4557 standards."
    },
    {
      question: "Can I manage automated follow-ups for tax returns myself?",
      answer: "Yes, our automation blueprints are built on simple visual logic builders. We teach you how to adjust SMS and email copywriting, configure calendar availability, and set trigger timelines without writing code."
    },
    {
      question: "What technical support do you offer during tax season?",
      answer: "We offer dedicated Slack support channels and weekly live Tech Tuesday office hours. Under our Expansion Access program, you gain priority access to a 24/7 technical hotline to resolve software connection issues immediately."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#140A06] min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,159,118,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

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
              <span className="gsap-reveal inline-flex w-fit items-center rounded-full bg-[#FF9F76]/10 border border-[#FF9F76]/20 px-3 py-1 text-xs font-semibold text-[#FF9F76]">
                CRM &amp; Automation Support
              </span>
              <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-snug text-white">
                Automate Your Operations. Double Your Intake.
              </h1>
              <p className="gsap-reveal text-sm text-[#EDE9E0]/55 leading-relaxed line-clamp-3">
                Stop chasing documents, manually texting clients, and managing files on sheets. We set up custom CRMs, document workflows, and client messaging pipelines specifically for tax professionals.
              </p>
              <div className="gsap-reveal flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => openModal("technology")}
                  className="bg-[#FF9F76] hover:bg-[#F4845F] text-[#140A06] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Book a Technology Consultation
                </button>
                <button
                  onClick={() => openModal("technology")}
                  className="bg-[#2A160E] text-[#EDE9E0]/70 hover:text-white border border-[#FF9F76]/20 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Request Technology Audit
                </button>
              </div>
            </div>

            {/* Right: CRM Dashboard Image with Floating Animation */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-[#FF9F76]/20 shadow-2xl shadow-black/60" style={{animation: 'float 6s ease-in-out infinite'}}>
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#1C0F0A] border-b border-[#FF9F76]/15 flex items-center px-4 gap-1.5 z-10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF9F76]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF9F76]/65" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF9F76]/90" />
                <span className="ml-4 text-xs text-[#EDE9E0]/30 font-mono">CRM &amp; Workflow Automation — Dashboard</span>
              </div>
              <Image
                src="/crm_workflow_dashboard.png"
                alt="CRM and workflow automation dashboard showing client pipeline, automated sequences, and lead management"
                width={1440}
                height={810}
                className="w-full h-full object-cover mt-8"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140A06]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#2A160E]/60 to-[#1C0F0A] border border-[#FF9F76]/15 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={officesValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Offices Automated
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Tax practices running streamlined CRM and automation systems
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={automationValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0%
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Admin Work Eliminated
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Average reduction in manual document handling and client follow-ups
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={timeValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0%
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Faster Lead Response
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Automated systems respond to leads instantly, 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Operational Pipeline: numbered phase diagram, reveals on scroll down, retracts on scroll back up */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Operational Pipeline Diagram</h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-1">Scroll to reveal each stage of the automated client lifecycle.</p>
          </div>

          <div ref={pipelineRef} className="relative py-6">
            {/* Spine track */}
            <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 bg-white/10" />
            {/* Spine progress — drawn by GSAP scrub, retracts on scroll-up */}
            <div
              ref={pipelineLineRef}
              className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-[3px] lg:-translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#FF9F76] via-[#FF9F76] to-[#FF9F76]"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="space-y-14 lg:space-y-20">
              {pipelineSteps.map((step, i) => {
                const accent = PIPELINE_ACCENTS[step.accent];
                const isRight = i % 2 === 1;
                return (
                  <div
                    key={step.num}
                    data-side={isRight ? "right" : "left"}
                    className="pipeline-row relative lg:grid lg:grid-cols-2 lg:items-center"
                  >
                    {/* Numbered node on the spine */}
                    <div className="pipeline-node absolute left-5 lg:left-1/2 top-6 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 h-9 w-9 rounded-full bg-[#1C0F0A] border-2 border-white/25 flex items-center justify-center text-sm font-bold text-white">
                      {step.num}
                    </div>

                    {/* Connector arm (desktop only) */}
                    <div
                      className={`pipeline-connector hidden lg:block absolute top-1/2 h-px bg-white/15 -translate-y-1/2 w-14 ${
                        isRight ? "left-1/2 origin-left" : "right-1/2 origin-right"
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={`pipeline-card glass-card glass-card-hover overflow-hidden border-l-4 ${accent.border} pl-14 lg:pl-0 lg:max-w-md ${
                        isRight ? "lg:col-start-2 lg:ml-14" : "lg:col-start-1 lg:mr-14 lg:justify-self-end"
                      } ${step.highlight ? "bg-gradient-to-br from-[#2A160E]/80 to-[#1C0F0A] ring-1 ring-[#FF9F76]/20" : ""}`}
                    >
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
                          <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${accent.pill}`}>
                            {step.time}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {step.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2 text-xs text-[#EDE9E0]/60">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${accent.text}`} />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "CRM for Tax Professionals",
              desc: "Consolidate leads, tracking stages, and communication histories into a centralized dashboard. Easily view filing metrics for each preparer on your team.",
            },
            {
              title: "Automated SMS & Follow-Ups",
              desc: "When a lead submits details, automated text and email campaigns reach out within minutes, improving booking conversion rates by up to 80%.",
            },
            {
              title: "Secure Intake Document Requests",
              desc: "Replace messy email attachments. Clients receive a secure mobile-friendly link to snap pictures of documents, which upload directly to their CRM profiles.",
            },
            {
              title: "Calendar Scheduling Integration",
              desc: "Synchronize GCal or Outlook schedules. Clients select open times directly based on preparer availability, sending auto-reminders to reduce no-shows.",
            },
            {
              title: "AI for Tax Professionals",
              desc: "Use custom AI templates to generate customer service replies, translate client forms, draft email responses, and summarize complex IRS tax codes.",
            },
            {
              title: "Workflow Design Blueprint",
              desc: "We design custom workflows that integrate tax preparation software with client-facing platforms, ensuring data updates are synchronized.",
            },
          ].map((feature, i) => (
            <TiltCard key={feature.title} delay={(i % 3) * 0.1} className="glass-card glass-card-hover p-6 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{feature.title}</h3>
              <p className="text-xs text-[#EDE9E0]/35 leading-relaxed">{feature.desc}</p>
            </TiltCard>
          ))}
        </div>

        {/* Blueprint Stepper Details */}
        <div className="gsap-reveal glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Automated Tax Workflow Blueprint</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">Scroll to watch each workflow phase deal out from the stack.</p>
          </div>

          {/* Outer section gives scroll room for the pin; blueprintRef measures/positions cards */}
          <div className="pb-8">
            <div ref={blueprintRef}>
              {automationSteps.map((s, idx) => (
                <div key={s.num} className="blueprint-card">
                  {/* Card */}
                  <div className="rounded-2xl overflow-hidden border border-[#FF9F76]/30 bg-[#2A160E]/80 backdrop-blur shadow-2xl shadow-black/60">
                    {/* Amber accent stripe */}
                    <div className="h-0.5 bg-gradient-to-r from-[#FF9F76] via-[#F4845F] to-transparent" />
                    {/* Header row */}
                    <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#FF9F76]/20">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black font-mono text-black bg-[#FF9F76] px-2 py-1 rounded leading-none">
                          {s.num}
                        </span>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{s.title}</h3>
                      </div>
                      <span className="shrink-0 text-xs text-[#FF9F76] font-mono bg-[#FF9F76]/20 border border-[#FF9F76]/30 px-2.5 py-1 rounded hidden sm:block">
                        {s.tool}
                      </span>
                    </div>
                    {/* Body */}
                    <div className="px-6 py-5 flex flex-col gap-3">
                      <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">{s.desc}</p>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F76] shrink-0" />
                        <span className="text-xs font-mono text-[#EDE9E0]/40 uppercase tracking-wider">
                          {s.tool}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
              Operations Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Tax Offices Working Smarter
            </h2>
            <p className="text-xs text-[#EDE9E0]/35">
              Professionals who've implemented automation and CRM systems, and now spend less time on admin and more time growing their businesses.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={techFaqs} title="CRM &amp; Automation FAQs" />
        </div>

        {/* Community Banner CTA */}
        <TiltCard tilt={3} className="glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/20 px-3 py-1 rounded">
              Technology & Automation Support
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Tired of Manual Administrative Chaos?</h3>
            <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
              Schedule a technology audit call. We will review your current software tools and draft a workflow automation blueprint to double your capacity this season.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => openModal("technology")}
              className="bg-[#FF9F76] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Request Technology Setup Audit
            </button>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
