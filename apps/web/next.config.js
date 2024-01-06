/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react", "@westeros/ui"],
  images: {
    // TODO: remove this
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d111erjd7vhu4f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};
