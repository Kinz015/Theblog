import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;
  const posts = await postRepository.findAll();

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: posts[0].coverImageUrl,
          alt: posts[0].title,
          priority: true,
        }}
      />
      <PostSummary
        postHeading="h2"
        postLink={postLink}
        excerpt={posts[0].excerpt}
        title={posts[0].title}
        createdAt={posts[0].createdAt}
      />
    </section>
  );
}
