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

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else
  {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } 

};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS



