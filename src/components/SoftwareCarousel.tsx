"use client";

import React, { useState, useEffect } from "react";
import { Monitor, CheckCircle, FileText, ChevronRight, Activity, Landmark } from "lucide-react";

interface SoftwareScreen {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  mockupContent: React.ReactNode;
}

export default function SoftwareCarousel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const screens: SoftwareScreen[] = [
    {
      id: "dashboard",
      tabLabel: "Filing Dashboard",
      title: "Consolidated Office Metrics",
      description: "Monitor real-time filing stats, preparer volumes, IRS acceptance rates, and bank product statuses in a central dashboard.",
      mockupContent: (
        <div className="w-full h-full bg-[#120b06] text-white p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FFD94A]/15 pb-2 mb-3">
            <span className="font-bold text-[#FFD94A]">THE SECTOR OF COLLECTIVES CORE • OFFICE CONSOLE</span>
            <span className="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[8px] font-bold border border-emerald-900/35">ACTIVE SEASON</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#0d1526] border border-[#FFD94A]/15 p-2 rounded">
              <span className="text-stone-500 block uppercase text-[7px]">Total Prepared</span>
              <span className="text-base font-black text-white font-sans">412</span>
            </div>
            <div className="bg-[#0d1526] border border-[#FFD94A]/15 p-2 rounded">
              <span className="text-stone-500 block uppercase text-[7px]">IRS Accepted</span>
              <span className="text-base font-black text-emerald-400 font-sans">99.2%</span>
            </div>
            <div className="bg-[#0d1526] border border-[#FFD94A]/15 p-2 rounded">
              <span className="text-stone-500 block uppercase text-[7px]">Bank Payouts</span>
              <span className="text-base font-black text-[#FFD94A] font-sans">$148K</span>
            </div>
          </div>

          {/* Active Queue Table */}
          <div className="mt-3 flex-1 bg-[#0d1526] border border-[#FFD94A]/15 rounded p-2 overflow-hidden">
            <div className="flex justify-between border-b border-[#FFD94A]/15 pb-1 mb-1 text-[7px] text-stone-500 uppercase font-black">
              <span>Client Name</span>
              <span>Form</span>
              <span>IRS Status</span>
              <span>Bank Product</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-stone-300">
                <span>Johnson, Alicia</span>
                <span>1040, Sch C</span>
                <span className="text-emerald-400 font-bold">ACCEPTED</span>
                <span className="text-[#FFD94A]">TPG ADVANCE</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Rodriguez, Miguel</span>
                <span>1040</span>
                <span className="text-emerald-400 font-bold">ACCEPTED</span>
                <span>DIRECT DEPOSIT</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Smith, Tyrone</span>
                <span>1065 Business</span>
                <span className="text-amber-500 font-bold">TRANSMITTED</span>
                <span>HOLD</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "forms",
      tabLabel: "Form 1040 Prep",
      title: "Interactive Form Preparation",
      description: "Quickly enter W-2s, Schedules, and business expenses. The software runs background compliance checks, flagging errors in real-time.",
      mockupContent: (
        <div className="w-full h-full bg-[#120b06] text-white p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FFD94A]/15 pb-2 mb-2">
            <div className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-[#FFD94A]" />
              <span className="font-bold">Form 1040 (Filer: ALICIA JOHNSON)</span>
            </div>
            <span className="text-[#FFD94A] font-sans font-black">Refund: $6,412</span>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1 pt-1">
            <div className="space-y-2 bg-[#0d1526] p-2.5 rounded border border-[#FFD94A]/10">
              <span className="text-stone-500 uppercase text-[7px] font-bold block">Taxpayer Intake Data</span>
              <div className="space-y-1">
                <div>Wages (W2 Box 1): <span className="text-white">$54,200</span></div>
                <div>Federal WH (W2 Box 2): <span className="text-white">$4,850</span></div>
                <div>Schedule C Net Profit: <span className="text-white">$12,410</span></div>
                <div>Dependents: <span className="text-[#FFD94A]">2 Qual. Children</span></div>
              </div>
            </div>

            <div className="space-y-2 bg-amber-950/10 p-2.5 rounded border border-amber-500/25">
              <span className="text-amber-400 uppercase text-[7px] font-bold block">Real-time Diagnostics</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>W-2 EIN Verified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>EIC Eligibility Met</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
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
      tabLabel: "E-file Tracking",
      title: "Real-time IRS Acknowledgment",
      description: "Direct server connections with the IRS E-file gateway. Get immediate status notifications (Transmitted, Rejected, or Accepted) within minutes.",
      mockupContent: (
        <div className="w-full h-full bg-[#120b06] text-white p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FFD94A]/15 pb-2">
            <span className="font-bold">IRS GATEWAY TRANSMISSION STAGE</span>
            <span className="text-stone-500">EFIN: 564201</span>
          </div>

          <div className="flex items-center justify-around py-4">
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold">✓</div>
              <span className="text-[7px] text-stone-400">Transmitted</span>
            </div>
            <div className="h-0.5 w-10 bg-emerald-500" />
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold">✓</div>
              <span className="text-[7px] text-stone-400">IRS Gateway</span>
            </div>
            <div className="h-0.5 w-10 bg-emerald-500" />
            <div className="flex flex-col items-center space-y-1">
              <div className="h-6 w-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold">✓</div>
              <span className="text-[7px] text-stone-400">Accepted</span>
            </div>
          </div>

          <div className="bg-[#0d1526] border border-[#FFD94A]/15 rounded p-2.5 space-y-1">
            <div className="text-stone-500 uppercase text-[7px] font-bold">IRS ACK (Submission ID: 1040-564201-2026)</div>
            <div className="text-stone-300">Form: 1040 U.S. Individual Income Tax Return</div>
            <div className="text-[#FFD94A] font-bold">Status: ACCEPTED (Acknowledge Code: 00)</div>
            <div className="text-stone-500">Processed at: 2026-07-07 17:41:00 EST</div>
          </div>
        </div>
      ),
    },
    {
      id: "bank",
      tabLabel: "Bank Payouts",
      title: "Direct Refund Fee Deduction",
      description: "Securely enroll clients in bank products. Deduct preparation fees directly from the client's refund and issue advance payouts to build trust.",
      mockupContent: (
        <div className="w-full h-full bg-[#120b06] text-white p-4 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[#FFD94A]/15 pb-2 mb-2">
            <div className="flex items-center space-x-1">
              <Landmark className="w-3.5 h-3.5 text-[#FFD94A]" />
              <span className="font-bold">BANK PRODUCT DISBURSEMENT</span>
            </div>
            <span className="text-emerald-400 font-bold uppercase text-[7px]">Direct Connect API</span>
          </div>

          <div className="space-y-2.5 flex-1 pt-1">
            <div className="flex justify-between bg-[#0d1526] p-2 rounded border border-[#FFD94A]/10 items-center">
              <div>
                <span className="block text-white font-bold">TPG Refund Advance Program</span>
                <span className="text-stone-500 text-[7px]">Pre-season loan approval limit: $6,000</span>
              </div>
              <span className="text-emerald-400 font-bold">ENABLED</span>
            </div>

            <div className="bg-[#0d1526] p-2.5 rounded border border-[#FFD94A]/10 space-y-1.5">
              <span className="text-stone-500 uppercase text-[7px] font-bold block">Fee Split Ledger</span>
              <div className="flex justify-between">
                <span>Gross IRS Refund:</span>
                <span className="text-white">$5,800.00</span>
              </div>
              <div className="flex justify-between border-b border-[#FFD94A]/15 pb-1">
                <span>Tax Preparation Fee:</span>
                <span className="text-[#FFD94A] font-bold">-$450.00</span>
              </div>
              <div className="flex justify-between pt-0.5 text-white font-bold">
                <span>Net Client Payout:</span>
                <span className="text-emerald-400">$5,350.00</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Tab Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-amber-955/20 pb-4">
        {screens.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`py-2 px-4 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === s.id
                ? "bg-[#FFD94A] text-black font-bold shadow-md"
                : "bg-amber-955/30 hover:bg-amber-950/20 border border-amber-900/25 text-stone-400 hover:text-white"
            }`}
          >
            {s.tabLabel}
          </button>
        ))}
      </div>

      {/* Screen Layout: Text on Left, Browser Mockup on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1526]/40 border border-amber-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
        <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
          <span className="inline-flex items-center justify-center h-7 w-7 rounded bg-[#FFD94A]/10 border border-[#FFD94A]/20 text-[#FFD94A] font-black text-[10px]">
            0{screens.findIndex((s) => s.id === activeTab) + 1}
          </span>
          <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">
            {currentScreen.title}
          </h3>
          <p className="text-xs text-stone-400 leading-relaxed">
            {currentScreen.description}
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="lg:col-span-8 w-full border border-[#FFD94A]/20 rounded-xl overflow-hidden bg-[#0d1526] shadow-xl">
          {/* Browser Header/Tab bar */}
          <div className="bg-[#120b06] px-4 py-2.5 border-b border-amber-900/35 flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[8px] text-stone-600 pl-4 font-mono font-bold tracking-wider select-none truncate">
              https://cloud.tsoc-portal.com/office/dashboard
            </span>
          </div>

          {/* Browser Viewport */}
          <div className="h-[240px] w-full relative">
            {currentScreen.mockupContent}
          </div>
        </div>
      </div>
    </div>
  );
}

