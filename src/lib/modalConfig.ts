import { ModalType } from "@/context/ModalContext";
import {
  CONNECT_TO_SECTOR_LINK,
  TALK_TO_TEAM_CALENDAR_LINK,
  TAX_SOFTWARE_FUNNEL_LINK,
  withUtm,
} from "@/lib/constants";

export interface ModalConfig {
  bookingUrl: string;
  headerTitle: string;
  nextSteps: {
    heading: string;
    body: string;
    links: { label: string; href: string }[];
  };
}

// Every modal type currently shares the same underlying GHL form
// (CONNECT_TO_SECTOR_LINK) — only the utm_campaign differs, so leads can
// still be told apart in GHL. If separate GHL forms/automations are wanted
// per button, swap the relevant bookingUrl below for its own widget URL.
export const MODAL_CONFIG: Record<ModalType, ModalConfig> = {
  software: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "tax-software-inquiry"),
    headerTitle: "Tax Software • Request Access",
    nextSteps: {
      heading: "While you wait to hear back",
      body: "You can also explore the Tax Software funnel directly or grab time on our calendar.",
      links: [
        { label: "View Tax Software Funnel", href: withUtm(TAX_SOFTWARE_FUNNEL_LINK, "modal-software-nextstep") },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-software-nextstep") },
      ],
    },
  },
  ero: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "ero-enablement"),
    headerTitle: "ERO Enablement • Schedule Consultation",
    nextSteps: {
      heading: "While you wait to hear back",
      body: "Learn more about the ERO Enablement Program or book a call with our team.",
      links: [
        { label: "See ERO Enablement Program", href: "/ero-enablement" },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-ero-nextstep") },
      ],
    },
  },
  bureau: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "service-bureau-internal"),
    headerTitle: "Service Bureau Growth • Apply for Mentorship",
    nextSteps: {
      heading: "What happens next",
      body: "Your application routes to our team for review. In the meantime, take a look at the full program.",
      links: [
        { label: "See Service Bureau Growth Program", href: "/service-bureau-growth" },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-bureau-nextstep") },
      ],
    },
  },
  openoffice: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "open-office-community"),
    headerTitle: "Open Office Community",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also explore the Open Office in the meantime.",
      links: [
        { label: "See Open Office", href: "/open-office" },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-openoffice-nextstep") },
      ],
    },
  },
  strategy: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "addon-services"),
    headerTitle: "Add-on Services • Explore Revenue Streams",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also browse the full list of add-on services.",
      links: [
        { label: "See Add-on Services", href: "/revenue-expansion" },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-strategy-nextstep") },
      ],
    },
  },
  technology: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "crm-automation"),
    headerTitle: "CRM & Automation • Book Tech Consultation",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also see what's included in CRM & Automation setup.",
      links: [
        { label: "See CRM & Automation", href: "/technology-support" },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-technology-nextstep") },
      ],
    },
  },
  partner: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "partner-inquiry"),
    headerTitle: "Partner With Us",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly.",
      links: [
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-partner-nextstep") },
      ],
    },
  },
  demo: {
    bookingUrl: withUtm(CONNECT_TO_SECTOR_LINK, "general-demo"),
    headerTitle: "Request a Demo",
    nextSteps: {
      heading: "While you wait to hear back",
      body: "You can also explore the Tax Software funnel directly or grab time on our calendar.",
      links: [
        { label: "View Tax Software Funnel", href: withUtm(TAX_SOFTWARE_FUNNEL_LINK, "modal-demo-nextstep") },
        { label: "Book a Call", href: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "modal-demo-nextstep") },
      ],
    },
  },
};
