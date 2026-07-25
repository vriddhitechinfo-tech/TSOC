"use client";

import React from "react";
import { TALK_TO_TEAM_CALENDAR_LINK } from "@/lib/constants";

interface StrategyCTAProps {
  children?: React.ReactNode;
  className?: string;
}

export default function StrategyCTA({
  children = "Book a Strategy Call",
  className = "",
}: StrategyCTAProps) {
  return (
    <a
      href={TALK_TO_TEAM_CALENDAR_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-6 text-xs transition-all shadow-md hover:shadow-[#FFB26A]/20 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}
