"use client";
import React, { useContext, useEffect, useState } from "react";
import Char from "./Char";
import {
  addClasses,
  genRandWordsFromStr,
  generateRandomPara,
  handleBackSpace,
  isKeyAllowed,
  removeClasses,
} from "@/helper";
import { MyContext, States } from "@/contextProvds/context";
import { faker } from "@faker-js/faker";

type CharWrapperPropsType = {
  chars: string[];
  letterUsedForGenData: string;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function CharWrapper({
  chars,
  letterUsedForGenData,
  index,
  setIndex,
}: CharWrapperPropsType) {
  const { typingAreaFocused } = useContext(States) as MyContext;
  const [charsState, setCharsState] = useState<string[]>(chars);

  useEffect(() => {
    const handleKeyDownEvent = (e: KeyboardEvent) => {
      e.preventDefault();

      // insert new data in charsState
      if (index === charsState.length - 1) {
        let moreData: string[];
        if (letterUsedForGenData === "faker") {
          moreData = generateRandomPara().split("");
          moreData.unshift(" ");
        } else if (letterUsedForGenData === "faker-words") {
          moreData = faker.word.words(30).split("");
          moreData.unshift(" ");
        } else if (letterUsedForGenData === "faker-sentences") {
          moreData = faker.lorem.sentences().split("");
          moreData.unshift(" ");
        } else {
          moreData = genRandWordsFromStr(letterUsedForGenData, 30, 4).split("");
          moreData.unshift(" ");
        }
        setIndex((pre) => pre - pre);
        setCharsState((pre) => moreData);
        for (let i = 0; i < charsState.length; i++) {
          removeClasses(i + charsState[i], [
            "text-white",
            "border-r-2",
            "border-r-blue-500",
            "text-red-500",
            "border-r-2",
            "border-r-blue-500",
          ]);
        }
      }

      if (!typingAreaFocused) return;

      const isAllowed = isKeyAllowed(e.code, e.key);
      if (!isAllowed) return;

      // remove classes from past span
      removeClasses(index - 1 + charsState[index - 1], [
        "border-r-2",
        "border-r-blue-500",
      ]);

      // case 0: key is backspace
      if (e.key === "Backspace") {
        handleBackSpace(
          index - 1 + charsState[index - 1],
          index - 2 + charsState[index - 2]
        );
        if (index <= 0) return;
        setIndex((pre) => pre - 1);
        return;
      }

      // case 1: right key pressed
      if (charsState[index] === e.key) {
        addClasses(index + e.key, [
          "text-white",
          "border-r-2",
          "border-r-blue-500",
        ]);
        setIndex((pre) => pre + 1);
      }

      // case 2: wrong key pressed
      if (charsState[index] !== e.key) {
        addClasses(index + charsState[index], [
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
  }, [index, setIndex, typingAreaFocused]);

  return (
    <>
      {charsState &&
        charsState.map((char, i) => (
          <Char id={i + char} key={char + i} char={char} />
        ))}
    </>
  );
}
