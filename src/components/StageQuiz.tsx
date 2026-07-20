"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, Check } from "lucide-react";
import { useStageQuiz } from "@/hooks/useStageQuiz";

export default function StageQuiz() {
  const {
    step,
    questions,
    handleOptionSelect,
    resetQuiz,
    getRecommendation,
  } = useStageQuiz();

  const progressPercent = (step / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#161412]/40 border border-[#FFB26A]/20 rounded-xl p-6 md:p-8 relative overflow-hidden backdrop-blur-md shadow-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#161412]/60">
        <div
          className="h-full bg-gradient-to-r from-[#FFB26A] to-[#F4845F] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {step < questions.length ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-2 py-0.5 rounded">
              Step {step + 1} of {questions.length}
            </span>
            <span className="text-xs text-[#EDE9E0]/40 font-semibold">Business Router</span>
          </div>

          <h3 className="text-sm md:text-base font-extrabold text-white leading-snug">
            {questions[step].text}
          </h3>

          <div className="space-y-3">
            {questions[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect(opt)}
                className="w-full text-left p-4 rounded-lg bg-[#161412]/30 border border-[#FFB26A]/15 hover:border-[#FFB26A]/40 text-xs sm:text-sm text-[#EDE9E0]/70 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-[#FFB26A]/50"
              >
                <span>{opt.label}</span>
                <span className="h-5 w-5 rounded bg-[#FFB26A]/10 border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in text-center py-4">
          <div className="h-12 w-12 rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 flex items-center justify-center text-[#FFB26A] mx-auto mb-4 animate-bounce">
            <Check className="w-6 h-6 text-[#FFB26A]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 rounded">
              Analysis Complete
            </span>
            <h3 className="text-base sm:text-lg font-black text-white pt-2">
              Recommended Stage: <span className="text-[#FFB26A]">{getRecommendation().title}</span>
            </h3>
            <p className="text-xs text-[#EDE9E0]/50 max-w-md mx-auto leading-relaxed">
              {getRecommendation().desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
            <Link
              href={getRecommendation().link}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#0A0908] px-6 py-3 text-xs font-extrabold shadow-md uppercase tracking-wider transition-all"
            >
              {getRecommendation().cta}
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
            <button
              onClick={resetQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#161412] border border-[#FFB26A]/20 px-6 py-3 text-xs font-bold text-[#EDE9E0]/60 hover:text-white uppercase tracking-wider transition-all cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 mr-2" />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
