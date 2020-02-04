// Parámetros por defecto
/* 
   Nosotros podemos establecer cierto valores 
   que le pasamos a una función de forma 'por defecto'.
*/

// Before ES6
function newFunction(name, age, country) {
  var name = name || 'Philip';
  var age = age || 37;
  var country = country || 'USA';
  console.log(name, age, country);
}

// ES6
// Aquí estamos estableciendo un valor por defecto a nuestros parámetros
function newFunction2(name = 'Philip', age = 37, country = "USA") {
  console.log(name, age, country);
};

// Toma los argumentos por defecto.
newFunction2();

// Cambiamos los argumentos.
newFunction2('Victor', '21', 'MX');

// Template Literals
let eat = 'Eat';
let food = 'Food';

// Multilinea
// ES5
let lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' + 
'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

// ES6
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`;

console.log(lorem);
console.log(lorem2);

// Destructuración de elementos
let person = {
  'name': 'RandomPerson',
  'age': '45',
  'country': 'UK'
}

// Acceder a los elementos de forma normal
console.log(person.name, person.age, person.country);

// ¿Cómo podemos destructurar estos elementos en ES6?
let { name, age, country } = person;
console.log(name, age, country);
// De esta manera podemos extraer los elementos que necesitemos de `person`

// -- -- -- Operador de propagación -- -- --
/**
 * Nos permite expandir de ciertas situaciones varios elementos.
 * Vamos a tener ciertos elementos en arreglos y lo que queremos es unirlos en un solo elemento
 * para poderlos presentar.
 */

 let team1 = ['Apple', 'Amazon', 'Google'];
 let team2 = ['Tesla', 'SpaceX', 'PayPal'];

 // Vamos a crear un nuevo elemento donde tengamos a Intel, team1, team2
 let companies = ['Intel', ...team1, ...team2];
 console.log(companies);
