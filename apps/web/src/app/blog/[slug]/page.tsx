export default function Post({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
