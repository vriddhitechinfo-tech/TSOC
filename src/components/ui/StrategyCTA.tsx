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
      className={`inline-flex items-center justify-center rounded-lg bg-[#FF9F76] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-6 text-xs transition-all shadow-md hover:shadow-[#FF9F76]/20 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
