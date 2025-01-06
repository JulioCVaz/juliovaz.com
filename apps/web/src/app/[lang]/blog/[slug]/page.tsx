import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { getPost } from "../../../../lib/get-posts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'

async function loadContentBySlug(slug: string) {
  const content = await getPost(slug)

  return content
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<{
  title: string;
}> {
  const post = await loadContentBySlug(params.slug);

  // add open-graph - https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
  return { title: post.title! };
}

export const revalidate = 3600

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
 
  const post = await loadContentBySlug(params.slug)
  if (!post) {
    notFound();
  }

  return (
    <div className="mb-8 mt-8">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <time className="text-xs text-gray-600" dateTime={post.date}>
          {format(parseISO(post.date!), "LLLL d, yyyy")}
        </time>
      </div>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown
          children={post.content}
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
