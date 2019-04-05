"use strict";

const MORSE_DICTIONARY = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/"
};

function toMorse(text) {
  const textAsArray = text.toLowerCase().split("");
  const morseAsArray = textAsArray.map(char => MORSE_DICTIONARY[char] || "*");

  return morseAsArray.join(" ");
}

function toText(morse) {
  const morseAsArray = morse.split(" ");
  const textAsArray = morseAsArray.map(
    char =>
      Object.keys(MORSE_DICTIONARY).find(
        key => MORSE_DICTIONARY[key] === char
      ) || "*"
  );

  return textAsArray.join("");
}

console.log(toMorse("Tęst in the wild"));
console.log(toText(toMorse("Tęst in the wild")));
