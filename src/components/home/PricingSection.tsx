"use client";

import React, { useRef, useEffect } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "@/context/ModalContext";

export default function PricingSection() {
  const { openModal } = useModal();
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (pricingRef.current) {
      const els = pricingRef.current.querySelectorAll(".gsap-pricing-el");
      const tween = gsap.fromTo(
        els,
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
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, []);

  return (
    <section ref={pricingRef} className="py-20 bg-[#0A0A0A]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 gsap-pricing-el">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#161412]/50 border border-[#FFB26A]/20 px-3 py-1 rounded inline-block">
            Pricing
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
            Simple, Transparent Plans
          </h2>
          <p className="text-xs text-[#EDE9E0]/50">
            Pick what fits your business. No hidden fees. No surprises.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="gsap-pricing-el overflow-x-auto border border-[#FFB26A]/15 rounded-xl bg-[#111]/30 backdrop-blur-md">
          <table className="w-full min-w-[700px] border-collapse text-left text-xs text-[#EDE9E0]/70">
            <thead className="bg-[#080808] sticky top-16 z-20">
              <tr>
                <th className="p-4 font-bold text-[#EDE9E0]/50 uppercase tracking-wider w-[40%]">
                  What&apos;s Included
                </th>
                <th className="p-4 text-center font-bold text-[#EDE9E0]/70 uppercase tracking-wider w-[20%]">
                  Starter
                </th>
                <th className="p-4 text-center font-bold text-[#FFB26A] uppercase tracking-wider w-[20%] bg-[#FFB26A]/8 border-x border-[#FFB26A]/25">
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
            <tbody className="divide-y divide-[#1a1a1a]/80">
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Professional Tax Software Access</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Open Office Live Hours</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Software Walkthrough Guides</td>
                <td className="p-4 text-center text-[#EDE9E0]/50">Foundational</td>
                <td className="p-4 text-center text-white font-semibold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Advanced</td>
                <td className="p-4 text-center text-white font-semibold">Advanced</td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">ERO Support &amp; Training</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Add-on Services Guides</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">CRM Templates &amp; Automations</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Live Attorney Consultations</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">Service Bureau Audits &amp; Setup</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">White-label Branding</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#111]/30 transition-colors">
                <td className="p-4 font-semibold text-white">1-on-1 Advisor Strategy Calls</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">
                  <button onClick={() => openModal("strategy")} className="text-[10px] text-[#FFB26A]/70 hover:text-[#FFB26A] transition-colors font-semibold underline underline-offset-2 cursor-pointer">Ask Us →</button>
                </td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              {/* CTA row */}
              <tr className="bg-[#080808]/60">
                <td className="p-4 font-bold text-[#EDE9E0]/50">Ready to get started?</td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="px-4 py-2 rounded-lg bg-[#111] hover:bg-[#1a1a1a] text-[#EDE9E0]/70 hover:text-white font-bold border border-[#FFB26A]/20 tracking-wider uppercase text-[9px] cursor-pointer w-full transition-all">
                    Get Starter
                  </button>
                </td>
                <td className="p-4 text-center bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">
                  <button onClick={() => openModal("strategy")} className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#080808] font-extrabold tracking-wider uppercase text-[9px] cursor-pointer w-full shadow-lg shadow-[#FFB26A]/20">
                    Get Professional
                  </button>
                </td>
                <td className="p-4 text-center">
                  <button onClick={() => openModal("strategy")} className="px-4 py-2 rounded-lg bg-[#111] hover:bg-[#1a1a1a] text-[#EDE9E0]/70 hover:text-white font-bold border border-[#FFB26A]/20 tracking-wider uppercase text-[9px] cursor-pointer w-full transition-all">
                    Get Enterprise
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
