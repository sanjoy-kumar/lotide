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



const without = function(arr,excArr) {
  let resultArr = [];
  for (let index in arr) {
    if (arr[index] !== excArr[0]) {
      resultArr.push(arr[index]);
    }
  } return resultArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);




