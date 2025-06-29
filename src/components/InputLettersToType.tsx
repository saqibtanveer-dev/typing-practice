"use client";
import { MyContext, States } from "@/contextProvds/context";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { allowed } from "@/data/helpingData";

export default function InputLettersToType() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const { setTypingAreaFocused } = useContext(States) as MyContext;
  function handleSubmit(formData: FormData) {
    const letter = formData.get("genRand");
    router.push(`/lesson/words-${letter}`);
    setTypingAreaFocused((pre: boolean) => true);
    document.getElementsByTagName("input")[0].blur();
  }
  return (
    <form action={handleSubmit} className="px-4 mt-16 w-screen flex flex-col items-center text-gray-300 font-sans">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <label htmlFor="genRand" className="w-full text-center">Generator From Random Letters</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(() => e.target.value);
          }}
          onFocus={(e) => {
            e.preventDefault();
            setTypingAreaFocused((pre: boolean) => false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document.getElementsByTagName("form")[0].requestSubmit();
              return;
            }
            if (e.key === "Backspace") {
              setInputValue((pre) => pre.slice(0, pre.length - 1));
              return;
            }
            if (!e.code.startsWith("Key")) {
              return;
            }
            setInputValue((pre) => pre + e.key);
          }}
          name="genRand"
          placeholder="Generate Random Words"
          className="w-full  text-slate-400 my-2 px-6 py-3 text-lg bg-white/5 rounded-md outline-none border-none focus:outline-orange-500"
        />
      </div>
    </form>
  );
}
