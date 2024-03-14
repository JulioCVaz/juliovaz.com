import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        return post._raw.sourceFileName.replace(/\.mdx$/, "")
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content/",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      rehypeCodeTitles,
      [
        // @ts-expect-error Maybe is will be fixed in future version of contentlayer
        rehypePrettyCode,
        {
          theme: "ayu-dark",
          onVisitHighlightedLine(node: { properties: { className?: string[] } }): void {
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