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
    <header className="sticky top-0 z-40 w-full border-b border-amber-950/40 bg-[#0f0a06]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo size={28} />
              <span className="font-bold text-sm tracking-wider text-white uppercase group-hover:text-[#fda85d] transition-colors">
                The Sector of Collectives
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-150 ${
                  isActive(link.href)
                    ? "bg-amber-950/40 text-[#fda85d] border-b border-amber-500/30"
                    : "text-stone-400 hover:text-white hover:bg-amber-950/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA / Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => openModal("strategy")}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#fda85d] to-[#f97316] hover:from-[#e0924f] hover:to-[#ea580c] text-black px-4 py-2 text-xs font-extrabold shadow-md hover:shadow-[#fda85d]/10 transition-all cursor-pointer uppercase tracking-wider"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-stone-400 hover:text-white hover:bg-amber-955/20 focus:outline-none"
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
        <div className="lg:hidden bg-[#0f0a06] border-b border-amber-950/40">
          <div className="space-y-1 px-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wide ${
                  isActive(link.href)
                    ? "bg-amber-950/40 text-[#fda85d]"
                    : "text-stone-400 hover:text-white hover:bg-amber-950/20"
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
                className="w-full text-center bg-gradient-to-r from-[#fda85d] to-[#f97316] text-black font-extrabold py-2.5 px-4 rounded-lg text-xs transition-all cursor-pointer uppercase tracking-wider"
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
