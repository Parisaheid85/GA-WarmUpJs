//gist.github.com/epoch/4461732cf2a283a2d8857e6c18fad1ed

// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

function treasureFinder(map1) {
  for (i = 0; i < map1.length; i++) {
    for (j = 0; j < map1[i].length; j++) {
      if (map1[i][j] == "X") {
        return [i, j];
      } else {
      }
    }
  }
  return -1;
}
treasureFinder(map1);

var map1 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "X", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];
