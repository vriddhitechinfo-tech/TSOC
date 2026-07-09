import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Allura } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveModal from "@/components/InteractiveModal";
import ExitIntentCTA from "@/components/ExitIntentCTA";

// Display Serif — for hero titles and large headings
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body Font — Neue Haas Grotesk closest Google Fonts match
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Script Accent — used sparingly (one word only)
const allura = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Sector of Collectives",
    default: "The Sector of Collectives | Professional Tax Software & Community",
  },
  description: "Helping tax professionals launch, grow, and scale profitable tax businesses. Keep more revenue, build better systems, and create year-round income with professional tax software access, ERO enablement, and Service Bureau mentorship.",
  keywords: [
    "Tax Software for Tax Preparers",
    "Professional Tax Software",
    "How to Become an ERO",
    "Start a Service Bureau",
    "Tax Professional Community",
    "CRM for Tax Professionals",
    "Tax Business Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${allura.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#050A14] text-[#EDE9E0] selection:bg-[#FFD94A]/30 selection:text-[#FFD94A]"
        suppressHydrationWarning
      >
        <ModalProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <InteractiveModal />
          <ExitIntentCTA />
        </ModalProvider>
      </body>
    </html>
  );
}
