"use strict";

function findCommonCharSequences(left, right) {
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

const commonCharSequences = findCommonCharSequences("xyyaba", "xyxyxyyyabaab");
const commonCharSequencesSortedByLength = commonCharSequences.sort(
  (x, y) => y.length - x.length
);
console.log(commonCharSequencesSortedByLength);

const longestSequence = commonCharSequencesSortedByLength[0];
console.log(longestSequence);
