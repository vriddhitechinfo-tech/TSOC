"use client";

import React from "react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#161412]/50 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
            Client Stories
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
            Proven Success in the Community
          </h2>
          <p className="text-xs text-[#EDE9E0]/50">
            Verified success stories from tax professionals who transitioned to
            independent EROs and Service Bureaus.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
