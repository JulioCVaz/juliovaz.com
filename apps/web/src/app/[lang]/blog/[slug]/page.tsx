import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../../../lib/get-posts";

export function generateStaticParams(): { slug: string }[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): {
  title: string;
} {
  const findPostBySlug = getPostBySlug(params.slug);

  if (!findPostBySlug) {
    return { title: "Post not found by slug" };
  }

  return { title: findPostBySlug.title };
}

export default function PostPage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const findPostBySlug = getPostBySlug(params.slug);

  if (!findPostBySlug) {
    notFound();
  }

  const Content = getMDXComponent(findPostBySlug.body.code);

  return (
    <article className="mb-8 mt-8">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">{findPostBySlug.title}</h1>
        <time className="text-xs text-gray-600" dateTime={findPostBySlug.date}>
          {format(parseISO(findPostBySlug.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="prose prose-invert">
        <Content />
      </div>
    </article>
  );
}
