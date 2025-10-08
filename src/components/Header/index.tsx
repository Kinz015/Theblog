"use client";

import clsx from "clsx";

export function Header() {
  console.log("header")

  return (
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
      onClick={() => alert(123)}
    >
      Oi pessoal lindo
    </h1>
  );
}
