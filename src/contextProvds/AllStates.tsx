"use client";
import React, { useState } from "react";
import { MyContext, States } from "./context";

export default function AllStates({ children }: { children: React.ReactNode }) {
  const [typingAreaFocused, setTypingAreaFocused] = useState<boolean>(true);
  const contextValue: MyContext = {
    typingAreaFocused,
    setTypingAreaFocused,
  };
  return <States.Provider value={contextValue}>{children}</States.Provider>;
}
