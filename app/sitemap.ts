import type { MetadataRoute } from 'next';

const SITE_URL = 'https://angeloakorchestra.com';

// Single-page site — hash anchors (#about, #music, …) aren't indexed
// separately, so the sitemap only declares the root. Add real routes
// here as the site grows.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date('2026-06-11'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
