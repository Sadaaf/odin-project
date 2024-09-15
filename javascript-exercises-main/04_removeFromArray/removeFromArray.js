const removeFromArray = function (array, ...valuesToRemove) {
  valuesToRemove.forEach((value) => {
    array = array.filter((element) => element !== value);
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
