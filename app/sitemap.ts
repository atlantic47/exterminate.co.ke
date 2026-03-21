import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.exterminate.co.ke';
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/termite-control',
    '/services/general-fumigation',
    '/services/bed-bug-treatment',
    '/services/cockroach-control',
    '/services/rodent-control',
    '/service-area',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : (route.startsWith('/services') ? 0.9 : 0.8),
  }));

  // Dynamic blog routes (derived from currently published articles)
  const blogPosts = [
    "how-to-identify-termite-infestation-kenya",
    "fumigation-preparation-guide-kenya",
    "pest-control-during-rainy-season-kenya",
    "bed-bug-myths-kenya"
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogPosts];
}
