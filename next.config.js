/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
