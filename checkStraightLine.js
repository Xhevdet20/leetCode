/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let a = (coordinates[1][1]-coordinates[0][1])/((coordinates[1][0]-coordinates[0][0]));
  let checkedX = [];

  if((coordinates[1][0]-coordinates[0][0]) === 0){
    let x= coordinates[0][0];
    for(let i = 1; i < coordinates.length-1; i++){
      if(coordinates[i][0] != x){
        return false
      }
    }
    return true;
  }

  for(let i =1; i < coordinates.length; i++){
    if(  checkedX.indexOf(coordinates[i][0])  == -1){
      checkedX.push(coordinates[i][0])
    } else {
      return false;
    }

    if(((coordinates[i+1][1]-coordinates[i][1])/(coordinates[i+1][0]-coordinates[i][0]))  != a ){
      return false;
    }
  }
  return true;
};

let obj = [[1,2],[1,3],[1,4],[1,5],[1,6],[6,7]]

console.log(checkStraightLine(obj));