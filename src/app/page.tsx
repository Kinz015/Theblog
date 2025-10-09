import { Container } from "@/components/Container";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl fort-bold text-center py-8">Aqui é a HEADER</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fuga
          voluptatibus, nisi ipsum placeat sapiente atque ut nam numquam magnam,
          similique molestiae ex dolorem dicta cupiditate maxime amet aut
          facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolorem, cum illo eum doloribus reiciendis itaque ad ut ullam, rem at
          facilis explicabo. Beatae maxime, accusamus error commodi quos iure
          eos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          pariatur, nostrum, sed rem maiores tempore, iusto sint eum minus neque
          quia mollitia eius! Praesentium officia, vel nemo earum a maiores!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          amet. Eius est placeat aspernatur eum hic architecto laboriosam vel
          iure pariatur! Eaque perspiciatis consectetur porro ea assumenda
          reprehenderit molestiae sapiente! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam iste mollitia totam rerum
          deserunt culpa aspernatur ad, impedit itaque iusto quis autem beatae,
          temporibus ea alias, qui porro dolores sequi.
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className="text-6xl fort-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
