"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Sparkles,
  Zap,
  Crown,
} from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TiltCard from "@/components/motion/TiltCard";
import VideoMeshBackground from "@/components/VideoMeshBackground";
import {
  OPEN_OFFICE_MAIN_FUNNEL,
  OPEN_OFFICE_ZOOM_LINK,
  OPEN_OFFICE_COMMUNITY_LINK,
  TECH_TUESDAY_LINK,
  MIDNIGHT_MADNESS_LINK,
  TAP_IN_THURSDAY_LINK,
} from "@/lib/constants";

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
      title: "Open Office Hours",
      desc: "Bring your filing questions and get live support — return walkthroughs, IRS updates, and complex form guidance.",
      time: "9:30 AM EST",
      pillar: "General Support",
      byDay: "MO",
    },
    {
      id: "tue",
      dayName: "Tuesday",
      title: "Tech Tuesday",
      desc: "Sync CRMs, automate client follow-ups, add calendar scheduling, and cut admin time with modern tools.",
      time: "2:00 PM EST",
      pillar: "Tax Business Automation",
      byDay: "TU",
    },
    {
      id: "wed",
      dayName: "Wednesday",
      title: "Feature Trainings & Midnight Madness",
      desc: "Deep-dive feature trainings at 10:00 PM EST, followed by Midnight Madness software training at 12:00 AM EST. Sessions recorded for members.",
      time: "10:00 PM & 12:00 AM EST",
      pillar: "Software Training",
      byDay: "WE",
    },
    {
      id: "thu",
      dayName: "Thursday",
      title: "Tap In Thursday",
      desc: "Live coworking and coaching. Network with other owners, share wins, and review your operations and marketing.",
      time: "3:00 PM EST",
      pillar: "Networking & Coaching",
      byDay: "TH",
    },
    {
      id: "fri",
      dayName: "Friday",
      title: "Ask an Attorney",
      desc: "Live legal Q&A with our allied tax & corporate attorneys. Review business structure setups, contract compliance, and ERO regulations. *(Held on the 2nd Friday of each month. Guidance only, not legal representation.)*",
      time: "12:00 PM EST",
      frequency: "2nd Friday of each month",
      pillar: "Legal & Entity Structure",
      byDay: "FR",
    },
  ];

  const communityBenefits = [
    {
      name: "Live Office Hours",
      desc: "Join daily Zoom coworking sessions with direct advisor support.",
      icon: Users,
    },
    {
      name: "Tax Support Hotline",
      desc: "Get real-time help with complex returns and filing diagnostics.",
      icon: Phone,
    },
    {
      name: "CRM Implementation",
      desc: "Step-by-step CRM and intake setup walkthroughs each Tuesday.",
      icon: Settings,
    },
    {
      name: "Attorney Q&A Sessions",
      desc: "Ask compliance and legal structure questions directly.",
      icon: Scale,
    },
    {
      name: "Bookkeeping Guidance",
      desc: "Learn how to offer year-round bookkeeping services.",
      icon: BookOpen,
    },
    {
      name: "Wellness Resources",
      desc: "Manage tax-season stress with curated support.",
      icon: Heart,
    },
    {
      name: "Business Growth Workshops",
      desc: "Monthly sessions on client acquisition and brand growth.",
      icon: TrendingUp,
    },
    {
      name: "Networking Opportunities",
      desc: "Connect with EROs and allied professionals at member events.",
      icon: Globe,
    },
  ];

  const openOfficeFaqs = [
    {
      question: "Who can join the Open Office?",
      answer: "The Open Office is open to tax professionals, bookkeepers, accountants, entrepreneurs, and small business owners. Join live coworking sessions every weekday starting Monday at 9:30 AM EST at https://thesectorsopenoffice.com/the-open-office"
    },
    {
      question: "Are sessions recorded?",
      answer: "Yes! Tuesday (Tech Tuesday at 2:00 PM EST), Wednesday (Feature Trainings at 10:00 PM EST & Midnight Madness at 12:00 AM EST), Thursday (Tap In Thursday at 3:00 PM EST), and Friday (Ask an Attorney on the 2nd Friday of each month at 12:00 PM EST) sessions are recorded and accessible anytime at https://thesectorsopenoffice.com/the-open-office"
    },
    {
      question: "What can I ask the attorneys?",
      answer: "Our allied attorneys answer questions about business structure (LLCs, S-Corps), contracts, tax office compliance, and IRS e-file agent guidelines. *Consultations provide guidance and do not form direct legal representation.*"
    },
    {
      question: "Can I invite my team?",
      answer: "Yes! You can invite your staff, sub-office agents, and team members to join all live coworking sessions, software training blocks, and Q&A streams directly at https://thesectorsopenoffice.com/the-open-office"
    }
  ];

  const activeDaySchedule = weeklySchedule.find((item) => item.id === activeDay) || weeklySchedule[0];

  // Dynamic .ics calendar generator
  const downloadIcs = (item: typeof weeklySchedule[0]) => {
    const rrule = item.id === "fri" ? "FREQ=MONTHLY;BYDAY=2FR" : `FREQ=WEEKLY;BYDAY=${item.byDay}`;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Sector of Collectives//Open Office Schedule//EN",
      "BEGIN:VEVENT",
      `SUMMARY:The Sector of Collectives: ${item.title} (${item.dayName})`,
      `DESCRIPTION:Join our weekly live block. Topic: ${item.desc}`,
      `LOCATION:Zoom Link Provided in Portal`,
      `RRULE:${rrule}`,
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
    <div ref={pageRef} className="relative overflow-hidden bg-[#0A0908] min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.10)_0%,transparent_60%)] pointer-events-none -z-10" />

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
              <span className="gsap-reveal inline-flex w-fit items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
                Daily Live Support &amp; Coworking Ecosystem
              </span>
              <h1 className="gsap-reveal font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-semibold tracking-normal leading-tight text-white">
                The Open Office: Your Daily Home Base
              </h1>
              <p className="gsap-reveal text-sm text-[#EDE9E0]/55 leading-relaxed line-clamp-3">
                The heart of our ecosystem. Live coworking every weekday — real answers, Zoom streams, and daily access to peers and attorneys.
              </p>
              <div className="gsap-reveal pt-4">
                <a
                  href={OPEN_OFFICE_MAIN_FUNNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold px-5 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md inline-block text-center"
                >
                  Join Open Office Live
                </a>
              </div>
            </div>

            {/* Right: Coworking Image with Floating Animation */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-[#FFB26A]/15 shadow-2xl shadow-black/60" style={{animation: 'float 6s ease-in-out infinite'}}>
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0F0D0C] border-b border-[#FFB26A]/10 flex items-center px-4 gap-1.5 z-10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/65" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFB26A]/90" />
                <span className="ml-4 text-xs text-[#EDE9E0]/35 font-mono">Open Office — Daily Coworking</span>
              </div>
              <Image
                src="/open_office_coworking.png"
                alt="Tax professionals collaborating on a group video call coworking session in a modern home office"
                width={1440}
                height={810}
                className="w-full h-full object-cover mt-8"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-[#0A0908]/80 backdrop-blur border border-[#FFB26A]/20 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#FFB26A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse" />
                  Daily Coworking Sessions · Mon–Fri
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">

        {/* VSL — Watch the Open Office Experience */}
        <div className="gsap-reveal space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              Watch & Learn
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-normal uppercase">
              See the Open Office in Action
            </h2>
            <p className="text-xs text-[#EDE9E0]/35">
              A quick look at daily coworking, live expert access, and year-round community support.
            </p>
          </div>
          <div className="glass-card p-2 sm:p-3 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#FFB26A]/15">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/M3sJ0nSRVmg"
                title="The Sector of Collectives — Open Office Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div
          ref={statsContainerRef}
          className="bg-gradient-to-b from-[#161412]/80 to-[#0A0908] border border-[#FFB26A]/15 rounded-2xl py-12 px-6 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span
                ref={membersValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Community Members
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Tax professionals, bookkeepers, and business owners collaborating daily
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={sessionsValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Annual Coworking Sessions
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Year-round support, Mon–Fri live coworking and expert consultations
              </p>
            </div>
            <div className="space-y-2">
              <span
                ref={supportValRef}
                className="text-4xl md:text-5xl font-black text-[#FFB26A] font-mono block"
              >
                0/7
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Days of Support Access
              </span>
              <p className="text-xs text-[#EDE9E0]/35">
                Attorney Q&As, bookkeeping guidance, and wellness resources available
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Programming Interactive Component */}
        <div className="gsap-reveal glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Weekly Live Schedule</h2>
            <p className="text-xs text-[#EDE9E0]/50 mt-1">Click any day for session details and perks.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            {/* Left: Calendar Grid (Mon–Fri) */}
            <div className="lg:col-span-2">
              {/* Calendar chrome header */}
              <div className="bg-[#161412] border border-[#FFB26A]/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Window header bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#FFB26A]/20 bg-[#0F0D0C]">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#FFB26A]" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Open Office · Weekly</span>
                  </div>
                  <span className="text-xs font-mono text-[#EDE9E0]/50 bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2 py-1 rounded">Mon – Fri · Recurring</span>
                </div>

                {/* Day column headers */}
                <div className="grid grid-cols-5 border-b border-[#FFB26A]/20">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.id}
                      className={`text-center py-2 text-xs font-bold uppercase tracking-widest border-r border-[#FFB26A]/10 last:border-r-0 ${
                        activeDay === item.id ? "text-[#FFB26A]" : "text-[#EDE9E0]/40"
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
                        className={`group relative flex flex-col items-start p-3 sm:p-4 border-r border-b border-[#FFB26A]/10 last:border-r-0 text-left transition-all duration-200 cursor-pointer min-h-[160px] ${
                          isActive
                            ? "bg-[#FFB26A]/10 border-b-[#FFB26A]/40"
                            : "hover:bg-[#FFB26A]/5"
                        }`}
                      >
                        {/* Day number */}
                        <span className={`text-base font-black font-mono mb-2 leading-none w-7 h-7 flex items-center justify-center rounded-full transition-all ${
                          isActive ? "bg-[#FFB26A] text-black" : "text-[#EDE9E0]/40 group-hover:text-[#EDE9E0]/60"
                        }`}>
                          {idx + 1}
                        </span>

                        {/* Time badge */}
                        <span className={`text-xs font-mono mb-2 flex items-center gap-1 ${isActive ? "text-[#FFB26A]" : "text-[#EDE9E0]/40 group-hover:text-[#EDE9E0]/50"}`}>
                          <Clock className="w-2.5 h-2.5 shrink-0" />
                          {item.time}
                        </span>

                        {/* Session title */}
                        <p className={`text-xs font-bold uppercase tracking-wide leading-tight line-clamp-2 ${
                          isActive ? "text-white" : "text-[#EDE9E0]/40 group-hover:text-[#EDE9E0]/60"
                        }`}>
                          {item.title}
                        </p>

                        {/* Pillar tag */}
                        <span className={`mt-auto pt-2 text-[7px] font-semibold uppercase tracking-wider leading-tight line-clamp-1 ${
                          isActive ? "text-[#FFB26A]" : "text-[#EDE9E0]/35 group-hover:text-[#EDE9E0]/40"
                        }`}>
                          {item.pillar}
                        </span>

                        {/* Active indicator dot */}
                        {isActive && (
                          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Detail + Perks Panel */}
            <div className="bg-[#161412] border border-[#FFB26A]/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col">
              {/* Window header bar */}
              <div className="px-5 py-3.5 border-b border-[#FFB26A]/20 bg-[#0F0D0C] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#EDE9E0]/60">Session Details</span>
              </div>

              {/* Session info */}
              <div className="p-5 space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-2.5 py-1 rounded">
                    {activeDaySchedule.pillar}
                  </span>
                  <span className="text-xs text-[#FFB26A] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activeDaySchedule.time}
                  </span>
                  {activeDaySchedule.frequency && (
                    <span className="text-[10px] text-[#FFB26A] font-mono bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2 py-0.5 rounded">
                      {activeDaySchedule.frequency}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider leading-snug">{activeDaySchedule.title}</h3>
                <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">{activeDaySchedule.desc}</p>

                {/* Divider */}
                <div className="border-t border-[#FFB26A]/20 pt-3">
                  <h4 className="text-xs font-bold text-[#EDE9E0]/50 uppercase tracking-wider mb-2.5">Participant Perks</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-[#EDE9E0]/60">
                      <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0" /> Live text-based Q&amp;A
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#EDE9E0]/60">
                      <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0" /> Screen-sharing diagnostics
                    </li>
                    <li className="flex items-center gap-2 text-xs text-[#EDE9E0]/60">
                      <Check className="w-3.5 h-3.5 text-[#FFB26A] shrink-0" /> Replay recordings vault access
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="p-5 pt-0 flex flex-col gap-2 border-t border-[#FFB26A]/20">
                {/* <button
                  onClick={() => downloadIcs(activeDaySchedule)}
                  className="w-full bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add to Calendar (.ics)
                </button> */}
                <a
                  href={
                    activeDaySchedule.id === "tue" ? TECH_TUESDAY_LINK
                    : activeDaySchedule.id === "wed" ? MIDNIGHT_MADNESS_LINK
                    : activeDaySchedule.id === "thu" ? TAP_IN_THURSDAY_LINK
                    : OPEN_OFFICE_ZOOM_LINK
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0A0908] border border-[#FFB26A]/30 text-[#EDE9E0]/70 hover:text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider text-center inline-block"
                >
                  Access Stream Details
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="gsap-reveal text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-normal uppercase">Open Office Community Benefits</h2>
            <p className="text-xs text-[#EDE9E0]/35 mt-2">
              One membership that bundles the tools, network, and events to grow your tax business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityBenefits.map((b, i) => {
              const IconComponent = b.icon;
              return (
                <TiltCard key={b.name} delay={(i % 4) * 0.08} className="glass-card glass-card-hover p-5">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[#FFB26A]">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <h3 className="font-display text-xs font-semibold text-white uppercase tracking-wider">{b.name}</h3>
                  </div>
                  <p className="text-xs text-[#EDE9E0]/35 leading-relaxed">{b.desc}</p>
                </TiltCard>
              );
            })}
          </div>
        </div>
        {/* Pricing / Packages */}
        <div className="space-y-16">
          <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              Membership &amp; Pricing Plans
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Transparent Membership Built For Scale
            </h2>
            <p className="text-xs text-[#EDE9E0]/50 max-w-2xl mx-auto leading-relaxed">
              Pick the tier for your business stage — from independent Tax Pros to multi-office Service Bureaus.
            </p>
          </div>

          {/* Quick Summary Table */}
          <div className="gsap-reveal max-w-4xl mx-auto bg-[#140A06]/80 border border-[#FFB26A]/20 rounded-xl p-4 sm:p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-xs font-extrabold text-[#FFB26A] uppercase tracking-widest mb-4 text-center">
              Membership Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Collaborate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: Tax Pros</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$97</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>

              <div className="bg-[#24130C] border border-[#FFB26A]/40 rounded-lg p-4 flex items-center justify-between shadow-md relative">
                <span className="absolute -top-2 right-3 bg-[#FFB26A] text-[#0A0908] font-black text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                  Popular
                </span>
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Accelerate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: EROs</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$297</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>

              <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Dominate</div>
                  <div className="text-[11px] text-[#EDE9E0]/50 mt-0.5">Ideal For: Service Bureaus</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FFB26A] font-mono">$597</span>
                  <span className="text-[10px] text-[#EDE9E0]/40 block">/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Detailed Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* TIER 1: COLLABORATE */}
            <TiltCard
              tilt={4}
              delay={0}
              className="flex flex-col justify-between bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-2xl p-6 sm:p-8 relative space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                    TIER ONE
                  </span>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/50 uppercase tracking-wider">
                    For Tax Pros
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    COLLABORATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$97</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/10 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">Perfect For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    New Tax Professionals, Existing Preparers, Virtual Assistants, Bookkeepers &amp; Professionals learning the business.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/5 border border-[#FFB26A]/20 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/70 mb-0.5">Focus</span>
                  Learn. Implement. Build confidence.
                </div>

                <hr className="border-[#FFB26A]/10" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Includes:</p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Weekly Open Office", desc: "Unlimited coworking sessions" },
                      { title: "Tech Tuesday", desc: "Technology Training, Automation, CRM, AI, Marketing" },
                      { title: "Live Q&A", desc: "Ask questions in real time" },
                      { title: "Accountability", desc: "Body doubling, Implementation hours, Goal tracking" },
                      { title: "Resource Library", desc: "Templates, Checklists, Downloads, Worksheets" },
                      { title: "Community", desc: "Networking, Partner introductions, Referral opportunities" },
                      { title: "Member Pricing", desc: "Discounted workshops, Courses, Events, Software support" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/70">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/60">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Learn tax faster</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Stop getting stuck</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Meet peers &amp; mentors</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build confidence</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Create your first systems</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("software")}
                  className="w-full py-3 px-4 rounded-lg text-xs font-extrabold bg-[#1C0F0A] hover:bg-[#28160E] border border-[#FFB26A]/30 text-[#FFB26A] hover:text-white transition-all cursor-pointer uppercase tracking-wider shadow-md"
                >
                  Join Collaborate — $97/mo
                </button>
              </div>
            </TiltCard>

            {/* TIER 2: ACCELERATE (MOST POPULAR) */}
            <TiltCard
              tilt={4}
              delay={0.1}
              className="flex flex-col justify-between bg-[#24130C]/95 border-2 border-[#FFB26A] rounded-2xl p-6 sm:p-8 relative space-y-6 shadow-2xl shadow-[#FFB26A]/10 scale-[1.02]"
            >
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB26A] to-[#F4845F] text-[#0A0908] font-black text-xs tracking-widest px-4 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </span>

              <div className="space-y-5">
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0A0908] bg-[#FFB26A] px-2.5 py-1 rounded font-mono">
                    TIER TWO
                  </span>
                  <span className="text-[10px] font-bold text-[#FFB26A] uppercase tracking-wider">
                    For EROs &amp; Growing Firms
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    ACCELERATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$297</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/20 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    EROs, Growing Firms, Firm Owners &amp; Professionals managing team members.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/10 border border-[#FFB26A]/30 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/80 mb-0.5">Focus</span>
                  Build a real business. Increase revenue. Scale confidently.
                </div>

                <hr className="border-[#FFB26A]/20" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#FFB26A] uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Everything in Collaborate PLUS:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Monthly Strategy Session", desc: "Growth planning, Quarterly planning, Revenue planning" },
                      { title: "ERO Roundtables", desc: "Compliance, Operations, Bank Products, IRS Updates, Industry changes" },
                      { title: "Concierge Support", desc: "Priority Office Hours, Questions answered faster, Implementation assistance" },
                      { title: "CRM Support", desc: "GoHighLevel, Automation, Funnels, Pipelines, Forms" },
                      { title: "Client Experience Systems", desc: "Onboarding, Retention, Review systems, Referral systems" },
                      { title: "AI Business Systems", desc: "Prompt Library, AI Assistants, Workflow Automations" },
                      { title: "Revenue Growth Workshops", desc: "New services, Pricing, Packaging, Recurring Revenue" },
                      { title: "Member Marketplace", desc: "Promote your services, Find collaborators, Referral opportunities" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/85">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/30 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/70">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build a real business</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Increase revenue &amp; margins</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Improve client operations</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Scale team confidently</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("ero")}
                  className="w-full py-3.5 px-4 rounded-lg text-xs font-black bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#0A0908] transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FFB26A]/20"
                >
                  Get Accelerate — $297/mo
                </button>
              </div>
            </TiltCard>

            {/* TIER 3: DOMINATE */}
            <TiltCard
              tilt={4}
              delay={0.2}
              className="flex flex-col justify-between bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-2xl p-6 sm:p-8 relative space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2.5 py-1 rounded">
                    TIER THREE
                  </span>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/50 uppercase tracking-wider">
                    Service Bureaus
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">
                    DOMINATE
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#FFB26A] font-mono">$597</span>
                    <span className="text-xs text-[#EDE9E0]/50 font-medium">/month</span>
                  </div>
                </div>

                <div className="bg-[#1C0F0A] border border-[#FFB26A]/10 rounded-lg p-3 space-y-1.5">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">Designed For:</p>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    Service Bureaus, Multi-office Firms, Firm Owners &amp; Industry Leaders.
                  </p>
                </div>

                <div className="bg-[#FFB26A]/5 border border-[#FFB26A]/20 rounded-lg p-3 text-xs text-[#FFB26A] font-semibold">
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#FFB26A]/70 mb-0.5">Focus</span>
                  Build a self-sustaining firm. Create recurring revenue. Scale multiple locations.
                </div>

                <hr className="border-[#FFB26A]/10" />

                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#FFB26A] uppercase tracking-wider flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" /> Everything in Accelerate PLUS:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      { title: "Monthly Executive Advisory", desc: "Leadership calls, Scaling, Hiring, Growth planning" },
                      { title: "Service Bureau Leadership", desc: "Recruiting, Retention, Office growth, Expansion" },
                      { title: "Team Training", desc: "Invite staff, Tax Pros, EROs, Managers, Virtual Assistants (Everyone trains together)" },
                      { title: "Business Audits", desc: "Marketing, Systems, Operations, Sales, Client Journey, Automation" },
                      { title: "Partner Introductions", desc: "Preferred Vendors, Technology Partners, Funding, Bookkeeping, Legal, Insurance, Marketing" },
                      { title: "Priority Concierge", desc: "Fastest response times, Dedicated implementation guidance, Resource coordination" },
                      { title: "Early Access", desc: "Beta trainings, Templates, Programs, Pilot opportunities" },
                      { title: "Private Leadership Community", desc: "Mastermind, CEO discussions, Collaboration, Joint Ventures" },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-2 text-xs text-[#EDE9E0]/70">
                        <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white font-semibold">{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <div className="bg-[#1C0F0A] border border-[#FFB26A]/15 rounded-lg p-3 space-y-1.5">
                  <p className="text-[10px] font-extrabold text-[#FFB26A] uppercase tracking-wider">Outcomes:</p>
                  <ul className="space-y-1 text-xs text-[#EDE9E0]/60">
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Build a self-sustaining firm</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Create recurring revenue</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Grow &amp; train your entire team</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Scale multiple office locations</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-400 shrink-0" /> Become a regional market leader</li>
                  </ul>
                </div>

                <button
                  onClick={() => openModal("bureau")}
                  className="w-full py-3 px-4 rounded-lg text-xs font-extrabold bg-[#1C0F0A] hover:bg-[#28160E] border border-[#FFB26A]/30 text-[#FFB26A] hover:text-white transition-all cursor-pointer uppercase tracking-wider shadow-md"
                >
                  Apply for Dominate — $597/mo
                </button>
              </div>
            </TiltCard>
          </div>

          {/* Specialized Benefits by Audience Section */}
          <div className="gsap-reveal space-y-8 pt-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
                Tailored Growth Pathways
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Specialized Benefits by Audience
              </h3>
              <p className="text-xs text-[#EDE9E0]/45">
                Every tier is built around the challenges of your role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Audience 1: Tax Professionals */}
              <div className="bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/15">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">Tax Professionals</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Collaborate ($97/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/40 uppercase bg-[#1C0F0A] px-2 py-1 rounded border border-[#FFB26A]/10">
                    Tier 1
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Weekly tax education",
                    "Tax law updates",
                    "Open Office coworking",
                    "Tech Tuesday workshops",
                    "Resource library",
                    "Accountability sessions",
                    "Community networking",
                    "Member discounts",
                    "Referral opportunities",
                    "Pathway to becoming an ERO",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/75">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audience 2: EROs */}
              <div className="bg-[#24130C]/90 border border-[#FFB26A]/35 rounded-xl p-6 space-y-4 shadow-lg shadow-[#FFB26A]/5">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/25">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">EROs &amp; Firm Owners</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Accelerate ($297/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#0A0908] uppercase bg-[#FFB26A] px-2 py-1 rounded font-extrabold">
                    Tier 2
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#FFB26A]/90 italic">Everything above plus:</p>
                <ul className="space-y-2">
                  {[
                    "ERO implementation support",
                    "EFIN operational guidance",
                    "IRS operations best practices",
                    "CRM and automation systems",
                    "Pricing strategy",
                    "Client onboarding systems",
                    "Bank product guidance",
                    "Marketing systems",
                    "Referral systems",
                    "Monthly strategy sessions",
                    "Priority concierge support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/85">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audience 3: Service Bureaus */}
              <div className="bg-[#140A06]/90 border border-[#FFB26A]/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#FFB26A]/15">
                  <div>
                    <h4 className="text-base font-extrabold text-white uppercase tracking-wider">Service Bureaus</h4>
                    <p className="text-[11px] text-[#FFB26A] font-bold">Dominate ($597/mo)</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#EDE9E0]/40 uppercase bg-[#1C0F0A] px-2 py-1 rounded border border-[#FFB26A]/10">
                    Tier 3
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#FFB26A]/90 italic">Everything above plus:</p>
                <ul className="space-y-2">
                  {[
                    "Multi-office growth strategy",
                    "Recruiting systems",
                    "Office onboarding SOPs",
                    "Team leadership training",
                    "Service Bureau operations",
                    "Performance dashboards",
                    "Scaling systems",
                    "Executive advisory",
                    "Leadership mastermind",
                    "Preferred partner access",
                    "Team-wide Open Office access",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#EDE9E0]/75">
                      <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="gsap-reveal space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              Community Voices
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-normal uppercase">
              Tax Professionals Thriving Together
            </h2>
            <p className="text-xs text-[#EDE9E0]/35">
              Members who grew their businesses through community support and expert guidance.
            </p>
          </div>
          <TestimonialCarousel />
        </div>

        {/* FAQs */}
        <div className="gsap-reveal">
          <FaqAccordion items={openOfficeFaqs} title="FAQs" />
        </div>

        {/* Community Banner CTA */}
        <TiltCard tilt={3} className="glass-card p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center gap-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-3 py-1 rounded">
              Open Office Community
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white uppercase tracking-wider">Join More Than Just a Workspace</h3>
            <p className="text-xs text-[#EDE9E0]/45 leading-relaxed">
              Join the Open Office for daily coworking, Tech Tuesday workshops, Attorney Q&As, and year-round business guidance.
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <a
              href={OPEN_OFFICE_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3.5 px-8 rounded-lg text-xs transition-all shadow-md cursor-pointer uppercase tracking-wider inline-block text-center"
            >
              Get Started Now
            </a>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

