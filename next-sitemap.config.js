/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-domain.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://your-domain.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://your-domain.com/ja',
      hreflang: 'ja',
    },
  ],
  transform: async (config, path) => {
    // Skip paths that don't include locale
    if (!path.includes('/en') && !path.includes('/ja')) {
      return null;
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 