// write a function that returns true if the given string is a palindrome. Otherwise, return false.
// isPalindrome('a toyota') // => true
// isPalindrome('a tesla') // => false

function palindrome(string) {
  // find the length of a str
  let length = string.length;
  // loop through half of the string
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    } else {
    }
    return true;
  }
}
palindrome("a toyota");
