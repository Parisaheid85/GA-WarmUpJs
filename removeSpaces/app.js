// Write a function called removeSpaces that accepts a single string argument, then returns the string with all space characters removed.
// you're not allow to used the built in function .trim(), .replace() and .replaceAll()
// removeSpaces('cake pudding') //=> 'cakepudding'
// removeSpaces(' cake pudding ') //=> 'cakepudding'
// removeSpaces('cake     pudding    ') //=> 'cakepudding'
// removeSpaces('p u d d i n g') //=> 'pudding'

function removeSpaces(str) {
  var strArr = str.split(" ");
  var newStr = strArr.join("");
  console.log(newStr);
}
removeSpaces("hello Paris how are you?");
