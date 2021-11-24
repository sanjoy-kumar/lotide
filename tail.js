// FUNCTION IMPLEMENTATION


const tail = function(array) {
  return array.slice(1);
};



const assertEqual = function(actual, expected) {

  if(actual === expected){
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else
  {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 







