import { Metadata } from "next";
import { SITE_NAME, DEFAULT_DESCRIPTION, SITE_URL } from "./constants";

export function getSeoMetadata(title: string, description?: string, path: string = ""): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullDesc = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: fullDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDesc,
    },
  };
}
