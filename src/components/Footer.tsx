"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { FileText, Mail } from "lucide-react";

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
    <footer className="bg-[#0b0704] border-t border-amber-950/40 text-stone-400 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-950/30 border border-amber-900/40 text-[#d4af37]">
                <FileText className="h-4.5 w-4.5" />
              </span>
              <span className="font-bold text-white tracking-wider text-base uppercase">
                The Sector
              </span>
            </Link>
            <p className="text-xs text-stone-500 max-w-sm leading-relaxed">
              Helping tax professionals scale profitability, secure independence, and develop year-round systems. We provide more than just professional tax software—we build sustainable businesses.
            </p>
            <div className="text-[10px] uppercase tracking-widest text-amber-600/70 font-bold">
              Motto: <span className="text-[#d4af37]">Connect</span> • <span className="text-[#d4af37]">Create</span> • <span className="text-white">Conquer</span>
            </div>
          </div>

          {/* Software & Tech */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tax-software" className="hover:text-[#d4af37] transition-colors">
                  Tax Software for Tax Preparers
                </Link>
              </li>
              <li>
                <Link href="/tax-software" className="hover:text-[#d4af37] transition-colors">
                  Professional Tax Software
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#d4af37] transition-colors">
                  Tax Business Automation
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#d4af37] transition-colors">
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
                <Link href="/ero-enablement" className="hover:text-[#d4af37] transition-colors">
                  How to Become an ERO
                </Link>
              </li>
              <li>
                <Link href="/ero-enablement" className="hover:text-[#d4af37] transition-colors">
                  IRS ERO Support
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#d4af37] transition-colors">
                  Start a Service Bureau
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#d4af37] transition-colors">
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
                <Link href="/open-office" className="hover:text-[#d4af37] transition-colors">
                  Tax Professional Community
                </Link>
              </li>
              <li>
                <Link href="/open-office" className="hover:text-[#d4af37] transition-colors">
                  Tax Industry Networking
                </Link>
              </li>
              <li>
                <button onClick={() => openModal("partner")} className="hover:text-[#d4af37] transition-colors text-left cursor-pointer">
                  Become a Partner
                </button>
              </li>
              <li>
                <button onClick={() => openModal("strategy")} className="hover:text-[#d4af37] transition-colors text-left cursor-pointer">
                  Schedule a Strategy Session
                </button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-amber-950/20 my-8" />

        {/* Newsletter & Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto">
            <h4 className="text-xs font-bold text-white mb-2">Subscribe to our Growth Newsletter</h4>
            <p className="text-[11px] text-stone-500 mb-4 max-w-md">
              Receive actionable tips on tax software setup, client automations, and IRS compliance review guidelines.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-amber-950/10 border border-amber-900/30 rounded-lg px-3 py-2 text-xs text-white placeholder-stone-600 outline-none focus:border-[#d4af37] w-full"
              />
              <button
                type="submit"
                className="bg-[#d4af37] hover:bg-[#c29e2f] text-black font-bold text-[10px] py-2 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
              >
                <Mail className="w-3.5 h-3.5" />
                {subscribed ? "Subscribed!" : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="text-[10px] text-stone-600 text-center lg:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} The Sector Tax Software & Community. All rights reserved.</p>
            <p>Providing Professional Tax Software & Community mentorship built for long-term sustainability.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
