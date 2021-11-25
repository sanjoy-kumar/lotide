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



// ACTUAL FUNCTION
const middle = function(arr) {
  let arrResult = [];
  if (arr.length >= 2) {//only if array length > 2
    if (arr.length % 2 === 0) {//for even array length
      arrResult.push(arr[((arr.length) / 2) - 1]);
      arrResult.push(arr[(arr.length) / 2]);
    } else {//for odd array length
      arrResult.push(arr[Math.floor(0.5 * arr.length)]);
    }
  } 
  return arrResult;
}




console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]





