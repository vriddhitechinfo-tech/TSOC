"use client";

import React from "react";
import { Star, ShieldCheck, Landmark, CheckCircle2, Globe } from "lucide-react";

/* ─── Styled logo badge ─────────────────────────────────────────── */
function LogoBadge({
  name,
  role,
  color = "#FFB26A",
}: {
  name: string;
  role?: string;
  color?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-0.5 px-4 py-2.5 rounded-xl border select-none transition-all duration-200 hover:border-[#FFB26A]/40"
      style={{
        background: "rgba(22,20,18,0.7)",
        borderColor: `${color}22`,
      }}
    >
      <span
        className="text-sm font-black tracking-wide uppercase whitespace-nowrap"
        style={{ color }}
      >
        {name}
      </span>
      {role && (
        <span className="text-[8px] text-[#EDE9E0]/35 uppercase tracking-widest whitespace-nowrap font-semibold">
          {role}
        </span>
      )}
    </div>
  );
}

export default function TrustSection() {
  const bankPartners = [
    { name: "TPG", role: "Refund Transfers" },
    { name: "Republic Bank", role: "Bank Products" },
    { name: "Refund Advantage", role: "Fee Deduct" },
    { name: "Santa Barbara", role: "TPG Network" },
  ];

  const trustedBy = [
    "Apex Tax Group",
    "Gold Star Prep",
    "Legacy Tax Services",
    "National Tax Bureau",
    "Prime Financials",
    "Summit ERO Partners",
  ];

  return (
    <div className="w-full bg-[#161412]/20 border-y border-[#FFB26A]/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* ── Top 3-column trust grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          {/* Star Rating */}
          <div className="flex flex-col items-center md:items-start space-y-2 border-b md:border-b-0 md:border-r border-[#FFB26A]/10 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center space-x-1.5">
              <span className="text-white font-black text-2xl">4.9</span>
              <div className="flex text-[#FFB26A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-[#EDE9E0]/70 font-bold uppercase tracking-wider">
              Average Client Rating
            </p>
            <p className="text-xs text-[#EDE9E0]/40">
              Google Business &amp; Trustpilot verified reviews
            </p>
          </div>

          {/* IRS Credential */}
          <div className="flex flex-col items-center md:items-start space-y-2.5 border-b md:border-b-0 md:border-r border-[#FFB26A]/10 pb-6 md:pb-0 md:px-8">
            <div className="flex items-center gap-2 bg-[#FFB26A]/10 border border-[#FFB26A]/25 rounded-xl px-4 py-2.5">
              <ShieldCheck className="w-5 h-5 text-[#FFB26A] shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-white uppercase tracking-wider whitespace-nowrap">
                  IRS E-File Partner
                </p>
                <p className="text-[9px] text-[#EDE9E0]/40 uppercase tracking-widest">
                  Authorized Provider
                </p>
              </div>
            </div>
            <p className="text-xs text-[#EDE9E0]/40">
              Compliant with IRS security standards &amp; Publication 1345
            </p>
          </div>

          {/* Bank Partners */}
          <div className="flex flex-col items-center md:items-start space-y-3 md:pl-8">
            <div className="flex items-center gap-2 text-[#EDE9E0]/60">
              <Landmark className="w-4 h-4 text-[#FFB26A]" />
              <span className="text-white font-extrabold text-xs uppercase tracking-wider">
                Integrated Bank Products
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {bankPartners.map((b) => (
                <LogoBadge key={b.name} name={b.name} role={b.role} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Trusted-by logo strip ── */}
        <div className="pt-4 border-t border-[#FFB26A]/10">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <span className="text-[9px] text-[#EDE9E0]/30 font-bold uppercase tracking-widest shrink-0 flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-[#FFB26A]/50" />
              Trusted by EROs across the nation
            </span>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
              {trustedBy.map((name) => (
                <LogoBadge key={name} name={name} color="#EDE9E0" />
              ))}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#FFB26A]/10 bg-[#161412]/40">
                <Globe className="w-3.5 h-3.5 text-[#FFB26A]/50" />
                <span className="text-[9px] text-[#EDE9E0]/30 font-bold uppercase tracking-widest whitespace-nowrap">
                  +500 More
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
