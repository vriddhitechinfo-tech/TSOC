"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { Mail, Phone, MessageSquare, ExternalLink } from "lucide-react";
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
    <footer className="bg-[#050A14] text-[#EDE9E0]/50 py-12 mt-auto border-t border-[#FF9F76]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo size={28} />
              <span className="font-display font-semibold text-white tracking-wide text-base uppercase">
                The Sector of Collectives
              </span>
            </Link>
            <p className="text-xs text-[#EDE9E0]/40 max-w-sm leading-relaxed">
              We help tax professionals build independent businesses — with software, EFIN support, community, and year-round guidance.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#F4845F] font-bold">
              Motto: <span className="font-display italic font-semibold text-sm normal-case tracking-normal text-[#FF9F76]">Connect</span> • <span className="font-display italic font-semibold text-sm normal-case tracking-normal text-[#FF9F76]">Create</span> • <span className="font-display font-semibold text-sm normal-case tracking-normal text-white">Conquer</span>
            </div>
            {/* Contact Options */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <a href="mailto:contact@tsoc.com" className="flex items-center gap-2 text-xs hover:text-[#FF9F76] transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                contact@tsoc.com
              </a>
              <a href="tel:+15550000000" className="flex items-center gap-2 text-xs hover:text-[#FF9F76] transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                (555) 000-0000
              </a>
              <a href="sms:+15550000000" className="flex items-center gap-2 text-xs hover:text-[#FF9F76] transition-colors">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                Text Us
              </a>
            </div>

          </div>

          {/* Software & Tech */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tax-software" className="hover:text-[#FF9F76] transition-colors">
                  Tax Software for Tax Preparers
                </Link>
              </li>
              <li>
                <Link href="/tax-software" className="hover:text-[#FF9F76] transition-colors">
                  Professional Tax Software
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FF9F76] transition-colors">
                  Tax Business Automation
                </Link>
              </li>
              <li>
                <Link href="/technology-support" className="hover:text-[#FF9F76] transition-colors">
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
                <Link href="/ero-enablement" className="hover:text-[#FF9F76] transition-colors">
                  How to Become an ERO
                </Link>
              </li>
              <li>
                <Link href="/ero-enablement" className="hover:text-[#FF9F76] transition-colors">
                  ERO Support & Training
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FF9F76] transition-colors">
                  Start a Service Bureau
                </Link>
              </li>
              <li>
                <Link href="/service-bureau-growth" className="hover:text-[#FF9F76] transition-colors">
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
                <Link href="/open-office" className="hover:text-[#FF9F76] transition-colors">
                  Tax Professional Community
                </Link>
              </li>
              <li>
                <Link href="/open-office" className="hover:text-[#FF9F76] transition-colors">
                  Join Open Office Live
                </Link>
              </li>
              <li>
                <button onClick={() => openModal("partner")} className="hover:text-[#FF9F76] transition-colors text-left cursor-pointer">
                  Become a Partner
                </button>
              </li>
              <li>
                <button onClick={() => openModal("strategy")} className="hover:text-[#FF9F76] transition-colors text-left cursor-pointer">
                  Book a Strategy Call
                </button>
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
                  className="flex items-center gap-1 hover:text-[#FF9F76] transition-colors"
                >
                  IRS EFIN Application
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/tax-professionals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FF9F76] transition-colors"
                >
                  IRS Tax Pro Resources
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/e-file-providers/authorized-irs-e-file-providers-for-individuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FF9F76] transition-colors"
                >
                  Application Status
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irs.gov/help/telephone-assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#FF9F76] transition-colors"
                >
                  IRS Phone Support
                  <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#FF9F76]/15 my-8" />

        {/* Newsletter & Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="w-full lg:w-auto">
            <h4 className="text-xs font-bold text-white mb-2">Subscribe to our Growth Newsletter</h4>
            <p className="text-xs text-[#EDE9E0]/40 mb-4 max-w-md">
              Receive actionable tips on tax software setup, client automations, and IRS compliance review guidelines.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1C2A47]/40 border border-[#FF9F76]/20 rounded-lg px-3 py-2 text-xs text-white placeholder-[#EDE9E0]/30 outline-none focus:border-[#FF9F76] w-full transition-colors"
              />
              <button
                type="submit"
                className="bg-[#FF9F76] hover:bg-[#F4845F] text-[#050A14] font-bold text-xs py-2 px-4 rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
              >
                <Mail className="w-3.5 h-3.5" />
                {subscribed ? "Subscribed!" : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="text-xs text-[#EDE9E0]/30 text-center lg:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} The Sector of Collectives. All rights reserved.</p>
            <p>Providing Professional Tax Software & Community mentorship built for long-term sustainability.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
