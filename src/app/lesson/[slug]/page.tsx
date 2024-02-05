import dynamic from "next/dynamic";
const CharsContainer = dynamic(
  () => import("@/components/TypingArea/CharsContainer"),
  {
    ssr: false,
  }
);

import { lessonsList } from "@/data/lessonsList";

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const para = lessonsList[parseInt(slug)].letters;
  const chars = para.split("");
  return <CharsContainer chars={chars} />;
}
