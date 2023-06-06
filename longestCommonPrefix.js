/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let prefix = ""; 
  let shortestString = strs[0].length;
  let arr = [];

    for(let i = 0; i < strs.length; i++){
      if(strs[i].length < shortestString){
        shortestString = strs[i].length
      }
      arr.push(strs[i].split(""));
    }

    for(let i = 0; i < shortestString ; i++){
      let temp = arr[0][i];
      let isSame = true;
      for(let j = 0; j < arr.length  ; j++){
        if(arr[j][i] != temp){
          isSame= false;
          break;
        }
      }
      if(isSame){
        prefix += temp;
      } else {
        break;
      }
    }

    return prefix;
    console.log(prefix)
};

longestCommonPrefix(["flower","flow","flight"])
