"use client";

import React, { useEffect, useRef, useState } from "react";
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
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink,
  Clock,
  CalendarDays,
  X,
  CheckCircle2,
  Loader2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";

export default function RevenueExpansionPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);

  // Tag Form Modal State for Last 4 items
  const [selectedFormItem, setSelectedFormItem] = useState<{ name: string; tag: string } | null>(null);
  const [tagFormData, setTagFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    consent: false,
  });
  const [isTagSubmitting, setIsTagSubmitting] = useState(false);
  const [isTagSubmitted, setIsTagSubmitted] = useState(false);

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
    // FIRST 4 -> Calendar CTA
    {
      id: 1,
      name: "GoHighLevel CRM Sub-Accounts",
      desc: "White-label GoHighLevel software to your business clients. Automate client intake, text messaging, and reviews while earning recurring SaaS income.",
      icon: Sparkles,
      tag: "SaaS & Automation",
      ctaType: "calendar" as const,
      affiliateUrl: "https://www.gohighlevel.com/?fp_ref=tsoc",
      isFeatured: true
    },
    {
      id: 2,
      name: "Business Formation Services",
      desc: "Help clients register LLCs, Corporations, and DBAs. High-demand service for new entrepreneurs, particularly during Q2 and Q3.",
      icon: Building2,
      tag: "High Yield",
      ctaType: "calendar" as const
    },
    {
      id: 3,
      name: "Tax Planning & Advisory",
      desc: "Shift from annual filing to proactive tax reduction planning. Charge high-ticket retainers for small business advisory.",
      icon: LineChart,
      tag: "Premium Retainer",
      ctaType: "calendar" as const
    },
    {
      id: 4,
      name: "Bookkeeping Partnerships",
      desc: "Build a year-round bookkeeping retainer stream. Keep clean financials for small businesses to simplify filing season.",
      icon: Calendar,
      tag: "Year-Round Residual",
      ctaType: "calendar" as const
    },

    // 5TH -> Virtual Mailbox -> Coming Soon…
    {
      id: 5,
      name: "Virtual Mailbox Services",
      desc: "Provide physical business address and mail scanning services for remote businesses and home-based entities.",
      icon: Mail,
      tag: "Passive Income",
      ctaType: "coming_soon" as const
    },

    // LAST 4 -> Form CTA with tags (Name, email, interest, phone, consent)
    {
      id: 6,
      name: "Financial Literacy & Courses",
      desc: "Educate your community with workshops on personal finance, credit management, and small business accounting.",
      icon: GraduationCap,
      tag: "Community Focus",
      ctaType: "form" as const
    },
    {
      id: 7,
      name: "Fingerprinting & Identity",
      desc: "Become an authorized local identity service. Drive steady foot traffic and fresh leads to your office storefront.",
      icon: Fingerprint,
      tag: "Foot Traffic",
      ctaType: "form" as const
    },
    {
      id: 8,
      name: "Credit & Funding Partnerships",
      desc: "Guide clients through business funding, SBA loans, and credit applications — earning high referral margins.",
      icon: CreditCard,
      tag: "Referral Program",
      ctaType: "form" as const
    },
    {
      id: 9,
      name: "General Business Consulting",
      desc: "Offer consulting on business operations, permit registrations, and growth planning for local neighborhood businesses.",
      icon: Briefcase,
      tag: "Advisory",
      ctaType: "form" as const
    }
  ];

  useEffect(() => {
    if (selectedFormItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFormItem]);

  const handleOpenTagForm = (item: { name: string; tag: string }) => {
    setSelectedFormItem(item);
    setTagFormData({
      name: "",
      email: "",
      phone: "",
      interest: item.name,
      consent: false,
    });
    setIsTagSubmitted(false);
  };

  const handleCloseTagForm = () => {
    setSelectedFormItem(null);
  };

  const handleTagFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTagSubmitting(true);
    setTimeout(() => {
      setIsTagSubmitting(false);
      setIsTagSubmitted(true);
    }, 1000);
  };

  const faqs = [
    {
      question: "How does the GoHighLevel affiliate and snapshot partnership work?",
      answer: "When you sign up for GoHighLevel through our community affiliate link, you get access to TSOC's pre-configured tax office CRM snapshots — complete with automated client intake SMS pipelines, review request campaigns, and appointment calendars. You can also re-sell white-label CRM sub-accounts to your clients for recurring monthly revenue."
    },
    {
      question: "Why should tax professionals focus on year-round revenue expansion?",
      answer: "Most tax businesses earn 85% of their revenue within 90 days. Adding year-round bookkeeping retainers, GoHighLevel automation reselling, and business formation services builds consistent monthly cash flow, making off-season operations stress-free."
    },
    {
      question: "How do bookkeeping partnerships work?",
      answer: "We share proven bookkeeping templates and workflows. You set up monthly retainers to maintain accurate client ledgers. This keeps financial records clean, speeds up filing in tax season, and creates reliable residual income."
    },
    {
      question: "Can any tax preparer offer business formation services?",
      answer: "Yes! Registering LLCs, DBAs, or Corporations is an administrative service that does not require a law degree. We provide the registration guides, portal setups, and fee structures so you can launch confidently."
    }
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#080808] min-h-screen py-16 sm:py-10 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section — One Liner Header */}
        <div className="gsap-reveal text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 text-xs font-bold text-[#FFB26A] uppercase tracking-wider">
            Year-Round Growth Strategy
          </span>
          {/* One liner header */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Build Year-Round Revenue &amp; Growth
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            Keep your income strong all 12 months of the year with our add-on service pathways.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => openModal("strategy")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Consult on Revenue Expansion
            </button>
            <a
              href="https://www.gohighlevel.com/?fp_ref=tsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#FFB26A] underline underline-offset-4 hover:text-[#F4845F] transition-colors font-semibold"
            >
              <span>Get GoHighLevel 14-Day Free Trial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured GoHighLevel Affiliate Banner */}
        <div className="gsap-reveal bg-gradient-to-r from-[#141210] via-[#1A1714] to-[#141210] border border-[#FFB26A]/30 rounded-2xl p-8 sm:p-10 mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center space-x-1.5 rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-bold text-[#FFB26A] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Technology Partner</span>
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                Scale Your Practice &amp; Income with GoHighLevel
              </h2>
              <p className="text-xs sm:text-sm text-[#EDE9E0]/65 leading-relaxed">
                The leading all-in-one platform for lead capture, automated client SMS/email follow-ups, appointment booking, and white-label CRM sub-accounts. Our community provides pre-configured TSOC snapshots ready to deploy.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#EDE9E0]/70">
                <span className="flex items-center gap-1.5 bg-[#080808] border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                  <Check className="w-3.5 h-3.5 text-[#FFB26A]" />
                  Pre-built Tax Intake Pipelines
                </span>
                <span className="flex items-center gap-1.5 bg-[#080808] border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                  <Check className="w-3.5 h-3.5 text-[#FFB26A]" />
                  Automated Review Requests
                </span>
                <span className="flex items-center gap-1.5 bg-[#080808] border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                  <Check className="w-3.5 h-3.5 text-[#FFB26A]" />
                  White-Label Sub-Account Reselling
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
              <a
                href="https://www.gohighlevel.com/?fp_ref=tsoc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-6 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FFB26A]/15"
              >
                <span>Get GoHighLevel 14-Day Free Trial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => openModal("technology")}
                className="w-full border border-[#FFB26A]/30 text-[#EDE9E0]/80 hover:text-white hover:border-[#FFB26A]/60 font-semibold py-3 px-6 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>Request TSOC GoHighLevel Snapshot Setup</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB26A]" />
              </button>
              <p className="text-[10px] text-center text-[#EDE9E0]/40">
                *Affiliate Partner Link — Get exclusive TSOC community snapshots upon sign-up.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="gsap-reveal text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
            Year-Round Revenue Pathways
          </h2>
          <p className="text-xs text-[#EDE9E0]/50">
            Select an add-on service pathway to expand your offerings and serve clients year-round.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {opportunities.map((op, i) => {
            const Icon = op.icon;
            return (
              <TiltCard
                key={op.name}
                delay={(i % 3) * 0.08}
                className={`glass-card glass-card-hover p-6 flex flex-col justify-between min-h-[240px] ${
                  op.isFeatured ? "border-[#FFB26A]/40 bg-[#FFB26A]/5" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFB26A]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold text-[#FFB26A] uppercase tracking-wider bg-[#161412]/80 border border-[#FFB26A]/25 px-2 py-0.5 rounded">
                      {op.tag}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-black text-white uppercase tracking-wider">{op.name}</h3>
                    <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">{op.desc}</p>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-[#FFB26A]/10 flex flex-col gap-2">
                  {/* CTA Logic: First 4 -> Calendar CTA, 5th -> Coming Soon…, Last 4 -> Tag Form */}
                  {op.ctaType === "calendar" && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => openModal("strategy")}
                        className="w-full bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <CalendarDays className="w-3.5 h-3.5" />
                        <span>Book Strategy Call</span>
                      </button>
                      {op.affiliateUrl && (
                        <a
                          href={op.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#FFB26A] hover:text-[#F4845F] flex items-center justify-center gap-1 font-semibold transition-colors"
                        >
                          <span>GoHighLevel Affiliate Trial</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}

                  {op.ctaType === "coming_soon" && (
                    <button
                      disabled
                      className="w-full bg-[#161412] text-[#EDE9E0]/35 border border-[#FFB26A]/10 font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-not-allowed"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#FFB26A]/40" />
                      <span>Coming Soon…</span>
                    </button>
                  )}

                  {op.ctaType === "form" && (
                    <button
                      onClick={() => handleOpenTagForm({ name: op.name, tag: op.tag })}
                      className="w-full bg-[#161412] hover:bg-[#222] text-[#FFB26A] hover:text-white border border-[#FFB26A]/30 hover:border-[#FFB26A]/60 font-extrabold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFB26A]" />
                    </button>
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Interactive Stats / Benefits */}
        <TiltCard tilt={3} className="glass-card p-8 md:p-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border border-[#FFB26A]/20">
          <div className="space-y-2">
            <h4 className="text-[#FFB26A] font-black text-2xl font-mono">+$2,500/mo</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Average Retainer Lift</p>
            <p className="text-xs text-[#EDE9E0]/40">By adding bookkeeping &amp; CRM setups to 10 small business clients</p>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#FFB26A]/15 py-6 md:py-0 md:px-8">
            <h4 className="text-[#FFB26A] font-black text-2xl font-mono">3.5x</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Client Lifetime Value</p>
            <p className="text-xs text-[#EDE9E0]/40">Clients remain connected to your firm 12 months a year, not just 3</p>
          </div>
          <div className="space-y-2 md:pl-8">
            <h4 className="text-[#FFB26A] font-black text-2xl font-mono">75%</h4>
            <p className="text-xs text-white font-bold uppercase tracking-wider">Preparation Efficiency</p>
            <p className="text-xs text-[#EDE9E0]/40">Clean monthly records make filing tax returns fast and error-free</p>
          </div>
        </TiltCard>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={faqs} title="FAQs" />
        </div>

        {/* Call to Action */}
        <div className="gsap-reveal text-center max-w-xl mx-auto mt-16 space-y-4">
          <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">Start Building Year-Round Income</h3>
          <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">
            Talk with our mentorship team. We&apos;ll help you pick the best add-on services for your firm and give you step-by-step setup support.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => openModal("strategy")}
              className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Request Revenue Expansion Roadmap
            </button>
            <a
              href="https://www.gohighlevel.com/?fp_ref=tsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#FFB26A]/30 text-[#EDE9E0]/80 hover:text-white hover:border-[#FFB26A]/60 font-semibold py-3.5 px-6 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider inline-flex items-center justify-center gap-1.5"
            >
              <span>Get GoHighLevel Trial</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FFB26A]" />
            </a>
          </div>
        </div>
      </div>

      {/* Tag Form Modal for Last 4 Items (Fields: Name, email, interest, phone, consent) */}
      {selectedFormItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-[#161412] border border-[#FFB26A]/30 overflow-hidden rounded-xl shadow-2xl transition-all max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseTagForm}
              className="absolute top-4 right-4 text-[#EDE9E0]/40 hover:text-[#FFB26A] transition-colors p-1.5 hover:bg-[#161412]/60 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 cursor-pointer" />
            </button>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
              {!isTagSubmitted ? (
                <>
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/30 px-3 py-1 text-xs font-bold text-[#FFB26A]">
                      <span>Tag: {selectedFormItem.tag}</span>
                      <span>•</span>
                      <span>{selectedFormItem.name}</span>
                    </span>
                    <h3 className="font-display text-xl font-black text-white">
                      Inquire About {selectedFormItem.name}
                    </h3>
                    <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">
                      Fill out the details below to request setup information and launch guidelines for {selectedFormItem.name}.
                    </p>
                  </div>

                  <form onSubmit={handleTagFormSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="tag-name" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="tag-name"
                        required
                        value={tagFormData.name}
                        onChange={(e) => setTagFormData({ ...tagFormData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#080808] border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="tag-email" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="tag-email"
                          required
                          value={tagFormData.email}
                          onChange={(e) => setTagFormData({ ...tagFormData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full bg-[#080808] border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="tag-phone" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="tag-phone"
                          required
                          value={tagFormData.phone}
                          onChange={(e) => setTagFormData({ ...tagFormData, phone: e.target.value })}
                          placeholder="(555) 555-5555"
                          className="w-full bg-[#080808] border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white placeholder-[#EDE9E0]/30 outline-none transition-all text-xs"
                        />
                      </div>
                    </div>

                    {/* Interest / Service Tag */}
                    <div>
                      <label htmlFor="tag-interest" className="block text-xs font-semibold text-[#EDE9E0]/60 uppercase tracking-wider mb-1.5">
                        Selected Service Interest
                      </label>
                      <select
                        id="tag-interest"
                        value={tagFormData.interest}
                        onChange={(e) => setTagFormData({ ...tagFormData, interest: e.target.value })}
                        className="w-full bg-[#080808] border border-[#FFB26A]/25 focus:border-[#FFB26A] focus:ring-1 focus:ring-[#FFB26A]/50 rounded-lg px-3.5 py-2.5 text-white outline-none transition-all text-xs"
                      >
                        <option value="Financial Literacy & Courses">Financial Literacy &amp; Courses</option>
                        <option value="Fingerprinting & Identity">Fingerprinting &amp; Identity</option>
                        <option value="Credit & Funding Partnerships">Credit &amp; Funding Partnerships</option>
                        <option value="General Business Consulting">General Business Consulting</option>
                      </select>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          required
                          checked={tagFormData.consent}
                          onChange={(e) => setTagFormData({ ...tagFormData, consent: e.target.checked })}
                          className="mt-0.5 h-4 w-4 rounded border-[#FFB26A]/30 bg-[#080808] text-[#FFB26A] focus:ring-[#FFB26A] accent-[#FFB26A]"
                        />
                        <span className="text-[11px] text-[#EDE9E0]/60 leading-tight">
                          I consent to receive phone calls, SMS messages, and emails from The Sector of Collectives regarding this service inquiry.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isTagSubmitting}
                      className="w-full flex items-center justify-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-4 rounded-lg transition-all text-xs disabled:opacity-75 disabled:cursor-not-allowed mt-6 cursor-pointer uppercase tracking-wider shadow-lg"
                    >
                      {isTagSubmitting ? (
                        <>
                          <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        "Submit Service Inquiry"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFB26A]/10 rounded-full flex items-center justify-center text-[#FFB26A] ring-4 ring-[#FFB26A]/15">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Inquiry Received
                  </h3>
                  
                  <p className="text-xs text-[#EDE9E0]/60 max-w-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{tagFormData.name}</span>. We&apos;ve received your request for <span className="font-semibold text-[#FFB26A]">{tagFormData.interest}</span>. Our team will contact you at <span className="font-semibold text-white">{tagFormData.email}</span> shortly.
                  </p>

                  <button
                    onClick={handleCloseTagForm}
                    className="mt-6 bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-2.5 px-6 rounded-lg transition-all text-xs cursor-pointer uppercase tracking-wider shadow-md"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
