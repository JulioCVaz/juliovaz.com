// import { format, parseISO } from "date-fns";
// import { getPosts, type Post } from "../../../lib/get-posts";
// import Card from "../../../components/card";
import type { Locale } from "../../../lib/i18n-config";

export default async function Blog({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<JSX.Element> {
  // const posts = await getPosts(lang);

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* {posts.map((post: Post) => (
        <Card.Base
          extended
          key={post._id}
          link={{
            href: `/blog/${post.slug}`,
            target: "_self",
          }}
          linkable
        >
          <Card.Title>{post.title}</Card.Title>
          <Card.Body>{post.description}</Card.Body>
          <Card.Footer>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </Card.Footer>
        </Card.Base>
      ))} */}
    </div>
  );
}
