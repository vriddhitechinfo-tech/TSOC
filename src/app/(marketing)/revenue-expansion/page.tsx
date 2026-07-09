"use client";

import React, { useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { 
  Building2, 
  LineChart, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Fingerprint, 
  Briefcase, 
  CreditCard, 
  Megaphone,
  ArrowRight,
  Check
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function RevenueExpansionPage() {
  const { openModal } = useModal();
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
          stagger: 0.12,
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

  const opportunities = [
    {
      name: "Business Formation Services",
      desc: "Help clients register LLCs, Corporations, and DBAs. High-demand service for new entrepreneurs, particularly during Q2 and Q3.",
      icon: Building2,
      tag: "High Yield"
    },
    {
      name: "Tax Planning & Advisory",
      desc: "Shift from compliance to advisory. Charge high-ticket retainers for proactive tax reduction planning for small businesses.",
      icon: LineChart,
      tag: "Premium Retainer"
    },
    {
      name: "Bookkeeping Partnerships",
      desc: "Establish a year-round bookkeeping retainer income stream. Keep clean financials for small businesses to simplify annual filing.",
      icon: Calendar,
      tag: "Year-Round Residual"
    },
    {
      name: "Financial Literacy & Courses",
      desc: "Educate your community and upsell courses on personal finance, credit management, and small business accounting.",
      icon: GraduationCap,
      tag: "Community Focus"
    },
    {
      name: "Virtual Mailbox Services",
      desc: "Provide physical business address and mail scanning services for remote entities and home-based businesses.",
      icon: Mail,
      tag: "Passive Income"
    },
    {
      name: "Fingerprinting & Identity",
      desc: "Become an authorized local identity service. Drive steady foot traffic and new leads to your local storefront office.",
      icon: Fingerprint,
      tag: "Foot Traffic"
    },
    {
      name: "Credit & Funding Partnerships",
      desc: "Guide clients through business funding, SBA loans, and credit repair applications, earning substantial referral margins.",
      icon: CreditCard,
      tag: "Referral Program"
    },
    {
      name: "General Business Consulting",
      desc: "Offer consulting on business operations, permit registrations, and growth planning for local neighborhood businesses.",
      icon: Briefcase,
      tag: "Advisory"
    }
  ];

  const faqs = [
    {
      question: "Why should tax professionals focus on revenue expansion?",
      answer: "Most tax businesses generate 85% of their revenue within a 90-day window (January to April). This seasonal compression puts immense cash flow pressure on operations. Transitioning to year-round bookkeeping retainer income and business formation services structures consistent, stable monthly cash flow, allowing you to pay lease fees, software costs, and staff year-round."
    },
    {
      question: "How do bookkeeping partnerships work?",
      answer: "We connect you with certified bookkeeping workflows and templates. You can set up client bookkeeping retainers where clients pay monthly to maintain accurate ledgers. This keeps financial records clean, which reduces preparation time in tax season, increases filing quality, and builds year-round residual income."
    },
    {
      question: "Can any tax preparer offer business formation services?",
      answer: "Yes, registering LLCs, DBAs, or Corporations is an administrative service that does not require an advanced legal degree. We provide the registration workflows, portal setups, and pricing guides to offer business registration confidently to your clients."
    },
    {
      question: "What is the margin on credit and funding referrals?",
      answer: "Allied business credit and SBA funding platforms pay commission splits. By referring small business clients looking for growth capital, you earn 1-3% of the total loan size, which can represent high-margin windfalls for your firm."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#050A14] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,74,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFD94A]/10 border border-[#FFD94A]/20 px-3 py-1 text-xs font-semibold text-[#FFD94A]">
            Year-Round Growth Strategy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Stop Relying on Tax Season. Build Year-Round Revenue.
          </h1>
          <p className="text-sm text-[#EDE9E0]/55 leading-relaxed">
            Don&apos;t let your income dry up after April 15th. We support our community in structuring, packaging, and launching high-demand ancillary business services to build consistent year-round profits.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("strategy")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] hover:from-[#FFAA2A] hover:to-[#FF8C00] text-[#050A14] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Consult on Revenue Expansion
            </button>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {opportunities.map((op) => {
            const Icon = op.icon;
            return (
              <div key={op.name} className="gsap-reveal glass-card glass-card-hover p-6 flex flex-col justify-between min-h-[220px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFD94A]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[8px] font-bold text-[#EDE9E0]/40 uppercase tracking-wider bg-[#1C2A47]/60 border border-[#FFD94A]/15 px-2 py-0.5 rounded">
                      {op.tag}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-black text-white uppercase tracking-wider">{op.name}</h3>
                    <p className="text-[10px] text-[#EDE9E0]/45 leading-relaxed">{op.desc}</p>
                  </div>
                </div>
                
                <div className="pt-4 mt-4">
                  <button
                    onClick={() => openModal("strategy")}
                    className="text-[9px] font-bold text-[#EDE9E0]/40 hover:text-[#FFD94A] flex items-center gap-1 uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Setup Service
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Stats / Benefits */}
        <div className="gsap-reveal glass-card p-8 md:p-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-[#FFD94A] font-black text-2xl font-mono">+$2,500/mo</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Average Retainer Lift</p>
            <p className="text-[10px] text-[#EDE9E0]/35">By adding bookkeeping to just 10 existing small business clients</p>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#FFD94A]/10 py-6 md:py-0 md:px-8">
            <h4 className="text-[#FFD94A] font-black text-2xl font-mono">3.5x</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Client Lifetime Value</p>
            <p className="text-[10px] text-[#EDE9E0]/35">Clients remain connected to your firm 12 months a year, not just 3</p>
          </div>
          <div className="space-y-2 md:pl-8">
            <h4 className="text-[#FFD94A] font-black text-2xl font-mono">75%</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Preparation Efficiency</p>
            <p className="text-[10px] text-[#EDE9E0]/35">Clean monthly records make filing tax returns incredibly fast and error-free</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={faqs} title="Revenue Expansion Frequently Asked Questions" />
        </div>

        {/* Call to Action */}
        <div className="gsap-reveal text-center max-w-xl mx-auto mt-16 space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Start Building Year-Round Wealth</h3>
          <p className="text-xs text-[#EDE9E0]/35 leading-relaxed">
            Apply to connect with our mentorship team. Let&apos;s map out which ancillary services match your client base and structure the templates to launch them immediately.
          </p>
          <button
            onClick={() => openModal("strategy")}
            className="bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] hover:from-[#FFAA2A] hover:to-[#FF8C00] text-[#050A14] font-extrabold py-3 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
          >
            Request Revenue Expansion Roadmap
          </button>
        </div>
      </div>
    </div>
  );
}

