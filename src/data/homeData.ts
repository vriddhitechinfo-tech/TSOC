import { HeroSlide } from "@/hooks/useHeroSlider";
import { ModalType } from "@/context/ModalContext";

export const heroSlides: HeroSlide[] = [
  {
    tag: "Professional Tax Software",
    title: "File More. Keep More.",
    titleHighlight: "Keep More",
    description:
      "Professional cloud tax software, e-filing access, and a community that helps you grow — all in one place.",
    stats: [
      { value: "500+", label: "Active Preparers" },
      { value: "50K+", label: "Returns Filed" },
      { value: "24/7", label: "Support" },
    ],
    bgFrom: "#0A0908",
    bgTo: "#0F0D0C",
    accentColor: "#FFB26A",
    cta1: "View Software Plans",
    cta2: "See It In Action",
    image: "/hero_tax_professional.png",
  },
  {
    tag: "ERO Enablement",
    title: "Stop Splitting. Start Keeping.",
    titleHighlight: "Start Keeping",
    description:
      "Become an independent ERO. We guide your EFIN application, IRS setup, and compliance — so you keep 100% of your fees.",
    stats: [
      { value: "500+", label: "EROs Enabled" },
      { value: "100%", label: "Fee Retention" },
      { value: "4-8 Weeks", label: "EFIN Setup" },
    ],
    bgFrom: "#0B0A09",
    bgTo: "#0F0D0C",
    accentColor: "#F4845F",
    cta1: "Schedule Consultation",
    cta2: "Start Your Application",
    image: "/about_community.png",
  },
  {
    tag: "Service Bureau Growth",
    title: "Turn Your EFIN Into an Empire.",
    titleHighlight: "Empire",
    description:
      "Sub-license software, onboard other pros, and earn recurring revenue on every return your network processes.",
    stats: [
      { value: "150+", label: "Sub-offices Managed" },
      { value: "Recurring", label: "Revenue Streams" },
      { value: "White-label", label: "Ready" },
    ],
    bgFrom: "#0A0908",
    bgTo: "#0C0B0A",
    accentColor: "#FFB26A",
    cta1: "Apply for Mentorship",
    cta2: "See Growth Blueprint",
    image: "/open_office_coworking.png",
  },
  {
    tag: "Open Office Community",
    title: "Never File Alone Again.",
    titleHighlight: "Alone",
    description:
      "Daily live coworking, attorney Q&As, and year-round expert support — for every stage of your tax career.",
    stats: [
      { value: "2000+", label: "Community Members" },
      { value: "365", label: "Days Of Support" },
      { value: "Live", label: "Expert Access" },
    ],
    bgFrom: "#0B0A09",
    bgTo: "#0F0D0C",
    accentColor: "#F4845F",
    cta1: "Join The Open Office",
    cta2: "Try a Free Week",
    image: "/crm_workflow_dashboard.png",
  },
];

export interface EcosystemPillar {
  title: string;
  tag: string;
  desc: string;
  actionText: string;
}

export const ecosystemPillars: EcosystemPillar[] = [
  {
    title: "Professional Tax Software",
    tag: "Software",
    desc: "Unlimited cloud e-filing for individual and business returns. Includes direct desktop access and database recovery.",
    actionText: "Learn About Software",
  },
  {
    title: "ERO Enablement",
    tag: "Credentialing",
    desc: "Step-by-step support to get your EFIN with the IRS — including ID.me registration, fingerprinting, and security reviews.",
    actionText: "Learn About ERO Setup",
  },
  {
    title: "Service Bureau Scaling",
    tag: "Mentorship",
    desc: "Sub-license software, build onboarding systems, and earn residual income on every return your sub-offices process.",
    actionText: "Explore Mentorship",
  },
  {
    title: "Daily Open Office",
    tag: "Support Desk",
    desc: "Never file alone. Daily coworking, Zoom diagnostics, live attorney Q&As, and community support — year-round.",
    actionText: "Join Open Office",
  },
  {
    title: "Add-on Services",
    tag: "Add-on Services",
    desc: "Offer more to your clients year-round. Add Bookkeeping, Credit Coaching, Business Registration, and Referral Partnerships to grow income beyond tax season.",
    actionText: "View Add-on Services",
  },
  {
    title: "CRM Implementation",
    tag: "Operations",
    desc: "Automate your office. Set up Client Intake, Calendar Scheduling, and Email Follow-ups so your team spends less time on admin.",
    actionText: "Set Up Your Workflow",
  },
];

export interface ServicePathway {
  title: string;
  desc: string;
  bestFor: string[];
  includes: string[];
  ctaText: string;
  modalType: ModalType;
  link: string;
}

export const servicePathways: ServicePathway[] = [
  {
    title: "Tax Software Access",
    desc: "Get started with professional tax software built for independent preparers.",
    bestFor: ["New Preparers", "Independent Pros", "Growing Firms"],
    includes: [
      "Professional tax software access",
      "Bank product enrollment opportunities",
      "Training resources & walkthroughs",
      "Technical support",
      "Community access",
    ],
    ctaText: "Purchase Software",
    modalType: "software",
    link: "/tax-software",
  },
  {
    title: "ERO Enablement Program",
    desc: "Stop splitting fees. Become an ERO and take full control of your business.",
    bestFor: [
      "Experienced Preparers",
      "Firm Leaders",
      "Aspiring Entrepreneurs",
    ],
    includes: [
      "ERO application guidance",
      "IRS e-Services setup",
      "ID.me & fingerprinting support",
      "Compliance review",
      "Software implementation support",
    ],
    ctaText: "Schedule Consultation",
    modalType: "ero",
    link: "/ero-enablement",
  },
  {
    title: "Service Bureau Growth Program",
    desc: "Build a tax business that supports and licenses other tax professionals.",
    bestFor: [
      "Established EROs",
      "Multi-preparer offices",
      "Scaling networks",
    ],
    includes: [
      "Phase 1: Business & Systems Audit",
      "Phase 2: Offer & Pricing Strategy",
      "Phase 3: Tax Pro Onboarding Systems",
      "Phase 4: Scale & Recruitment",
      "White-label system templates",
    ],
    ctaText: "Apply for Mentorship",
    modalType: "bureau",
    link: "/service-bureau-growth",
  },
  {
    title: "Open Office Community",
    desc: "Live coworking and expert support, every week, all year long.",
    bestFor: ["All Tax Preparers", "Accounting Owners", "Bookkeepers"],
    includes: [
      "Live weekly office hours",
      "Direct software support",
      "Attorney Q&A sessions",
      "Bookkeeping guidance",
      "Wellness & mindset resources",
    ],
    ctaText: "Join The Open Office",
    modalType: "openoffice",
    link: "/open-office",
  },
];

export const homepageFaqs = [
  {
    question: "What is TSOC?",
    answer:
      "TSOC (The Sector of Collectives) is a community built for tax professionals. We provide professional tax software, EFIN setup support, Service Bureau mentorship, and daily live coworking — everything you need to grow a successful tax business.",
  },
  {
    question: "Do I need an EFIN to get started?",
    answer:
      "No. You can start using our software right away without an EFIN. If you want to get one, our ERO Enablement program walks you through every step of the IRS application process.",
  },
  {
    question: "What's the difference between a Service Bureau and a standard ERO?",
    answer:
      "An ERO files returns for clients directly. A Service Bureau licenses software to other preparers, supports their offices, and earns residual income on every return they process — it's how you scale beyond just your own filings.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No surprise fees or hidden splits. Our programs run on simple annual agreements. Pick the support level that fits your business and budget.",
  },
];
