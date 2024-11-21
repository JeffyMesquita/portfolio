export default async function sitemap() {
  const baseUrl = 'https://jeffymesquita.dev';

  return [{ url: baseUrl, lastModified: new Date() }];
}
