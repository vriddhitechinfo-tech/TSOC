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
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f97316] hover:from-[#e0924f] hover:to-[#ea580c] text-black font-extrabold py-3 px-6 text-xs transition-colors shadow-md hover:shadow-[#fda85d]/10 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
