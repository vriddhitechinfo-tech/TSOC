import React from "react";
import HeroSection from "@/components/home/HeroSection";
import QuizSection from "@/components/home/QuizSection";
import StatsTickerSection from "@/components/home/StatsTickerSection";
import AboutSection from "@/components/home/AboutSection";
import TrustSection from "@/components/TrustSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#140A06] min-h-screen">
      {/* 1. Hero Carousel */}
      <HeroSection />

      {/* 2. Interactive Business Stage Quiz Router */}
      <QuizSection />

      {/* 3. Animated Stat Counters Banner */}
      <StatsTickerSection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Trust Signals */}
      <TrustSection />

      {/* 6. Pinned Card Stack Ecosystem Section */}
      <EcosystemSection />

      {/* 7. Services Grid */}
      <ServicesSection />

      {/* 8. Membership Comparison Table */}
      <PricingSection />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. FAQs Section */}
      <FaqSection />
    </div>
  );
}
