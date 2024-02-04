import React from "react";
import AsideItem from "./AsideItem";
import { lessonsList } from "@/data/lessonsList";

export default function Aside() {
  return (
    <div className="dark:text-gray-500 dark:bg-bg-secondary h-full w-full overflow-y-scroll flex flex-col gap-4 p-8">
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
