import { findAllPostBySlugCached } from "@/lib/post/queries";

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findAllPostBySlugCached(slug);

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
