"use client";

import React from "react";
import { X, ExternalLink } from "lucide-react";
import { useModalForm } from "@/hooks/useModalForm";

export default function InteractiveModal() {
  const { isOpen, closeModal, bookingUrl } = useModalForm();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161412] border border-[#FFB26A]/30 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform scale-100 h-[92vh] max-h-[850px] flex flex-col no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#FFB26A]/20 bg-[#0F0D0C] shrink-0 no-scrollbar">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FFB26A] animate-pulse" />
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Talk to Our Team &bull; Schedule Session
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FFB26A] hover:text-[#F4845F] transition-colors flex items-center gap-1 font-semibold"
            >
              Open in new tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={closeModal}
              className="text-[#EDE9E0]/40 hover:text-[#FFB26A] transition-colors p-1.5 hover:bg-[#161412]/60 rounded-lg cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Calendar Booking Iframe with Hidden Scrollbar */}
        <div className="flex-1 w-full h-full bg-[#161412] relative overflow-hidden no-scrollbar">
          <iframe
            src={bookingUrl}
            title="Schedule a Call with Eve's Collaborations Team"
            scrolling="no"
            className="w-full h-full border-0 no-scrollbar"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
}
