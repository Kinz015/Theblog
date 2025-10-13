import { postRepository } from "@/repositories/post/json-post-repository";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              linkProps={{ href: `/post/${postLink}` }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
                priority: true,
              }}
            />
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              excerpt={post.excerpt}
              title={post.title}
              createdAt={post.createdAt}
            />
          </div>
        );
      })}
    </div>
  );
}
