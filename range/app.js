// Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
// The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".

function range(num1, num2) {
  let Arr = [];
  if (num1 < num2) {
    for (i = num1; i < num2; i++) {
      Arr.push(i);
    }
    return Arr;
  } else if (num1 == num2) {
    let Array = [];
    return Array;
  } else {
    return "First argument must be less than second";
  }
}

console.log(range(1, 4)); //=> [1,2,3]
console.log(range(-2, 3)); //=> [-2,-1,0,1,2]
console.log(range(5, 2)); //=> "First argument must be less than second"
