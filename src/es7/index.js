// ES7 salió en junio de 2016

/**
 * En ES7 implementaron dos cambios muy importantes, uno 
 * que es el valor de include, este es un método que trabaja sobre 
 * un arreglo o un string, nos va a permitir saber si hay un elemento dentro
 * de este valor.
 */

let numbers = [1, 6, 8, 23, 67 ,89];
if(numbers.includes(5)) {
  console.log('Sí se encuenta');
} else {
  console.log('No se encuentra');
}

// Trabajando con potencias en JS
let base = 4;
let exponent = 16;
let result = base ** exponent;
console.log(result); // => 4294967296