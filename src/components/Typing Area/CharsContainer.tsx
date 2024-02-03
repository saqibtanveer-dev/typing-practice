"use client";
import React, { useState } from "react";
import CharWrapper from "./CharWrapper";

export default function CharsContainer({ chars }: { chars: string[] }) {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="max-w-3xl w-fit h-fit mx-auto dark:bg-black dark:text-gray-500 mt-[15%] font-mono text-xl">
      <CharWrapper chars={chars} index={index} setIndex={setIndex} />;
    </div>
  );
}
