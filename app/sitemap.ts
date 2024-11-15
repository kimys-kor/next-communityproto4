import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ggongpang.com',
    },
    {
      url: 'https://ggongpang.com/partner',
    },
    {
      url: 'https://ggongpang.com/sport/123',
    },
    {
      url: 'https://ggongpang.com/sport/111',
    },
    {
      url: 'https://ggongpang.com/sport/116',
    },
    {
      url: 'https://ggongpang.com/sport/115',
    },

    {
        url: 'https://ggongpang.com/sport',
      },
      {
        url: 'https://ggongpang.com/community',
      },
      {
        url: 'https://ggongpang.com/event',
      },
      {
        url: 'https://ggongpang.com/promotion',
      },
      {
        url: 'https://ggongpang.com/guide',
      },
      {
        url: 'https://ggongpang.com/customer',
      },

  ]
}

/*
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com</loc>
  </url>
  <url>
    <loc>https://example.com/about</loc>
  </url>
</urlset>
*/