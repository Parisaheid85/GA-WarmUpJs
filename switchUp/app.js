// https://gist.github.com/epoch/9b89da6bdc81fd91cf18f4c102844565

// Write a method switchUp that takes a string as an argument and returns the string with the case for each letter switched e.g. lowercase letter must become uppercase and vice versa.

// switchUp("Switch caSe FoR eVery letter") // => "sWITCH CAsE fOr EvERY LETTER"

function switchUp(string) {
  let switchedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toLowerCase()) {
      switchedString += string[i].toUpperCase();
    } else {
      switchedString += string[i].toLowerCase();
    }
  }
  return switchedString;
}
console.log(switchUp("hello parISA"));
