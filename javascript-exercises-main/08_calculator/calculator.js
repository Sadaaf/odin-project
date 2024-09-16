const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let sum = 0;
  a.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (a) {
  let result = 1;
  a.forEach((element) => {
    result *= element;
  });
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let factorial = 1;
  let count = 1;
  while (count <= a) factorial *= count++;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
