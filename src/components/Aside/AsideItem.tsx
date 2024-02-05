import Link from "next/link";
import React from "react";

export default function AsideItem({
  number,
  name,
}: {
  number: number;
  name: string;
}) {
  return (
    <Link
      href={`/lesson/${number}`}
      className="h-24 w-full bg-[] px-4 py-3 rounded-md text-gray-500 dark:bg-bg-third"
    >
      <p className="text-xs mb-2">Lesson: {number + 1}</p>
      <h2 className="ml-6 text-gray-400">{name}</h2>
    </Link>
  );
}
