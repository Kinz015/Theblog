import { postRepository } from "@/repositories/post/json-post-repository";

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p >{post.title}</p>
          </div>
        )
      })}
    </div>
  );
}
