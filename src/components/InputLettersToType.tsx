"use client";
import { MyContext, States } from "@/contextProvds/context";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

export default function InputLettersToType() {
  const router = useRouter();
  const { setTypingAreaFocused } = useContext(States) as MyContext;
  function handleSubmit(formData: FormData) {
    const letter = formData.get("genRand");
    router.push(`/lesson/words-${letter}`);
    setTypingAreaFocused((pre: boolean) => true);
    document.getElementsByTagName("input")[0].blur();
  }
  return (
    <form action={handleSubmit} className="px-4 mt-16 text-gray-500 font-sans">
      <div>
        <label htmlFor="genRand">Generator From Random Letters</label>
        <input
          type="text"
          onFocus={(e) => {
            e.preventDefault();
            setTypingAreaFocused((pre: boolean) => false);
          }}
          name="genRand"
          placeholder="fj"
          className="w-full bg-bg-primary text-gray-500 my-2 px-4 py-2 border-b border-red-300 focus:outline-none"
        />
      </div>
    </form>
  );
}
