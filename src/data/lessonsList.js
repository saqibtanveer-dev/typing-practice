import { genRandWordsFromStr } from "@/helper";
import { faker } from "@faker-js/faker";

export const lessonsList = [
  {
    number: 0,
    name: "Home Row",
    description: "Learn the keys on the home row.",
    letters: genRandWordsFromStr("asdfghjkl;", 50, 5),
  },
  {
    number: 1,
    name: "Top Row",
    description: "Practice typing on the top row.",
    letters: genRandWordsFromStr("qwertyuiop;", 50, 5),
  },
  {
    number: 2,
    name: "Bottom Row",
    description: "Focus on typing keys on the bottom row.",
    letters: genRandWordsFromStr("zxcvbnm;", 50, 5),
  },
  {
    number: 3,
    name: "Common Letter Combinations",
    description: "Practice common combinations of letters.",
    letters: genRandWordsFromStr("asdfghjkl;", 50, 5),
  },
  {
    number: 4,
    name: "Common Words",
    description: "Type frequently used words for better",
    letters: faker.word.words(30),
  },
  {
    number: 5,
    name: "Sentences",
    description: "Construct sentences to enhance typing speed",
    letters: faker.lorem.sentences(),
  },
  {
    number: 6,
    name: "Punctuation",
    description:
      "Include punctuation and numeric characters in typing practice.",
    letters: genRandWordsFromStr("!@#$%^&*:;'|?/,", 50, 5),
  },
];
