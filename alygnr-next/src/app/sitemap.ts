import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alygnr.ai'
  const routes = [
    '',
    '/product',
    '/pricing',
    '/company',
    '/contact',
    '/for/scaling-gtm-teams',
    '/for/agencies',
    '/privacy',
    '/terms',
  ]
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
