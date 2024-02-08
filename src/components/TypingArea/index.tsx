"use client";
import React, { useState } from "react";
import CharWrapper from "./CharWrapper";
import InputLettersToType from "./InputLettersToType";

export default function CharsContainer({ chars }: { chars: string[] }) {
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <div className="max-w-3xl w-fit h-fit mx-auto dark:bg-bg-secondary dark:text-gray-500 mt-[15%] font-sans text-xl p-8">
        <CharWrapper chars={chars} index={index} setIndex={setIndex} />;
      </div>
      <InputLettersToType />
    </>
  );
}
