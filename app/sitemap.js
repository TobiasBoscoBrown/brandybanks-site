import { getContent } from '@/lib/content';
export default async function sitemap() {
  const c = await getContent();
  const base = `https://${c.site.domain}`;
  const routes = ['', '/modeling', '/acting', '/content-creation', '/about', '/contact'];
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }));
}
