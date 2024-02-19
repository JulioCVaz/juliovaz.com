import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
// import type * as unified from 'unified'

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
}));

// const rehypeHighlightTs: unified.Pluggable<unknown[]> = [rehypeHighlight]

const contentLayerConfig = makeSource({
  contentDirPath: "src/content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      rehypeCodeTitles, // For adding titles to code blocks
      //@ts-expect-error
      [
        rehypePrettyCode,
        {
          theme: "tokyo-night",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
  onSuccess: async (importData) => {
    const data = await importData()
    console.log(data)
    console.log('allDocuments', data.allDocuments.length)
  }
});

export default contentLayerConfig