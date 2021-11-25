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



assertArraysEqual([1, 2, 3], [1, 2, 3]) 
assertArraysEqual([1, 2, 3], [3, 2, 1]) 



