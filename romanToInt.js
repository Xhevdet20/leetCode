
let decimalValues = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

var romanToInt = function(s) {
    let roman = s; 
    let dec = 0;

    let fourIndex = roman.indexOf("IV")
    if(fourIndex != -1){
      dec += 4;
      roman= roman.slice(0, fourIndex) + roman.slice(fourIndex+2);
    }  
    let nineIndex = roman.indexOf("IX")
    if(nineIndex !== -1){
      dec += 9;
      roman= roman.slice(0, nineIndex) + roman.slice(nineIndex+2);
    }  

    let fortyIndex = roman.indexOf("XL")
    if(fortyIndex != -1){
      dec += 40;
      roman= roman.slice(0, fortyIndex) + roman.slice(fortyIndex+2);
    }

    let ninetyIndex = roman.indexOf("XC")
    if(ninetyIndex != -1){
      dec += 90;
      roman= roman.slice(0, ninetyIndex) + roman.slice(ninetyIndex+2);
    }    

    let fourHundredIndex = roman.indexOf("CD")
    if(fourHundredIndex != -1){
      dec += 400;
      roman= roman.slice(0, fourHundredIndex) + roman.slice(fourHundredIndex+2);
    }

    let nineHundredIndex = roman.indexOf("CM")
    if(nineHundredIndex != -1){
      dec += 900;
      roman= roman.slice(0, nineHundredIndex) + roman.slice(nineHundredIndex+2);
    }    

    roman = roman.split("");

    roman.map(rom => {
      dec += decimalValues[rom];
    })

    return dec;
};

romanToInt("MCDLXXVI")