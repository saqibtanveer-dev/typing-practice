"use client";
import React, { useContext, useState } from "react";
import CharWrapper from "./CharWrapper";
import { MyContext, States } from "@/contextProvds/context";

export default function CharsContainer({ chars }: { chars: string[] }) {
  const [index, setIndex] = useState<number>(0);

  const { setTypingAreaFocused } = useContext(States) as MyContext;
  return (
    <>
      <div
        className="max-w-3xl w-fit h-fit mx-auto dark:bg-bg-secondary dark:text-gray-500 mt-[15%] font-sans text-xl p-8"
        onClick={(e) => {
          e.preventDefault();
          setTypingAreaFocused((pre: boolean) => true);
        }}
      >
        <CharWrapper chars={chars} index={index} setIndex={setIndex} />;
      </div>
    </>
  );
}
