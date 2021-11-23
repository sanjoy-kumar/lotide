// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  var emojiPass = String.fromCodePoint(0x2705);
  var emojiFail = String.fromCodePoint(0x274C);
  if(actual === expected){
    //console.log(emojiPass + emojiPass + emojiPass+ "Assertion Passed: " + [actual] + "===" + [expected]);
    console.log(`${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else
  {
    //console.log(emojiFail+emojiFail+emojiFail+ "Assertion Failed: " + [actual] + "!==" + [expected]);
    console.log(`${emojiFail}${emojiFail}${emojiFail} Assertion Passed: ${actual} !== ${expected}`);
  } 

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


//The next example greets Alice using the template literals syntax.

const name = 'Alice';
console.log(`Hello, ${name}!`); // logs: Hello, Alice!

