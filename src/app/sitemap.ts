import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/metadata'

const routes = [
  { url: '/', priority: 1.0, changeFrequency: 'monthly' as const },
  { url: '/product', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/product/features', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/product/integrations', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/product/pricing', priority: 0.85, changeFrequency: 'monthly' as const },
  { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/about/team', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/about/careers', priority: 0.7, changeFrequency: 'weekly' as const },
  { url: '/about/press', priority: 0.6, changeFrequency: 'weekly' as const },
  { url: '/contact', priority: 0.9, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
