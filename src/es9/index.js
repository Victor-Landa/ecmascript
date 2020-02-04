/**
 * El operador de reposo puede extraer las propiedades de un 
 * objeto que aún no se ha construido.
 */
const obj = {
  name: 'Victor',
  age: 21,
  country: 'MX',
};

let { country, ...all } = obj;
console.log(all); // => { name: 'Victor', age: 21 }

let { name, ...all } = obj;
console.log(name, all); // => Victor { age: 21, country: 'MX' }


/**
 * Utilizando las propiedades de propagación vamos a poder unir n cantidad de elementos
 * de un objeto a un nuevo objeto 
 * */ 

 const obj = {
   name: 'Trevor',
   age: 53,
 }

 const obj1 = {
   ...obj,
   country: 'USA',
 }

 console.log(obj1); // => { name: 'Trevor', age: 53, country: 'USA' }

 /**
  * Con Promise.finally nosotros podemos saber cuándo ha terminado el llamado 
  * y poder ejecutar algún bloque de código.
  */

 const hi = () => {
   return new Promise((resolve, reject) => {
     (true)
       ? setTimeout(() => resolve('Hello Jupyter'), 3000)
       : reject(new Error('Test Error'))
   });
 };

 hi()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó!'))


  // ¿Cómo podemos agrupar bloques de Regex y trabajar sobre cada uno de ellos?
  // Este regex va a ser la constitución de cómo vamos a manejar las fechas, 
  // partiendo por el año, el mes y al final por el día.
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2020-02-04');
  const year = match[1];
  const month = match[2];
  const day = match[3];

  console.log(year, month, day);