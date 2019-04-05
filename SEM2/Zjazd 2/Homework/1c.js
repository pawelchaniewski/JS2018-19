"use strict";

const _MORSE_DICTIONARY = {
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

class MorseAlphabetTranslator {
  static toMorse(word) {
    const wordAsArray = word.value.toLowerCase().split("");
    const morseAsArray = wordAsArray.map(
      char => _MORSE_DICTIONARY[char] || "*"
    );

    return morseAsArray.join(" ");
  }

  static toText(morseWord) {
    const morseAsArray = morseWord.value.split(" ");
    const textAsArray = morseAsArray.map(
      char =>
        Object.keys(_MORSE_DICTIONARY).find(
          key => _MORSE_DICTIONARY[key] === char
        ) || "*"
    );

    return textAsArray.join("");
  }
}

class Sentence {
  constructor(text) {
    this.text = text;
  }

  getWords() {
    const wordsCollection = this.text.split("/").map(word => new Word(word));
    return wordsCollection;
  }

  toMorse() {
    const wordsCollection = this.getWords();
    const morseWordsCollection = wordsCollection.map(word => word.toMorse());
    const morseSentenceText = morseWordsCollection
      .map(morseWord => morseWord.value)
      .join("/");

    return new MorseSentence(morseSentenceText);
  }
}

class MorseSentence {
  constructor(text) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }

  getWords() {
    const morseWordsCollection = this.text
      .split("/")
      .map(morseWord => new MorseWord(morseWord));
    return morseWordsCollection;
  }

  toText() {
    const morseWordsCollection = this.getWords();
    const wordsCollection = morseWordsCollection.map(morseWord =>
      morseWord.toText()
    );
    const sentenceText = wordsCollection.map(word => word.value).join(" ");

    return new Sentence(sentenceText);
  }
}

class Word {
  constructor(value) {
    this.value = value.trim();
  }

  print() {
    console.log(this.value);
  }

  toMorse() {
    return new MorseWord(MorseAlphabetTranslator.toMorse(this));
  }
}

class MorseWord {
  constructor(value) {
    this.value = value.trim();
  }

  print() {
    console.log(this.value);
  }

  toText() {
    return new Word(MorseAlphabetTranslator.toText(this));
  }
}

const textWord = new Word("ala");
console.log(textWord.toMorse());

const morseWord = new MorseWord(".- .-.. .-");
console.log(morseWord.toText());

const textSentence = new Sentence("ala ma kota");
console.log(textSentence);

const textSentenceWords = textSentence.getWords();
console.log(textSentenceWords);

const morseSentence = textSentence.toMorse();
console.log(morseSentence);

const morseSentenceWords = morseSentence.getWords();
console.log(morseSentenceWords);

const textSentenceFromMorse = morseSentence.toText();
console.log(textSentenceFromMorse);
