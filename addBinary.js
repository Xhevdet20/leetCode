/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  let strA= a;
  let strB =b;

  let length = strA.length >= strB.length ? strA.length : strB.length; 

  if(strA.length > strB.length){
    let diff = strA.length - strB.length;
    strB = "0".repeat(diff)+strB;
  } else if (strA.length < strB.length){
    let diff = strB.length -strA.length;
    strA = "0".repeat(diff)+strA;
  }

  console.log(strA);
  console.log(strB)

  let sum = [];
  let save = 0;

  for(let i = length-1; i >= 0; i--){

    if(parseInt(strA[i])+parseInt( strB[i]) + save == 1 || parseInt(strA[i])+parseInt( strB[i]) + save  == 0){
      sum.unshift(parseInt(strA[i])+parseInt( strB[i]) +save);
      save =0;
    } else if (parseInt(strA[i])+parseInt( strB[i]) + save == 2){
      sum.unshift(0);
      save =1;
    } else {
      sum.unshift(1);
      save =1;
    }
  }

  if(save != 0){
    sum.unshift(1);
  }


  // console.log(sum.join(""));
    
    return sum.join("");
};

 let a = "110110"
 let  b = "1011"

addBinary(a,b)