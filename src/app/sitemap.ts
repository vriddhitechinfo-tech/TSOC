import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import blogs from "@/content/blogs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/tax-software",
    "/ero-enablement",
    "/service-bureau-growth",
    "/open-office",
    "/technology-support",
    "/about",
    "/services",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
