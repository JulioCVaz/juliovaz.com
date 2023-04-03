/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate-plugin");

let nextConfig = {
  reactStrictMode: true,
};

const pipelineIsRunning = process.env.GITHUB_ACTIONS || false;
let buildOptions = {};

if (pipelineIsRunning) {
  const repositoryName = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  buildOptions.assetPrefix = `https://${repositoryName}/`;
  buildOptions.basePath = `/${repositoryName}`;
  // buildOptions.output = "export";
  buildOptions.images = {
    unoptimized: true,
  };

  nextConfig = {
    ...nextConfig,
    ...buildOptions,
  };
}

module.exports = nextTranslate({
  ...nextConfig,
});
