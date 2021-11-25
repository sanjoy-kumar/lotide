// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
  {
    console.log(`Assertion Passed: ${actual} !== ${expected}`);
  } 

};



let countLetters = function(strArray){
  const results = {};
  for (let letter of strArray) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return results;
};


console.log(countLetters('lighthouse in the house'));
assertEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2,u: 2, s: 2, e: 3, n: 1});
