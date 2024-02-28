import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";

export async function generateStaticParams(): { slug: string }[] {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): {
  title: string;
} {
  const findPostBySlug = allPosts.find(
    (post: Post) => post.slug === params.slug,
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
  const findPostBySlug = allPosts.find((post) => {
    return post.slug === params.slug;
  });

  if (!findPostBySlug) {
    return (
      <div>
        <h1>Post not found</h1>
      </div>
    );
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
