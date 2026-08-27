import { HeroSlide } from "@/hooks/useHeroSlider";
import { ModalType } from "@/context/ModalContext";

export const heroSlides: HeroSlide[] = [
  {
    tag: "Open Office Community",
    title: "Never File Alone Again.",
    titleHighlight: "Never File Alone",
    description:
      "Daily live coworking, attorney Q&As, and expert help — every week, all year.",
    stats: [
      { value: "2000+", label: "Community Members" },
      { value: "365", label: "Days of Support" },
      { value: "Live", label: "Expert Access" },
    ],
    bgFrom: "#080808",
    bgTo: "#0F0D0C",
    accentColor: "#F4845F",
    cta1: "Join The Open Office",
    cta2: "Try a Free Week",
    image: "/crm_workflow_dashboard.png",
  },
  {
    tag: "Professional Tax Software",
    title: "File More. Keep More.",
    titleHighlight: "Keep More",
    description:
      "Professional cloud tax software built for independent preparers. E-file with confidence and grow your business.",
    stats: [
      { value: "500+", label: "Active Preparers" },
      { value: "50K+", label: "Returns Filed" },
      { value: "24/7", label: "Support" },
    ],
    bgFrom: "#080808",
    bgTo: "#0F0D0C",
    accentColor: "#FFB26A",
    cta1: "View Software Plans",
    cta2: "Get a Free Demo",
    image: "/hero_tax_professional.png",
  },
  {
    tag: "ERO Enablement",
    title: "Keep 100% of Your Fees.",
    titleHighlight: "100% of Your Fees",
    description:
      "Become an independent ERO. We guide your EFIN application, IRS setup, and compliance from start to finish.",
    stats: [
      { value: "500+", label: "EROs Enabled" },
      { value: "100%", label: "Fee Retention" },
      { value: "4–8 Weeks", label: "EFIN Setup" },
    ],
    bgFrom: "#080808",
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
      "License your software to other pros, support their offices, and earn recurring revenue on every return they file.",
    stats: [
      { value: "150+", label: "Sub-offices Managed" },
      { value: "Recurring", label: "Revenue Streams" },
      { value: "White-label", label: "Ready" },
    ],
    bgFrom: "#080808",
    bgTo: "#0F0D0C",
    accentColor: "#FFB26A",
    cta1: "Apply for Mentorship",
    cta2: "See Growth Blueprint",
    image: "/open_office_coworking.png",
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
    title: "Daily Open Office",
    tag: "Live Support",
    desc: "Show up and get answers. Daily coworking, Zoom diagnostics, live attorney Q&As, and peer support — every week, all year.",
    actionText: "Join Open Office",
  },
  {
    title: "Professional Tax Software",
    tag: "Software",
    desc: "Unlimited cloud e-filing for individual and business returns. Includes desktop access and database recovery.",
    actionText: "Learn About Software",
  },
  {
    title: "ERO Enablement",
    tag: "Credentialing",
    desc: "Get your EFIN with step-by-step support — ID.me, fingerprinting, IRS e-Services, and security reviews covered.",
    actionText: "Learn About ERO Setup",
  },
  {
    title: "Service Bureau Scaling",
    tag: "Mentorship",
    desc: "License your software, build onboarding systems, and earn income on every return your network processes.",
    actionText: "Explore Mentorship",
  },
  {
    title: "Add-on Services",
    tag: "More Revenue",
    desc: "Offer bookkeeping, credit coaching, business registration, and referrals. Earn year-round — beyond tax season.",
    actionText: "View Add-on Services",
  },
  {
    title: "CRM & Automation",
    tag: "Operations",
    desc: "Automate your office. Set up client intake, scheduling, and email follow-ups — so your team spends less time on admin.",
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
    title: "Open Office Community",
    desc: "Daily live coworking, software support, and attorney Q&As — one place to get unstuck.",
    bestFor: ["All Tax Preparers", "Accounting Owners", "Bookkeepers"],
    includes: [
      "Daily live office hours",
      "Direct software support",
      "Attorney Q&A sessions",
      "Bookkeeping guidance",
      "Wellness & mindset resources",
    ],
    ctaText: "Open Office Community",
    modalType: "openoffice",
    link: "/open-office",
  },
  {
    title: "Tax Software Access",
    desc: "Professional tax software built for independent preparers. Start filing right away.",
    bestFor: ["New Preparers", "Independent Pros", "Growing Firms"],
    includes: [
      "Professional tax software access",
      "Bank product enrollment",
      "Training guides & walkthroughs",
      "Technical support",
      "Community access",
    ],
    ctaText: "Get Software Access",
    modalType: "software",
    link: "/tax-software",
  },
  {
    title: "ERO Enablement Program",
    desc: "Keep 100% of your fees. Become an ERO and take full control of your business.",
    bestFor: [
      "Experienced Preparers",
      "Aspiring Entrepreneurs",
    ],
    includes: [
      "ERO application guidance",
      "IRS e-Services setup",
      "ID.me & fingerprinting support",
      "Compliance review",
      "Software implementation",
    ],
    ctaText: "Schedule Consultation",
    modalType: "ero",
    link: "/ero-enablement",
  },
  {
    title: "Service Bureau Growth Program",
    desc: "Build a tax business that supports and licenses other professionals.",
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
    title: "Add-on Services",
    desc: "Offer bookkeeping, credit coaching, business registration, and referrals. Earn year-round revenue beyond tax season.",
    bestFor: ["All Tax Offices", "Accounting Firms", "Growth-minded Pros"],
    includes: [
      "Bookkeeping & payroll strategies",
      "Credit repair & financial coaching tools",
      "Business registration & LLC filing guide",
      "Banking & financial referral setup",
      "Year-round client retainer models",
    ],
    ctaText: "Explore Add-on Services",
    modalType: "strategy",
    link: "/revenue-expansion",
  },
  {
    title: "CRM & Automation",
    desc: "Automate your office. Set up automated client intake, calendar scheduling, and email follow-ups so your team spends less time on admin.",
    bestFor: ["Growing Firms", "Multi-preparer Offices", "Service Bureaus"],
    includes: [
      "Automated client intake pipelines",
      "Calendar & appointment scheduling",
      "Encrypted document collection",
      "SMS & email client reminders",
      "Centralized office console integration",
    ],
    ctaText: "Set Up Your Workflow",
    modalType: "technology",
    link: "/technology-support",
  },
];

export const homepageFaqs = [
  {
    question: "What is TSOC?",
    answer:
      "TSOC (The Sector of Collectives) is a community for tax professionals — professional tax software, EFIN setup support, Service Bureau mentorship, and daily live coworking to help you grow a successful tax business.",
  },
  {
    question: "Do I need an EFIN to get started?",
    answer:
      "No — you can start using our software right away without an EFIN. If you want one, our ERO Enablement program walks you through every step of the IRS application.",
  },
  {
    question: "What's the difference between a Service Bureau and a standard ERO?",
    answer:
      "An ERO files returns directly for clients. A Service Bureau licenses software to other preparers, supports their offices, and earns recurring income on every return they process — it's how you scale beyond your own filings.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "Our programs run on simple annual agreements. Pick the support level that fits your business and budget — no surprise fees or hidden splits.",
  },
];
