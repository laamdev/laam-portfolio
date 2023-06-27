import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://laam.dev",
      lastModified: new Date(),
    },
    {
      url: "https://laam.dev/about",
      lastModified: new Date(),
    },
    {
      url: "https://laam.dev/blog",
      lastModified: new Date(),
    },
  ]
}
