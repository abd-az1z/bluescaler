import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/agents", "/industries", "/customers", "/partners"];

  return routes.map((route) => ({
    url: `https://bluescaler.com${route}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: "monthly",
    priority: route ? 0.8 : 1,
  }));
}
