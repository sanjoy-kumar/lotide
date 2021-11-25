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



const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if(Array.isArray(i) && Array.isArray(j)){
        if (!eqArrays(object1.i, object2.j)) 
       {
          return false; 
        }
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          return false;
        } else if (object1.i === object2.j) {
          return true;
        }
      }      
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab,ba),true);

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false

