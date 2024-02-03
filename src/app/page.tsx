import Char from "@/components/Typing Area/Char";
import { generateRandomPara } from "../helper";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const CharsContainer = dynamic(
  () => import("@/components/Typing Area/CharsContainer"),
  {
    ssr: false,
  }
);

export default function Home() {
  const para = generateRandomPara(30);
  const chars = para.split("");
  return <CharsContainer chars={chars} />;
}
