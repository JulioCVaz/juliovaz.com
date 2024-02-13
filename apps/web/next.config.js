/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
    ],
  },
};
