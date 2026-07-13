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
      className="py-12 bg-[#2A160E]/20 border-y border-[#FFB26A]/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">
          What stage is your tax business at?
        </h2>
        <p className="text-xs text-[#EDE9E0]/50 max-w-md mx-auto">
          Take our 30-second router quiz to pinpoint the exact software setup
          and mentorship support suited for your team.
        </p>
        <div className="pt-4">
          <StageQuiz />
        </div>
      </div>
    </section>
  );
}
