// check input is even or odd
// if even
//

const palindromes = function (input) {
  input = input.replace(/[\s/.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  input = input.toLowerCase();
  reversedInput = input.split("").reverse();
  let length = Math.floor(input.length / 2);
  //   TODO return true or false based on palindrome
  while (length >= 0)
    if (input[length] !== reversedInput[length--]) return false;
  return true;
};

// Do not edit below this line
module.exports = palindromes;
