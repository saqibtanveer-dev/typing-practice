import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <header className="w-screen mx-auto bg-bg-secondary left-0 h-[100px] flex items-center justify-center px-8 py-4 relative before:absolute before:w-[20%] before:h-1 before:bg-orange-500 before:bottom-0 rounded-b-3xl">
      <div className="logo text-white text-4xl font-semibold">Typing Tutor</div>
    </header>
  );
}
