"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Video, MessageCircleQuestion, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";
import { OPEN_OFFICE_ZOOM_LINK } from "@/lib/constants";

const DAYS = [
  { short: "Mon", title: "Open Office Hours" },
  { short: "Tue", title: "Tech Tuesday" },
  { short: "Wed", title: "Midnight Madness" },
  { short: "Thu", title: "Tap In Thursday" },
  { short: "Fri", title: "Ask an Attorney" },
];

export default function OpenOfficeSpotlight() {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll(".gsap-oo-el");
      const tween = gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1C0F0A] to-[#140A06] overflow-hidden border-y border-[#FFB26A]/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,106,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pitch + CTAs */}
          <div className="space-y-6">
            <span className="gsap-oo-el inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#2A160E]/50 border border-[#FFB26A]/20 px-3 py-1 rounded">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse" />
              Available Every Day, Mon&ndash;Fri
            </span>
            <h2 className="gsap-oo-el font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase leading-tight">
              The Open Office: Your Daily Support Team
            </h2>
            <p className="gsap-oo-el text-sm text-[#EDE9E0]/60 leading-relaxed max-w-lg">
              Never file alone. Every weekday, join live coworking, tech training,
              attorney Q&amp;As, and business coaching &mdash; included with every
              membership. It&apos;s the reason members stay.
            </p>

            <div className="gsap-oo-el flex flex-wrap gap-3 pt-2">
              {DAYS.map((d) => (
                <span
                  key={d.short}
                  className="text-[10px] font-bold uppercase tracking-wider text-[#EDE9E0]/50 bg-[#2A160E]/40 border border-[#FFB26A]/10 px-2.5 py-1 rounded"
                >
                  {d.short} &middot; {d.title}
                </span>
              ))}
            </div>

            <div className="gsap-oo-el flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <button
                onClick={() => openModal("openoffice")}
                className="inline-flex items-center justify-center gap-2 bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Join Open Office Live
              </button>
              <a
                href={OPEN_OFFICE_ZOOM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2A160E] hover:bg-[#3D2216] text-[#EDE9E0]/80 hover:text-white border border-[#FFB26A]/20 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                <Video className="w-3.5 h-3.5" />
                Join Zoom
              </a>
              <button
                onClick={() => openModal("openoffice")}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#2A160E]/60 text-[#EDE9E0]/70 hover:text-white border border-[#FFB26A]/15 px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <MessageCircleQuestion className="w-3.5 h-3.5" />
                Ask Questions Live
              </button>
            </div>

            <Link
              href="/open-office"
              className="gsap-oo-el inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFB26A]/80 hover:text-[#FFB26A] pt-2"
            >
              See the full weekly schedule
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: Live-feel schedule card */}
          <div className="gsap-oo-el glass-card p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#FFB26A]/15 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                This Week in the Open Office
              </span>
              <span className="text-[10px] font-mono text-[#EDE9E0]/40 bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-2 py-1 rounded">
                Live Daily
              </span>
            </div>
            <ul className="space-y-3">
              {DAYS.map((d) => (
                <li
                  key={d.short}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span className="font-bold text-[#FFB26A] uppercase tracking-wider w-10 shrink-0">
                    {d.short}
                  </span>
                  <span className="flex-1 text-[#EDE9E0]/70">{d.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
