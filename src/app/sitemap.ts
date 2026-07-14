import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://caleosantos.com/",
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": "https://caleosantos.com/",
          en: "https://caleosantos.com/en",
        },
      },
    },
    {
      url: "https://caleosantos.com/en",
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": "https://caleosantos.com/",
          en: "https://caleosantos.com/en",
        },
      },
    },
  ];
}
