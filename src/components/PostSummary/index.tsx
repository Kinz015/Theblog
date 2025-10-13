import { postRepository } from "@/repositories/post/json-post-repository";
import { PostHeading } from "../PostHeading";
import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  const posts = await postRepository.findAll();

  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={formatDatetime(createdAt)}
        title={formatDistanceToNow(createdAt)}
      >
        {createdAt}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
