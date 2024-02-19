import { useMDXComponent } from "next-contentlayer/hooks";
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

  const Content = useMDXComponent(findPostBySlug.body.code);

  if (!findPostBySlug) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <article className="mb-8 mt-8">
      <h1 className="mb-2 text-3xl font-bold">{findPostBySlug.title}</h1>
      <time
        className="mb-1 text-xs text-gray-600"
        dateTime={findPostBySlug.date}
      >
        {format(parseISO(findPostBySlug.date), "LLLL d, yyyy")}
      </time>
      <div className="mt-4">
        <Content />
      </div>
    </article>
  );
}
