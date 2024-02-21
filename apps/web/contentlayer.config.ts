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
      [rehypePrism, { ignoreMissing: true }]
      //@ts-expect-error
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "tokyo-night",
      //     onVisitLine(node: any) {
      //       // Prevent lines from collapsing in `display: grid` mode, and
      //       // allow empty lines to be copy/pasted
      //       if (node.children.length === 0) {
      //         node.children = [{ type: "text", value: " " }];
      //       }
      //     },
      //     onVisitHighlightedLine(node: any) {
      //       node.properties.className.push("highlighted");
      //     },
      //     onVisitHighlightedWord(node: any) {
      //       node.properties.className = ["word"];
      //     },
      //   },
      // ],
      // [
      //   rehypeAutolinkHeadings,
      //   {
      //     properties: {
      //       className: ['subheading-anchor'],
      //       ariaLabel: 'Link to section',
      //     },
      //   },
      // ],
    ],
  },
  onSuccess: async (importData) => {
    const data = await importData()
    console.log(data)
    console.log('allDocuments', data.allDocuments.length)
  }
});