const findTheOldest = function (people) {
  return people.reduce((acc, cur) => {
    if (!acc) {
      return cur;
    } else {
      if (!acc.yearOfDeath || !cur.yearOfDeath) {
        if (acc.yearOfBirth > cur.yearOfBirth) {
          return cur;
        } else {
          return acc;
        }
      }
      if (
        acc.yearOfDeath - acc.yearOfBirth <
        cur.yearOfDeath - cur.yearOfBirth
      ) {
        return cur;
      }
      return acc;
    }
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
