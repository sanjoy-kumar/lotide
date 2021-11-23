// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  var emojiPass = String.fromCodePoint(0x2705);
  var emojiFail = String.fromCodePoint(0x274C);
  if(actual === expected){
    console.log(emojiPass + emojiPass + emojiPass+ "Assertion Passed: " + [actual] + "===" + [expected]);
  } else
  {
    console.log(emojiFail+emojiFail+emojiFail+ "Assertion Failed: " + [actual] + "!==" + [expected]);
  } 

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

