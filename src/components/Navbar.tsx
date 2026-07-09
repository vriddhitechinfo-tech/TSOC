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
    <header className="sticky top-0 z-40 w-full border-b border-[#FFD94A]/15 bg-[#050A14]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo size={26} />
              <span className="hidden xl:block font-display font-semibold text-sm tracking-wide text-white uppercase group-hover:text-[#FFD94A] transition-colors whitespace-nowrap">
                The Sector of Collectives
              </span>
              <span className="xl:hidden font-display font-semibold text-sm tracking-wide text-white uppercase group-hover:text-[#FFD94A] transition-colors whitespace-nowrap">
                The Sector
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-0.5 flex-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold tracking-wide transition-all duration-150 whitespace-nowrap ${
                    isActive(link.href)
                      ? "bg-[#1C2A47] text-[#FFD94A] border-b border-[#FFD94A]/40"
                      : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#1C2A47]/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA / Action Buttons */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => openModal("strategy")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] hover:from-[#FFAA2A] hover:to-[#FF8C00] text-[#050A14] px-3.5 py-1.5 text-[11px] font-extrabold shadow-md hover:shadow-[#FFD94A]/25 transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-[#EDE9E0]/60 hover:text-white hover:bg-[#1C2A47]/60 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050A14] border-b border-[#FFD94A]/15">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide ${
                  isActive(link.href)
                    ? "bg-[#1C2A47] text-[#FFD94A]"
                    : "text-[#EDE9E0]/60 hover:text-white hover:bg-[#1C2A47]/60"
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
                className="w-full text-center bg-gradient-to-r from-[#FFD94A] to-[#FFAA2A] text-[#050A14] font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider"
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
