"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { TALK_TO_TEAM_CALENDAR_LINK } from "@/lib/constants";

export default function NotFound() {

  return (
    <div className="relative overflow-hidden bg-[#1C0F0A] min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <span className="text-xs font-bold tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/20 px-4 py-1.5 rounded-lg mb-6 uppercase">
        404 - Page Not Found
      </span>
      
      <HelpCircle className="w-12 h-12 text-[#FFB26A] mb-6" />
      
      <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
        Lost in The Grid?
      </h1>
      
      <p className="text-xs md:text-sm text-[#EDE9E0]/60 max-w-sm mx-auto mb-10 leading-relaxed">
        The page you are looking for does not exist, has been archived, or moved into a different sector. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-6 text-xs transition-colors cursor-pointer uppercase tracking-wider shadow-md"
        >
          Return to Dashboard
        </Link>
        <a
          href={TALK_TO_TEAM_CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1C0F0A] border border-[#FFB26A]/20 hover:border-[#FFB26A] text-[#EDE9E0]/70 hover:text-white font-bold py-3 px-6 text-xs transition-colors cursor-pointer uppercase tracking-wider"
        >
          Book a Strategy Call
        </a>
      </div>
    </div>
  );
}

