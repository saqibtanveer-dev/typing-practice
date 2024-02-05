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
  const para = lessonsList[parseInt(slug)].letters;
  const chars = para.split("");
  return <CharsContainer chars={chars} />;
}
