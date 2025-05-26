import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/self-drive-cars',
          '/self-drive-cars/*',
          '/airport-transfer',
          '/airport-transfer/*',
          '/chauffeur-service',
          '/chauffeur-service/*',
          '/luxury-cars',
          '/luxury-cars/*',
          '/blogs',
          '/blogs/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/self-drive-cars',
          '/self-drive-cars/*',
          '/airport-transfer',
          '/airport-transfer/*',
          '/chauffeur-service',
          '/chauffeur-service/*',
          '/luxury-cars',
          '/luxury-cars/*',
          '/blogs',
          '/blogs/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/images/',
          '/public/',
        ],
      },
    ],
    sitemap: 'https://goacarrental.in/sitemap.xml',
    host: 'https://goacarrental.in',
  }
} 