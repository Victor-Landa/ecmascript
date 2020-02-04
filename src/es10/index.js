// Vamos a crear un nuevo arreglo con varios subniveles
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// array.flat() nos va devolver una matriz con cualquier submatriz aplanada.
// flat recibe como argumento la profundidad, si no le pasamos ningún parámetro, 
// sólo tendrá la profundidad de un nivel.

console.log(array.flat()); // => [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)); // => [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

/**
 * El método flatMap() va a permitir mapear cada elemento después pasarle una 
 * función y aplanarlo según el resultado.
 */
let array = [2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2])); // => [2, 4, 3,  6, 4, 8, 5, 10]

/**
 * Los métodos trimStart, trimEnd y trim nos van a permitir eliminar los espacios en blanco de un string.
 */
let coffee = '       The Coffee Shop';
console.log(coffee); // => '       The Coffee Shop'
console.log(coffee.trimStart()); // => 'The Coffee Shop'

let coffee2 = 'The Coffee Shop    ';
console.log(coffee2.trimEnd()); // => 'The Coffee Shop'

/**
 * Con optional catch binding podemos pasar de forma opcional el parámetro de 
 * error al valor de catch.
 */
try {

} catch(error) {
  console.log(error);
} 

// Ahora 
try {

} catch {
  // Aunque no lo hayamos pasado como parámetro, `error` va a estar disponible dentro del bloque 
  // de código de catch
  console.log(error);
}

/**
 * fromEntries va transformar clave - valor en un objeto, esto es muy interesante cuando estamos
 * trabajando con arreglos y queremos transformarlos a objetos.
 */
let entries = [['name', 'Victor'], ['age', 21]];
console.log(Object.fromEntries(entries)); // => { name: 'Victor', age: 21 }


// El objeto de tipo Symbol nos va a permitir acceder a la descripción de un objeto de este mismo tipo.
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);