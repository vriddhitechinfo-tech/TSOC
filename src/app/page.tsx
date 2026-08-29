import React from "react";
import HeroSection from "@/components/home/HeroSection";
import QuizSection from "@/components/home/QuizSection";
import StatsTickerSection from "@/components/home/StatsTickerSection";
import AboutSection from "@/components/home/AboutSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#140A06] min-h-screen">
      {/* 1. Hero Carousel */}
      {/* <HeroSection /> */}

      {/* 2. About Section (Who TSOC Is & What We Do) */}
      <AboutSection />

      {/* 3. The Collective Growth Ecosystem (6 Program Pathways) */}
      <ServicesSection />

      {/* 4. Interactive Business Stage Quiz Router */}
      <QuizSection />

      {/* 5. Animated Stat Counters Banner */}
      <StatsTickerSection />

      {/* 6. Trust Signals */}
      <TrustSection />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. FAQs Section */}
      <FaqSection />
    </div>
  );
}
