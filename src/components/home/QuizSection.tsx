"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StageQuiz from "@/components/StageQuiz";

export default function QuizSection() {
  const quizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (quizRef.current) {
      const tween = gsap.fromTo(
        quizRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quizRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, []);

  return (
    <section
      ref={quizRef}
      className="py-16 sm:py-20 bg-[#0F0D0C]/60 border-y border-[#FFB26A]/10 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,106,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <h2 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
          What stage is your tax business at?
        </h2>
        <p className="text-xs sm:text-sm text-[#EDE9E0]/60 max-w-lg mx-auto leading-relaxed">
          Take the 30-second quiz to find the right software setup and
          mentorship for your team.
        </p>
        <div className="pt-6">
          <StageQuiz />
        </div>
      </div>
    </section>
  );
}
