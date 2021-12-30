// A wolf in sheep's clothing
// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N!
//You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

function warnTheSheep(flock) {
  let wolfIndex = flock.indexOf("wolf");
  if (wolfIndex === flock.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    let sheepInDanger = flock.length - (wolfIndex + 1);
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
  }
}

warnTheSheep([
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
]);
