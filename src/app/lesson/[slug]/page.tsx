import React from "react";
import dynamic from "next/dynamic";
import LessonNotAvailable from "@/components/LessonNotAvailable";
const CharsContainer = dynamic(
  () => import("@/components/TypingArea/CharsContainer"),
  {
    ssr: false,
  }
);
import { lessons } from "@/data/lessonsData";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let chars;
  try {
    chars = lessons[parseInt(slug)].split("");
  } catch (error) {
    return <LessonNotAvailable />;
  }
  return <CharsContainer chars={chars} />;
}
