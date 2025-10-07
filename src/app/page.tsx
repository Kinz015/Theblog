import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          "text-6xl",
          "font-bold",
          "text-blue-400",
          "hover:text-blue-50",
          "hover:cursor-pointer",
          "hover:bg-blue-400",
          "transition",
          "duration-100"
        )}
      >
        Oi pessoal lindo
      </h1>
    </div>
  );
}
