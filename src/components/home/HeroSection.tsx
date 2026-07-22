"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Landmark, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import { heroSlides } from "@/data/homeData";
import VideoMeshBackground from "@/components/VideoMeshBackground";

/* ─── Inline partner-logo pill ─────────────────────────────────── */
function PartnerBadge({
  label,
  sub,
  icon,
}: {
  label: string;
  sub?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 bg-[#161412]/60 border border-[#FFB26A]/15 rounded-xl px-3 py-2 shrink-0">
      <span className="text-[#FFB26A]">{icon}</span>
      <div className="leading-tight">
        <p className="text-[11px] font-extrabold text-white uppercase tracking-wider whitespace-nowrap">
          {label}
        </p>
        {sub && (
          <p className="text-[9px] text-[#EDE9E0]/40 uppercase tracking-wider whitespace-nowrap">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { openModal } = useModal();
  const { currentSlide, goToSlide, pauseAutoPlay, resumeAutoPlay } =
    useHeroSlider(heroSlides.length);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section
      className="relative pt-6 pb-20 lg:py-20 overflow-hidden transition-colors duration-1000"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <VideoMeshBackground className="opacity-15" />

      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,178,106,0.05)_0%,transparent_55%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10 h-auto lg:h-[580px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center h-full"
          >
            {/* Left: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">

              {/* Category tag */}
              <span
                className="inline-flex w-fit items-center rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  backgroundColor: `${activeSlide.accentColor}15`,
                  color: activeSlide.accentColor,
                  border: `1px solid ${activeSlide.accentColor}30`,
                }}
              >
                {activeSlide.tag}
              </span>

              {/* Headline — bolder, larger, tighter */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white uppercase leading-[1.05] tracking-tight">
                {activeSlide.title.includes(activeSlide.titleHighlight) ? (
                  <>
                    {activeSlide.title.split(activeSlide.titleHighlight)[0]}
                    <span style={{ color: activeSlide.accentColor }}>
                      {activeSlide.titleHighlight}
                    </span>
                    {activeSlide.title.split(activeSlide.titleHighlight)[1]}
                  </>
                ) : (
                  activeSlide.title
                )}
              </h1>

              {/* Description — kept short */}
              <p className="text-[#EDE9E0]/65 text-sm max-w-lg leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 py-3 border-y border-[#FFB26A]/15 max-w-lg">
                {activeSlide.stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-xl font-black font-mono leading-none"
                      style={{ color: activeSlide.accentColor }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#EDE9E0]/50 font-bold uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => openModal("strategy")}
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-xs font-extrabold shadow-lg cursor-pointer uppercase tracking-wider transition-all duration-200"
                  style={{
                    backgroundColor: activeSlide.accentColor,
                    color: "#080808",
                  }}
                >
                  {activeSlide.cta1}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <button
                  onClick={() => openModal("demo")}
                  className="inline-flex items-center justify-center rounded-lg border border-[#FFB26A]/20 bg-[#161412]/50 px-6 py-3.5 text-xs font-bold text-white hover:bg-[#181818] transition-all cursor-pointer uppercase tracking-wider"
                >
                  {activeSlide.cta2}
                </button>
              </div>

              {/* Warm micro-link */}
              <p className="text-[11px] text-[#EDE9E0]/40">
                Have questions?{" "}
                <button
                  onClick={() => openModal("strategy")}
                  className="text-[#FFB26A] underline underline-offset-2 hover:text-[#F4845F] transition-colors cursor-pointer font-semibold"
                >
                  Chat with our team →
                </button>
              </p>

              {/* ─── Partner logos strip ─────────────────────────────── */}
              <div className="pt-2 space-y-2">
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#EDE9E0]/30">
                  Integrated Partners & Credentials
                </p>
                <div className="flex flex-wrap gap-2">
                  <PartnerBadge
                    label="IRS E-File Partner"
                    sub="Authorized Provider"
                    icon={<ShieldCheck className="w-4 h-4" />}
                  />
                  <PartnerBadge
                    label="TPG Bank"
                    sub="Refund Transfers"
                    icon={<Landmark className="w-4 h-4" />}
                  />
                  <PartnerBadge
                    label="Republic Bank"
                    sub="Bank Products"
                    icon={<Landmark className="w-4 h-4" />}
                  />
                  <PartnerBadge
                    label="Refund Advantage"
                    sub="Fee Deduct"
                    icon={<Star className="w-4 h-4" />}
                  />
                </div>
              </div>

              {/* Slide Navigation Dots */}
              <div className="flex items-center space-x-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.tag}
                    onClick={() => goToSlide(idx)}
                    className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: currentSlide === idx ? "32px" : "12px",
                      backgroundColor:
                        currentSlide === idx
                          ? activeSlide.accentColor
                          : "rgba(255,178,106,0.2)",
                    }}
                    aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Media Showcase */}
            <div className="lg:col-span-5 relative h-full flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#FFB26A]/20 shadow-2xl shadow-black/80 group">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#161412]/80 backdrop-blur-md border border-[#FFB26A]/20">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {activeSlide.tag}
                  </div>
                  <div className="text-[11px] text-[#EDE9E0]/60 mt-0.5 line-clamp-1">
                    {activeSlide.description}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
