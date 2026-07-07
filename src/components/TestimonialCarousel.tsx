"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      quote: "Access to professional software was great, but the ERO coaching completely changed my trajectory. I went from splitting 30% of my fees to keeping 100% of my revenues and building my own office.",
      name: "Tasha M.",
      role: "ERO & Firm Owner",
      location: "Atlanta, GA",
      avatar: "/avatar_tasha.png",
    },
    {
      quote: "Running a Service Bureau felt overwhelming until I went through the Growth Program. Having step-by-step audit forms, compliance blueprints, and tech automations made all the difference.",
      name: "David C.",
      role: "Service Bureau Owner",
      location: "Dallas, TX",
      avatar: "/avatar_david.png",
    },
    {
      quote: "The Tech Tuesday CRM setup saved our office over 40 hours of manual work in February alone. Clients loved the automated document uploads, and we doubled our filing throughput.",
      name: "Marcus K.",
      role: "Independent Tax Preparer",
      location: "Houston, TX",
      avatar: "/avatar_tasha.png", // Reusing Tasha's/other avatar as fallback or generating new ones as needed
    },
    {
      quote: "I've been in the tax industry for 8 years, and The Sector is the first community that actually delivers on its promises. Real attorney consultations and actual systems support.",
      name: "Alicia R.",
      role: "Multi-Location Firm Owner",
      location: "Chicago, IL",
      avatar: "/avatar_david.png",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-[#18100a]/50 border border-amber-900/35 rounded-2xl p-6 md:p-10 relative overflow-hidden backdrop-blur-md shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background quote glow */}
      <Quote className="absolute right-6 top-6 w-28 h-28 text-amber-900/5 -z-10 select-none pointer-events-none" />

      {/* Slide Container */}
      <div className="relative min-h-[180px] flex flex-col justify-between">
        <div className="space-y-4">
          <Quote className="w-8 h-8 text-[#d4af37]/80 shrink-0" />
          <p className="text-sm md:text-base italic text-stone-250 leading-relaxed font-medium">
            &quot;{testimonials[activeIndex].quote}&quot;
          </p>
        </div>

        {/* User Info & Slide Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-amber-950/20">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-900/40 shrink-0">
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
                {testimonials[activeIndex].role}
              </p>
              <p className="text-[9px] text-[#d4af37] font-semibold">
                {testimonials[activeIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-[#120b06]/80 hover:bg-amber-950/50 border border-amber-900/30 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex space-x-1.5 px-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? "bg-[#d4af37] w-3" : "bg-stone-700 hover:bg-stone-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-[#120b06]/80 hover:bg-amber-950/50 border border-amber-900/30 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
