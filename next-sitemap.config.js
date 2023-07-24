module.exports = {
  siteUrl: "https://jeffymesquita.dev",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap.xml", "/some-other-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://jeffymesquita.dev.xml"],
  },
};
