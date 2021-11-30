
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];


describe("#head", () => {
  it("returns 3 for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {    
    assert.deepEqual(tail(words.length), 3);
  });
});

