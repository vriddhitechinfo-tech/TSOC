export const SITE_URL = "https://thesectortax.com"; // Placeholder URL
export const SITE_NAME = "The Sector of Collectives";
export const OPEN_OFFICE_ZOOM_LINK = "https://us06web.zoom.us/j/86404449181";
export const DEFAULT_TITLE =
  "The Sector of Collectives | Professional Tax Software & Community";
export const DEFAULT_DESCRIPTION =
  "Helping tax professionals launch, grow, and scale profitable tax businesses. Keep more revenue, build better systems, and create year-round income.";

// External links
export const TAX_SOFTWARE_LOGIN_LINK =
  "https://www.mytaxoffice.com/main/pro/TheSectorofCollectives_Login.php";
export const ERO_ENABLEMENT_LINK =
  "https://thesectorofcollectives.com/opt-in-page";
export const OPEN_OFFICE_COMMUNITY_LINK =
  "https://3gpntud5my1ne29yzqjt.app.clientclub.net/communities/groups/thesectorsopenofficecommunity/home?invite=6a5fb4036d84e6df961d8ca0";
export const TALK_TO_TEAM_CALENDAR_LINK =
  "https://api.leadconnectorhq.com/widget/booking/FNnajUXQvGzaXwHhYAH5";
export const CONNECT_TO_SECTOR_LINK =
  "https://api.leadconnectorhq.com/widget/form/yZMFt1mV1a8mbrAbiPnx";
export const OPEN_OFFICE_MAIN_FUNNEL =
  "https://thesectorsopenoffice.com/the-open-office";
export const TECH_TUESDAY_LINK =
  "https://thesectorsopenoffice.com/tech-tuesday";
export const MIDNIGHT_MADNESS_LINK =
  "https://thesectorsopenoffice.com/midnight-madness";
export const TAP_IN_THURSDAY_LINK =
  "https://tap-inthursday.thesectoropenoffice.com/home-page";
export const WAITLIST_LINK =
  "https://thesectorsopenoffice.com/waitlist_openoffice";
export const FEEDBACK_LINK = "https://thesectorofcollectives.com/feedback";
export const SOFTWARE_RENEWAL_LINK =
  "https://thesectorsopenoffice.com/software-renewal";

// New funnel pages (live as of 7 Aug 2026)
export const TAX_SOFTWARE_FUNNEL_LINK =
  "https://thesectorofcollectives.com/tax-software";
export const GROWING_FIRM_FUNNEL_LINK =
  "https://thesectorofcollectives.com/growing-firm-4472";
export const TAX_PRO_SOLO_FUNNEL_LINK =
  "https://thesectorofcollectives.com/tax-pro-solo-7433";
export const SERVICE_BUREAU_FUNNEL_LINK =
  "https://thesectorofcollectives.com/service-bureau-626523";
export const TAX_TOUR_LINK =
  "https://thesectorofcollectives.com/tax-tour-landing-page";


export const PHONE_NUMBER = "404-975-2969";
export const PHONE_LINK = "tel:+14049752969";
export const SUPPORT_EMAIL = "support@thesectorofcollectives.com";
export const EMAIL_LINK = "mailto:support@thesectorofcollectives.com";

// Appends UTM params so GHL can attribute a lead to the button/page it came
// from. Mapping these into actual GHL tags/workflows still needs to be
// configured on the GHL side — this only guarantees the params are present.
export function withUtm(url: string, campaign: string): string {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}utm_source=website&utm_medium=cta&utm_campaign=${encodeURIComponent(campaign)}`;
}

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Tax Software", href: "/tax-software" },
  { name: "ERO Enablement", href: "/ero-enablement" },
  { name: "Service Bureau", href: "/service-bureau-growth" },
  { name: "Open Office", href: "/open-office" },
  { name: "Automation & CRM", href: "/technology-support" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export const REVENUE_OPPORTUNITIES = [
  {
    name: "Business Formation Services",
    desc: "Help clients register LLCs, corporations, and DBAs.",
    icon: "🏢",
  },
  {
    name: "Tax Planning & Advisory",
    desc: "High-ticket strategic consulting beyond annual filings.",
    icon: "📊",
  },
  {
    name: "Bookkeeping Partnerships",
    desc: "Build year-round retainer income stream.",
    icon: "📅",
  },
  {
    name: "Financial Literacy Programs",
    desc: "Educate your community and upsell courses.",
    icon: "🎓",
  },
  {
    name: "Virtual Mailbox Services",
    desc: "Provide business address services for remote entities.",
    icon: "📬",
  },
  {
    name: "Fingerprinting Services",
    desc: "Add local identity services to drive walk-in traffic.",
    icon: "👣",
  },
  {
    name: "Business Consulting",
    desc: "General operations advisory for local enterprises.",
    icon: "🤝",
  },
  {
    name: "Credit & Funding Partnerships",
    desc: "Guide clients through business funding applications.",
    icon: "💳",
  },
  {
    name: "Referral Programs",
    desc: "Earn commission by connecting clients with allied professionals.",
    icon: "📣",
  },
];
