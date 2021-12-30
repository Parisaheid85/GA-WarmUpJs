// https://gist.github.com/epoch/a4f7f299c5fc62293f604c54e4ce96fe

// Write a function that return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u

// say for example the word "Spaghettification". your function should tell me there are 7 vowels

// extension
// did you use multiple comparisons? did you use a built in function? did you write nested loops? try to solve it in a different way

function vowelCount(str) {
  let sum = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      sum = sum + 1;
    }
  }
  return sum;
}
console.log(vowelCount("paasrIsfrAaeeU"));
