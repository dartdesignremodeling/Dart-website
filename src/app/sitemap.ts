import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dartestudio.co',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dartestudio.co/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://dartestudio.co/blog/iluminacion-espacios-interiores',
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://dartestudio.co/blog/tendencias-arquitectura-colombia-2026',
      lastModified: new Date('2026-02-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://dartestudio.co/blog/smart-spaces-colombia',
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
