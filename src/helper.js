import { faker } from "@faker-js/faker";
import { allowed } from "./data/helpingData";

export function generateRandomPara() {
  return faker.lorem.paragraph();
}

export function genRandWordsFromStr(string, n, maxWord) {
  let words = "";
  for (let i = 0; i < n; i++) {
    let randNum = genRandNum(maxWord + 1);
    if (randNum === 0) randNum = 1;
    const word = takeLetters(randNum);
    words += `${word} `;
  }

  function takeLetters(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
      const randNum = genRandNum(string.length);
      str += string[randNum];
    }
    return str;
  }

  function genRandNum(n) {
    return Math.floor(Math.random() * n);
  }

  return words;
}

export function checkKey(enteredKey, actualKey) {
  if (enteredKey === actualKey) return true;
  return false;
}

export function addClasses(elementId, classes) {
  const element = document.getElementById(elementId);
  if (!element) return;
  for (const Class of classes) {
    element.classList.add(Class);
  }
}

export function removeClasses(elementId, classes) {
  const element = document.getElementById(elementId);
  if (!element) return;
  for (const Class of classes) {
    element.classList.remove(Class);
  }
}

export function isKeyAllowed(code, key) {
  return (
    code === "Backspace" ||
    code.startsWith("Key") ||
    code === "Space" ||
    code === "Minus" ||
    code === "Semicolon" ||
    allowed.includes(key)
  );
}

export function handleBackSpace(currentElementId, pastElementId) {
  // const currentElement = document.getElementById(currentElementId);
  // const pastElement = document.getElementById(pastElementId);

  removeClasses(currentElementId, [
    "border-r-2",
    "border-r-blue-500",
    "text-white",
    "text-red-500",
  ]);

  addClasses(pastElementId, ["border-r-2", "border-r-blue-500"]);
}
