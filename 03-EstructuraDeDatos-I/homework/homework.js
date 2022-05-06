'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if (n < 0)  throw new Error ("No existe fibonacci para numeros negativos")
  if (n<=1) return 1
  return  n * nFactorial(n-1)
  
}
console.log(nFactorial(4))

function nFibonacci(n) {
  //                  keys: 0   1  2  3  4  5  6  7   8   9   10....
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n<0) throw new Error("No extiste fibonacci de números negativos")
  if(n===0) return 0
  if(n<=2) return 1
  return nFibonacci(n-1)+nFibonacci(n-2)
}

// 
// si pongo console.table(memo) devuelve los kay:value en tabla


// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
  this.array=[];
  //this.value=Array.prototype.slice.call(arguments,0);
}
  Queue.prototype.enqueue = function(elemento){
   this.array.push(elemento);
  }
  Queue.prototype.dequeue= function(){
   let aux= this.array[0]
   this.array.shift();  
   return aux  
  }
  Queue.prototype.size= function(){
  
    return this.array.length
  }
  Queue.prototype.empty= function empty(){
    return this.value=[];
  }

  
  var queue1= new Queue()
 

  
  
  queue1.enqueue('second');
  console.log(queue1)
  queue1.enqueue(3);
  console.log(queue1)
  queue1.enqueue(5);
  console.log(queue1)
  queue1.enqueue('third');
  console.log(queue1)
  console.log(queue1.dequeue())
  console.log(queue1)
  
  
  

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
