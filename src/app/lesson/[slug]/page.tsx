import dynamic from "next/dynamic";
const CharsContainer = dynamic(
  () => import("@/components/TypingArea/CharsContainer"),
  {
    ssr: false,
  }
);

import { lessonsList } from "@/data/lessonsList";
import LessonNotAvailable from "@/components/LessonNotAvailable";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let chars;
  try {
    const para = lessonsList[parseInt(slug)].letters;
    chars = para.split("");
  } catch (error) {
    return <LessonNotAvailable />;
  }
  return <CharsContainer chars={chars} />;
}
