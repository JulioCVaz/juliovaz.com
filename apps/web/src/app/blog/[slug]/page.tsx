import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";

export function generateStaticParams(): { slug: string }[] {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export function generateMetadata({ params }: { params: { slug: string } }): {
  title: string;
} {
  const findPostBySlug = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug,
  );

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
  const findPostBySlug = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug,
  );

  if (!findPostBySlug) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  const Content = getMDXComponent(findPostBySlug.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time
          className="mb-1 text-xs text-gray-600"
          dateTime={findPostBySlug.date}
        >
          {format(parseISO(findPostBySlug.date), "LLLL d, yyyy")}
        </time>
        <h1>{findPostBySlug.title}</h1>
      </div>
      <Content />
    </article>
  );
}
