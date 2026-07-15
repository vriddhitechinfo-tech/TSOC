"use client";

import React from "react";
import Link from "next/link";
import { Star, ShieldCheck, Landmark, ArrowRight } from "lucide-react";
import { openOfficeExperts } from "@/data/openOfficeExperts";

export default function TrustSection() {
  return (
    <div className="w-full bg-[#2A160E]/20 border-y border-[#FFB26A]/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Trust Ratings */}
          <div className="flex flex-col items-center md:items-start space-y-2 border-b md:border-b-0 md:border-r border-[#FFB26A]/10 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center space-x-1.5">
              <span className="text-white font-black text-xl">4.9</span>
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
              Across Google Business &amp; Trustpilot verified reviews
            </p>
          </div>

          {/* Industry Credentials */}
          <div className="flex flex-col items-center md:items-start space-y-2.5 border-b md:border-b-0 md:border-r border-[#FFB26A]/10 pb-6 md:pb-0 md:px-8">
            <div className="flex items-center space-x-2 text-[#FFB26A]">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-white font-extrabold text-sm uppercase tracking-wider">IRS E-File Partner</span>
            </div>
            <p className="text-xs text-[#EDE9E0]/70 font-bold uppercase tracking-wider">
              Authorized Service Provider
            </p>
            <p className="text-xs text-[#EDE9E0]/40">
              Fully compliant with IRS security standards and publication 1345
            </p>
          </div>

          {/* Partner Banks */}
          <div className="flex flex-col items-center md:items-start space-y-3 md:pl-8">
            <div className="flex items-center space-x-2 text-[#EDE9E0]/50">
              <Landmark className="w-5 h-5 text-[#FFB26A]" />
              <span className="text-white font-extrabold text-xs uppercase tracking-wider">Integrated Bank Products</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-1">
              {["TPG", "Republic Bank", "Refund Advantage", "Santa Barbara"].map((bank) => (
                <span
                  key={bank}
                  className="bg-[#2A160E]/70 border border-[#FFB26A]/25 text-xs font-black text-[#EDE9E0]/85 px-3 py-1.5 rounded-md tracking-wide uppercase shadow-sm shadow-black/20"
                >
                  {bank}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#EDE9E0]/40">
              Direct processing connections for immediate client refund split payouts
            </p>
          </div>
        </div>

        {/* Open Office Guest Experts */}
        <div className="mt-10 pt-8 border-t border-[#FFB26A]/10 flex flex-wrap items-center justify-center md:justify-between gap-6">
          <span className="text-xs text-[#EDE9E0]/40 font-semibold uppercase tracking-widest shrink-0">
            Guest Experts Inside The Open Office:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {openOfficeExperts.slice(0, 6).map((expert) => (
              <span
                key={expert.name}
                className="text-xs font-bold tracking-wide text-[#EDE9E0]/60 bg-[#2A160E]/50 border border-[#FFB26A]/10 px-3 py-1.5 rounded-md"
              >
                {expert.name}
              </span>
            ))}
            <Link
              href="/open-office#experts"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#FFB26A]/80 hover:text-[#FFB26A] px-2"
            >
              See all
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
