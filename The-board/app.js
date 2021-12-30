// The Board
// Write a program that creates one single multiline string that represents a grid, using new-line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form alternating pattern like a chess board. Printing this string should show something like this:

// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #

var times = 8;
var result = ""; //result is the chessboard.
for (var i = 0; i < times; i++) {
  //run the loop starting at zero and going up.
  for (var x = 0; x < 8; x++) {
    //run a second loop to run each line of the chessboard.
    if (i % 2 === 0) {
      //check if i(current index of the loop) is divisible by 0, and concatenate '# ' to result
      result += "# ";
    } else {
      //if not divisible by 0 then concatenate ' #'
      result += " #";
    }
  }
  result = result + "\n"; //add a line brake to at the end of every index
}
console.log(result); //result should now print the chessboard.
