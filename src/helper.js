import { faker } from "@faker-js/faker";

export function generateRandomPara(n) {
  return faker.word.words(n);
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
  console.log(element);
  for (const Class of classes) {
    element.classList.remove(Class);
  }
}

export function isKeyAllowed(key) {
  if (/^[a-zA-Z]+$/.test(key)) {
    console.log("right vlue");
    return true;
  }
  return false;
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
