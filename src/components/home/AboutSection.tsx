"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/motion/TiltCard";
import { useModal } from "@/context/ModalContext";
import {
  MessageCircle,
  Users,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutSection() {
  const { openModal } = useModal();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (aboutRef.current) {
      const els = aboutRef.current.querySelectorAll(".gsap-about-el");
      const tween = gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
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
    <section ref={aboutRef} className="py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,106,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Side: Brand Story & Mission */}
          <div className="lg:col-span-7 gsap-about-el space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#161412]/80 border border-[#FFB26A]/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB26A] animate-pulse" />
              More Than Tax Software
            </span>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight uppercase">
              Built for Tax Pros. <br />
              <span className="text-[#FFB26A]">Focused on Your Growth.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#EDE9E0]/70 leading-relaxed max-w-2xl">
              Tired of predatory splits taking a cut of every return you file? Done paying a middleman to license software you could own outright?{" "}
              <strong className="text-white font-semibold">
                TSOC (The Sector of Collectives)
              </strong>{" "}
              is the private nationwide ecosystem built for independent preparers, EROs, and firm leaders who are done leaving money on the table — and ready to keep 100% of what they earn.
            </p>

            {/* Who We Are & What We Do Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Who We Are */}
              <div className="bg-[#161412]/60 border border-[#FFB26A]/15 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#FFB26A]">
                  <Users className="w-4 h-4" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Who The Sector Is
                  </h3>
                </div>
                <p className="text-[#EDE9E0]/60 text-xs leading-relaxed">
                  A collective of 2,000+ independent tax preparers, ERO owners, and Service Bureau leaders united under one standard: 100% fee retention and complete business ownership.
                </p>
              </div>

              {/* What We Do */}
              <div className="bg-[#161412]/60 border border-[#FFB26A]/15 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#FFB26A]">
                  <Layers className="w-4 h-4" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    What The Sector Does
                  </h3>
                </div>
                <p className="text-[#EDE9E0]/60 text-xs leading-relaxed">
                  We combine enterprise tax software, step-by-step EFIN credentialing, white-label Service Bureau mentorship, and 365 days of live Open Office support.
                </p>
              </div>
            </div>

            {/* Core Pillars Bullet Points */}
            <div className="pt-1 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#EDE9E0]/80">
                <CheckCircle2 className="w-4 h-4 text-[#FFB26A] shrink-0" />
                <span>
                  <strong className="text-white">Enterprise Tax Software:</strong> Desktop &amp; cloud access with zero per-return split fees.
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#EDE9E0]/80">
                <CheckCircle2 className="w-4 h-4 text-[#FFB26A] shrink-0" />
                <span>
                  <strong className="text-white">ERO &amp; EFIN Enablement:</strong> Complete IRS e-Services, ID.me, &amp; compliance support.
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#EDE9E0]/80">
                <CheckCircle2 className="w-4 h-4 text-[#FFB26A] shrink-0" />
                <span>
                  <strong className="text-white">Daily Live Open Office:</strong> Year-round coworking, attorney Q&amp;As, &amp; revenue strategies.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openModal("strategy")}
                className="inline-flex items-center gap-2 bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3 px-6 rounded-lg text-xs transition-colors cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FFB26A]/10"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to Our Team
              </button>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#FFB26A]/30 hover:border-[#FFB26A] text-white hover:text-[#FFB26A] font-bold py-3 px-5 rounded-lg text-xs transition-colors uppercase tracking-wider"
              >
                Learn Our Full Story
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Image & Motto Card */}
          <div className="lg:col-span-5 gsap-about-el">
            <TiltCard
              tilt={5}
              className="relative rounded-2xl overflow-hidden border border-[#FFB26A]/20 shadow-2xl shadow-black/80 group"
            >
              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#0A0908]/90 backdrop-blur-md border border-[#FFB26A]/30 px-3 py-1.5 rounded-full flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB26A]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  100% Fee Retention • 0% Split
                </span>
              </div>

              <Image
                src="/about_community.png"
                alt="Diverse community of tax professionals collaborating in a modern office setting"
                width={800}
                height={560}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="text-xl sm:text-2xl font-display font-semibold tracking-wider text-white select-none">
                  <span className="font-display italic font-semibold text-2xl sm:text-3xl text-[#FFB26A]">
                    Connect
                  </span>
                  <span className="text-[#FFB26A]/30 mx-2">•</span>
                  <span className="font-display italic font-semibold text-2xl sm:text-3xl text-[#FFB26A]">
                    Create
                  </span>
                  <span className="text-[#FFB26A]/30 mx-2">•</span>
                  <span className="font-display font-semibold text-2xl sm:text-3xl text-white">
                    Conquer
                  </span>
                </div>
                <p className="text-[#EDE9E0]/70 text-xs leading-relaxed">
                  Connect with peers. Create scalable revenue models. Conquer the tax industry on your own terms.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
