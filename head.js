const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion passed: ${actual} === ${expected}!!`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

/* create a fuction head which returns the first item in an array*/
const head = function (array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

//test
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");