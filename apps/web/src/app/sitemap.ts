import type { MetadataRoute } from "next";

const routes = ["/", "/about", "/services", "/projects", "/contact", "/login", "/admin"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7
  }));
}
