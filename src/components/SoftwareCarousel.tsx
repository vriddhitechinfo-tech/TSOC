"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSoftwareCarousel } from "@/hooks/useSoftwareCarousel";

function DashboardScreenshot({ alt }: { alt: string }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/tax_software_dashboard.png"
        alt={alt}
        fill
        className="object-cover object-top"
      />
    </div>
  );
}

interface SoftwareScreen {
  id: string;
  title: string;
  description: string;
  mockupContent: React.ReactNode;
}

export default function SoftwareCarousel() {
  const screens: SoftwareScreen[] = [
    {
      id: "dashboard",
      title: "Consolidated Office Metrics",
      description:
        "Monitor real-time filing stats, preparer volumes, IRS acceptance rates, and bank product statuses in a central dashboard.",
      mockupContent: (
        <DashboardScreenshot alt="TSOC tax software dashboard showing office filing metrics and IRS acceptance rates" />
      ),
    },
    {
      id: "forms",
      title: "Form Uploads",
      description:
        "Quickly enter W-2s, Schedules, and business expenses. The software runs background compliance checks, flagging errors in real-time.",
      mockupContent: (
        <DashboardScreenshot alt="TSOC tax software form entry screen with real-time compliance diagnostics" />
      ),
    },
    {
      id: "tracking",
      title: "Real-time IRS Acknowledgment",
      description:
        "Direct server connections with the IRS E-file gateway. Get immediate status notifications (Transmitted, Rejected, or Accepted) within minutes.",
      mockupContent: (
        <DashboardScreenshot alt="TSOC tax software IRS e-file gateway transmission and acceptance tracking" />
      ),
    },
    {
      id: "bank",
      title: "Bank Product Integration",
      description:
        "Securely enroll clients in bank products. Deduct preparation fees directly from the client's refund and issue advance payouts to build trust.",
      mockupContent: (
        <DashboardScreenshot alt="TSOC tax software bank product enrollment and fee disbursement screen" />
      ),
    },
  ];

  const { activeIndex, trackRef, cardRefs, scrollToIndex, goPrev, goNext } =
    useSoftwareCarousel(screens.length);

  return (
    <div className="w-full space-y-6">
      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${s.title}`}
            className="h-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === activeIndex ? "32px" : "10px",
              backgroundColor:
                i === activeIndex ? "#FFB26A" : "rgba(255,178,106,0.15)",
            }}
          />
        ))}
      </div>

      {/* Horizontal swipeable gallery */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 px-[6%] sm:px-[10%] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {screens.map((screen, i) => (
            <div
              key={screen.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="snap-center shrink-0 w-[88%] sm:w-[78%] lg:w-[70%] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1C0F0A]/40 border border-[#FFB26A]/30 rounded-2xl p-6 md:p-8 backdrop-blur-md"
            >
              <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded bg-[#FFB26A]/10 border border-[#FFB26A]/20 text-[#FFB26A] font-black text-xs">
                  0{i + 1}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
                  {screen.title}
                </h3>
                <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                  {screen.description}
                </p>
              </div>

              {/* Browser Mockup */}
              <div className="lg:col-span-8 w-full border border-[#FFB26A]/20 rounded-xl overflow-hidden bg-[#1C0F0A] shadow-xl">
                <div className="bg-[#1C0F0A] px-4 py-2.5 border-b border-[#FFB26A]/35 flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB26A]/40 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB26A]/65 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB26A]/90 inline-block" />
                  <span className="text-xs text-[#EDE9E0]/40 pl-4 font-mono font-bold tracking-wider select-none truncate">
                    https://cloud.tsoc-portal.com/office/dashboard
                  </span>
                </div>
                <div className="h-[240px] w-full relative">
                  {screen.mockupContent}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow navigation */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous screen"
          className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#1C0F0A] border border-[#FFB26A]/30 text-[#FFB26A] hover:bg-[#FFB26A]/10 hover:border-[#FFB26A]/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === screens.length - 1}
          aria-label="Next screen"
          className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#1C0F0A] border border-[#FFB26A]/30 text-[#FFB26A] hover:bg-[#FFB26A]/10 hover:border-[#FFB26A]/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
