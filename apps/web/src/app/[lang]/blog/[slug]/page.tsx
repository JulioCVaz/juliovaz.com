import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { getPost } from "../../../../lib/get-posts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'
// export function generateStaticParams(): { slug: string }[] {
//   return posts.map((post) => ({ slug: post.slug }));
// }

// export function generateMetadata({ params }: { params: { slug: string } }): {
//   title: string;
// } {
//   const findPostBySlug = getPostBySlug(params.slug);

//   if (!findPostBySlug) {
//     return { title: "Post not found by slug" };
//   }

//   return { title: findPostBySlug.title };
// }

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const findPostBySlug = await getPost(params.slug);

  if (!findPostBySlug) {
    notFound();
  }

  return (
    <div className="mb-8 mt-8">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">{findPostBySlug.title}</h1>
        <time className="text-xs text-gray-600" dateTime={findPostBySlug.date}>
          {format(parseISO(findPostBySlug.date!), "LLLL d, yyyy")}
        </time>
      </div>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown
          children={findPostBySlug.content}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(?:\w+)/.exec(className || '')
              return match ? (
                  <SyntaxHighlighter
                    wrapLines
                    showLineNumbers
                    children={String(children).replace(/\n$/, '')}
                    language={match[0].split('language-')[1]}
                    style={coldarkDark}
                    customStyle={{
                      whiteSpace: 'pre-wrap',
                    }}
                    className="rounded-xl p-4 text-xs w-full "
                  />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        /> 
      </article>
    </div>
  );
}
