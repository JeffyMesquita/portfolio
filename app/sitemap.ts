export default async function sitemap() {
  const baseUrl = "https://www.example.com";

  return [{ url: baseUrl, lastModified: new Date() }];
}
