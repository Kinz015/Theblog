import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{ href: "/post/dawdawd" }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da image",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-04-20">
            20/04/2025 10:00
          </time>
          <PostHeading as="h1" url="#">
            Lorem ipsum, dolor sit amet consectetur
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est
            natus necessitatibus modi pariatur quidem dolorem veritatis, nulla
            aliquam dicta reprehenderit ducimus et alias, facilis dolores
            praesentium odio! Commodi, vitae.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className="text-6xl fort-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
