const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["lucide-react", "@westeros/ui"],
  async redirects() {
    return [
      {
        source: "/projetos",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d111erjd7vhu4f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
