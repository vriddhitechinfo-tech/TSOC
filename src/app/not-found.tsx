"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { HelpCircle } from "lucide-react";

export default function NotFound() {
  const { openModal } = useModal();

  return (
    <div className="relative overflow-hidden bg-[#120b06] min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none -z-10" />

      <span className="text-[10px] font-bold tracking-widest text-[#FFD94A] bg-amber-950/30 border border-[#FFD94A]/20 px-4 py-1.5 rounded-lg mb-6 uppercase">
        404 - Page Not Found
      </span>
      
      <HelpCircle className="w-12 h-12 text-[#FFD94A] mb-6" />
      
      <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
        Lost in The Grid?
      </h1>
      
      <p className="text-xs md:text-sm text-stone-400 max-w-sm mx-auto mb-10 leading-relaxed">
        The page you are looking for does not exist, has been archived, or moved into a different sector. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FFD94A] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-6 text-xs transition-colors cursor-pointer uppercase tracking-wider shadow-md"
        >
          Return to Dashboard
        </Link>
        <button
          onClick={() => openModal("strategy")}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#0d1526] border border-[#FFD94A]/20 hover:border-[#FFD94A] text-[#EDE9E0]/70 hover:text-white font-bold py-3 px-6 text-xs transition-colors cursor-pointer uppercase tracking-wider"
        >
          Book a Strategy Call
        </button>
      </div>
    </div>
  );
}

