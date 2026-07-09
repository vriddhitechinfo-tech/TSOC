"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const { openModal } = useModal();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-[#020710] text-[#EDE9E0]/50 py-12 mt-auto border-t border-[#FFD94A]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size={28} />
              <span className="font-display font-semibold text-white tracking-wide text-base uppercase">
                The Sector of Collectives
              </span>
            </Link>
            <p className="text-xs text-[#EDE9E0]/40 max-w-sm leading-relaxed">
              Helping tax professionals scale profitability, secure independence, and develop year-round systems. We provide more than just professional tax software—we build sustainable businesses.
            </p>
            <div className="text-[10px] uppercase tracking-widest text-[#FFAA2A]/70 font-bold">
              Motto: <span className="font-script text-base text-[#FFD94A]">Connect</span> • <span className="font-script text-base text-[#FFD94A]">Create</span> • <span className="font-display font-semibold text-white">Conquer</span>
            </div>
          </div>

          {/* Software & Tech */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tax-software" className="hover:text-[#FFD94A] transition-colors">
                  Tax Software for Tax Preparers
                </Link>
              </li>
              <li>
                <Link href="/tax-software" className="hover:text-[#FFD94A] transition-colors">
                  Professional Tax Software
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FFD94A] transition-colors">
                  Tax Business Automation
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FFD94A] transition-colors">
                  CRM for Tax Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Growth & Enablement */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Growth Programs</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/ero-enablement" className="hover:text-[#FFD94A] transition-colors">
                  How to Become an ERO
                </Link>
              </li>
              <li>
                <Link href="/ero-enablement" className="hover:text-[#FFD94A] transition-colors">
                  IRS ERO Support
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FFD94A] transition-colors">
                  Start a Service Bureau
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FFD94A] transition-colors">
                  Service Bureau Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Action */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/open-office" className="hover:text-[#FFD94A] transition-colors">
                  Tax Professional Community
                </Link>
              </li>
              <li>
                <Link href="/open-office" className="hover:text-[#FFD94A] transition-colors">
                  Tax Industry Networking
                </Link>
              </li>
              <li>
                <button onClick={() => openModal("partner")} className="hover:text-[#FFD94A] transition-colors text-left cursor-pointer">
                  Become a Partner
                </button>
              </li>
              <li>
                <button onClick={() => openModal("strategy")} className="hover:text-[#FFD94A] transition-colors text-left cursor-pointer">
                  Schedule a Strategy Session
                </button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#FFD94A]/10 my-8" />

        {/* Newsletter & Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto">
            <h4 className="text-xs font-bold text-white mb-2">Subscribe to our Growth Newsletter</h4>
            <p className="text-[11px] text-[#EDE9E0]/40 mb-4 max-w-md">
              Receive actionable tips on tax software setup, client automations, and IRS compliance review guidelines.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1C2A47]/40 border border-[#FFD94A]/20 rounded-lg px-3 py-2 text-xs text-white placeholder-[#EDE9E0]/30 outline-none focus:border-[#FFD94A] w-full transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] hover:from-[#FFAA2A] hover:to-[#FF8C00] text-[#050A14] font-bold text-[10px] py-2 px-4 rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
              >
                <Mail className="w-3.5 h-3.5" />
                {subscribed ? "Subscribed!" : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="text-[10px] text-[#EDE9E0]/30 text-center lg:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} The Sector of Collectives. All rights reserved.</p>
            <p>Providing Professional Tax Software & Community mentorship built for long-term sustainability.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
