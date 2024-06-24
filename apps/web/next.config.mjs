import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme: "ayu-dark",
          onVisitHighlightedLine(node) {
            if (node.properties.className) {
              const nodeClass = node.properties.className;
              nodeClass.push("line--highlighted");
            } else {
              node.properties = { className: ["line--highlighted"] };
            }
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
