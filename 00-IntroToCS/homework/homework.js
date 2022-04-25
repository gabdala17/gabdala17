"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let nuevoNumero = num.split("");
  let suma = 0;

  for (let i = 0; i < nuevoNumero.length; i++) {
     suma += +nuevoNumero[i] * 2 ** (nuevoNumero.length - 1 - i);
  }
  return (suma) ;
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  do{
    if(num === 0){
      return 0;
    }
    
    else if(num % 2 !== 0){
      array.push(1)
    }
    else if(num % 2 === 0){
      array.push(0)
    }
    num = Math.floor(num/2);
  }


  while(num >= 1);
  console.log(array)
  array.reverse();
  console.log(array)
  var binario = array.join("")
  return binario
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
