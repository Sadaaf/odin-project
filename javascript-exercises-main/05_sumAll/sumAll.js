const sumAll = function (number1, number2) {
  if (number1 < 0 || number2 < 0) {
    return "ERROR";
  } else if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "ERROR";
  } else if (number1 % 1 !== 0 || number2 % 1 !== 0) {
    return "ERROR";
  }
  let sum = 0;
  if (number1 >= number2) {
    while (number2 <= number1) {
      sum = sum + number2;
      number2++;
    }
  } else {
    while (number2 >= number1) {
      sum = sum + number1;
      number1++;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
