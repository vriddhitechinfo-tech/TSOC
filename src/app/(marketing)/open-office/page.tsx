"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import {
  Users,
  Phone,
  Settings,
  Scale,
  BookOpen,
  Heart,
  TrendingUp,
  Globe,
  Check,
  Clock,
  CalendarDays,
  Plus
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function OpenOfficePage() {
  const { openModal } = useModal();
  const [activeDay, setActiveDay] = useState("mon");
  const pageRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const membersValRef = useRef<HTMLSpanElement>(null);
  const sessionsValRef = useRef<HTMLSpanElement>(null);
  const supportValRef = useRef<HTMLSpanElement>(null);

  // Auto-detect current weekday on client load
  useEffect(() => {
    const dayIndex = new Date().getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const daysMap = ["mon", "mon", "tue", "wed", "thu", "fri", "mon"]; // map weekend to Monday
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveDay(daysMap[dayIndex]);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Stats Counter Animation
      if (statsContainerRef.current) {
        const statsData = { members: 0, sessions: 0, support: 0 };
        gsap.to(statsData, {
          members: 2000,
          sessions: 365,
          support: 24,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (membersValRef.current) {
              membersValRef.current.innerText = `${Math.floor(statsData.members)}+`;
            }
            if (sessionsValRef.current) {
              sessionsValRef.current.innerText = `${Math.floor(statsData.sessions)}`;
            }
            if (supportValRef.current) {
              supportValRef.current.innerText = `${Math.floor(statsData.support)}/7`;
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

  const weeklySchedule = [
    {
      id: "mon",
      dayName: "Monday",
      title: "Dominate Your Taxes",
      desc: "Deep dive into filing compliance, refund calculations, audit mitigation, and complex individual/corporate forms. Bring active filing scenarios for collaborative troubleshooting.",
      time: "1:00 PM EST",
      pillar: "IRS Compliance Review",
      byDay: "MO",
    },
    {
      id: "tue",
      dayName: "Tuesday",
      title: "Tech Tuesday",
      desc: "Learn how to sync CRMs, automate client follow-ups, embed calendar scheduling, and leverage AI models to cut admin overhead in half. Perfect for modernizing office operations.",
      time: "2:00 PM EST",
      pillar: "Tax Business Automation",
      byDay: "TU",
    },
    {
      id: "wed",
      dayName: "Wednesday",
      title: "Build Your Virtual Empire",
      desc: "Blueprints for remote tax prep. How to manage remote agents, structure software permissions, build compliance checklists, and secure documents digitally under your EFIN.",
      time: "1:00 PM EST",
      pillar: "Service Bureau Scaling",
      byDay: "WE",
    },
    {
      id: "thu",
      dayName: "Thursday",
      title: "Tap-In Thursdays",
      desc: "Live coworking session and coaching check-in. Network with other tax business owners, share success blocks, review business operations, and audit marketing strategy results.",
      time: "3:00 PM EST",
      pillar: "Networking & Coaching",
      byDay: "TH",
    },
    {
      id: "fri",
      dayName: "Friday",
      title: "Ask an Attorney",
      desc: "Live legal advice Q&A with our allied tax & corporate attorneys. Review business structure setups, contract compliance, physical/digital audit standards, and ERO regulations.",
      time: "12:00 PM EST",
      pillar: "Legal & Entity Structure",
      byDay: "FR",
    },
  ];

  const communityBenefits = [
    { name: "Live Office Hours", desc: "Access daily Zoom coworking and direct advisor help blocks.", icon: Users },
    { name: "Tax Support Hotline", desc: "Get real-time filing diagnostics and complex return reviews.", icon: Phone },
    { name: "Technology Training", desc: "Step-by-step walkthroughs of modern CRM & intake setups.", icon: Settings },
    { name: "Attorney Q&A Sessions", desc: "Direct access to legal counsel for your compliance questions.", icon: Scale },
    { name: "Bookkeeping Guidance", desc: "Align with partners to offer year-round bookkeeping services.", icon: BookOpen },
    { name: "Wellness Resources", desc: "Manage tax-season stress with curated mental health support.", icon: Heart },
    { name: "Business Growth Workshops", desc: "Monthly sessions on client acquisition and brand building.", icon: TrendingUp },
    { name: "Networking Opportunities", desc: "Join mixers to connect with EROs and allied professionals.", icon: Globe },
  ];

  const openOfficeFaqs = [
    {
      question: "Who can participate in the Open Office community?",
      answer: "Open Office is designed for independent tax preparers, bookkeeping partners, EROs, and Service Bureau owners who are members of The Sector of Collectives. It acts as a collaborative daily workspace where you can coworking and consult with experts."
    },
    {
      question: "Are the Zoom support blocks recorded?",
      answer: "Yes, our Monday and Tuesday workshops, along with Friday Attorney Q&As, are recorded and loaded into the member portal. Members can access replays and blueprints at any time."
    },
    {
      question: "What legal questions can I ask corporate attorneys?",
      answer: "Our allied corporate and tax attorneys answer structural questions regarding business incorporation (LLCs, S-Corps), client contract structures, physical/digital tax office compliance, and IRS e-file agent guidelines. *Disclaimer: Consultations provide guidance and do not form direct legal representation."
    },
    {
      question: "Can I invite junior preparers from my Service Bureau?",
      answer: "Yes, depending on your membership tier. Expansion Access members can register their staff and sub-office agents into coworking hours and basic software support blocks."
    }
  ];

  const activeDaySchedule = weeklySchedule.find((item) => item.id === activeDay) || weeklySchedule[0];

  // Dynamic .ics calendar generator
  const downloadIcs = (item: typeof weeklySchedule[0]) => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Sector of Collectives//Open Office Schedule//EN",
      "BEGIN:VEVENT",
      `SUMMARY:The Sector of Collectives: ${item.title} (${item.dayName})`,
      `DESCRIPTION:Join our weekly live block. Topic: ${item.desc}`,
      `LOCATION:Zoom Link Provided in Portal`,
      `RRULE:FREQ=WEEKLY;BYDAY=${item.byDay}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tsoc-open-office-${item.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#0a0605] min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>

      {/* Hero Section with Left/Right Split */}
      <section className="relative pt-6 pb-20 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10 h-auto lg:h-[520px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
            {/* Left: Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <span className="gsap-reveal inline-flex w-fit items-center rounded-full bg-amber-955/35 border border-amber-900/40 px-3 py-1 text-xs font-semibold text-[#fbbf24]">
                Tax Professional Community
              </span>
              <h1 className="gsap-reveal text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-snug text-white">
                Where Access Meets Opportunity. The Open Office.
              </h1>
              <p className="gsap-reveal text-sm text-stone-400 leading-relaxed line-clamp-3">
                A collaborative community built to support tax business owners year-round. Connect with experts, participate in daily coworking blocks, and get answers to your tech, tax, and legal questions.
              </p>
              <div className="gsap-reveal flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => openModal("openoffice")}
                  className="bg-[#fbbf24] text-black hover:bg-[#c29e2f] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Join The Open Office
                </button>
                <button
                  onClick={() => openModal("openoffice")}
                  className="bg-[#0f0805] text-stone-300 hover:text-white border border-amber-900/30 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Live Schedule
                </button>
              </div>
            </div>

            {/* Right: Coworking Image with Floating Animation */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl shadow-black/60" style={{animation: 'float 6s ease-in-out infinite'}}>
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0f0805] border-b border-amber-900/20 flex items-center px-4 gap-1.5 z-10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-4 text-[10px] text-stone-500 font-mono">Open Office — Daily Coworking</span>
              </div>
              <Image
                src="/open_office_coworking.png"
                alt="Tax professionals collaborating on a group video call coworking session in a modern home office"
                width={1440}
                height={810}
                className="w-full h-full object-cover mt-8"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#0a0605]/80 backdrop-blur border border-amber-900/40 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#fbbf24]">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Daily Coworking Sessions · Mon–Fri
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#18100a]/80 to-[#120b06] border border-amber-900/30 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={membersValRef}
                className="text-4xl md:text-5xl font-black text-[#fbbf24] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Community Members
              </span>
              <p className="text-[10px] text-stone-500">
                Tax professionals, bookkeepers, and business owners collaborating daily
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={sessionsValRef}
                className="text-4xl md:text-5xl font-black text-[#fbbf24] font-mono block"
              >
                0
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Annual Coworking Sessions
              </span>
              <p className="text-[10px] text-stone-500">
                Year-round support, Mon–Fri live coworking and expert consultations
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={supportValRef}
                className="text-4xl md:text-5xl font-black text-[#fbbf24] font-mono block"
              >
                0/7
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Days of Support Access
              </span>
              <p className="text-[10px] text-stone-500">
                Attorney Q&As, bookkeeping guidance, and wellness resources available
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Programming — Calendar Layout */}
        <div className="gsap-reveal relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Weekly Live Schedule</h2>
            <p className="text-xs text-stone-500 mt-1">Click any day to view session details, perks, and add it to your calendar.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            {/* Left: Calendar Grid (Mon–Fri) */}
            <div className="lg:col-span-2">
              {/* Calendar chrome header */}
              <div className="bg-[#0f0805] border border-amber-900/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Month bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-amber-900/20 bg-[#120b06]">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#fbbf24]" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Open Office · Weekly</span>
                  </div>
                  <span className="text-[9px] font-mono text-stone-500 bg-amber-900/10 border border-amber-900/20 px-2 py-1 rounded">Mon – Fri · Recurring</span>
                </div>

                {/* Day column headers */}
                <div className="grid grid-cols-5 border-b border-amber-900/20">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.id}
                      className={`text-center py-2 text-[9px] font-bold uppercase tracking-widest border-r border-amber-900/10 last:border-r-0 ${
                        activeDay === item.id ? "text-[#fbbf24]" : "text-stone-600"
                      }`}
                    >
                      {item.dayName.slice(0, 3)}
                    </div>
                  ))}
                </div>

                {/* Calendar day cells */}
                <div className="grid grid-cols-5">
                  {weeklySchedule.map((item, idx) => {
                    const isActive = activeDay === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveDay(item.id)}
                        className={`group relative flex flex-col items-start p-3 sm:p-4 border-r border-b border-amber-900/10 last:border-r-0 text-left transition-all duration-200 cursor-pointer min-h-[160px] ${
                          isActive
                            ? "bg-[#fbbf24]/10 border-b-[#fbbf24]/40"
                            : "hover:bg-amber-900/5"
                        }`}
                      >
                        {/* Day number */}
                        <span className={`text-base font-black font-mono mb-2 leading-none w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                          isActive ? "bg-[#fbbf24] text-black" : "text-stone-600 group-hover:text-stone-400"
                        }`}>
                          {idx + 1}
                        </span>

                        {/* Time badge */}
                        <span className={`text-[8px] font-mono mb-2 flex items-center gap-1 ${isActive ? "text-[#fbbf24]" : "text-stone-600 group-hover:text-stone-500"}`}>
                          <Clock className="w-2.5 h-2.5 shrink-0" />
                          {item.time}
                        </span>

                        {/* Session title */}
                        <p className={`text-[9px] font-bold uppercase tracking-wide leading-tight line-clamp-2 ${
                          isActive ? "text-white" : "text-stone-600 group-hover:text-stone-400"
                        }`}>
                          {item.title}
                        </p>

                        {/* Pillar tag */}
                        <span className={`mt-auto pt-2 text-[7px] font-semibold uppercase tracking-wider leading-tight line-clamp-1 ${
                          isActive ? "text-[#fbbf24]" : "text-stone-700 group-hover:text-stone-600"
                        }`}>
                          {item.pillar}
                        </span>

                        {/* Active indicator dot */}
                        {isActive && (
                          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Detail + Perks Panel */}
            <div className="bg-[#0f0805] border border-amber-900/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col">
              {/* Panel header */}
              <div className="px-5 py-3.5 border-b border-amber-900/20 bg-[#120b06] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Session Details</span>
              </div>

              {/* Session info */}
              <div className="p-5 space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#fbbf24] bg-amber-955/35 border border-amber-900/40 px-2.5 py-1 rounded">
                    {activeDaySchedule.pillar}
                  </span>
                  <span className="text-[9px] text-[#fbbf24] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activeDaySchedule.time}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">{activeDaySchedule.title}</h3>
                <p className="text-[11px] text-stone-400 leading-relaxed">{activeDaySchedule.desc}</p>

                {/* Divider */}
                <div className="border-t border-amber-900/20 pt-3">
                  <h4 className="text-[9px] font-bold text-stone-500 uppercase tracking-wider mb-2.5">Participant Perks</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[11px] text-stone-400">
                      <Check className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" /> Live text-based Q&amp;A
                    </li>
                    <li className="flex items-center gap-2 text-[11px] text-stone-400">
                      <Check className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" /> Screen-sharing diagnostics
                    </li>
                    <li className="flex items-center gap-2 text-[11px] text-stone-400">
                      <Check className="w-3.5 h-3.5 text-[#fbbf24] shrink-0" /> Replay recordings vault access
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="p-5 pt-0 flex flex-col gap-2 border-t border-amber-900/20">
                <button
                  onClick={() => downloadIcs(activeDaySchedule)}
                  className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black font-extrabold py-2.5 px-4 rounded-lg text-[10px] transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add to Calendar (.ics)
                </button>
                <button
                  onClick={() => openModal("openoffice")}
                  className="w-full bg-[#0a0605] border border-amber-900/30 text-stone-300 hover:text-white font-bold py-2 px-4 rounded-lg text-[10px] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Access Stream Details
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="gsap-reveal text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">Open Office Community Benefits</h2>
            <p className="text-xs text-stone-500 mt-2">
              Our workspace compiles tools, networks, and events into a single membership designed to support tax business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((b) => {
              const IconComponent = b.icon;
              return (
                <div key={b.name} className="gsap-reveal glass-card p-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[#fbbf24]">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{b.name}</h3>
                  </div>
                  <p className="text-[11px] text-stone-550 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbbf24] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
              Community Voices
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Tax Professionals Thriving Together
            </h2>
            <p className="text-xs text-stone-500">
              Hear from members who've transformed their businesses through community support, expert guidance, and collaborative problem-solving.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={openOfficeFaqs} title="Open Office Community FAQs" />
        </div>

        {/* Community Banner CTA */}
        <div className="gsap-reveal glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#fbbf24] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded">
              Open Office Community
            </span>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Join More Than Just a Workspace</h3>
            <p className="text-xs text-stone-450 leading-relaxed">
              When you join The Sector of Collectives Open Office, you gain access to daily coworking sessions, Tech Tuesday workshops, Attorney Q&As, and year-round business advice resources designed to help your tax business thrive.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <button
              onClick={() => openModal("openoffice")}
              className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
