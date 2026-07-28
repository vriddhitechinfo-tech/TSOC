"use client";

import React, { useRef, useEffect } from "react";
import { Check, Sparkles } from "lucide-react";
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
    <section ref={pricingRef} className="py-20 bg-[#0A0A0A]/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,178,106,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 gsap-pricing-el">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#161412]/80 border border-[#FFB26A]/20 px-3.5 py-1 rounded-full inline-block">
            Tax Software Plans
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Professional Tax Software Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE9E0]/60 leading-relaxed max-w-lg mx-auto">
            Enterprise-grade e-filing engines and software packages built for independent tax preparers, growing firms, and Service Bureau networks.
          </p>
        </div>

        {/* Pricing Update Note Banner */}
        <div className="gsap-pricing-el max-w-3xl mx-auto bg-[#161412]/60 border border-[#FFB26A]/20 rounded-xl p-3.5 flex items-center justify-between gap-4 text-xs text-[#EDE9E0]/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFB26A] shrink-0" />
            <span>
              <strong className="text-white">Pricing Update:</strong> Software plan rates are currently being finalized internally. Inquire today for custom volume quotes and demo access.
            </span>
          </div>
          <button
            onClick={() => openModal("software")}
            className="shrink-0 text-[11px] font-extrabold uppercase tracking-wider text-[#FFB26A] hover:underline cursor-pointer"
          >
            Inquire for Demo →
          </button>
        </div>

        {/* Software Comparison Table */}
        <div className="gsap-pricing-el overflow-x-auto border border-[#FFB26A]/20 rounded-2xl bg-[#111]/40 backdrop-blur-md shadow-2xl shadow-black/80">
          <table className="w-full min-w-[720px] border-collapse text-left text-xs text-[#EDE9E0]/70">
            <thead className="bg-[#080808] sticky top-16 z-20 border-b border-[#FFB26A]/20">
              <tr>
                <th className="p-4 sm:p-5 font-bold text-[#EDE9E0]/60 uppercase tracking-wider w-[37%]">
                  Software Feature / Capability
                </th>
                <th className="p-4 sm:p-5 text-center font-bold text-white uppercase tracking-wider w-[21%]">
                  Tax Pro Solo
                  <span className="block text-[10px] font-mono text-[#FFB26A] mt-1 font-semibold normal-case">
                    Single Preparer
                  </span>
                  <span className="block text-[9px] font-bold text-[#EDE9E0]/40 mt-0.5 uppercase">
                    Prices to follow
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center font-bold text-[#FFB26A] uppercase tracking-wider w-[21%] bg-[#FFB26A]/10 border-x border-[#FFB26A]/30">
                  Growing Firm
                  <span className="block text-[10px] font-mono text-[#FFB26A] font-semibold normal-case">
                    Multi-Preparer Office
                  </span>
                  <span className="block text-[9px] font-black text-[#F4845F] mt-0.5 uppercase tracking-wide">
                    Most Popular
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-center font-bold text-white uppercase tracking-wider w-[21%]">
                  Service Bureau
                  <span className="block text-[10px] font-mono text-[#FFB26A] mt-1 font-semibold normal-case">
                    Multi-Location Network
                  </span>
                  <span className="block text-[9px] font-bold text-[#EDE9E0]/40 mt-0.5 uppercase">
                    Prices to follow
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]/80">
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Individual (1040) &amp; Business (1120/1120S/1065/990) Forms</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Cloud &amp; Desktop Software Access</td>
                <td className="p-4 text-center text-[#EDE9E0]/70">Cloud Web Suite</td>
                <td className="p-4 text-center text-white font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Web &amp; Desktop Suite</td>
                <td className="p-4 text-center text-white font-bold">Web + Desktop + Sub-sites</td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Bank Product &amp; Refund Settlement Integration (TPG, EPS, Republic)</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">All 50 States E-Filing &amp; Unlimited State Returns</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Multi-User Logins &amp; Office Console Access</td>
                <td className="p-4 text-center text-[#EDE9E0]/50">1 Preparer Login</td>
                <td className="p-4 text-center text-white font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Up to 10 Preparer Logins</td>
                <td className="p-4 text-center text-[#FFB26A] font-bold">Unlimited Logins &amp; Sub-sites</td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Free Prior-Year Data Conversion (Drake, TaxSlayer, Crosslink, UltraTax)</td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A] bg-[#FFB26A]/5 border-x border-[#FFB26A]/20"><Check className="w-4 h-4 mx-auto" /></td>
                <td className="p-4 text-center text-[#FFB26A]"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Remote Mobile Client Intake &amp; Digital Signature Portal</td>
                <td className="p-4 text-center text-[#EDE9E0]/60">Standard Portal</td>
                <td className="p-4 text-center text-white font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Advanced Portal</td>
                <td className="p-4 text-center text-[#FFB26A] font-bold">Custom Branded Portal</td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">White-Label Branding &amp; Software Sub-Licensing</td>
                <td className="p-4 text-center text-[#EDE9E0]/40">Standard TSOC Branding</td>
                <td className="p-4 text-center text-[#EDE9E0]/70 bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Custom Office Logo</td>
                <td className="p-4 text-center text-green-400 font-bold"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-[#161412]/40 transition-colors">
                <td className="p-4 font-semibold text-white">Dedicated Peak Season Technical &amp; E-File Support</td>
                <td className="p-4 text-center text-[#EDE9E0]/70">Email &amp; Chat Support</td>
                <td className="p-4 text-center text-white font-bold bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">Priority Phone &amp; Chat</td>
                <td className="p-4 text-center text-[#FFB26A] font-bold">Dedicated Bureau Manager</td>
              </tr>

              {/* CTA Row */}
              <tr className="bg-[#080808]/80 border-t border-[#FFB26A]/20">
                <td className="p-4 sm:p-5 font-bold text-white">Ready to choose your software package?</td>
                <td className="p-4 sm:p-5 text-center">
                  <button
                    onClick={() => openModal("software")}
                    className="px-4 py-2.5 rounded-lg bg-[#161412] hover:bg-[#201c19] text-white font-extrabold border border-[#FFB26A]/30 tracking-wider uppercase text-[10px] cursor-pointer w-full transition-all hover:border-[#FFB26A]"
                  >
                    Request Demo
                  </button>
                </td>
                <td className="p-4 sm:p-5 text-center bg-[#FFB26A]/5 border-x border-[#FFB26A]/20">
                  <button
                    onClick={() => openModal("software")}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#FFB26A] to-[#F4845F] hover:from-[#F4845F] hover:to-[#E67049] text-[#080808] font-black tracking-wider uppercase text-[10px] cursor-pointer w-full shadow-lg shadow-[#FFB26A]/20 transition-all"
                  >
                    Inquire for Software
                  </button>
                </td>
                <td className="p-4 sm:p-5 text-center">
                  <button
                    onClick={() => openModal("bureau")}
                    className="px-4 py-2.5 rounded-lg bg-[#161412] hover:bg-[#201c19] text-white font-extrabold border border-[#FFB26A]/30 tracking-wider uppercase text-[10px] cursor-pointer w-full transition-all hover:border-[#FFB26A]"
                  >
                    Bureau Consultation
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
