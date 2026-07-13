"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { FileText, Landmark, ChevronLeft, ChevronRight } from "lucide-react";

interface SoftwareScreen {
  id: string;
  title: string;
  description: string;
  mockupContent: React.ReactNode;
}

export default function SoftwareCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const screens: SoftwareScreen[] = [
    {
      id: "dashboard",
      title: "Consolidated Office Metrics",
      description: "Monitor real-time filing stats, preparer volumes, IRS acceptance rates, and bank product statuses in a central dashboard.",
      mockupContent: (
        <div className="w-full h-full bg-[#0d1526] text-white p-4 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FF9F76]/15 pb-2 mb-3">
            <span className="font-bold text-[#FF9F76]">THE SECTOR OF COLLECTIVES CORE • OFFICE CONSOLE</span>
            <span className="bg-[#FF9F76] text-[#FF9F76] px-1.5 py-0.5 rounded text-xs font-bold border border-[#FF9F76]/35">ACTIVE SEASON</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#0d1526] border border-[#FF9F76]/15 p-2 rounded">
              <span className="text-[#EDE9E0]/50 block uppercase text-[7px]">Total Prepared</span>
              <span className="text-base font-black text-white font-sans">412</span>
            </div>
            <div className="bg-[#0d1526] border border-[#FF9F76]/15 p-2 rounded">
              <span className="text-[#EDE9E0]/50 block uppercase text-[7px]">IRS Accepted</span>
              <span className="text-base font-black text-[#FF9F76] font-sans">99.2%</span>
            </div>
            <div className="bg-[#0d1526] border border-[#FF9F76]/15 p-2 rounded">
              <span className="text-[#EDE9E0]/50 block uppercase text-[7px]">Bank Payouts</span>
              <span className="text-base font-black text-[#FF9F76] font-sans">$148K</span>
            </div>
          </div>

          {/* Active Queue Table */}
          <div className="mt-3 flex-1 bg-[#0d1526] border border-[#FF9F76]/15 rounded p-2 overflow-hidden">
            <div className="flex justify-between border-b border-[#FF9F76]/15 pb-1 mb-1 text-[7px] text-[#EDE9E0]/50 uppercase font-black">
              <span>Client Name</span>
              <span>Form</span>
              <span>IRS Status</span>
              <span>Bank Product</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[#EDE9E0]/70">
                <span>Johnson, Alicia</span>
                <span>1040, Sch C</span>
                <span className="text-[#FF9F76] font-bold">ACCEPTED</span>
                <span className="text-[#FF9F76]">TPG ADVANCE</span>
              </div>
              <div className="flex justify-between text-[#EDE9E0]/70">
                <span>Rodriguez, Miguel</span>
                <span>1040</span>
                <span className="text-[#FF9F76] font-bold">ACCEPTED</span>
                <span>DIRECT DEPOSIT</span>
              </div>
              <div className="flex justify-between text-[#EDE9E0]/70">
                <span>Smith, Tyrone</span>
                <span>1065 Business</span>
                <span className="text-[#FF9F76] font-bold">TRANSMITTED</span>
                <span>HOLD</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "forms",
      title: "Interactive Form Preparation",
      description: "Quickly enter W-2s, Schedules, and business expenses. The software runs background compliance checks, flagging errors in real-time.",
      mockupContent: (
        <div className="w-full h-full bg-[#0d1526] text-white p-4 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FF9F76]/15 pb-2 mb-2">
            <div className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-[#FF9F76]" />
              <span className="font-bold">Form 1040 (Filer: ALICIA JOHNSON)</span>
            </div>
            <span className="text-[#FF9F76] font-sans font-black">Refund: $6,412</span>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1 pt-1">
            <div className="space-y-2 bg-[#0d1526] p-2.5 rounded border border-[#FF9F76]/10">
              <span className="text-[#EDE9E0]/50 uppercase text-[7px] font-bold block">Taxpayer Intake Data</span>
              <div className="space-y-1">
                <div>Wages (W2 Box 1): <span className="text-white">$54,200</span></div>
                <div>Federal WH (W2 Box 2): <span className="text-white">$4,850</span></div>
                <div>Schedule C Net Profit: <span className="text-white">$12,410</span></div>
                <div>Dependents: <span className="text-[#FF9F76]">2 Qual. Children</span></div>
              </div>
            </div>

            <div className="space-y-2 bg-[#FF9F76]/10 p-2.5 rounded border border-[#FF9F76]/25">
              <span className="text-[#FF9F76] uppercase text-[7px] font-bold block">Real-time Diagnostics</span>
              <div className="space-y-1.5 text-[#EDE9E0]/70">
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F76] shrink-0" />
                  <span>W-2 EIN Verified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F76] shrink-0" />
                  <span>EIC Eligibility Met</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F76] shrink-0 animate-pulse" />
                  <span className="text-white font-bold">Add Schedule C Expense Detail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tracking",
      title: "Real-time IRS Acknowledgment",
      description: "Direct server connections with the IRS E-file gateway. Get immediate status notifications (Transmitted, Rejected, or Accepted) within minutes.",
      mockupContent: (
        <div className="w-full h-full bg-[#0d1526] text-white p-4 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FF9F76]/15 pb-2">
            <span className="font-bold">IRS GATEWAY TRANSMISSION STAGE</span>
            <span className="text-[#EDE9E0]/50">EFIN: 564201</span>
          </div>

          <div className="flex items-center justify-around py-4">
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-[#FF9F76] border border-[#FF9F76] flex items-center justify-center text-[#FF9F76] font-bold">✓</div>
              <span className="text-[7px] text-[#EDE9E0]/60">Transmitted</span>
            </div>
            <div className="h-0.5 w-10 bg-[#FF9F76]" />
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-[#FF9F76] border border-[#FF9F76] flex items-center justify-center text-[#FF9F76] font-bold">✓</div>
              <span className="text-[7px] text-[#EDE9E0]/60">IRS Gateway</span>
            </div>
            <div className="h-0.5 w-10 bg-[#FF9F76]" />
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-[#FF9F76] border border-[#FF9F76] flex items-center justify-center text-[#FF9F76] font-bold">✓</div>
              <span className="text-[7px] text-[#EDE9E0]/60">Accepted</span>
            </div>
          </div>

          <div className="bg-[#0d1526] border border-[#FF9F76]/15 rounded p-2.5 space-y-1">
            <div className="text-[#EDE9E0]/50 uppercase text-[7px] font-bold">IRS ACK (Submission ID: 1040-564201-2026)</div>
            <div className="text-[#EDE9E0]/70">Form: 1040 U.S. Individual Income Tax Return</div>
            <div className="text-[#FF9F76] font-bold">Status: ACCEPTED (Acknowledge Code: 00)</div>
            <div className="text-[#EDE9E0]/50">Processed at: 2026-07-07 17:41:00 EST</div>
          </div>
        </div>
      ),
    },
    {
      id: "bank",
      title: "Direct Refund Fee Deduction",
      description: "Securely enroll clients in bank products. Deduct preparation fees directly from the client's refund and issue advance payouts to build trust.",
      mockupContent: (
        <div className="w-full h-full bg-[#0d1526] text-white p-4 font-mono text-xs flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FF9F76]/15 pb-2 mb-2">
            <div className="flex items-center space-x-1">
              <Landmark className="w-3.5 h-3.5 text-[#FF9F76]" />
              <span className="font-bold">BANK PRODUCT DISBURSEMENT</span>
            </div>
            <span className="text-[#FF9F76] font-bold uppercase text-[7px]">Direct Connect API</span>
          </div>

          <div className="space-y-2.5 flex-1 pt-1">
            <div className="flex justify-between bg-[#0d1526] p-2 rounded border border-[#FF9F76]/10 items-center">
              <div>
                <span className="block text-white font-bold">TPG Refund Advance Program</span>
                <span className="text-[#EDE9E0]/50 text-[7px]">Pre-season loan approval limit: $6,000</span>
              </div>
              <span className="text-[#FF9F76] font-bold">ENABLED</span>
            </div>

            <div className="bg-[#0d1526] p-2.5 rounded border border-[#FF9F76]/10 space-y-1.5">
              <span className="text-[#EDE9E0]/50 uppercase text-[7px] font-bold block">Fee Split Ledger</span>
              <div className="flex justify-between">
                <span>Gross IRS Refund:</span>
                <span className="text-white">$5,800.00</span>
              </div>
              <div className="flex justify-between border-b border-[#FF9F76]/15 pb-1">
                <span>Tax Preparation Fee:</span>
                <span className="text-[#FF9F76] font-bold">-$450.00</span>
              </div>
              <div className="flex justify-between pt-0.5 text-white font-bold">
                <span>Net Client Payout:</span>
                <span className="text-[#FF9F76]">$5,350.00</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Track which card is most in view as the visitor drags/swipes/scrolls the strip
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // IntersectionObserver callbacks only report entries whose ratio just
    // crossed a threshold, not every observed element — so we keep a
    // persistent map of each card's latest ratio and pick the max from that,
    // rather than comparing only within a single callback's entry batch.
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));

        let bestEl: Element | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el;
          }
        });

        if (bestEl) {
          const idx = cardRefs.current.findIndex((el) => el === bestEl);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 0.9, 1] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [screens.length]);

  const scrollToIndex = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(screens.length - 1, activeIndex + 1));

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
              backgroundColor: i === activeIndex ? "#FF9F76" : "rgba(255,159,118,0.15)",
            }}
          />
        ))}
      </div>

      {/* Horizontal swipeable gallery — one screen per card, drag/swipe/click to browse */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 px-[6%] sm:px-[10%] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {screens.map((screen, i) => (
            <div
              key={screen.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="snap-center shrink-0 w-[88%] sm:w-[78%] lg:w-[70%] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1526]/40 border border-[#FF9F76]/30 rounded-2xl p-6 md:p-8 backdrop-blur-md"
            >
              <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded bg-[#FF9F76]/10 border border-[#FF9F76]/20 text-[#FF9F76] font-black text-xs">
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
              <div className="lg:col-span-8 w-full border border-[#FF9F76]/20 rounded-xl overflow-hidden bg-[#0d1526] shadow-xl">
                <div className="bg-[#0d1526] px-4 py-2.5 border-b border-[#FF9F76]/35 flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F76]/40 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F76]/65 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F76]/90 inline-block" />
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
          className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#0d1526] border border-[#FF9F76]/30 text-[#FF9F76] hover:bg-[#FF9F76]/10 hover:border-[#FF9F76]/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === screens.length - 1}
          aria-label="Next screen"
          className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#0d1526] border border-[#FF9F76]/30 text-[#FF9F76] hover:bg-[#FF9F76]/10 hover:border-[#FF9F76]/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
