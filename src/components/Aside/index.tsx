import React from "react";
import AsideItem from "./AsideItem";
import { lessonsList } from "@/data/lessonsList";

export default function Aside() {
  return (
    <div className="dark:text-gray-500 dark:bg-bg-secondary h-full  max-w-6xl rounded-md flex flex-wrap justify-center gap-8 p-8">
      {/* lesson item */}
      {lessonsList.map((lesson, i) => (
        <AsideItem
          key={lesson.number + i}
          number={lesson.number}
          name={lesson.name}
        />
      ))}
    </div>
  );
}
