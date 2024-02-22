import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from "rehype-pretty-code";
// import rehypeCodeTitle from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import rehypePrism from 'rehype-prism-plus';
// import type * as unified from 'unified'

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
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

// const rehypeHighlightTs: unified.Pluggable<unknown[]> = [rehypeHighlight]

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
      rehypeCodeTitles, // For adding titles to code blocks
      [
        rehypePrettyCode,
        {
          theme: "ayu-dark",
          onVisitHighlightedLine(node: any) {
            // node.properties.className.push("highlighted");
            const nodeClass = node.properties.className;
            console.log("Highlighted Line", { node })
            if (nodeClass && nodeClass.length > 0) {
              node.properties.className.push("line--highlighted");
            } else {
              node.properties.className = ["line--highlighted"];
            }
          },
        },
      ],
    ],
  },
  onSuccess: async (importData) => {
    const data = await importData()
    console.log('allDocuments', data.allDocuments.length)
  }
});