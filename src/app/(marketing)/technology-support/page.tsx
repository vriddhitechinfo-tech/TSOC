"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { ChevronRight, Database, MessageSquare, ShieldAlert, Laptop, MailOpen, Check, Play } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function TechnologySupportPage() {
  const { openModal } = useModal();
  const [activeStep, setActiveStep] = useState(0);
  
  const pageRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

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

      // Horizontal diagram node reveal and link line drawing
      if (diagramRef.current) {
        const nodes = diagramRef.current.querySelectorAll(".gsap-flow-node");
        const lines = diagramRef.current.querySelectorAll(".gsap-flow-line");

        // Stagger fade-in nodes and scale lines
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: diagramRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          }
        });

        tl.fromTo(nodes, { scale: 0.7, opacity: 0.3 }, { scale: 1, opacity: 1, stagger: 0.15 })
          .fromTo(lines, { strokeDashoffset: 100 }, { strokeDashoffset: 0, stagger: 0.15 }, "<");
      }
    });

    return () => {
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
    <div ref={pageRef} className="relative overflow-hidden bg-[#120b06] min-h-screen py-16 sm:py-24 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-lg bg-amber-955/35 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#fda85d]">
            CRM &amp; Automation Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Automate Your Operations. Double Your Intake.
          </h1>
          <p className="text-sm text-stone-400 leading-relaxed">
            Stop chasing documents, manually texting clients, and managing files on sheets. We set up custom CRMs, document workflows, and client messaging pipelines specifically for tax professionals.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("technology")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book a Technology Consultation
            </button>
          </div>
        </div>

        {/* CRM Dashboard Mockup */}
        <div className="gsap-reveal relative rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl shadow-black/60">
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#18100a] border-b border-amber-900/20 flex items-center px-4 gap-1.5 z-10">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-4 text-[10px] text-stone-500 font-mono">CRM & Workflow Automation — Dashboard</span>
          </div>
          <Image
            src="/crm_workflow_dashboard.png"
            alt="CRM and workflow automation dashboard showing client pipeline, automated sequences, and lead management"
            width={1440}
            height={810}
            className="w-full h-auto object-cover mt-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Horizontal flow diagram with laser line animations */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Operational Pipeline Diagram</h2>
            <p className="text-xs text-stone-500 mt-1">Scroll to watch a lead navigate the automated client lifecycle from start to end.</p>
          </div>

          <div ref={diagramRef} className="glass-card p-8 overflow-x-auto select-none bg-[#18100a]/50">
            <div className="min-w-[800px] flex items-center justify-between relative py-6">
              {/* Flow Steps */}
              {[
                { label: "Lead Capture", icon: Laptop, desc: "Facebook/Ads Form" },
                { label: "CRM Routing", icon: Database, desc: "Instant assignment" },
                { label: "SMS Intake Request", icon: MessageSquare, desc: "Secure portal link" },
                { label: "Filer Assignment", icon: MailOpen, desc: "Task queue alert" },
                { label: "Filing Accepted", icon: ShieldAlert, desc: "Review request & loop" }
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="gsap-flow-node flex flex-col items-center text-center space-y-2 z-10 w-28">
                    <div className="h-12 w-12 rounded-xl bg-[#120b06] border border-amber-900/35 hover:border-amber-400 flex items-center justify-center text-[#fda85d] shadow transition-colors">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white uppercase tracking-wider">{step.label}</div>
                      <div className="text-[8px] text-stone-500">{step.desc}</div>
                    </div>
                  </div>

                  {idx < 4 && (
                    <div className="flex-1 px-4 relative flex items-center justify-center">
                      <svg className="w-full h-2" overflow="visible">
                        <line
                          x1="0"
                          y1="4"
                          x2="100%"
                          y2="4"
                          stroke="#451e0e"
                          strokeWidth="2"
                        />
                        <line
                          className="gsap-flow-line"
                          x1="0"
                          y1="4"
                          x2="100%"
                          y2="4"
                          stroke="#fda85d"
                          strokeWidth="2"
                          strokeDasharray="100"
                          strokeDashoffset="100"
                        />
                      </svg>
                      <ChevronRight className="w-3.5 h-3.5 text-[#fda85d] absolute right-2.5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">CRM for Tax Professionals</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Consolidate leads, tracking stages, and communication histories into a centralized dashboard. Easily view filing metrics for each preparer on your team.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Automated SMS &amp; Follow-Ups</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              When a lead submits details, automated text and email campaigns reach out within minutes, improving booking conversion rates by up to 80%.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Secure Intake Document Requests</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Replace messy email attachments. Clients receive a secure mobile-friendly link to snap pictures of documents, which upload directly to their CRM profiles.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Calendar Scheduling Integration</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Synchronize GCal or Outlook schedules. Clients select open times directly based on preparer availability, sending auto-reminders to reduce no-shows.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI for Tax Professionals</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Use custom AI templates to generate customer service replies, translate client forms, draft email responses, and summarize complex IRS tax codes.
            </p>
          </div>

          <div className="gsap-reveal glass-card p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Workflow Design Blueprint</h3>
            <p className="text-xs text-stone-555 leading-relaxed">
              We design custom workflows that integrate tax preparation software with client-facing platforms, ensuring data updates are synchronized.
            </p>
          </div>
        </div>

        {/* Blueprint Stepper Details */}
        <div className="gsap-reveal glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Automated Tax Workflow Blueprint</h2>
            <p className="text-xs text-stone-555 mt-1">Click on each node below to review our automated system touchpoints.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-8">
            {automationSteps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center focus:outline-none ${
                  activeStep === idx
                    ? "bg-[#18100a] border-amber-500/30 text-[#fda85d] font-semibold"
                    : "bg-[#18100a]/40 border-amber-900/30 text-stone-500 hover:text-white"
                }`}
              >
                <div className="text-[9px] font-bold uppercase tracking-wider mb-1">Step {s.num}</div>
                <div className="text-[10px] truncate w-full">{s.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-[#18100a]/50 border border-amber-900/30 rounded-xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-[9px] font-bold tracking-widest text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
                Step {automationSteps[activeStep].num} Configuration
              </span>
              <span className="text-[9px] text-[#fda85d] font-mono">
                System: {automationSteps[activeStep].tool}
              </span>
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">{automationSteps[activeStep].title}</h3>
            <p className="text-xs text-stone-450 leading-relaxed">{automationSteps[activeStep].desc}</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={techFaqs} title="CRM &amp; Automation FAQs" />
        </div>

        {/* CTA section */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Tired of manual administrative chaos?</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Schedule a technology audit call. We will review your current software tools and draft a workflow automation blueprint to double your capacity this season.
          </p>
          <button
            onClick={() => openModal("technology")}
            className="bg-gradient-to-r from-[#fda85d] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-6 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider"
          >
            Request Technology Setup Audit
          </button>
        </div>
      </div>
    </div>
  );
}
