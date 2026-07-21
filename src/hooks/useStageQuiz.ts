"use client";

import { useState } from "react";

export interface QuizQuestion {
  id: string;
  text: string;
  options: { label: string; value: string; weight: string }[];
}

export const defaultQuestions: QuizQuestion[] = [
  {
    id: "efin",
    text: "Do you have an EFIN?",
    options: [
      { label: "Yes, I have an EFIN", value: "yes", weight: "ero" },
      { label: "No, preparing under someone else", value: "no", weight: "sub" },
      { label: "New Tax Preparer", value: "new", weight: "starter" },
    ],
  },
  {
    id: "volume",
    text: "How many tax returns does your office/team file annually?",
    options: [
      { label: "1 to 50 returns", value: "low", weight: "starter" },
      { label: "50 to 250 returns", value: "mid", weight: "ero" },
      { label: "250+ returns or multiple preparers", value: "high", weight: "bureau" },
    ],
  },
  {
    id: "goal",
    text: "What is your primary goal for this upcoming tax season?",
    options: [
      { label: "Stop splitting revenue and keep 100% of my fees", value: "fee", weight: "ero" },
      { label: "Sub-license software and recruit/manage other preparers", value: "scale", weight: "bureau" },
      { label: "Get software access and software walkthrough support", value: "learn", weight: "starter" },
    ],
  },
];

export interface Recommendation {
  title: string;
  desc: string;
  link: string;
  cta: string;
}

export function useStageQuiz(questions: QuizQuestion[] = defaultQuestions) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleOptionSelect = (option: { value: string; weight: string }) => {
    const currentQ = questions[step];
    setAnswers((prev) => ({ ...prev, [currentQ.id]: option.weight }));
    setStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };

  const getRecommendation = (): Recommendation => {
    const counts: Record<string, number> = { starter: 0, ero: 0, bureau: 0 };
    Object.values(answers).forEach((weight) => {
      if (counts[weight] !== undefined) counts[weight]++;
    });

    if (counts.bureau >= 2 || answers.goal === "bureau") {
      return {
        title: "Service Bureau Growth Program",
        desc: "You are ready to transition to a software distributor model, manage sub-offices, and earn recurring revenue splits.",
        link: "/service-bureau-growth",
        cta: "Explore Service Bureau Program",
      };
    }

    if (counts.ero >= 1 || answers.efin === "yes") {
      return {
        title: "Independent ERO Enablement",
        desc: "You have volume or credentials ready to ditch fee splits and keep 100% of preparation revenue under your own EFIN.",
        link: "/ero-enablement",
        cta: "See ERO Blueprint",
      };
    }

    return {
      title: "Tax Software Access & Community",
      desc: "Get professional-grade cloud software, e-filing tools, and year-round coworking support to launch your practice.",
      link: "/tax-software",
      cta: "View Software Plans",
    };
  };

  return {
    step,
    questions,
    answers,
    handleOptionSelect,
    resetQuiz,
    getRecommendation,
  };
}
