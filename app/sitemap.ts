import type { MetadataRoute } from 'next';
import { SERVICE_SLUGS } from '@/lib/services-data';

const BASE = 'https://itspace.ma';
const locales = ['fr', 'en', 'ar'];

const staticPages = ['', '/services', '/about', '/contact', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${BASE}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }
  }

  return entries;
}
