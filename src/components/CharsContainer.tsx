"use client";
import React, { useState } from "react";
import CharWrapper from "./CharWrapper";

export default function CharsContainer({ chars }: { chars: string[] }) {
  const [index, setIndex] = useState<number>(0);
  return <CharWrapper chars={chars} index={index} setIndex={setIndex} />;
}
