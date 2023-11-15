
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion passed: ${actual} === ${expected}!!`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

