function formatWithPadding(numInput, char, numLength) {
  var numInputStr = numInput.toString();
  var numInputArray = numInputStr.split("");
  outputArray = [];

  if (numInputStr.length >= Number(numLength)) {
    for (let i = 0; i < numInputStr.length; i++) {
      outputArray.push(numInputStr[i]);
    }
    return outputArray.join("");
  } else {
    for (let j = numInputArray.length; j <= Number(numLength - 1); j++) {
      numInputArray.unshift(char);
    }
    outputArray = numInputArray.join("");
    return outputArray;
  }
}

console.log(formatWithPadding(42, "*", 8)); //=> "********42"

// numInputArray.length
