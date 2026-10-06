import type { MetadataRoute } from 'next';
import { pages } from './content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.novatek-international.com';
  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    ...Object.keys(pages).map((slug) => ({
      url: `${baseUrl}/${slug}/`,
      changeFrequency: 'monthly' as const,
      priority: slug === 'contact' ? 0.9 : 0.8,
    })),
  ];
}
