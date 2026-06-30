import { getContent } from '@/lib/content';
export default async function robots() {
  const c = await getContent();
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/admin' }],
    sitemap: `https://${c.site.domain}/sitemap.xml`,
  };
}
