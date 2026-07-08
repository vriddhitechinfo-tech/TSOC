"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
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
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StageQuiz from "@/components/StageQuiz";
import TrustSection from "@/components/TrustSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function Home() {
  const { openModal } = useModal();

  const heroRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLDivElement>(null);
  const ecosystemContainerRef = useRef<HTMLDivElement>(null);

  // Stats refs for counting animation
  const yearsValRef = useRef<HTMLSpanElement>(null);
  const erosValRef = useRef<HTMLSpanElement>(null);
  const membersValRef = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    let handleEcosystemResize: (() => void) | null = null;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animations (staggered fade/slide-up)
      if (heroRef.current) {
        const heroElements = heroRef.current.querySelectorAll(".gsap-hero-el");
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
          },
        );
      }

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

      // 5. Services Grid Stagger Animation
      if (servicesRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>(".gsap-service-card");

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 120,
              scale: 0.85,
              rotateX: 20,
              rotateY: i % 2 === 0 ? -8 : 8,
              filter: "blur(10px)",
              transformPerspective: 1000,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              filter: "blur(0px)",
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 45%",
                scrub: 1.2,
              },
            },
          );
        });
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
      title: "Ancillary Revenue",
      tag: "Diversification",
      desc: "Implement structured bookkeeping, credit coaching, and business registration setups to unlock additional year-round income pipelines.",
      actionText: "View Expansion Guide",
    },
    {
      title: "Automation & CRM Setup",
      tag: "Operations",
      desc: "Cut admin workload in half. Build automated customer intake systems, calendar auto-scheduling, and customized text/email marketing pipelines.",
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
      question: "What exactly is The Sector of Collectives?",
      answer:
        "The Sector of Collectives is a comprehensive support ecosystem for tax professionals. We provide professional cloud-based tax software, ERO setup enablement, Service Bureau growth mentorship, daily live coworking hours, and direct access to legal and business advisors.",
    },
    {
      question: "Do I need my own EFIN to buy your tax software?",
      answer:
        "No, if you don't have an EFIN, you can start using our software immediately while participating in our ERO Enablement program, which guides you step-by-step to obtain your independent credentials from the IRS.",
    },
    {
      question: "How does the Service Bureau model differ from standard ERO?",
      answer:
        "A standard ERO prepares tax returns for individual clients. A Service Bureau licenses tax software to other tax preparers, acts as their support desk, and earns residual revenue splits on every return processed through their sub-offices.",
    },
    {
      question: "Are there contract commitments for the memberships?",
      answer:
        "Our programs are structured on simple, transparent annual agreements. There are no hidden franchise royalties or surprise split models. You choose the level of software and mentorship support you need.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#120b06] min-h-screen">
      {/* Subtle modern golden background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,168,93,0.04)_0%,transparent_50%)] pointer-events-none -z-10" />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="gsap-hero-el inline-flex items-center rounded-lg bg-amber-955/30 border border-amber-900/40 px-3.5 py-1.5 text-xs font-semibold text-[#fda85d]">
            The Sector of Collectives Tax Software &amp; Community
          </span>
          <h1 className="gsap-hero-el text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Helping Tax Professionals Launch, Grow, and Scale Profitable
            Businesses
          </h1>
          <p className="gsap-hero-el text-xs sm:text-sm md:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Tax software is just the beginning. Whether you&apos;re a new
            preparer, an established ERO, or scaling a Service Bureau, The
            Sector of Collectives provides the tools, mentorship, and support
            structures to secure your business independence.
          </p>

          {/* Quick Pillars Grid */}
          <div className="gsap-hero-el grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left py-4">
            {[
              "Tax Software Access",
              "ERO Enablement",
              "Service Bureau Growth",
              "Open Office Community",
              "Tax Business Coaching",
              "Technology & Automation",
            ].map((pillar) => (
              <div
                key={pillar}
                className="flex items-center space-x-2 text-xs text-stone-250"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-500/10 border border-amber-900/35 text-[#fda85d]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="font-semibold text-stone-300">{pillar}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="gsap-hero-el flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => openModal("strategy")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f97316] hover:from-[#e0924f] hover:to-[#ea580c] text-black px-8 py-3.5 text-xs font-extrabold shadow-md hover:shadow-[#fda85d]/10 transition-all cursor-pointer uppercase tracking-wider"
            >
              Get Started Today
            </button>
            <button
              onClick={() => openModal("strategy")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1a100a] border border-amber-900/40 hover:border-amber-500/45 px-8 py-3.5 text-xs font-bold text-stone-300 hover:text-white transition-all cursor-pointer uppercase tracking-wider"
            >
              Book a Strategy Call
            </button>
            <Link
              href="/tax-software"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1a100a]/40 border border-amber-900/30 hover:bg-[#1a100a] px-8 py-3.5 text-xs font-semibold text-[#fda85d] hover:text-white transition-all"
            >
              View Software Packages
            </Link>
          </div>

          {/* Hero Image */}
          <div className="gsap-hero-el relative mt-10 mx-auto max-w-5xl rounded-2xl overflow-hidden border border-amber-900/30 shadow-2xl shadow-black/60">
            <Image
              src="/hero_tax_professional.png"
              alt="Tax professional working at a modern home office with dual monitors showing tax software"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#120b06]/80 backdrop-blur border border-amber-900/40 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#fda85d]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Live ERO Support {'\u00b7'} Open Office Daily
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Business Stage Quiz Router */}
      <section
        ref={quizRef}
        className="py-12 border-t border-amber-950/20 bg-amber-955/5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">
            What stage is your tax business at?
          </h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
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
        className="py-16 bg-[#18100a]/80 border-y border-amber-950/30 relative"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <span
                ref={yearsValRef}
                className="text-4xl md:text-5xl font-black text-[#fda85d] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Years Supporting Tax Pros
              </span>
              <p className="text-[10px] text-stone-500">
                Established training, setups, and support structures since 2014
              </p>
            </div>
            <div className="space-y-1 border-y md:border-y-0 md:border-x border-amber-950/20 py-6 md:py-0">
              <span
                ref={erosValRef}
                className="text-4xl md:text-5xl font-black text-[#fda85d] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Independent EROs Supported
              </span>
              <p className="text-[10px] text-stone-500">
                Firms transitioned from splits to keeping 100% of their fees
              </p>
            </div>
            <div className="space-y-1">
              <span
                ref={membersValRef}
                className="text-4xl md:text-5xl font-black text-[#fda85d] font-mono block"
              >
                0+
              </span>
              <span className="text-xs text-white font-bold uppercase tracking-wider block">
                Active Community Members
              </span>
              <p className="text-[10px] text-stone-500">
                Coworking, legal consultations, and business workshops
                year-round
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section ref={aboutRef} className="py-20 border-b border-amber-955/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="gsap-about-el space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
                More Than Tax Software
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug uppercase">
                At The Sector of Collectives, we believe tax professionals
                deserve more than tools.
              </h2>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                Our collaborative community combines professional cloud-based
                tax software, ERO Application setup, scaling strategies, and
                live access to experts who understand what it takes to succeed.
                Whether you&apos;re filing your first return or scaling a
                multi-location brand, we&apos;re committed to your independence.
              </p>
              <div className="pt-4 border-t border-amber-955/20 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Our Mission
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed">
                  To create a collaborative community where tax professionals
                  have access to the tools, education, relationships, and
                  opportunities needed to grow sustainable businesses.
                </p>
              </div>
            </div>

            <div className="gsap-about-el relative rounded-2xl overflow-hidden border border-amber-900/30 shadow-xl shadow-black/40">
              <Image
                src="/about_community.png"
                alt="Diverse community of tax professionals collaborating in a modern office setting"
                width={800}
                height={560}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xl sm:text-2xl font-black tracking-wider text-white select-none">
                  <span className="text-[#fda85d]">Connect</span>
                  <span className="text-amber-900/60 mx-2">•</span>
                  <span className="text-[#fda85d]">Create</span>
                  <span className="text-amber-900/60 mx-2">•</span>
                  <span className="text-white">Conquer</span>
                </div>
                <p className="text-stone-300 text-[10px] mt-1 leading-relaxed">
                  Connect with peers. Create scalable revenue models. Conquer the tax industry on your own terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Signals */}
      <TrustSection />

      {/* Pinned Card Stack Ecosystem Section */}
      <section
        ref={ecosystemSectionRef}
        className="relative py-20 bg-[#120b06] border-b border-amber-955/10 overflow-hidden flex flex-col justify-center min-h-screen"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
              Our Core Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              The Collective Growth Ecosystem
            </h2>
            <p className="text-xs text-stone-450">
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
                className="gsap-ecosystem-card opacity-0 lg:absolute lg:inset-0 glass-card p-6 md:p-8 flex flex-col justify-between border border-amber-900/30 bg-[#1a100a]/90 md:bg-[#1a100a]/95 backdrop-blur shadow-xl relative select-none w-full h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#fda85d] bg-amber-955/20 border border-amber-900/35 px-2.5 py-0.5 rounded">
                      Pillar 0{idx + 1}
                    </span>
                    <span className="text-stone-500 font-bold text-xs uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-amber-955/15 flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-[#fda85d]">
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
              Business Support Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Tailored Pathways for Every Stage of Your Business
            </h2>
            <p className="text-xs text-stone-505">
              Select the support stream matching your experience level and
              organizational volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="gsap-service-card opacity-0 flex flex-col justify-between glass-card p-6 md:p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#fda85d] bg-amber-950/30 border border-amber-900/40 px-2.5 py-0.5 rounded">
                      Program 0{idx + 1}
                    </span>
                    <Link
                      href={service.link}
                      className="text-[10px] font-bold text-stone-500 hover:text-[#fda85d] transition-colors flex items-center gap-1 uppercase tracking-wider"
                    >
                      Read Guide
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      Includes:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.includes.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-start space-x-2 text-xs text-stone-400"
                        >
                          <Check className="w-3.5 h-3.5 text-[#fda85d] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider mr-1.5">
                      Best For:
                    </span>
                    {service.bestFor.map((bf) => (
                      <span
                        key={bf}
                        className="bg-amber-955/35 border border-amber-900/30 text-[9px] font-semibold text-stone-450 px-2 py-0.5 rounded"
                      >
                        {bf}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={service.action}
                    className="w-full text-center bg-[#1a100a] hover:bg-amber-950 border border-amber-900/30 text-[#fda85d] hover:text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    {service.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Membership Comparison Table */}
      <section
        ref={pricingRef}
        className="py-20 border-t border-amber-955/10 bg-amber-955/5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 gsap-pricing-el">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
              Pricing Matrices
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Compare Membership Options
            </h2>
            <p className="text-xs text-stone-500">
              Clear structures. Side-by-side access capabilities designed for
              independent tax offices.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="gsap-pricing-el overflow-x-auto border border-amber-900/35 rounded-xl bg-[#18100a]/50 backdrop-blur-md">
            <table className="w-full min-w-[700px] border-collapse text-left text-xs text-stone-300">
              {/* Sticky Table Header */}
              <thead className="bg-[#120b06] border-b border-amber-900/35 sticky top-16 z-20">
                <tr>
                  <th className="p-4 font-bold text-stone-400 uppercase tracking-wider w-[40%]">
                    Capabilities &amp; Benefits
                  </th>
                  <th className="p-4 text-center font-bold text-stone-300 uppercase tracking-wider w-[20%]">
                    Community Access
                  </th>
                  <th className="p-4 text-center font-bold text-[#fda85d] uppercase tracking-wider w-[20%] bg-amber-950/20 border-x border-[#fda85d]/20">
                    Growth Access
                    <span className="block text-[8px] font-black text-stone-400 mt-0.5 uppercase tracking-normal font-sans">
                      Most Popular
                    </span>
                  </th>
                  <th className="p-4 text-center font-bold text-stone-300 uppercase tracking-wider w-[20%]">
                    Expansion Access
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-950/30">
                {/* Feature Rows */}
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Professional Tax Software Access
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES (Cloud)
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES (Cloud)
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES (Enterprise)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Weekly Open Office Live Hours
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Software Walkthrough Guides
                  </td>
                  <td className="p-4 text-center text-stone-400">Basic</td>
                  <td className="p-4 text-center text-white font-semibold bg-amber-955/20 border-x border-[#fda85d]/10">
                    Advanced
                  </td>
                  <td className="p-4 text-center text-white font-semibold">
                    Advanced
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    IRS ERO Enablement Setup
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Ancillary Revenue Systems Guides
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    CRM Templates &amp; Automations
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Live Attorney consultations
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    YES
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    Service Bureau Audits &amp; Setup
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    White-label branding deployment
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">
                    1-on-1 advisor strategy checks
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono">
                    NO
                  </td>
                  <td className="p-4 text-center text-stone-600 font-mono bg-amber-955/20 border-x border-[#fda85d]/10">
                    NO
                  </td>
                  <td className="p-4 text-center text-emerald-400 font-bold font-mono">
                    YES
                  </td>
                </tr>
                {/* Button actions row */}
                <tr className="bg-[#120b06]/40">
                  <td className="p-4 font-bold text-stone-400">
                    Select Access Tier
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-[#18100a] hover:bg-amber-950 text-stone-300 hover:text-white font-bold border border-amber-900/30 tracking-wider uppercase text-[9px] cursor-pointer w-full"
                    >
                      Choose Community
                    </button>
                  </td>
                  <td className="p-4 text-center bg-amber-950/20 border-x border-[#fda85d]/25">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f97316] hover:from-[#e0924f] hover:to-[#ea580c] text-black font-extrabold tracking-wider uppercase text-[9px] cursor-pointer w-full shadow"
                    >
                      Choose Growth
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => openModal("strategy")}
                      className="px-4 py-2 rounded-lg bg-[#18100a] hover:bg-amber-950 text-stone-300 hover:text-white font-bold border border-amber-900/30 tracking-wider uppercase text-[9px] cursor-pointer w-full"
                    >
                      Choose Expansion
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-20 border-b border-amber-955/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fda85d] bg-amber-955/35 border border-amber-900/40 px-3 py-1 rounded inline-block">
              Client Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              Proven Success in the Community
            </h2>
            <p className="text-xs text-stone-500">
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
            title="The Sector of Collectives FAQs"
          />
        </div>
      </section>
    </div>
  );
}
