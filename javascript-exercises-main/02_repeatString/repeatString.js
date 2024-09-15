const repeatString = function (value, numberOfRepeats) {
  if (numberOfRepeats < 0) {
    return "ERROR";
  }
  let repeatedValue = "";
  while (numberOfRepeats > 0) {
    repeatedValue = repeatedValue + value;
    numberOfRepeats = numberOfRepeats - 1;
  }
  return repeatedValue;
};

// Do not edit below this line
module.exports = repeatString;
