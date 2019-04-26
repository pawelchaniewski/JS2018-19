"use strict";

class Word {
  constructor(word) {
    this.word = word;
    this.length = this.word.length;
  }

  print() {
    console.log(this.word);
  }

  getLength() {
    return this.word.length;
  }
}

class CharSequence {
  constructor(charSequence) {
    this.charSequence = charSequence;
    this.length = this.charSequence.length;
  }

  print() {
    console.log(this.charSequence);
  }

  getLength() {
    return this.charSequence.length;
  }
}

class WordComparator {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this.commonCharSequences = [];
  }

  findCommonCharSequences() {
    let segmentLength = 2;
    const wordLength = left.length;
    const commonSegments = [];

    while (segmentLength <= wordLength) {
      for (let i = 0; i + segmentLength <= wordLength; i++) {
        const wordSegment = left.slice(i, i + segmentLength);
        if (right.includes(wordSegment)) {
          commonSegments.push(wordSegment);
        }
      }
      segmentLength++;
    }

    return commonSegments;
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
