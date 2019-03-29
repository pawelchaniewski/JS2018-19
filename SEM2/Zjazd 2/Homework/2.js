"use strict";

function getPalindromes(word) {
  let segmentLength = 3;
  const wordLength = word.length;

  while (segmentLength <= wordLength) {
    for (let i = 0; i + segmentLength <= wordLength; i++) {
      const wordSegment = word.slice(i, i + segmentLength);
      if (isPalindrome(wordSegment)) {
        console.log(wordSegment);
      }
    }

    segmentLength++;
  }
}

function isPalindrome(word) {
  return [...word].reverse().join("") === word;
}

getPalindroms("oko");
