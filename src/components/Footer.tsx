"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { Mail, Phone, MessageSquare, ExternalLink, CalendarDays, Users } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { GOHIGHLEVEL_AFFILIATE_URL } from "@/lib/constants";

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
    <footer className="bg-[#080808] text-[#EDE9E0]/50 py-12 mt-auto border-t border-[#FFB26A]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">

          {/* Logo & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size={28} />
              <span className="font-display font-semibold text-white tracking-wide text-base uppercase">
                The Sector of Collectives
              </span>
            </Link>
            <p className="text-xs text-[#EDE9E0]/40 max-w-sm leading-relaxed">
              We help tax professionals build independent businesses — with software, EFIN support, live community, and year-round guidance.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#F4845F] font-bold">
              Motto: <span className="font-display italic font-semibold text-sm normal-case tracking-normal text-[#FFB26A]">Connect</span> • <span className="font-display italic font-semibold text-sm normal-case tracking-normal text-[#FFB26A]">Create</span> • <span className="font-display font-semibold text-sm normal-case tracking-normal text-white">Conquer</span>
            </div>

            {/* Contact Options */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Reach Us</h4>
              <a href="mailto:contact@tsoc.com" className="flex items-center gap-2 text-xs hover:text-[#FFB26A] transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                contact@tsoc.com
              </a>
              <a href="tel:+15550000000" className="flex items-center gap-2 text-xs hover:text-[#FFB26A] transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                (555) 000-0000
              </a>
              <a href="sms:+15550000000" className="flex items-center gap-2 text-xs hover:text-[#FFB26A] transition-colors">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                Send a Text
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tax-software" className="hover:text-[#FFB26A] transition-colors">
                  Tax Software Access
                </Link>
              </li>
              <li>
                <Link href="/tax-software" className="hover:text-[#FFB26A] transition-colors">
                  Professional E-Filing
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FFB26A] transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FFB26A] transition-colors">
                  CRM Setup & Support
                </Link>
              </li>
              <li>
                <Link href="/revenue-expansion" className="hover:text-[#FFB26A] transition-colors">
                  Revenue Expansion
                </Link>
              </li>
              <li>
                <a
                  href={GOHIGHLEVEL_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  GoHighLevel CRM Partner
                  <ExternalLink className="w-2.5 h-2.5 shrink-0 text-[#FFB26A]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Growth Programs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Growth Programs</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/ero-enablement" className="hover:text-[#FFB26A] transition-colors">
                  Become an ERO
                </Link>
              </li>
              <li>
                <Link href="/ero-enablement" className="hover:text-[#FFB26A] transition-colors">
                  EFIN Application Help
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FFB26A] transition-colors">
                  Start a Service Bureau
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FFB26A] transition-colors">
                  Service Bureau Mentorship
                </Link>
              </li>
              <li>
                <Link href="/open-office" className="hover:text-[#FFB26A] transition-colors flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A]" />
                  Join Open Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Actions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => openModal("strategy")}
                  className="flex items-center gap-1.5 hover:text-[#FFB26A] transition-colors text-left cursor-pointer"
                >
                  <CalendarDays className="w-3 h-3 shrink-0 text-[#FFB26A]" />
                  Book a Free Call
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("demo")}
                  className="flex items-center gap-1.5 hover:text-[#FFB26A] transition-colors text-left cursor-pointer"
                >
                  <CalendarDays className="w-3 h-3 shrink-0 text-[#FFB26A]" />
                  Request a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("openoffice")}
                  className="flex items-center gap-1.5 hover:text-[#FFB26A] transition-colors text-left cursor-pointer"
                >
                  <Users className="w-3 h-3 shrink-0 text-[#FFB26A]" />
                  Join Open Office
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("partner")}
                  className="hover:text-[#FFB26A] transition-colors text-left cursor-pointer"
                >
                  Become a Partner
                </button>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFB26A] transition-colors">
                  About Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* IRS Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">IRS Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.irs.gov/tax-professionals/become-an-authorized-e-file-provider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  EFIN Application
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/tax-professionals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  IRS Tax Pro Resources
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  PTIN Registration
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  Application Status
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  EIN Application
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/help/telephone-assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FFB26A] transition-colors"
                >
                  IRS Phone Support
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#FFB26A]/12 my-8" />

        {/* Newsletter & Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto">
            <h4 className="text-xs font-bold text-white mb-1">Stay in the Loop</h4>
            <p className="text-xs text-[#EDE9E0]/40 mb-4 max-w-md">
              Tax tips, software updates, and community insights — sent to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#111]/60 border border-[#FFB26A]/20 rounded-lg px-3 py-2 text-xs text-white placeholder-[#EDE9E0]/30 outline-none focus:border-[#FFB26A] w-full transition-colors"
              />
              <button
                type="submit"
                className="bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-bold text-xs py-2 px-4 rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
              >
                <Mail className="w-3.5 h-3.5" />
                {subscribed ? "Joined!" : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="text-xs text-[#EDE9E0]/30 text-center lg:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} The Sector of Collectives. All rights reserved.</p>
            <p>Professional tax software & community built for long-term independence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
