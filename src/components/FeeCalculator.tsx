"use client";

import React, { useState } from "react";
import { DollarSign, Percent, ArrowRight, ShieldCheck } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function FeeCalculator() {
  const { openModal } = useModal();
  const [returns, setReturns] = useState(120);
  const [avgCharge, setAvgCharge] = useState(450);
  const [splitPercent, setSplitPercent] = useState(30);

  // Calculations
  const totalRevenue = returns * avgCharge;
  const splitAmount = totalRevenue * (splitPercent / 100);
  
  // Software cost with own EFIN is a flat fee, e.g. $1,499
  const flatSoftwareCost = 1499;
  
  // Under the split: keeping (100 - split)%
  const revenueKeptUnderSplit = totalRevenue - splitAmount;
  
  // Under own EFIN: keeping 100% - software cost
  const revenueKeptUnderEfin = totalRevenue - flatSoftwareCost;
  
  // Net difference
  const annualSavings = revenueKeptUnderEfin - revenueKeptUnderSplit;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0d1526]/50 border border-[#FFD94A]/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Inputs */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD94A] bg-[#FFD94A]/10 border border-[#FFD94A]/40 px-3 py-1 rounded">
              Revenue Simulator
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              Calculate Your Revenue Increase
            </h3>
            <p className="text-xs text-[#EDE9E0]/50">
              Drag the sliders below to match your office metrics and see the cost of splitting fees.
            </p>
          </div>

          <div className="space-y-5 pt-4">
            {/* Returns Prepared Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#EDE9E0]/70">
                <label htmlFor="calc-returns">Annual Tax Returns Prepared</label>
                <span className="text-[#FFD94A] font-mono text-sm font-black">{returns}</span>
              </div>
              <input
                type="range"
                id="calc-returns"
                min="10"
                max="500"
                step="5"
                value={returns}
                onChange={(e) => setReturns(Number(e.target.value))}
                className="w-full h-1 bg-[#1C2A47] rounded-lg appearance-none cursor-pointer accent-[#FFD94A]"
              />
              <div className="flex justify-between text-xs text-[#EDE9E0]/40">
                <span>10</span>
                <span>250</span>
                <span>500+</span>
              </div>
            </div>

            {/* Average Charge Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#EDE9E0]/70">
                <label htmlFor="calc-charge">Average Preparation Fee Charged</label>
                <span className="text-[#FFD94A] font-mono text-sm font-black">${avgCharge}</span>
              </div>
              <input
                type="range"
                id="calc-charge"
                min="150"
                max="800"
                step="25"
                value={avgCharge}
                onChange={(e) => setAvgCharge(Number(e.target.value))}
                className="w-full h-1 bg-[#1C2A47] rounded-lg appearance-none cursor-pointer accent-[#FFD94A]"
              />
              <div className="flex justify-between text-xs text-[#EDE9E0]/40">
                <span>$150</span>
                <span>$475</span>
                <span>$800</span>
              </div>
            </div>

            {/* Split Percentage Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#EDE9E0]/70">
                <label htmlFor="calc-split">Your Current Fee Split (kept by ERO/Franchise)</label>
                <span className="text-[#FFD94A] font-mono text-sm font-black">{splitPercent}%</span>
              </div>
              <input
                type="range"
                id="calc-split"
                min="10"
                max="60"
                step="5"
                value={splitPercent}
                onChange={(e) => setSplitPercent(Number(e.target.value))}
                className="w-full h-1 bg-[#1C2A47] rounded-lg appearance-none cursor-pointer accent-[#FFD94A]"
              />
              <div className="flex justify-between text-xs text-[#EDE9E0]/40">
                <span>10%</span>
                <span>35%</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="bg-[#1C2A47]/60 border-t lg:border-t-0 lg:border-l border-[#FFD94A]/20 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD94A]">Total Annual Revenue</span>
              <div className="text-2xl font-black text-white font-mono mt-0.5">
                {formatCurrency(totalRevenue)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0d1526]/40 border border-[#FFD94A]/15 p-3 rounded-lg">
                <span className="text-xs font-bold text-[#EDE9E0]/50 uppercase tracking-wider block">Split Model Income</span>
                <span className="text-xs font-mono font-bold text-[#EDE9E0]/70">
                  {formatCurrency(revenueKeptUnderSplit)}
                </span>
                <span className="text-xs text-[#EDE9E0]/45 block mt-0.5">({100 - splitPercent}% kept)</span>
              </div>
              <div className="bg-[#0d1526]/40 border border-[#FFD94A]/15 p-3 rounded-lg">
                <span className="text-xs font-bold text-[#FFD94A] uppercase tracking-wider block">Independent ERO Income</span>
                <span className="text-xs font-mono font-bold text-white">
                  {formatCurrency(revenueKeptUnderEfin)}
                </span>
                <span className="text-xs text-[#EDE9E0]/50 block mt-0.5">(Flat software rate)</span>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="bg-[#FFD94A]/5 border border-[#FFD94A]/25 p-4 rounded-xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD94A] block">Estimated Revenue Increase</span>
              <div className="text-2xl sm:text-3xl font-black text-[#FFD94A] font-mono leading-none">
                +{formatCurrency(Math.max(0, annualSavings))}
              </div>
              <p className="text-xs text-[#EDE9E0]/60 pt-1 leading-relaxed">
                By purchasing professional software for a flat fee of {formatCurrency(flatSoftwareCost)} and keeping 100% of preparation fees, you stop splitting fees and increase profits.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => openModal("ero")}
              className="w-full inline-flex items-center justify-center rounded-lg bg-[#FFD94A] hover:bg-[#FFAA2A] text-[#050A14] py-3 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-[#FFD94A]/10 transition-all cursor-pointer"
            >
              Get Your EFIN &amp; Keep 100%
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
            <div className="flex items-center justify-center space-x-1.5 text-xs text-[#EDE9E0]/50">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD94A] shrink-0" />
              <span>Free IRS setup support included in ERO program</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

