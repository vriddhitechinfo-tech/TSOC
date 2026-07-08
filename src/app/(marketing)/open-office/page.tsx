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

export default function OpenOfficePage() {
  const { openModal } = useModal();
  const [activeDay, setActiveDay] = useState("mon");
  const pageRef = useRef<HTMLDivElement>(null);

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
    <div ref={pageRef} className="relative overflow-hidden bg-[#120b06] min-h-screen py-16 sm:py-24 animate-fade-in">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-lg bg-amber-955/35 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#fda85d]">
            Tax Professional Community
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Where Access Meets Opportunity. The Open Office.
          </h1>
          <p className="text-sm text-stone-400 leading-relaxed">
            A collaborative community built to support tax business owners year-round. Connect with experts, participate in daily coworking blocks, and get answers to your tech, tax, and legal questions.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("openoffice")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Join The Open Office
            </button>
          </div>
        </div>

        {/* Open Office Community Photo */}
        <div className="gsap-reveal relative rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl shadow-black/60">
          <Image
            src="/open_office_coworking.png"
            alt="Tax professionals collaborating on a group video call coworking session in a modern home office"
            width={1440}
            height={810}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#120b06]/80 backdrop-blur border border-amber-900/40 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#fda85d]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Daily Coworking Sessions · Mon–Fri
            </span>
          </div>
        </div>

        {/* Weekly Programming Interactive Component */}
        <div className="gsap-reveal glass-card p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Weekly Live Schedule</h2>
            <p className="text-xs text-stone-500 mt-1">Select a weekday to review the programming topics and times.</p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-amber-950/30 pb-6">
            {weeklySchedule.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDay(item.id)}
                className={`py-2 px-5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeDay === item.id
                    ? "bg-[#fda85d] text-black font-bold shadow-md"
                    : "bg-amber-955/35 hover:bg-amber-950/20 border border-amber-900/30 text-stone-400 hover:text-white"
                }`}
              >
                {item.dayName}
              </button>
            ))}
          </div>

          {/* Active Tab Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded">
                  {activeDaySchedule.pillar}
                </span>
                <span className="text-[10px] text-[#fda85d] font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {activeDaySchedule.time}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">{activeDaySchedule.title}</h3>
              <p className="text-xs text-stone-400 leading-relaxed max-w-3xl">{activeDaySchedule.desc}</p>
            </div>
            
            <div className="bg-[#18100a] border border-amber-900/30 rounded-xl p-5 space-y-4 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-3">Participant Perks</h4>
                <ul className="space-y-2 text-xs text-stone-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#fda85d] shrink-0" /> Live text-based Q&amp;A
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#fda85d] shrink-0" /> Screen-sharing diagnostics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#fda85d] shrink-0" /> Replay recordings vault access
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={() => downloadIcs(activeDaySchedule)}
                  className="w-full text-center bg-gradient-to-r from-[#fda85d] to-[#f59e0b] text-black font-extrabold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add to Calendar (.ics)
                </button>
                <button
                  onClick={() => openModal("openoffice")}
                  className="w-full text-center bg-[#120b06] border border-amber-900/30 text-stone-300 hover:text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
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
            <p className="text-xs text-stone-555 mt-2">
              Our workspace compiles tools, networks, and events into a single membership designed to support tax business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((b) => {
              const IconComponent = b.icon;
              return (
                <div key={b.name} className="gsap-reveal glass-card p-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[#fda85d]">
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

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={openOfficeFaqs} title="Open Office Community FAQs" />
        </div>
      </div>
    </div>
  );
}
