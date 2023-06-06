/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let found = false;
  let i = 0

  while(!found){

    if(i*i > x ){
      found = true;
      return i-1;
    } else if (i*i == x){
      found = true;
      return i-1;
    }
    i++;
  }
};


mySqrt(8);