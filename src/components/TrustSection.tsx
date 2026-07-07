"use client";

import React from "react";
import { Star, ShieldCheck, Landmark, CheckCircle } from "lucide-react";

export default function TrustSection() {
  return (
    <div className="w-full bg-[#18100a]/40 border-y border-amber-950/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Trust Ratings */}
          <div className="flex flex-col items-center md:items-start space-y-2 border-b md:border-b-0 md:border-r border-amber-950/20 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center space-x-1.5">
              <span className="text-white font-black text-xl">4.9</span>
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">
              Average Client Rating
            </p>
            <p className="text-[10px] text-stone-500">
              Across Google Business &amp; Trustpilot verified reviews
            </p>
          </div>

          {/* Industry Credentials */}
          <div className="flex flex-col items-center md:items-start space-y-2.5 border-b md:border-b-0 md:border-r border-amber-950/20 pb-6 md:pb-0 md:px-8">
            <div className="flex items-center space-x-2 text-[#d4af37]">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-white font-extrabold text-sm uppercase tracking-wider">IRS E-File Partner</span>
            </div>
            <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">
              Authorized Service Provider
            </p>
            <p className="text-[10px] text-stone-500">
              Fully compliant with IRS security standards and publication 1345
            </p>
          </div>

          {/* Partner Banks */}
          <div className="flex flex-col items-center md:items-start space-y-2 md:pl-8">
            <div className="flex items-center space-x-2 text-stone-400">
              <Landmark className="w-5 h-5 text-[#d4af37]" />
              <span className="text-white font-extrabold text-xs uppercase tracking-wider">Integrated Bank Products</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
              {["TPG", "Republic Bank", "Refund Advantage", "Santa Barbara"].map((bank) => (
                <span
                  key={bank}
                  className="bg-[#120b06] border border-amber-900/30 text-[9px] font-bold text-stone-450 px-2 py-0.5 rounded tracking-wide uppercase"
                >
                  {bank}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-stone-550">
              Direct processing connections for immediate client refund split payouts
            </p>
          </div>
        </div>

        {/* Client Logos / Trust banner */}
        <div className="mt-10 pt-8 border-t border-amber-950/20 flex flex-wrap items-center justify-center md:justify-between gap-6 opacity-60">
          <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-widest">
            TRUSTED BY EROS ACROSS THE NATION:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["Apex Tax", "Gold Star Prep", "Legacy Services", "National Tax Bureau", "Prime Financials"].map((logo) => (
              <span key={logo} className="text-xs font-black tracking-wider text-stone-400 select-none uppercase">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
