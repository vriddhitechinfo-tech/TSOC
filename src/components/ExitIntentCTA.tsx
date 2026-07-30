"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { X, ArrowRight, Bell } from "lucide-react";

export default function ExitIntentCTA() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const hasTriggeredRef = React.useRef(hasTriggered);
  const isVisibleRef = React.useRef(isVisible);

  useEffect(() => {
    hasTriggeredRef.current = hasTriggered;
  }, [hasTriggered]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  const triggerCTA = () => {
    setIsVisible(true);
    setHasTriggered(true);
  };

  // Reset state on path change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(false);
    const isDismissed = sessionStorage.getItem(`dismissed-cta-${pathname}`);
    if (isDismissed) {
      setHasTriggered(true);
    } else {
      setHasTriggered(false);
    }
  }, [pathname]);

  useEffect(() => {
    // 1. Scroll depth handler (55%)
    const handleScroll = () => {
      if (hasTriggeredRef.current || isVisibleRef.current) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      if (scrollPercent >= 75) {
        triggerCTA();
      }
    };

    // 2. Exit Intent handler (mouse leaves top of screen)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggeredRef.current || isVisibleRef.current) return;
      if (e.clientY < 15) {
        triggerCTA();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(`dismissed-cta-${pathname}`, "true");
  };

  const getCtaDetails = () => {
    if (pathname.includes("tax-software")) {
      return {
        text: "Want to see our software live?",
        actionText: "Request Walkthrough Demo",
        action: () => openModal("demo"),
      };
    } else if (pathname.includes("ero-enablement")) {
      return {
        text: "Stop splitting your fees. Get your own EFIN.",
        actionText: "Book ERO Consultation",
        action: () => openModal("ero"),
      };
    } else if (pathname.includes("service-bureau-growth")) {
      return {
        text: "Ready to scale beyond preparing returns?",
        actionText: "Apply for Bureau Mentorship",
        action: () => openModal("bureau"),
      };
    } else if (pathname.includes("open-office")) {
      return {
        text: "Join daily live coworking & advisory hours.",
        actionText: "Join The Open Office",
        action: () => openModal("openoffice"),
      };
    } else if (pathname.includes("technology-support")) {
      return {
        text: "Double your intake capacity. Setup a CRM.",
        actionText: "Book Tech Consultation",
        action: () => openModal("technology"),
      };
    }
    // Default Homepage/Fallback
    return {
      text: "Ready to build a business beyond tax season?",
      actionText: "Book Free Strategy Session",
      action: () => openModal("strategy"),
    };
  };

  if (!isVisible) return null;

  const cta = getCtaDetails();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 md:p-6 animate-slide-up pointer-events-none">
      <div className="mx-auto max-w-4xl bg-gradient-to-r from-[#0F0D0C] to-[#0A0908] border border-[#FFB26A]/25 hover:border-[#FFB26A]/45 rounded-xl shadow-2xl shadow-[#FFB26A]/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,178,106,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="flex items-center space-x-3 z-10">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFB26A]/10 border border-[#FFB26A]/20 text-[#FFB26A]">
            <Bell className="h-4 w-4 animate-swing" />
          </span>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Special Invitation</h4>
            <p className="text-xs text-[#EDE9E0]/70 mt-0.5">{cta.text}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 z-10">
          <button
            onClick={cta.action}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            {cta.actionText}
            <ArrowRight className="w-3 h-3 ml-2" />
          </button>
          
          <button
            onClick={handleDismiss}
            className="p-2 text-[#EDE9E0]/40 hover:text-white hover:bg-[#2A160E]/40 rounded-lg transition-colors cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
