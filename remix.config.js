/** @type {import('@remix-run/dev').AppConfig} */

const rehypePrism = require("@mapbox/rehype-prism");

module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  mdx: {
    rehypePlugins: [rehypePrism],
  },
};
