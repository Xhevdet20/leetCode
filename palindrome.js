/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("")
   
    for(let i = 0; i < Math.floor(x.toString().length/2); i++){
      if(arr[i] != arr[arr.length-i-1]){
        return false;
      }
    }
    return true;
};

isPalindrome(1221)