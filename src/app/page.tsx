import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full object-cover object-center h-full group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet consecteturblan</Link>
          </h1>
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
