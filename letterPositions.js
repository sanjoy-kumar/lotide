
const eqArrays = function(arr1, arr2){
  // Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;
  	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
  }

	// Otherwise, return true
	return true;
}



const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log('✔️✔️✔️ Asseration Passed:  ' + arr1 + ' === ' + arr2);
  } else {
    console.log('❌❌❌ Asseration Failed: ' + arr1 + ' !== ' + arr2);    
  }
};




const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let chr of sentence) {// logic to update results here
    if (chr !== ' ') {
      if (results[chr]) {
        results[chr].push(i);
      } else {
        results[chr] = [i];
      }
    }
    i++;
  }
  return results;
};


console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions("hello"), [1]);

