"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      {title && (
        <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 tracking-tight uppercase tracking-wider text-[#FF9F76]">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#FF9F76]/15 bg-[#1C2A47]/25 hover:bg-[#1C2A47]/50 rounded-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-5 text-left text-white hover:text-[#FF9F76] focus:outline-none focus:ring-1 focus:ring-[#FF9F76]/50 rounded-xl transition-colors duration-200 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
              >
                <span className="text-xs sm:text-sm font-bold tracking-wide pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#EDE9E0]/40 shrink-0 transition-transform duration-300 ${
                    isOpen ? "transform rotate-180 text-[#FF9F76]" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#EDE9E0]/50 leading-relaxed  mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
