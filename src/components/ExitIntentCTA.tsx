"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { X, ArrowRight, Bell } from "lucide-react";
import { OPEN_OFFICE_COMMUNITY_LINK } from "@/lib/constants";

const TIME_TRIGGER_MS = 12000;

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
    // 1. Time-based handler — pops up after visiting for a while
    const timer = setTimeout(() => {
      if (hasTriggeredRef.current || isVisibleRef.current) return;
      triggerCTA();
    }, TIME_TRIGGER_MS);

    // 2. Scroll depth handler (75%)
    const handleScroll = () => {
      if (hasTriggeredRef.current || isVisibleRef.current) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      if (scrollPercent >= 75) {
        triggerCTA();
      }
    };

    // 3. Exit Intent handler (mouse leaves top of screen)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggeredRef.current || isVisibleRef.current) return;
      if (e.clientY < 15) {
        triggerCTA();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pathname]);

  const handleDismiss = React.useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem(`dismissed-cta-${pathname}`, "true");
  }, [pathname]);

  // Lock body scroll + allow Escape to close while the popup is open
  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleDismiss]);

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
        action: () => window.open(OPEN_OFFICE_COMMUNITY_LINK, "_blank", "noopener,noreferrer"),
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

  const handleAction = () => {
    handleDismiss();
    cta.action();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-cta-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-overlay-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div className="relative w-full max-w-md animate-popup-scale-in rounded-2xl border border-[#FFB26A]/25 bg-gradient-to-b from-[#151110] to-[#0A0908] p-7 sm:p-8 shadow-2xl shadow-black/60">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.12)_0%,transparent_65%)]" />
        <div className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[#FFB26A]/10 blur-3xl" />

        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 z-10 rounded-lg p-1.5 text-[#EDE9E0]/40 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 text-[#FFB26A] shadow-lg shadow-[#FFB26A]/10">
            <Bell className="h-6 w-6 animate-swing" />
          </span>

          <span className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[#FFB26A]">
            Special Invitation
          </span>

          <h4 id="exit-intent-cta-heading" className="text-xl sm:text-2xl font-display font-extrabold text-white leading-snug">
            {cta.text}
          </h4>

          <p className="mt-2 text-sm text-[#EDE9E0]/60">
            Takes less than 2 minutes — no strings attached.
          </p>

          <button
            onClick={handleAction}
            className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            {cta.actionText}
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </button>

          <button
            onClick={handleDismiss}
            className="mt-4 text-xs font-medium text-[#EDE9E0]/40 transition-colors hover:text-white cursor-pointer"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
