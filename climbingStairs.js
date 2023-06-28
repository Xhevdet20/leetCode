/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let seq = [];

    for(let i = 1; i <= n ; i++){
      if(i < 4){
        seq.push(i);
      } else {
        seq.push(seq[i-2]+seq[i-3])
      }
    }

    return seq[seq.length-1];
};

console.log(climbStairs(4))