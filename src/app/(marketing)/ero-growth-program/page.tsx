"use client";

import React, { useEffect, useRef } from "react";
import { TrendingUp, Users, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";
import TiltCard from "@/components/motion/TiltCard";

export default function EROGrowthProgramPage() {
  const { openModal } = useModal();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (pageRef.current) {
      const reveals = pageRef.current.querySelectorAll(".gsap-reveal");
      gsap.fromTo(
        reveals,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: pageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-[#080808] min-h-screen py-16 sm:py-10 animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,178,106,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="gsap-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center rounded-full bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-3 py-1 text-xs font-semibold text-[#FFB26A]">
            Coming Soon
          </span>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            ERO Growth Program
          </h1>
          <p className="text-sm text-[#EDE9E0]/60 leading-relaxed">
            A dedicated growth track for established EROs ready to scale volume, add revenue streams,
            and expand their independent practice. Full program details are being finalized —
            book a call to get on the list and be first to hear when it opens.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openModal("erogrowth")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3.5 px-8 text-sm shadow-md transition-all cursor-pointer uppercase tracking-wider"
            >
              Build my network
            </button>
          </div>
        </div>

        {/* Placeholder highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Scale Your Volume",
              desc: "Details coming soon on structured strategies to grow filing volume year over year.",
            },
            {
              icon: Users,
              title: "Expand Your Network",
              desc: "Details coming soon on connecting with other established EROs in the collective.",
            },
            {
              icon: Rocket,
              title: "New Revenue Streams",
              desc: "Details coming soon on ancillary services and offers built for growing ERO practices.",
            },
          ].map((item) => (
            <TiltCard key={item.title} className="glass-card glass-card-hover p-6 space-y-4">
              <div className="h-9 w-9 rounded-md bg-[#161412] border border-[#FFB26A]/30 flex items-center justify-center text-[#FFB26A]">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs text-[#EDE9E0]/60 leading-relaxed">{item.desc}</p>
            </TiltCard>
          ))}
        </div>

        {/* CTA */}
        <div className="gsap-reveal text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">
            Want early access?
          </h3>
          <p className="text-xs text-[#EDE9E0]/50 leading-relaxed">
            Book a call and we&apos;ll reach out the moment the ERO Growth Program opens.
          </p>
          <button
            onClick={() => openModal("erogrowth")}
            className="bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#080808] font-extrabold py-3 px-8 rounded-lg text-xs transition-colors shadow-md mt-2 cursor-pointer uppercase tracking-wider inline-block"
          >
            Build my network
          </button>
        </div>
      </div>
    </div>
  );
}
