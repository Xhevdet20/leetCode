/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let arrs = s;

  while (arrs.length != 0) {
    if (arrs.indexOf("()") != -1) {
      let index = arrs.indexOf("()");
      arrs = arrs.slice(0, index) + arrs.slice(index + 2);
    } else if (arrs.indexOf("[]") != -1) {
      let index = arrs.indexOf("[]");
      arrs = arrs.slice(0, index) + arrs.slice(index + 2);
    } else if (arrs.indexOf("{}") != -1) {
      let index = arrs.indexOf("{}");
      arrs = arrs.slice(0, index) + arrs.slice(index + 2);
    } else {
      return false;
    }
  }

  return true;
};

console.log(isValid("([)]"));
