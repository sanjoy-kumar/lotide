const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log('✔️✔️✔️ Asseration Passed:  ' + arr1 + ' === ' + arr2);
  } else {
    console.log('❌❌❌ Asseration Failed: ' + arr1 + ' !== ' + arr2);    
  }
};


module.exports = assertArraysEqual;

