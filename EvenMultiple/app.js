// Write a method called even_multiples that takes a list of numbers and returns only numbers that are both even AND multiples of 5.

// evenMutiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 20, 2, 6, 5]) //=> [10, 20]
// evenMutiples([14, 5, 7, 2) //=> []

function evenMultiples(numbers) {
  let arr = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0 && numbers[i] % 2 === 0) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}
evenMultiples([2, 5, 8, 6, 7, 10]);
