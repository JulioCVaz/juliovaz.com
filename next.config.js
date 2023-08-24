/** @type {import('next').NextConfig} */
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withTranslate = require("next-translate-plugin");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    // remarkPlugins: [],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src/styles")],
  // },
};

// @note: use multiple plugins: https://thehotcode.com/nextjs-add-multiple-plugins/
module.exports = async (phase, { defaultConfig }) =>
  withPlugins([withTranslate, withMDX], nextConfig)(phase, {
    ...defaultConfig,
    ...nextConfig,
  });
