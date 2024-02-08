"use client";
import React from "react";

export interface MyContext {
  typingAreaFocused: boolean;
  setTypingAreaFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

export const States = React.createContext<MyContext | undefined>(undefined);
