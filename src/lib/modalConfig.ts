import { ModalType } from "@/context/ModalContext";
import {
  ERO_ENABLEMENT_CALL_LINK,
  GROWING_FIRM_CALL_LINK,
  OPEN_OFFICE_LEADGEN_CALL_LINK,
  PARTNER_CALL_LINK,
  SECTOR_CONSULTING_CALL_LINK,
  SERVICE_BUREAU_CALL_LINK,
  STRATEGY_SESSION_CALL_LINK,
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

// Every CTA opens its booking calendar directly (no intermediary intake
// form) so no click ever dead-ends short of a possible booking — see
// ModalContext.openModal. headerTitle/nextSteps are unused leftovers from
// the old embedded-modal UI, kept only for a possible future revival.
export const MODAL_CONFIG: Record<ModalType, ModalConfig> = {
  software: {
    bookingUrl: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "tax-software-inquiry"),
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
    bookingUrl: withUtm(ERO_ENABLEMENT_CALL_LINK, "ero-enablement"),
    headerTitle: "TaxPro EFN Enablement • Schedule Consultation",
    nextSteps: {
      heading: "While you wait to hear back",
      body: "Learn more about the TaxPro EFN Enablement Program or book a call with our team.",
      links: [
        { label: "See TaxPro EFN Enablement Program", href: "/ero-enablement" },
        { label: "Book a Call", href: withUtm(ERO_ENABLEMENT_CALL_LINK, "modal-ero-nextstep") },
      ],
    },
  },
  bureau: {
    bookingUrl: withUtm(SERVICE_BUREAU_CALL_LINK, "service-bureau-internal"),
    headerTitle: "Service Bureau Growth • Build My Network",
    nextSteps: {
      heading: "What happens next",
      body: "Your booking routes to our team for review. In the meantime, take a look at the full program.",
      links: [
        { label: "See Service Bureau Growth Program", href: "/service-bureau-growth" },
        { label: "Book a Call", href: withUtm(SERVICE_BUREAU_CALL_LINK, "modal-bureau-nextstep") },
      ],
    },
  },
  openoffice: {
    bookingUrl: withUtm(OPEN_OFFICE_LEADGEN_CALL_LINK, "open-office-community"),
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
    bookingUrl: withUtm(STRATEGY_SESSION_CALL_LINK, "addon-services"),
    headerTitle: "Add-on Services • Explore Revenue Streams",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also browse the add-on services.",
      links: [
        { label: "See Add-on Services", href: "/revenue-expansion" },
        { label: "Book a Strategy Session", href: withUtm(STRATEGY_SESSION_CALL_LINK, "modal-strategy-nextstep") },
      ],
    },
  },
  technology: {
    bookingUrl: withUtm(SECTOR_CONSULTING_CALL_LINK, "crm-automation"),
    headerTitle: "CRM & Automation • Book Tech Consultation",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also see what's included in CRM & Automation setup.",
      links: [
        { label: "See CRM & Automation", href: "/technology-support" },
        { label: "Book a Consultation", href: withUtm(SECTOR_CONSULTING_CALL_LINK, "modal-technology-nextstep") },
      ],
    },
  },
  partner: {
    bookingUrl: withUtm(PARTNER_CALL_LINK, "partner-inquiry"),
    headerTitle: "Partner With Us",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly.",
      links: [
        { label: "Book a Call", href: withUtm(PARTNER_CALL_LINK, "modal-partner-nextstep") },
      ],
    },
  },
  demo: {
    bookingUrl: withUtm(TALK_TO_TEAM_CALENDAR_LINK, "general-demo"),
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
  erogrowth: {
    bookingUrl: withUtm(GROWING_FIRM_CALL_LINK, "ero-growth-program"),
    headerTitle: "ERO Growth Program • Book a Call",
    nextSteps: {
      heading: "What happens next",
      body: "Our team will follow up shortly. You can also see what's included in the ERO Growth Program.",
      links: [
        { label: "See ERO Growth Program", href: "/ero-growth-program" },
        { label: "Book a Call", href: withUtm(GROWING_FIRM_CALL_LINK, "modal-erogrowth-nextstep") },
      ],
    },
  },
};
