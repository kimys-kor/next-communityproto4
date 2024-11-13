import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}

/*
User-Agent: *
Allow: /
Disallow: /private/
Sitemap: https://acme.com/sitemap.xml
*/