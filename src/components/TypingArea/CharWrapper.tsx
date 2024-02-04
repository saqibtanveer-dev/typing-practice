"use client";
import React, { useEffect } from "react";
import Char from "./Char";
import {
  addClasses,
  checkKey,
  handleBackSpace,
  isKeyAllowed,
  removeClasses,
} from "@/helper";

export default function CharWrapper({
  chars,
  index,
  setIndex,
}: {
  chars: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => {
      e.preventDefault();
      console.log(e.key);

      const isAllowed = isKeyAllowed(e.code);
      if (!isAllowed) return;

      // remove classes from past span
      removeClasses(index - 1 + chars[index - 1], [
        "border-r-2",
        "border-r-blue-500",
      ]);

      // case 0: key is backspace
      if (e.key === "Backspace") {
        handleBackSpace(
          index - 1 + chars[index - 1],
          index - 2 + chars[index - 2]
        );
        if (index <= 0) return;
        setIndex((pre) => pre - 1);
        return;
      }

      // case 1: right key pressed
      if (chars[index] === e.key) {
        addClasses(index + e.key, [
          "text-white",
          "border-r-2",
          "border-r-blue-500",
        ]);
        setIndex((pre) => pre + 1);
      }

      // case 2: wrong key pressed
      if (chars[index] !== e.key) {
        addClasses(index + chars[index], [
          "text-red-500",
          "border-r-2",
          "border-r-blue-500",
        ]);
        setIndex((pre) => pre + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDownEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent);
    };
  }, [index, setIndex]);

  return (
    <>
      {chars &&
        chars.map((char, i) => (
          <Char id={i + char} key={char + i} char={char} />
        ))}
    </>
  );
}
