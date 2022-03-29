'use strict'


function isPrime(numb){
    if (numb % 2 == 0) return false;
    for (var i=3; i<= Math.sqrt(numb); i = i + 2) {
      if (numb % i == 0) {
       return (`Не простое число`);
      }
    }
    return (`Простое число`);
  }

  console.log(isPrime(911))