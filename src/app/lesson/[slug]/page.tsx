import dynamic from "next/dynamic";
const CharsContainer = dynamic(() => import("@/components/TypingArea"), {
  ssr: false,
});

import { lessonsList } from "@/data/lessonsList";
import LessonNotAvailable from "@/components/LessonNotAvailable";
import { genRandWordsFromStr } from "@/helper";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let chars;

  if (slug.startsWith("words")) {
    const string: string = slug.split("-").slice(1).join("-");
    const para = genRandWordsFromStr(string, 30, 4);
    chars = para.split("");
    return <CharsContainer chars={chars} letterUsedForGenData={string} />;
  }

  try {
    const para = lessonsList[parseInt(slug)].data;
    chars = para.split("");
  } catch (error) {
    return <LessonNotAvailable />;
  }
  return (
    <CharsContainer
      chars={chars}
      letterUsedForGenData={lessonsList[parseInt(slug)].letters}
    />
  );
}
