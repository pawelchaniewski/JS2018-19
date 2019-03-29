"use strict";

class Word {
  constructor(word) {
    this.word = word;
    this.palindromes = [];
  }

  print() {
    console.log(this.word);
  }

  getPalindromes() {
    let segmentLength = 3;
    const wordLength = this.word.length;

    while (segmentLength <= wordLength) {
      for (let i = 0; i + segmentLength <= wordLength; i++) {
        const wordSegment = this.word.slice(i, i + segmentLength);
        if (Palindrome.isPalindrome(wordSegment)) {
          this.palindromes.push(new Palindrome(wordSegment));
        }
      }
      segmentLength++;
    }
  }
}

class Palindrome {
  constructor(word) {
    this.word = word;
  }

  print() {
    console.log(this.word);
  }

  static isPalindrome(word) {
    return [...word].reverse().join("") === word;
  }
}

const randomWord = new Word("baerrenerrennenemadam");
randomWord.getPalindromes();

console.log(randomWord.palindromes);
