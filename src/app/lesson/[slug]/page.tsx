import React from "react";
import dynamic from "next/dynamic";
import LessonNotAvailable from "@/components/LessonNotAvailable";
const CharsContainer = dynamic(
  () => import("@/components/TypingArea/CharsContainer"),
  {
    ssr: false,
  }
);
import { genRandWordsFromStr } from "@/helper";
import { lessonsList } from "@/data/lessonsList";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const letters = lessonsList[parseInt(slug)].letters;
  const para = genRandWordsFromStr(letters, 50, 5);
  const chars = para.split("");
  console.log(chars);
  return <CharsContainer chars={chars} />;
}
