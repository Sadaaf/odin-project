const reverseString = function (value) {
  let reversedString = "";
  for (i = value.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(value.at(i));
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
