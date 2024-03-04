import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import Card from "../../../components/card";

export default function Blog(): JSX.Element {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post: Post) => (
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
      ))}
    </div>
  );
}
