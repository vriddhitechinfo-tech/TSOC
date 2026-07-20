import { HeroSlide } from "@/hooks/useHeroSlider";
import { ModalType } from "@/context/ModalContext";

export const heroSlides: HeroSlide[] = [
  {
    tag: "Tax Software Access",
    title: "Launch Your Tax Business",
    titleHighlight: "Business",
    description:
      "Get everything you need to start filing returns independently with professional cloud software, e-filing, and dedicated support.",
    stats: [
      { value: "500+", label: "Active Preparers" },
      { value: "50K+", label: "Returns Filed" },
      { value: "24/7", label: "Support" },
    ],
    bgFrom: "#140A06",
    bgTo: "#1C0F0A",
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
      "Step-by-step guidance through EFIN application, IRS setup, and compliance review to keep 100% of your fees.",
    stats: [
      { value: "500+", label: "EROs Enabled" },
      { value: "100%", label: "Fee Retention" },
      { value: "4-8 Weeks", label: "EFIN Setup" },
    ],
    bgFrom: "#160B07",
    bgTo: "#1C0F0A",
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
      "Transition to a distribution model: sub-license software, build onboarding, and generate recurring revenue on every return processed.",
    stats: [
      { value: "150+", label: "Sub-offices Managed" },
      { value: "Recurring", label: "Revenue Streams" },
      { value: "White-label", label: "Ready" },
    ],
    bgFrom: "#140A06",
    bgTo: "#180D08",
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
      "Daily coworking blocks, live tax attorney Q&As, bookkeeping guidance, and year-round support for tax professionals.",
    stats: [
      { value: "2000+", label: "Community Members" },
      { value: "365", label: "Days Of Support" },
      { value: "Live", label: "Expert Access" },
    ],
    bgFrom: "#160B07",
    bgTo: "#1C0F0A",
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
    desc: "Get unlimited cloud e-filing for individual and business returns. Supported by direct desktop access and active database recovery features.",
    actionText: "Learn About Software",
  },
  {
    title: "ERO Enablement",
    tag: "Credentialing",
    desc: "Step-by-step guidance to apply for your independent EFIN with the IRS, including ID.me registration, fingerprint coordination, and security reviews.",
    actionText: "Learn About ERO Setup",
  },
  {
    title: "Service Bureau Scaling",
    tag: "Mentorship",
    desc: "Transition to a distribution model: sub-license software, build onboarding processes, and generate residual revenue on sub-office return volume.",
    actionText: "Explore Mentorship",
  },
  {
    title: "Daily Open Office",
    tag: "Support Desk",
    desc: "Never file alone. Daily coworking blocks, Zoom sharing diagnostics, live attorney Q&As, and community brainstorming support you year-round.",
    actionText: "Join Open Office",
  },
  {
    title: "Add-on Services",
    tag: "Add-on Services",
    desc: "Offer more to your clients year-round. Add bookkeeping, credit coaching, and business registration to grow income beyond tax season.",
    actionText: "View Expansion Guide",
  },
  {
    title: "CRM Implementation",
    tag: "Operations",
    desc: "Save time on admin work. Build a client intake system, automate scheduling, and set up email & text follow-ups for your business.",
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
    desc: "Launch your tax business with professional tax software designed for growth.",
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
    desc: "Stop splitting fees and start taking greater control of your business by becoming an ERO.",
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
    desc: "Build a tax business that supports, structures, and licenses other tax professionals.",
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
    desc: "Where access meets opportunity. Live coworking and expert support throughout the year.",
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
      "TSOC is a community built for tax professionals. We offer professional tax software, EFIN (Electronic Filing Identification Number) setup support, Service Bureau mentorship, and daily live coworking sessions — everything you need to grow a tax business.",
  },
  {
    question: "Do I need an EFIN to get started?",
    answer:
      "No. You can start using our software right away without an EFIN. If you're working toward getting one, our ERO Enablement program walks you through every step of the IRS application process.",
  },
  {
    question: "What's the difference between a Service Bureau and a standard ERO?",
    answer:
      "An ERO files returns for clients directly. A Service Bureau licenses tax software to other preparers, supports their offices, and earns residual revenue on every return they process. It's a way to scale beyond just filing your own returns.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No surprise fees or hidden splits. Our programs run on simple annual agreements. You pick the level of support that fits your business and budget.",
  },
];
