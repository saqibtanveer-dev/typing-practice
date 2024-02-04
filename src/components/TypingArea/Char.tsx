import React from "react";

export default function Char({ char, id }: { char: string; id: string }) {
  return (
    <span id={id} className="">
      {char}
    </span>
  );
}
