"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import { useModal } from "@/context/ModalContext";
import { servicePathways } from "@/data/homeData";
import { OPEN_OFFICE_COMMUNITY_LINK, ERO_ENABLEMENT_LINK, TAX_SOFTWARE_FUNNEL_LINK, SERVICE_BUREAU_FUNNEL_LINK, PARTNER_CALL_LINK, withUtm } from "@/lib/constants";

const EXTERNAL_CTA_LINKS: Partial<Record<string, string>> = {
  openoffice: withUtm(OPEN_OFFICE_COMMUNITY_LINK, "open-office-community"),
  ero: withUtm(ERO_ENABLEMENT_LINK, "ero-enablement"),
  software: withUtm(TAX_SOFTWARE_FUNNEL_LINK, "tax-software-access"),
  bureau: withUtm(SERVICE_BUREAU_FUNNEL_LINK, "service-bureau-growth-card"),
  // "Set Up Your Workflow" (CRM & Automation card) — routes to the
  // Collaborations & Solutions calendar rather than the old generic intake
  // form, which had no defined routing (website review 3 Sep 2026).
  technology: withUtm(PARTNER_CALL_LINK, "workflow-setup"),
};

export default function ServicesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB26A] bg-[#161412]/80 border border-[#FFB26A]/20 px-3.5 py-1 rounded-full inline-block">
            OUR CORE
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            THE COLLECTIVE GROWTH ECOSYSTEM
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE9E0]/60 max-w-lg mx-auto">
            Everything you need to grow — software, training, community, and scaling systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePathways.map((service, idx) => (
            <TiltCard
              key={service.title}
              tilt={5}
              delay={(idx % 2) * 0.12}
              className={`flex flex-col justify-between glass-card glass-card-hover p-6 md:p-8 ${
                idx === 0
                  ? "border-[#FFB26A]/40 bg-[#FFB26A]/5"
                  : ""
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFB26A] bg-[#FFB26A]/10 border border-[#FFB26A]/25 px-2.5 py-0.5 rounded">
                    Program 0{idx + 1}
                  </span>
                  <Link
                    href={service.link}
                    className="text-xs font-bold text-[#EDE9E0]/40 hover:text-[#FFB26A] transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 items-center mb-3">
                    <span className="text-xs font-bold text-[#EDE9E0]/40 uppercase tracking-wider mr-1">
                      Best For:
                    </span>
                    {service.bestFor.map((bf) => (
                      <span
                        key={bf}
                        className="bg-[#FFB26A]/10 border border-[#FFB26A]/25 text-xs font-semibold text-[#FFB26A]/80 px-2 py-0.5 rounded"
                      >
                        {bf}
                      </span>
                    ))}
                  </div>

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
              </div>

              <div className="pt-8">
                {EXTERNAL_CTA_LINKS[service.modalType] ? (
                  <a
                    href={EXTERNAL_CTA_LINKS[service.modalType]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#0A0908] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FFB26A]/10 block"
                  >
                    {service.ctaText}
                  </a>
                ) : (
                  <button
                    onClick={() => openModal(service.modalType)}
                    className="w-full text-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#0A0908] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider shadow-lg shadow-[#FFB26A]/10"
                  >
                    {service.ctaText}
                  </button>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
