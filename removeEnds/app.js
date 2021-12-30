// Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// If the length of the string argument is less than 3, return an empty string.
// Examples:

// removeEnds('SEI Rocks!'); //=> "DI Rocks"
// removeEnds('a'); //=> "" (empty string)

function removeEnds(str) {
  var newStr = str.slice(1, str.length - 1);
  for (i = 0; i < str.length; i++) {
    if (str.length > 3) {
      return newStr;
    } else {
      return "(empty string)";
    }
  }
}
console.log(removeEnds("pallkk"));
console.log(removeEnds("h"));
