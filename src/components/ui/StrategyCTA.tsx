"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";

interface StrategyCTAProps {
  children?: React.ReactNode;
  className?: string;
}

export default function StrategyCTA({
  children = "Book a Strategy Call",
  className = "",
}: StrategyCTAProps) {
  const { openModal } = useModal();
  return (
    <button
      onClick={() => openModal("strategy")}
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] hover:from-[#FFAA2A] hover:to-[#FF8C00] text-[#050A14] font-extrabold py-3 px-6 text-xs transition-all shadow-md hover:shadow-[#FFD94A]/20 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
