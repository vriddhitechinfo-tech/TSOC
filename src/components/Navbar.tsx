"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tax Software", href: "/tax-software" },
    { name: "ERO Enablement", href: "/ero-enablement" },
    { name: "Service Bureau", href: "/service-bureau-growth" },
    { name: "Open Office", href: "/open-office" },
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
    <header className="sticky top-0 z-40 w-full border-b border-[#FFB26A]/20 bg-[#140A06]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <Logo size={32} />
              <span className="hidden 2xl:block font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-[#FFB26A] transition-colors whitespace-nowrap">
                The Sector of Collectives
              </span>
              <span className="hidden sm:block 2xl:hidden font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-[#FFB26A] transition-colors whitespace-nowrap">
                The Sector
              </span>
              <span className="sm:hidden font-display font-bold text-base tracking-wide text-white uppercase group-hover:text-[#FFB26A] transition-colors whitespace-nowrap">
                TSOC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center flex-1 justify-center min-w-0">
            <div className="flex items-center gap-0.5 flex-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-[0.8rem] font-semibold transition-all duration-150 whitespace-nowrap underline-offset-4 decoration-2 ${
                    isActive(link.href)
                      ? "text-[#FFB26A] underline decoration-[#FFB26A]"
                      : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#2A160E]/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA / Action Buttons */}
          <div className="hidden xl:flex items-center shrink-0">
            <button
              onClick={() => openModal("strategy")}
              className="inline-flex items-center justify-center rounded-lg bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] px-4 py-2.5 text-[0.8rem] font-extrabold shadow-md hover:shadow-[#FFB26A]/25 transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#EDE9E0]/60 hover:text-white hover:bg-[#2A160E]/60 focus:outline-none"
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
        <div className="xl:hidden bg-[#140A06] border-b border-[#FFB26A]/20">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wide underline-offset-4 decoration-2 ${
                  isActive(link.href)
                    ? "text-[#FFB26A] underline decoration-[#FFB26A]"
                    : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#2A160E]/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal("strategy");
                }}
                className="w-full text-center bg-[#FFB26A] hover:bg-[#F4845F] text-[#140A06] font-extrabold py-3 px-4 rounded-lg text-sm transition-all cursor-pointer uppercase tracking-wider"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
