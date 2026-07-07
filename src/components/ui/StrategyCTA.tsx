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
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f59e0b] hover:from-[#c29e2f] hover:to-[#e08d03] text-black font-extrabold py-3 px-6 text-xs transition-colors shadow-md hover:shadow-[#d4af37]/10 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
