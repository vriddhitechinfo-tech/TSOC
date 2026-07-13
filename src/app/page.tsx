"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useModal } from "@/context/ModalContext";
import {
  Check,
  ArrowRight,
  Building2,
  LineChart,
  Calendar,
  GraduationCap,
  Mail,
  Fingerprint,
  Briefcase,
  CreditCard,
  Megaphone,
  FileText,
  X,
  Play,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import StageQuiz from "@/components/StageQuiz";
import TrustSection from "@/components/TrustSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TiltCard from "@/components/motion/TiltCard";
import VideoMeshBackground from "@/components/VideoMeshBackground";

export default function Home() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const quizRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLDivElement>(null);
  const ecosystemContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Stats refs for counting animation
  const yearsValRef = useRef<HTMLSpanElement>(null);
  const erosValRef = useRef<HTMLSpanElement>(null);
  const membersValRef = useRef<HTMLSpanElement>(null);

  const heroSlides = [
    {
      tag: "Tax Software Access",
      title: "Launch Your Tax Business",
      titleHighlight: "Business",
      description: "Get everything you need to start filing returns independently with professional cloud software, e-filing, and dedicated support.",
      stats: [
        { value: "500+", label: "Active Preparers" },
        { value: "50K+", label: "Returns Filed" },
        { value: "24/7", label: "Support" },
      ],
      bgFrom: "#050A14",
      bgTo: "#0d1526",
      accentColor: "#FF9F76",
      cta1: "View Software Plans",
      cta2: "See The Software In Action",
      image: "/hero_tax_professional.png",
    },
    {
      tag: "ERO Enablement",
      title: "Stop Splitting Fees. Become an Independent ERO.",
      titleHighlight: "Independent ERO",
      description: "Step-by-step guidance through EFIN application, IRS setup, and compliance review to keep 100% of your fees.",
      stats: [
        { value: "500+", label: "EROs Enabled" },
        { value: "100%", label: "Fee Retention" },
        { value: "4-8 Weeks", label: "EFIN Setup" },
      ],
      bgFrom: "#060c1a",
      bgTo: "#0d1526",
      accentColor: "#F4845F",
      cta1: "Schedule ERO Consultation",
      cta2: "Start Your Application",
      image: "/about_community.png",
    },
    {
      tag: "Service Bureau Growth",
      title: "Build a Scaling Tax Business With Sub-Offices.",
      titleHighlight: "Scaling Tax Business",
      description: "Transition to a distribution model: sub-license software, build onboarding, and generate recurring revenue on every return processed.",
      stats: [
        { value: "150+", label: "Sub-offices Managed" },
        { value: "Recurring", label: "Revenue Streams" },
        { value: "White-label", label: "Ready" },
      ],
      bgFrom: "#050A14",
      bgTo: "#0a1020",
      accentColor: "#FF9F76",
      cta1: "Apply for Mentorship",
      cta2: "See Growth Blueprint",
      image: "/open_office_coworking.png",
    },
    {
      tag: "Open Office Community",
      title: "Join Our Daily Community.",
      titleHighlight: "Daily Community",
      description: "Daily coworking blocks, live tax attorney Q&As, bookkeeping guidance, and year-round support for tax professionals.",
      stats: [
        { value: "2000+", label: "Community Members" },
        { value: "365", label: "Days Of Support" },
        { value: "Live", label: "Expert Access" },
      ],
      bgFrom: "#060d1a",
      bgTo: "#0d1526",
      accentColor: "#F4845F",
      cta1: "Join The Open Office",
      cta2: "Try Free Week",
      image: "/crm_workflow_dashboard.png",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);

    autoPlayTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [autoPlay, currentSlide, heroSlides.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    }

    let handleEcosystemResize: (() => void) | null = null;

    const ctx = gsap.context(() => {
      // 2. Business Stage Quiz entrance
      if (quizRef.current) {
        gsap.fromTo(
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
          },
        );
      }

      // 3. Stats Ticker Animation
      if (statsContainerRef.current) {
        const statsData = { years: 0, eros: 0, members: 0 };
        gsap.to(statsData, {
          years: 12,
          eros: 500,
          members: 2000,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (yearsValRef.current) {
              yearsValRef.current.innerText = `${Math.floor(statsData.years)}+`;
            }
            if (erosValRef.current) {
              erosValRef.current.innerText = `${Math.floor(statsData.eros)}+`;
            }
            if (membersValRef.current) {
              membersValRef.current.innerText = `${Math.floor(statsData.members).toLocaleString()}+`;
            }
          },
        });
      }

      // 4. About Grid Reveal
      if (aboutRef.current) {
        const els = aboutRef.current.querySelectorAll(".gsap-about-el");
        gsap.fromTo(
          els,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // 6. Pricing comparison table reveal
      if (pricingRef.current) {
        gsap.fromTo(
          pricingRef.current.querySelectorAll(".gsap-pricing-el"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: pricingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // 7. Collective Ecosystem Pinned Card Stack Animation
      if (ecosystemSectionRef.current && ecosystemContainerRef.current) {
        const section = ecosystemSectionRef.current;
        const container = ecosystemContainerRef.current;
        const cards = container.querySelectorAll(".gsap-ecosystem-card");

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) {
          gsap.set(cards, { opacity: 1 });
          return;
        }

        if (cards.length > 0) {
          let timeline: gsap.core.Timeline | null = null;

          const initEcosystemAnimation = () => {
            // Reset state
            gsap.set(cards, { clearProps: "all" });

            const isDesktop = window.innerWidth >= 1024;

            if (!isDesktop) {
              // Mobile/Tablet Reveal
              const mobileTl = gsap.timeline({
                scrollTrigger: {
                  trigger: container,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              });
              mobileTl.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.15,
                  ease: "power2.out",
                },
              );
              return mobileTl;
            }

            // Desktop Stacking logic (lg breakpoint)
            // Set cards stacked at the center of the container
            cards.forEach((card, i) => {
              gsap.set(card, {
                xPercent: 0,
                yPercent: 0,
                x: 0,
                y: i * 8, // staggered offsets
                scale: 1 - i * 0.03,
                rotate: i % 2 === 0 ? -2 : 2,
                zIndex: cards.length - i,
                opacity: 1, // make visible in stacked state
              });
            });

            // Create desktop timeline with ScrollTrigger
            const desktopTl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=1500", // Scroll height
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });

            // Spacing percentages relative to card size to form a 3x2 grid
            const finalPositions = [
              { xPercent: -110, yPercent: 0 }, // Card 0: Top-left
              { xPercent: 0, yPercent: 0 }, // Card 1: Top-center
              { xPercent: 110, yPercent: 0 }, // Card 2: Top-right
              { xPercent: -110, yPercent: 110 }, // Card 3: Bottom-left
              { xPercent: 0, yPercent: 110 }, // Card 4: Bottom-center
              { xPercent: 110, yPercent: 110 }, // Card 5: Bottom-right
            ];

            cards.forEach((card, i) => {
              desktopTl.to(
                card,
                {
                  xPercent: finalPositions[i].xPercent,
                  yPercent: finalPositions[i].yPercent,
                  scale: 1,
                  rotate: 0,
                  duration: 1,
                  ease: "power2.inOut",
                },
                i * 0.6,
              ); // stagger transitions
            });

            return desktopTl;
          };

          timeline = initEcosystemAnimation();

          handleEcosystemResize = () => {
            if (timeline) {
              timeline.scrollTrigger?.kill(true);
              timeline.kill();
            }
            timeline = initEcosystemAnimation();
          };

          window.addEventListener("resize", handleEcosystemResize);
        }
      }
    }); // using GSAP context

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (handleEcosystemResize) {
        window.removeEventListener("resize", handleEcosystemResize);
      }
    };
  }, []);

  const ecosystemPillars = [
    {
      title: "Professional Tax Software",
      tag: "Software",
      desc: "Get unlimited cloud e-filing for individual and business returns. Supported by direct desktop access and active database recovery features.",
      actionText: "Learn About Software",
    },
    {
      title: "ERO Enablement",
      tag: "Credentialing",
      desc: "Step-by-step guidance to apply for your independent EFIN with the IRS, including ID.me registration, fingerprint coordination, and security reviews.",
      actionText: "Learn About ERO Setup",
    },
    {
      title: "Service Bureau Scaling",
      tag: "Mentorship",
      desc: "Transition to a distribution model: sub-license software, build onboarding processes, and generate residual revenue splits on sub-office return volume.",
      actionText: "Explore Mentorship",
    },
    {
      title: "Daily Open Office",
      tag: "Support Desk",
      desc: "Never file alone. Daily coworking blocks, Zoom sharing diagnostics, live attorney Q&As, and community brainstorming support you year-round.",
      actionText: "Join Open Office",
    },
    {
      title: "Add-on Services",
      tag: "Add-on Services",
      desc: "Offer more to your clients year-round. Add bookkeeping, credit coaching, and business registration to grow income beyond tax season.",
      actionText: "View Expansion Guide",
    },
    {
      title: "Automation & CRM Setup",
      tag: "Operations",
      desc: "Save time on admin work. Build a simple client intake system, automate scheduling, and set up email & text follow-ups for your business.",
      actionText: "See Automation Pathways",
    },
  ];

  const services = [
    {
      title: "Tax Software Access",
      desc: "Launch your tax business with professional tax software designed for growth.",
      bestFor: ["New Preparers", "Independent Pros", "Growing Firms"],
      includes: [
        "Professional tax software access",
        "Bank product enrollment opportunities",
        "Training resources & walkthroughs",
        "Technical support",
        "Community access",
      ],
      ctaText: "Purchase Software",
      action: () => openModal("software"),
      link: "/tax-software",
    },
    {
      title: "ERO Enablement Program",
      desc: "Stop splitting fees and start taking greater control of your business by becoming an ERO.",
      bestFor: [
        "Experienced Preparers",
        "Firm Leaders",
        "Aspiring Entrepreneurs",
      ],
      includes: [
        "ERO application guidance",
        "IRS e-Services setup",
        "ID.me & fingerprinting support",
        "Compliance review",
        "Software implementation support",
      ],
      ctaText: "Schedule Consultation",
      action: () => openModal("ero"),
      link: "/ero-enablement",
    },
    {
      title: "Service Bureau Growth Program",
      desc: "Build a tax business that supports, structures, and licenses other tax professionals.",
      bestFor: [
        "Established EROs",
        "Multi-preparer offices",
        "Scaling networks",
      ],
      includes: [
        "Phase 1: Business & Systems Audit",
        "Phase 2: Offer & Pricing Strategy",
        "Phase 3: Tax Pro Onboarding Systems",
        "Phase 4: Scale & Recruitment",
        "White-label system templates",
      ],
      ctaText: "Apply for Mentorship",
      action: () => openModal("bureau"),
      link: "/service-bureau-growth",
    },
    {
      title: "Open Office Community",
      desc: "Where access meets opportunity. Live coworking and expert support throughout the year.",
      bestFor: ["All Tax Preparers", "Accounting Owners", "Bookkeepers"],
      includes: [
        "Live weekly office hours",
        "Direct software support",
        "Attorney Q&A sessions",
        "Bookkeeping guidance",
        "Wellness & mindset resources",
      ],
      ctaText: "Join The Open Office",
      action: () => openModal("openoffice"),
      link: "/open-office",
    },
  ];

  const homepageFaqs = [
    {
      question: "What is The Sector of Collectives?",
      answer:
        "TSOC is a community built for tax professionals. We offer professional tax software, EFIN (Electronic Filing Identification Number) setup support, Service Bureau mentorship, and daily live coworking sessions — everything you need to grow a tax business.",
    },
    {
      question: "Do I need an EFIN to get started?",
      answer:
        "No. You can start using our software right away without an EFIN. If you're working toward getting one, our ERO Enablement program walks you through every step of the IRS application process.",
    },
    {
      question: "What's the difference between a Service Bureau and a standard ERO?",
      answer:
        "An ERO files returns for clients directly. A Service Bureau licenses tax software to other preparers, supports their offices, and earns residual revenue on every return they process. It's a way to scale beyond just filing your own returns.",
    },
    {
      question: "Are there long-term contracts?",
      answer:
        "No surprise fees or hidden splits. Our programs run on simple annual agreements. You pick the level of support that fits your business and budget.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#050A14] min-h-screen">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
      {/* Midnight & Gold background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,74,0.04)_0%,transparent_50%)] pointer-events-none -z-10" />

      {/* 1. Hero Carousel Section - InWork Style */}
      <section
        className="relative pt-4 pb-10 lg:py-10 overflow-hidden transition-all duration-700"
        style={{
          backgroundColor: heroSlides[currentSlide].bgFrom,
        }}
      >
        {/* Background gradient based on slide */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50 transition-all duration-700"
          style={{
            background: `linear-gradient(135deg, ${heroSlides[currentSlide].bgFrom} 0%, ${heroSlides[currentSlide].bgTo} 100%)`,
          }}
        />

        {/* Ambient mesh/network video accent */}
        <VideoMeshBackground className="opacity-15" />

        {/* Animated background circles/dots effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-5 animate-pulse"
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: heroSlides[currentSlide].accentColor,
                top: `${20 + i * 30}%`,
                left: `${10 + i * 25}%`,
                animation: `float ${6 + i * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, ${heroSlides[currentSlide].accentColor}05 25%, ${heroSlides[currentSlide].accentColor}05 26%, transparent 27%, transparent 74%, ${heroSlides[currentSlide].accentColor}05 75%, ${heroSlides[currentSlide].accentColor}05 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, ${heroSlides[currentSlide].accentColor}05 25%, ${heroSlides[currentSlide].accentColor}05 26%, transparent 27%, transparent 74%, ${heroSlides[currentSlide].accentColor}05 75%, ${heroSlides[currentSlide].accentColor}05 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Radial glow effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + Math.sin(currentSlide) * 20}% ${50 + Math.cos(currentSlide) * 20}%, ${heroSlides[currentSlide].accentColor}08 0%, transparent 50%)`,
            transition: "all 0.7s ease",
          }}
        />


        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10 h-auto lg:h-[480px]">
          {/* Carousel Slide — single mounted slide, crossfades via AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full w-full">
                {/* Left: Text Content */}
                <div className="space-y-4 flex flex-col justify-center h-full">
                  {/* Title with Accent */}
                  <h1 className="font-display text-4xl sm:text-4xl lg:text-5xl font-semibold tracking-normal leading-tight">
                    {heroSlides[currentSlide].title.split(" ").map((word, i) => {
                      const isHighlight = heroSlides[currentSlide].titleHighlight.split(" ").includes(word);
                      return (
                        <span
                          key={i}
                          style={{ color: isHighlight ? heroSlides[currentSlide].accentColor : "white" }}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                  </h1>

                  {/* Description */}
                  <p className="font-body text-sm text-[#EDE9E0]/60 leading-relaxed line-clamp-2">
                    {heroSlides[currentSlide].description}
                  </p>

                  {/* Progress Line with Pause Button */}
                  <div className="flex items-center gap-4 py-2">
                    {/* Dashed Progress Line - Bigger Dashes */}
                    <div className="flex-1 flex gap-2">
                      {heroSlides.map((_, i) => (
                        <div
                          key={i}
                          className="h-1 transition-all duration-300"
                          style={{
                            width: i <= currentSlide ? "16px" : "8px",
                            backgroundColor:
                              i <= currentSlide
                                ? heroSlides[currentSlide].accentColor
                                : "rgba(255,255,255,0.1)",
                          }}
                        />
                      ))}
                    </div>
                    {/* Pause Button */}
                    <button
                      onClick={() => setAutoPlay(!autoPlay)}
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 hover:border-white/50 transition-colors flex-shrink-0"
                      aria-label={autoPlay ? "Pause" : "Play"}
                    >
                      <span className="text-white/50 text-xs font-bold">
                        {autoPlay ? "II" : "▶"}
                      </span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-12">
                    {heroSlides[currentSlide].stats.map((stat) => (
                      <div key={stat.label} className="space-y-0">
                        <p
                          className="text-2xl sm:text-3xl font-black font-mono leading-none"
                          style={{ color: heroSlides[currentSlide].accentColor }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs text-[#EDE9E0]/50 font-semibold uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => openModal("strategy")}
                      className="inline-flex items-center justify-center rounded-lg text-black px-8 py-3 text-xs font-extrabold transition-all cursor-pointer uppercase tracking-wider hover:shadow-lg"
                      style={{
                        background: heroSlides[currentSlide].accentColor,
                      }}
                    >
                      {heroSlides[currentSlide].cta1}
                    </button>
                    <button
                      onClick={() => openModal("strategy")}
                      className="inline-flex items-center justify-center rounded-lg border px-8 py-3 text-xs font-bold text-white transition-all cursor-pointer uppercase tracking-wider hover:bg-white/5"
                      style={{
                        borderColor: `${heroSlides[currentSlide].accentColor}40`,
                      }}
                    >
                      {heroSlides[currentSlide].cta2}
                    </button>
                  </div>
                </div>

                {/* Right: Hero Image */}
                <div className="relative h-full rounded-2xl overflow-hidden border shadow-2xl shadow-black/60" style={{borderColor: `${heroSlides[currentSlide].accentColor}30`}}>
                  <Image
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${heroSlides[currentSlide].bgFrom}60 0%, transparent 50%, ${heroSlides[currentSlide].bgTo}99 100%)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. Interactive Business Stage Quiz Router */}
      <section
        ref={quizRef}
        className="py-12 bg-[#1C2A47]/20 border-y border-[#FF9F76]/10"
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

      {/* 3. Animated Stat Counters Banner */}
      <section
        ref={statsContainerRef}
        className="py-16 bg-[#1C2A47]/30 relative border-y border-[#FF9F76]/10"
      >
        {/* Gold glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9F76]/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <span
                ref={yearsValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Years Supporting Tax Pros
              </span>
              <p className="text-xs text-[#EDE9E0]/40">
                Established training, setups, and support structures since 2014
              </p>
            </div>
            <div className="space-y-1 py-6 md:py-0">
              <span
                ref={erosValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Independent EROs Supported
              </span>
              <p className="text-xs text-[#EDE9E0]/40">
                Firms transitioned from splits to keeping 100% of their fees
              </p>
            </div>
            <div className="space-y-1">
              <span
                ref={membersValRef}
                className="text-4xl md:text-5xl font-black text-[#FF9F76] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Community Members
              </span>
              <p className="text-xs text-[#EDE9E0]/40">
                Coworking, legal consultations, and business workshops
                year-round
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section ref={aboutRef} className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-about-el space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF9F76] bg-[#1C2A47]/50 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
                More Than Tax Software
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal leading-tight uppercase">
                At The Sector of Collectives, we believe tax professionals
                deserve more than tools.
              </h2>
              <p className="text-xs md:text-sm text-[#EDE9E0]/60 leading-relaxed">
                Our collaborative community combines professional cloud-based
                tax software, ERO Application setup, scaling strategies, and
                live access to experts who understand what it takes to succeed.
                Whether you&apos;re filing your first return or scaling a
                multi-location brand, we&apos;re committed to your independence.
              </p>
              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Our Mission
                </h3>
                <p className="text-[#EDE9E0]/50 text-xs leading-relaxed">
                  To create a collaborative community where tax professionals
                  have access to the tools, education, relationships, and
                  opportunities needed to grow sustainable businesses.
                </p>
              </div>
            </div>

            <TiltCard tilt={5} className="relative rounded-2xl overflow-hidden border border-[#FF9F76]/20 shadow-xl shadow-black/60">
              <Image
                src="/about_community.png"
                alt="Diverse community of tax professionals collaborating in a modern office setting"
                width={800}
                height={560}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xl sm:text-2xl font-display font-semibold tracking-wider text-white select-none">
                  <span className="font-display italic font-semibold text-2xl sm:text-3xl text-[#FF9F76]">Connect</span>
                  <span className="text-[#FF9F76]/30 mx-2">•</span>
                  <span className="font-display italic font-semibold text-2xl sm:text-3xl text-[#FF9F76]">Create</span>
                  <span className="text-[#FF9F76]/30 mx-2">•</span>
                  <span className="font-display font-semibold text-2xl sm:text-3xl text-white">Conquer</span>
                </div>
                <p className="text-[#EDE9E0]/70 text-xs mt-1 leading-relaxed">
                  Connect with peers. Create scalable revenue models. Conquer the tax industry on your own terms.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 5. Trust Signals */}
      <TrustSection />

      {/* Pinned Card Stack Ecosystem Section */}
      <section
        ref={ecosystemSectionRef}
        className="relative py-20 bg-[#050A14] overflow-hidden flex flex-col justify-center min-h-screen"
      >
        {/* Decorative gold gradient top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9F76]/30 to-transparent" />
        {/* Ambient mesh/network video accent */}
        <VideoMeshBackground className="opacity-25" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#1C2A47]/50 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
              Our Core
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
              The Collective Growth Ecosystem
            </h2>
            <p className="text-xs text-[#EDE9E0]/50">
              Scroll down to peel back the layers of tools, training, and
              systems that scale your business.
            </p>
          </div>

          {/* Card Stack Grid/Container */}
          <div
            ref={ecosystemContainerRef}
            className="relative grid grid-cols-1 md:grid-cols-2 lg:block lg:max-w-xs xl:max-w-sm lg:mx-auto lg:h-[350px] lg:mb-[400px] gap-6 w-full py-8"
          >
            {ecosystemPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="gsap-ecosystem-card opacity-0 lg:absolute lg:inset-0 glass-card p-6 md:p-8 flex flex-col justify-between border border-[#FF9F76]/10 bg-[#1C2A47]/40 backdrop-blur shadow-xl relative select-none w-full h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/25 px-2.5 py-0.5 rounded">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-[#EDE9E0]/40 font-bold text-xs uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between text-xs uppercase font-bold tracking-wider text-[#FF9F76]">
                  <span>{pillar.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services Grid */}
      <section ref={servicesRef} className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#1C2A47]/50 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
              Business Support Pathways
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
              Tailored Pathways for Every Stage of Your Business
            </h2>
            <p className="text-xs text-[#EDE9E0]/50">
              Select the support stream matching your experience level and
              organizational volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <TiltCard
                key={service.title}
                tilt={5}
                delay={(idx % 2) * 0.12}
                className="flex flex-col justify-between glass-card glass-card-hover p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF9F76] bg-[#FF9F76]/10 border border-[#FF9F76]/25 px-2.5 py-0.5 rounded">
                      Program 0{idx + 1}
                    </span>
                    <Link
                      href={service.link}
                      className="text-xs font-bold text-[#EDE9E0]/40 hover:text-[#FF9F76] transition-colors flex items-center gap-1 uppercase tracking-wider"
                    >
                      Read Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#EDE9E0]/40">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-start space-x-2 text-xs text-[#EDE9E0]/60"
                        >
                          <Check className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-bold text-[#EDE9E0]/40 uppercase tracking-wider mr-1.5">
                      Best For:
                    </span>
                    {service.bestFor.map((bf) => (
                      <span
                        key={bf}
                        className="bg-[#1C2A47]/60 border border-[#FF9F76]/15 text-xs font-semibold text-[#EDE9E0]/60 px-2 py-0.5 rounded"
                      >
                        {bf}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={service.action}
                    className="w-full text-center bg-[#FF9F76] hover:bg-[#F4845F] text-[#050A14] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FF9F76]/10"
                  >
                    {service.ctaText}
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Membership Comparison Table */}
      <section
        ref={pricingRef}
        className="py-20 bg-[#1C2A47]/15"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 gsap-pricing-el">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#1C2A47]/50 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
              Pricing Matrices
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
              Compare Membership Options
            </h2>
            <p className="text-xs text-[#EDE9E0]/50">
              Clear structures. Side-by-side access capabilities designed for
              independent tax offices.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="gsap-pricing-el overflow-x-auto border border-[#FF9F76]/15 rounded-xl bg-[#1C2A47]/20 backdrop-blur-md">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs text-[#EDE9E0]/70">
              {/* Sticky Table Header */}
              <thead className="bg-[#050A14] sticky top-16 z-20">
                <tr>
                  <th className="p-4 font-bold text-[#EDE9E0]/50 uppercase tracking-wider w-[40%]">
                    Capabilities & Benefits
                  </th>
                  <th className="p-4 text-center font-bold text-[#EDE9E0]/70 uppercase tracking-wider w-[20%]">
                    Starter
                  </th>
                  <th className="p-4 text-center font-bold text-[#FF9F76] uppercase tracking-wider w-[20%] bg-[#FF9F76]/8 border-x border-[#FF9F76]/25">
                    Professional
                    <span className="block text-xs font-black text-[#F4845F] mt-0.5 uppercase tracking-normal font-sans">
                      Most Popular
                    </span>
                  </th>
                  <th className="p-4 text-center font-bold text-[#EDE9E0]/70 uppercase tracking-wider w-[20%]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2A47]/60">
                {/* Feature Rows */}
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Professional Tax Software Access
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono">
                    YES (Cloud)
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    YES (Cloud)
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono">
                    YES (Enterprise)
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Weekly Open Office Live Hours
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono">
                    YES
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    YES
                  </td>
                  <td className="p-4 text-center text-[#FF9F76] font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Software Walkthrough Guides
                  </td>
                  <td className="p-4 text-center text-[#EDE9E0]/50">Basic</td>
                  <td className="p-4 text-center text-white font-semibold bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    Advanced
                  </td>
                  <td className="p-4 text-center text-white font-semibold">
                    Advanced
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    ERO Support & Training
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Contact Us</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Add-on Services Guides
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Contact Us</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    CRM Templates & Automations
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Contact Us</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Live Attorney Consultations
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Contact Us</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    Service Bureau Audits & Setup
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    White-label Branding
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-[#1C2A47]/20 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    1-on-1 Advisor Strategy Calls
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <button onClick={() => openModal("strategy")} className="text-[10px] text-[#EDE9E0]/50 hover:text-[#FF9F76] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Learn More</button>
                  </td>
                  <td className="p-4 text-center text-green-400 font-bold">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                </tr>
                {/* Button actions row */}
                <tr className="bg-[#050A14]/60">
                  <td className="p-4 font-bold text-[#EDE9E0]/50">
                    Get Started Today
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-[#1C2A47] hover:bg-[#243352] text-[#EDE9E0]/70 hover:text-white font-bold border border-[#FF9F76]/20 tracking-wider uppercase text-[9px] cursor-pointer w-full transition-all"
                    >
                      Choose Starter
                    </button>
                  </td>
                  <td className="p-4 text-center bg-[#FF9F76]/5 border-x border-[#FF9F76]/20">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF9F76] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#050A14] font-extrabold tracking-wider uppercase text-[9px] cursor-pointer w-full shadow-lg shadow-[#FF9F76]/20"
                    >
                      Choose Professional
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-[#1C2A47] hover:bg-[#243352] text-[#EDE9E0]/70 hover:text-white font-bold border border-[#FF9F76]/20 tracking-wider uppercase text-[9px] cursor-pointer w-full transition-all"
                    >
                      Choose Enterprise
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9F76] bg-[#1C2A47]/50 border border-[#FF9F76]/20 px-3 py-1 rounded inline-block">
              Client Stories
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal uppercase">
              Proven Success in the Community
            </h2>
            <p className="text-xs text-[#EDE9E0]/50">
              Verified success stories from tax professionals who transitioned
              to independent EROs and Service Bureaus.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* 9. FAQs Section */}
      <section ref={faqRef} className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            items={homepageFaqs}
            title="FAQs"
          />
        </div>
      </section>
    </div>
  );
}
