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

 // Hemos estado utilizando `let` para hacer ciertas asignaciones
 /**
  * Let es una nueva forma en la que nosotros vamos a trabajar con 
  * los elementos que queremos guardar en memoria.
  * 
  * Originalmente ocupábamos var para tener una variable de manera global, con let
  * la variable sólo va a estar definida dentro del block scope.
  */

  {
    var globalVar = 'Global Var';
  }

  {
    let globalLet = 'Global Let';
    console.log(globalLet);
  }

  console.log(globalVar);

  // const nunca va a cambiar su valor
  const a = 'b';
  a = 'a'; // Error

  // -- -- -- Arrow Functions, Promesas y Parámetros en objetos -- -- --
  // Creaación de objetos ES5
  let name = 'Franklin';
  let age = 29;

  obj = { name: name, age: age };

  // Creaación de objetos ES6
  // Aquí toma por defecto la key y value de los elementos.
  obj2 = { name, age }
  console.log(obj2);

  // Arrow Function
  /**
   * Estas funciones vienen a solventar un 
   * problema en particular, a trabajar con dos elementos, manteniendo 
   * una sintaxis reducida y un this no vinculable.
   */

   // Creamos un arreglo de objetos
  const names = [
    { name: 'Franklin', age: 29 },
    { name: 'Trevor', age: 42 },
    { name: 'Michael', age: 40 },
  ];

  // Vamos a iterear sobre nuestro objeto utilizando el método map()
  // A map le pasamos una función anónima y luego recibiamos el elementos dentro de la función.
  // Item será el elemento que queremos traer.
  let listOfNames = names.map(function(item) {
    // Por cada uno de los elementos de este arreglo obtenemos el nombre.
    console.log(item.name);
  });

  // Las Arrow Function son funciones anónimas.
  let listOfNames2 = names.map(item => console.log(item.name));
  let listOfNames3 = names.map(item => {
    console.log(item.name);
  })

  const listOfNames4 = (name, age, country) => {
    // Código que vamos a ocupar para listOfNames3
  }

  // Cuando sólo estamos pasando un parámetro
  const listOfNames5 = name => {
    // Block code
  }

  // Estamos generando una función que recibe como valor `num` y lo que hacemos es 
  // multiplicar num por si mismo, así ya no tenemos que generar un return.
  const square = num => num * num;

  // -- -- -- Promises -- -- --
  /**
   * Con las promesas nosotros vamos a trabajar el asincronismo.
   * Una promesa significa (como lo dice su nombre) que algo va a 
   * pasar.
   */
  const firstPromise = () => {
    // Vamos a retornar una promesa con dos elementos que por lo regular necesitan (resolve, reject);
    return new Promise((resolve, reject) => {
      if(true) {
        resolve('Resolve!');
      } else {
        reject('Algo salió mal');
      }
     });
  }

  firstPromise()
    .then(response => console.log(response))
    .then(() => console.log('Podemos tener múltiples then'))
    .catch(error => console.log(error));

  // -- -- -- Clases, Módulos y Generadores -- -- --
  /**
   * Las clases son una forma en la que vamos a manejar una sintáxis más 
   * clara para manejar objetos y también la herencia dentro de JS.
   * Esto nos permite como desarrolladores aplicar la POO dentro de este 
   * lenguaje.
   */
  class calculator {
    // Asignamos un constructor (método para inicializar nuestra clase)
    constructor() {
      // Aquí vamos a asignar las varibales que van a estar definidas en un scope global
      this.valueA = 0;
      this.valueB = 0;
    }

    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }

    mult(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA * valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(1, 16)); // 17
  console.log(calc.mult(13, 87)); // 1131