import type { MetadataRoute } from "next";
import { getContent, SITE_URL } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getContent();
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({ url: `${SITE_URL}/projetos/${p.id}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
