// https://gist.github.com/epoch/ad18ae2db8e78067ba7596448430c60d
// Write a function named countBlanks that counts the number of blank strings in an array.
// the function should expect an array of strings to be passed in and should return the number of blanks.

// countBlanks(["cake", "pudding", ""]) // => 1
// countBlanks(["cake"]) // => 0
// var list = ["cake", "  ", "pudding", ""]
// countBlanks(list) // => 2
// countBlanks(["", " ", "   "]) // => 3

function countBlanks(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == "" || str[i] == " " || str[i] == "  ") {
      count += 1;
    }
  }
  return count;
}
countBlanks(["cake", "pudding", "", "  "]);
