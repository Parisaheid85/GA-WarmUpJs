// https://gist.github.com/epoch/bd35662fff5f331c44fb5655b61def8e

var scoreBoard = {
  bob: {
    hole: [3, 2, 6, 11, 9, 2, 6, 9, 10],
  },
  jimbo: {
    hole: [5, 12, 9, 22, 13, 7, 16, 10, 11],
  },
  fish: {
    hole: [2, 2, 4, 5, 4, 3, 6, 4, 1],
  },
};

// function totalScore() {
let totalScoreBob = 0;
let totalScoreJimbo = 0;
let totalScoreFish = 0;

for (i = 0; i < 9; i++) {
  totalScoreBob += scoreBoard.bob.hole[i];
  totalScoreJimbo += scoreBoard.jimbo.hole[i];
  totalScoreFish += scoreBoard.fish.hole[i];
}

console.log(totalScoreBob);
console.log(totalScoreJimbo);
console.log(totalScoreFish);
