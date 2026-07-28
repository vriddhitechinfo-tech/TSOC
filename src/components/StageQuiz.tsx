"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, RefreshCw, Check } from "lucide-react";
import { useStageQuiz } from "@/hooks/useStageQuiz";

export default function StageQuiz() {
  const {
    step,
    questions,
    handleOptionSelect,
    prevStep,
    resetQuiz,
    getRecommendation,
  } = useStageQuiz();

  const progressPercent = (step / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#161412]/60 border border-[#FFB26A]/25 rounded-2xl p-6 md:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/80">
      {/* Top progress line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#161412]">
        <div
          className="h-full bg-gradient-to-r from-[#FFB26A] to-[#F4845F] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {step < questions.length ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#FFB26A]/10 pb-4">
            <div className="flex items-center gap-3">
              {step > 0 && (
                <button
                  onClick={prevStep}
                  className="text-xs text-[#FFB26A] hover:text-white transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back
                </button>
              )}
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/30 px-3 py-1 rounded-md">
                Step {step + 1} of {questions.length}
              </span>
            </div>
            <span className="text-xs text-[#EDE9E0]/40 font-semibold uppercase tracking-wider">
              Business Router
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-white text-center py-2 leading-snug">
            {questions[step].text}
          </h3>

          <div className="space-y-3 pt-2">
            {questions[step].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect(opt)}
                className="w-full text-left p-4 sm:p-4 rounded-xl bg-[#161412]/50 border border-[#FFB26A]/15 hover:border-[#FFB26A]/50 hover:bg-[#FFB26A]/5 text-xs sm:text-sm font-medium text-[#EDE9E0]/80 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-[#FFB26A]/50"
              >
                <span className="font-semibold">{opt.label}</span>
                <span className="h-6 w-6 rounded-md bg-[#FFB26A]/10 border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] opacity-60 group-hover:opacity-100 group-hover:bg-[#FFB26A] group-hover:text-[#0A0908] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in text-center py-4">
          <div className="h-14 w-14 rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A] mx-auto mb-2 shadow-lg shadow-[#FFB26A]/10">
            <Check className="w-7 h-7 text-[#FFB26A]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 rounded-md inline-block">
              Analysis Complete
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white pt-2">
              Recommended Stage: <span className="text-[#FFB26A]">{getRecommendation().title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE9E0]/60 max-w-md mx-auto leading-relaxed">
              {getRecommendation().desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
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
              <RefreshCw className="w-3.5 h-3.5 mr-2" />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
