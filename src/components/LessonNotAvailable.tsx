import Link from "next/link";
import React from "react";

export default function LessonNotAvailable() {
  return (
    <div className="h-[50%] w-full flex items-center justify-center flex-col gap-4 text-2xl dark:text-gray-500">
      <h2>Lesson Not Available</h2>
      <Link
        href="/"
        className="text-sm bg-black px-8 py-4 rounded-lg text-white"
      >
        Back To Home
      </Link>
    </div>
  );
}
