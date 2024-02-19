import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
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

export default makeSource({
  contentDirPath: "src/content/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      rehypeCodeTitles, // For adding titles to code blocks
      //@ts-expect-error
      rehypeHighlight, // For code syntax highlighting
    ],
  },
  onSuccess: async (importData) => {
    const data = await importData()
    console.log(data)
    console.log('allDocuments', data.allDocuments.length)
  }
});
