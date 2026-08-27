"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { TALK_TO_TEAM_CALENDAR_LINK } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tax Software", href: "/tax-software" },
    { name: "ERO Enablement", href: "/ero-enablement" },
    { name: "Service Bureau", href: "/service-bureau-growth" },
    { name: "Open Office", href: "/open-office", highlight: true },
    { name: "Automation & CRM", href: "/technology-support" },
    { name: "Revenue Expansion", href: "/revenue-expansion" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#FFB26A]/20 bg-[#080808]/92 backdrop-blur-md">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <Logo size={32} />
              <span className="hidden min-[1650px]:block font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-[#FFB26A] transition-colors whitespace-nowrap">
                The Sector of Collectives
              </span>
              <span className="hidden min-[1450px]:block min-[1650px]:hidden font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-[#FFB26A] transition-colors whitespace-nowrap">
                The Sector
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center flex-1 justify-center min-w-0">
            <div className="flex items-center gap-0.5 flex-nowrap min-w-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-[0.78rem] 2xl:text-[0.8rem] font-semibold transition-all duration-150 whitespace-nowrap underline-offset-4 decoration-2 flex items-center gap-1.5 ${
                    isActive(link.href)
                      ? "text-[#FFB26A] underline decoration-[#FFB26A]"
                      : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#181818]/80"
                  } ${link.highlight && !isActive(link.href) ? "text-[#FFB26A]/80" : ""}`}
                >
                  {link.highlight && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse shrink-0" />
                  )}
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA / Action Buttons */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <a
              href={TALK_TO_TEAM_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] px-4 py-2.5 text-[0.8rem] font-extrabold shadow-md hover:shadow-[#FFB26A]/25 transition-all uppercase tracking-wider whitespace-nowrap"
            >
              Book a Free Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#EDE9E0]/60 hover:text-white hover:bg-[#181818]/60 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#080808] border-b border-[#FFB26A]/20">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-base font-semibold tracking-wide underline-offset-4 decoration-2 ${
                  isActive(link.href)
                    ? "text-[#FFB26A] underline decoration-[#FFB26A]"
                    : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#181818]/60"
                }`}
              >
                {link.highlight && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFB26A] animate-pulse" />
                )}
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a
                href={TALK_TO_TEAM_CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#080808] font-extrabold py-3 px-4 rounded-lg text-sm transition-all uppercase tracking-wider inline-block"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
