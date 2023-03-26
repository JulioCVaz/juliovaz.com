/** @type {import('next').NextConfig} */

const isPipelineRunning = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isPipelineRunning) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ""); // "juliocvaz.github.io"
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // trailingSlash: true,
  assetPrefix,
  basePath,
  /**
   * images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
   */
};

module.exports = nextConfig;
