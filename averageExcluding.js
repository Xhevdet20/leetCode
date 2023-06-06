/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
  let sorted = salary.sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
  }

  return sum / sorted.length;
};

average([4000, 3000, 1000, 2000]);
