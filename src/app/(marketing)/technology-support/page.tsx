"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TechnologySupportPage() {
  const { openModal } = useModal();
  const [activeStep, setActiveStep] = useState(0);
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

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#120b06] min-h-screen py-16 sm:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-lg bg-amber-955/35 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#d4af37]">
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
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Book a Technology Consultation
            </button>
          </div>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">CRM for Tax Professionals</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Consolidate leads, tracking stages, and communication histories into a centralized dashboard. Easily view filing metrics for each preparer on your team.
            </p>
          </div>

          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Automated SMS &amp; Follow-Ups</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              When a lead submits details, automated text and email campaigns reach out within minutes, improving booking conversion rates by up to 80%.
            </p>
          </div>

          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Secure Intake Document Requests</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Replace messy email attachments. Clients receive a secure mobile-friendly link to snap pictures of documents, which upload directly to their CRM profiles.
            </p>
          </div>

          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Calendar Scheduling Integration</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Synchronize GCal or Outlook schedules. Clients select open times directly based on preparer availability, sending auto-reminders to reduce no-shows.
            </p>
          </div>

          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI for Tax Professionals</h3>
            <p className="text-xs text-stone-550 leading-relaxed">
              Use custom AI templates to generate customer service replies, translate client forms, draft email responses, and summarize complex IRS tax codes.
            </p>
          </div>

          <div className="gsap-reveal glass-card glass-card-hover p-6 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Workflow Design Blueprint</h3>
            <p className="text-xs text-stone-555 leading-relaxed">
              We design custom workflows that integrate tax preparation software with client-facing platforms, ensuring data updates are synchronized.
            </p>
          </div>
        </div>

        {/* Blueprint Stepper */}
        <div className="gsap-reveal glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white">Automated Tax Workflow Blueprint</h2>
            <p className="text-xs text-stone-555 mt-1">Click on each node below to review our automated system touchpoints.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-8">
            {automationSteps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-lg border text-center transition-all cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#18100a] border-amber-500/30 text-[#d4af37] font-semibold"
                    : "bg-[#18100a]/40 border-amber-900/30 text-stone-500 hover:text-white"
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider mb-1">Step {s.num}</div>
                <div className="text-[10px] truncate">{s.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-[#18100a]/50 border border-amber-900/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-[#d4af37] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded">
                Step {automationSteps[activeStep].num} Configuration
              </span>
              <span className="text-[9px] text-[#d4af37] font-mono">
                System: {automationSteps[activeStep].tool}
              </span>
            </div>
            <h3 className="text-base font-bold text-white">{automationSteps[activeStep].title}</h3>
            <p className="text-xs text-stone-400 leading-relaxed">{automationSteps[activeStep].desc}</p>
          </div>
        </div>

        {/* CTA section */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">Tired of manual administrative chaos?</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Schedule a technology audit call. We will review your current software tools and draft a workflow automation blueprint to double your capacity this season.
          </p>
          <button
            onClick={() => openModal("technology")}
            className="bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-6 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider"
          >
            Request Technology Setup Audit
          </button>
        </div>
      </div>
    </div>
  );
}
