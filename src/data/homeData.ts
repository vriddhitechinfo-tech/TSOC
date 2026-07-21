import { HeroSlide } from "@/hooks/useHeroSlider";
import { ModalType } from "@/context/ModalContext";

export const heroSlides: HeroSlide[] = [
  {
    tag: "Tax Software Access",
    title: "Launch Your Tax Business",
    titleHighlight: "Business",
    description:
      "Start filing returns independently with professional cloud software, e-filing access, and dedicated support.",
    stats: [
      { value: "500+", label: "Active Preparers" },
      { value: "50K+", label: "Returns Filed" },
      { value: "24/7", label: "Support" },
    ],
    bgFrom: "#0A0908",
    bgTo: "#0F0D0C",
    accentColor: "#FFB26A",
    cta1: "View Software Plans",
    cta2: "See The Software In Action",
    image: "/hero_tax_professional.png",
  },
  {
    tag: "ERO Enablement",
    title: "Stop Splitting Fees. Become an Independent ERO.",
    titleHighlight: "Independent ERO",
    description:
      "We guide you through your EFIN application, IRS setup, and compliance review so you keep 100% of your fees.",
    stats: [
      { value: "500+", label: "EROs Enabled" },
      { value: "100%", label: "Fee Retention" },
      { value: "4-8 Weeks", label: "EFIN Setup" },
    ],
    bgFrom: "#0B0A09",
    bgTo: "#0F0D0C",
    accentColor: "#F4845F",
    cta1: "Schedule ERO Consultation",
    cta2: "Start Your Application",
    image: "/about_community.png",
  },
  {
    tag: "Service Bureau Growth",
    title: "Build a Scaling Tax Business With Sub-Offices.",
    titleHighlight: "Scaling Tax Business",
    description:
      "Sub-license software, build onboarding systems, and earn recurring revenue on every return your network processes.",
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
    title: "Join Our Daily Community.",
    titleHighlight: "Daily Community",
    description:
      "Daily coworking, live tax attorney Q&As, bookkeeping guidance, and year-round support — all in one place.",
    stats: [
      { value: "2000+", label: "Community Members" },
      { value: "365", label: "Days Of Support" },
      { value: "Live", label: "Expert Access" },
    ],
    bgFrom: "#0B0A09",
    bgTo: "#0F0D0C",
    accentColor: "#F4845F",
    cta1: "Join The Open Office",
    cta2: "Try Free Week",
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
    desc: "Grow income beyond tax season. Add bookkeeping, credit coaching, and business registration to your service menu.",
    actionText: "View Expansion Guide",
  },
  {
    title: "CRM Implementation",
    tag: "Operations",
    desc: "Automate your office. Build a client intake system, set up scheduling, and add email & text follow-ups.",
    actionText: "See Automation Pathways",
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
