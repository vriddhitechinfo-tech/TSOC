import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveModal from "@/components/InteractiveModal";
import ExitIntentCTA from "@/components/ExitIntentCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300"
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

