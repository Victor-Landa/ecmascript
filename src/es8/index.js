/**
 * Una de las características añadidas en esta versión fue 
 * object entries, el cual no va a permitir devolver la clave 
 * y los valores de una matriz.
 */
const data = {
  frontend: 'RandomName1',
  backend: 'RandomName2',
  designer: 'RandomName3',
}

// ¿Cómo podemos transformar nuestro objeto a una matriz / arreglo?
const entries = Object.entries(data);
console.log(entries); // => [ [ 'frontend', 'RandomName1' ], [ 'backend', 'RandomName2' ], [ 'designer', 'RandomName3' ] ]
console.log(entries.length);// => 3

// Object values = nos devuelve los valores de un objeto a un arreglo.
const data = {
  frontend: 'RandomName1',
  backend: 'RandomName2',
  designer: 'RandomName3',
}

const values = Object.values(data);
console.log(values); // => [ 'RandomName1', 'RandomName2', 'RandomName3' ]
console.log(values.length); // => 3

const string = 'Camden';
// ¿Cómo podemos agregar una cadena vacía o elementos a este string?
// padStart('# de caracteres finales que tendrá el string', 'valor que queremos añadir')
console.log(string.padStart(11, 'Maine')); // => MaineCamden
console.log(string.padEnd(11, 'Maine')); // => CamdenMaine

/**
 * Esto nos puede servir para que cuando nosotros estemos trabajando del lado del front y 
 * queramos presentar elementos de una forma amigable.
 */
console.log('Food'.padEnd(12, '   -----'));
console.log('Pizza'.padEnd(12, '  -----'));
// Food   -----
// Pizza  -----