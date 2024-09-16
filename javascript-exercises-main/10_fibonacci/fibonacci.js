const fibonacci = function (memberNo) {
  if (memberNo < 0) return "OOPS";
  else memberNo = parseInt(memberNo);
  if (memberNo === 0) return 0;

  let m = 1;
  let n = 1;

  while (memberNo - 2 > 0) {
    temp = m + n;
    m = n;
    n = temp;
    memberNo--;
  }
  return n;
};

// Do not edit below this line
module.exports = fibonacci;
