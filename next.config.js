/** @type {import('next').NextConfig} */

const isPipelineRunning = process.env.GITHUB_ACTIONS || false;

let basePath = "/juliocvaz.github.io";
let assetPrefix = "/juliocvaz.github.io/";

if (isPipelineRunning) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ""); // "juliocvaz.github.io"
  assetPrefix = `https://${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // trailingSlash: true,
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
  /**
   * TODO: create account in imgix and config CDN
   * images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
   */
};

module.exports = nextConfig;
