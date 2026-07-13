"use client";

import React, { useState } from "react";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    points: { software: number; ero: number; bureau: number };
  }[];
}

export default function StageQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [scores, setScores] = useState({ software: 0, ero: 0, bureau: 0 });

  const questions: Question[] = [
    {
      id: 1,
      text: "What is your current IRS credentials status?",
      options: [
        {
          label: "I do not have an EFIN (I file under someone else or am brand new)",
          value: "no-efin",
          points: { software: 3, ero: 2, bureau: 0 },
        },
        {
          label: "I have an active EFIN and file independently",
          value: "has-efin",
          points: { software: 1, ero: 3, bureau: 2 },
        },
        {
          label: "I manage multiple tax preparers or a physical storefront",
          value: "firm-owner",
          points: { software: 0, ero: 1, bureau: 4 },
        },
      ],
    },
    {
      id: 2,
      text: "How many tax returns does your business file each year?",
      options: [
        {
          label: "0 - 50 returns (Getting started or part-time)",
          value: "low-volume",
          points: { software: 4, ero: 1, bureau: 0 },
        },
        {
          label: "50 - 200 returns (Growing firm or solo professional)",
          value: "mid-volume",
          points: { software: 1, ero: 4, bureau: 1 },
        },
        {
          label: "200+ returns (High volume or multi-site firm)",
          value: "high-volume",
          points: { software: 0, ero: 1, bureau: 4 },
        },
      ],
    },
    {
      id: 3,
      text: "What is your primary business goal for the next 12 months?",
      options: [
        {
          label: "Acquire professional cloud tax software & reliable customer support",
          value: "need-software",
          points: { software: 4, ero: 1, bureau: 0 },
        },
        {
          label: "Stop splitting my preparation fees with a franchise or sponsor ERO",
          value: "keep-revenue",
          points: { software: 1, ero: 5, bureau: 1 },
        },
        {
          label: "Sub-license software, build an agent network, and scale a Service Bureau",
          value: "scale-bureau",
          points: { software: 0, ero: 1, bureau: 5 },
        },
      ],
    },
  ];

  const handleOptionSelect = (option: Question["options"][number]) => {
    setAnswers([...answers, option.value]);
    setScores({
      software: scores.software + option.points.software,
      ero: scores.ero + option.points.ero,
      bureau: scores.bureau + option.points.bureau,
    });
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setScores({ software: 0, ero: 0, bureau: 0 });
  };

  const getRecommendation = () => {
    const { software, ero, bureau } = scores;
    const maxScore = Math.max(software, ero, bureau);

    if (maxScore === bureau) {
      return {
        title: "Service Bureau Growth Program",
        desc: "You are positioned to sub-license software and build a network. The Service Bureau model lets you license software, train preparers, and make split commissions.",
        link: "/service-bureau-growth",
        cta: "Explore Service Bureau Program",
      };
    } else if (maxScore === ero) {
      return {
        title: "ERO Enablement Pathway",
        desc: "Your volume and experience show you are ready to get your own EFIN, establish full brand independence, and stop splitting preparation fees with franchises.",
        link: "/ero-enablement",
        cta: "Explore ERO Enablement",
      };
    } else {
      return {
        title: "Tax Software Access Program",
        desc: "Your focus is on establishing a solid foundation. Our professional cloud-based software provides all federal and state forms, integrated bank products, and basic training.",
        link: "/tax-software",
        cta: "Explore Software Packages",
      };
    }
  };

  const progressPercent = (step / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1C2A47]/40 border border-[#FF9F76]/20 rounded-xl p-6 md:p-8 relative overflow-hidden backdrop-blur-md shadow-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#1C2A47]/60">
        <div
          className="h-full bg-gradient-to-r from-[#FF9F76] to-[#F4845F] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {step < questions.length ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/25 px-2 py-0.5 rounded">
              Step {step + 1} of {questions.length}
            </span>
            <span className="text-xs text-[#EDE9E0]/40 font-semibold">Business Router</span>
          </div>

          <h3 className="text-sm md:text-base font-extrabold text-white leading-snug">
            {questions[step].text}
          </h3>

          <div className="space-y-3">
            {questions[step].options.map((opt, i) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect(opt)}
                className="w-full text-left p-4 rounded-lg bg-[#1C2A47]/30 border border-[#FF9F76]/15 hover:border-[#FF9F76]/40 text-xs sm:text-sm text-[#EDE9E0]/70 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-[#FF9F76]/50"
              >
                <span>{opt.label}</span>
                <span className="h-5 w-5 rounded bg-[#FF9F76]/10 border border-[#FF9F76]/30 flex items-center justify-center text-[#FF9F76] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in text-center py-4">
          <div className="h-12 w-12 rounded-full bg-[#FF9F76]/10 border border-[#FF9F76]/25 flex items-center justify-center text-[#FF9F76] mx-auto mb-4 animate-bounce">
            <Check className="w-6 h-6 text-[#FF9F76]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/25 px-3 py-1 rounded">
              Analysis Complete
            </span>
            <h3 className="text-base sm:text-lg font-black text-white pt-2">
              Recommended Stage: <span className="text-[#FF9F76]">{getRecommendation().title}</span>
            </h3>
            <p className="text-xs text-[#EDE9E0]/50 max-w-md mx-auto leading-relaxed">
              {getRecommendation().desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
            <Link
              href={getRecommendation().link}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#FF9F76] hover:bg-[#F4845F] text-[#050A14] px-6 py-3 text-xs font-extrabold shadow-md uppercase tracking-wider transition-all"
            >
              {getRecommendation().cta}
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
            <button
              onClick={resetQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1C2A47] border border-[#FF9F76]/20 px-6 py-3 text-xs font-bold text-[#EDE9E0]/60 hover:text-white uppercase tracking-wider transition-all cursor-pointer"
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
