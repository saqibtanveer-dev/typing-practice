import React from "react";

export default function InputLettersToType() {
  return (
    <form action="" className="px-4 mt-16 text-gray-500 font-sans">
      <div>
        <label htmlFor="genRand">Generator From Random Letters</label>
        <input
          type="text"
          name="genRand"
          placeholder="fj"
          className="w-full bg-bg-primary text-gray-500 my-2 px-4 py-2 border-b border-red-300 focus:outline-none"
        />
      </div>
    </form>
  );
}
