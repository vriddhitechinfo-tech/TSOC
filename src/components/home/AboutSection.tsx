"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/motion/TiltCard";

export default function AboutSection() {
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
          stagger: 0.15,
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
    <section ref={aboutRef} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="gsap-about-el space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#161412]/50 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
              More Than Tax Software
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white tracking-normal leading-tight uppercase">
              Built for Tax Professionals. Focused on Your Growth.
            </h2>
            <p className="text-xs md:text-sm text-[#EDE9E0]/60 leading-relaxed">
              We combine professional tax software, ERO setup, scaling
              strategies, and live expert access — all in one community.
              Whether you&apos;re filing your first return or running a
              multi-location firm, we support your independence.
            </p>
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="text-[#EDE9E0]/50 text-xs leading-relaxed">
                A community where tax professionals access tools, education,
                and opportunities to build sustainable businesses.
              </p>
            </div>
          </div>

          <TiltCard
            tilt={5}
            className="relative rounded-2xl overflow-hidden border border-[#FFB26A]/20 shadow-xl shadow-black/60"
          >
            <Image
              src="/about_community.png"
              alt="Diverse community of tax professionals collaborating in a modern office setting"
              width={800}
              height={560}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5">
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
              <p className="text-[#EDE9E0]/70 text-xs mt-1 leading-relaxed">
                Connect with peers. Create scalable revenue models. Conquer the
                tax industry on your own terms.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
