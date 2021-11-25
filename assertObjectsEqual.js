const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️  Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }
};



const eqArrays = function(arrOne, arrTwo) {
  let resultOne = '', resultTwo = '';
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      resultOne += arrOne[i];
      resultTwo += arrTwo[i];
    }
  } else {
    return false;
  }
  if (resultOne === resultTwo) {
    return true;
  } else {
    return false;
  }
};



const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1); // becomes an array
  const obj2Keys = Object.keys(obj2);
  let flag = true;
  if (obj1Keys.length !== obj2Keys.length) { //if ! same object keys length
    flag = false;
  } else {
    for (let indexOne in obj1Keys) {
      if (obj1Keys[indexOne] !== obj2Keys[indexOne]) {
        flag = false;
      }
    }
  } 
  return flag;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️  Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab,ba),true);

