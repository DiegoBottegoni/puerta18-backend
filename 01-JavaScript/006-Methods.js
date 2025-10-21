// 006 - Methods

// ===============================

// Los métodos son funciones que nos permiten manipular
// o transformar datos de forma más práctica.


// ===============================
// 📦 MÉTODOS DE ARRAYS
// ===============================

// 1️⃣ push() - agrega elementos al final
let fruits = ['apple', 'banana'];
fruits.push('orange'); // ['apple', 'banana', 'orange']
console.log("Fruits after push:", fruits);

// 2️⃣ pop() - elimina el último elemento
fruits.pop(); // ['apple', 'banana']
console.log("Fruits after pop:", fruits);

// 3️⃣ unshift() - agrega al inicio
fruits.unshift('kiwi'); // ['kiwi', 'apple', 'banana']
console.log("Fruits after unshift:", fruits);

// 4️⃣ shift() - elimina el primero
fruits.shift(); // ['apple', 'banana']
console.log("Fruits after shift:", fruits);

// 5️⃣ indexOf() - devuelve la posición del elemento
console.log("Index of banana:", fruits.indexOf('banana')); // 1

// 6️⃣ includes() - verifica si existe un valor
console.log("Includes apple:", fruits.includes('apple')); // true


// ===============================
// 💡 Métodos que crean nuevos arrays
// ===============================

// 7️⃣ map() - crea un nuevo array transformando los elementos
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8]

// 8️⃣ filter() - filtra elementos según una condición
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

// 9️⃣ find() - devuelve el primer elemento que cumple la condición
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven); // 2

// 🔟 reduce() - reduce el array a un solo valor
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total:", total); // 10

// 1️⃣1️⃣ some() - devuelve true si algún elemento cumple la condición
console.log("Some greater than 3:", numbers.some(num => num > 3)); // true

// 1️⃣2️⃣ every() - true si todos cumplen la condición
console.log("Every greater than 0:", numbers.every(num => num > 0)); // true

// 1️⃣3️⃣ sort() - ordena los elementos (¡cuidado, modifica el original!)
let ages = [30, 17, 25, 80];
ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages); // [17, 25, 30, 80]

// 1️⃣4️⃣ forEach() - recorre el array (no devuelve nada, solo ejecuta una función por cada elemento)
numbers.forEach(num => console.log("Triple:", num * 3));


// ===============================
// 🧱 MÉTODOS DE OBJETOS
// ===============================

const user = {
  name: 'Diego',
  age: 38,
  country: 'Argentina'
};

// Object.keys() - devuelve las claves
console.log("User keys:", Object.keys(user)); // ['name', 'age', 'country']

// Object.values() - devuelve los valores
console.log("User values:", Object.values(user)); // ['Diego', 27, 'Argentina']

// Object.entries() - devuelve pares [clave, valor]
console.log("User entries:", Object.entries(user));
// [['name', 'Diego'], ['age', 27], ['country', 'Argentina']]

// Object.assign() - copia propiedades de un objeto a otro
let extraInfo = { active: true };
let fullUser = Object.assign({}, user, extraInfo);
console.log("Full user:", fullUser);

// Spread operator (...) - copia o mezcla objetos o arrays
let clone = { ...user, active: false };
console.log("Cloned user:", clone);


// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Usá map() para crear un nuevo array con los cuadrados de los números.
let nums = [1, 2, 3, 4, 5];
// 👉 [1, 4, 9, 16, 25]

// Challenge 2:
// Usá filter() para quedarte solo con los mayores de edad.
let people = [15, 22, 18, 10, 30];
// 👉 [22, 18, 30]

// Challenge 3:
// Usá reduce() para calcular el total de ventas de una tienda.
let sales = [120, 85, 400, 150];
// 👉 Total: 755

// Challenge 4:
// Usá sort() para ordenar un array de nombres alfabéticamente.
let names = ['Juan', 'Ana', 'Zoe', 'Carlos'];
// 👉 ['Ana', 'Carlos', 'Juan', 'Zoe']


// ===============================
// 🧠 CHALLENGE FINAL: EXPENSE SPLITTER
// ===============================

// Crea una función llamada expenseSplitter() que reciba un array de objetos,
// donde cada objeto representa a una persona y sus gastos en una juntada.
// La función debe calcular cuánto gastó cada uno y dividir equitativamente
// el total, devolviendo cuánto debe pagar o recibir cada persona.

// Ejemplo:
const expenses = [
  { name: 'Ana', spent: 120 },
  { name: 'Luis', spent: 80 },
  { name: 'Carla', spent: 100 }
];

// Resultado esperado:
// [
//   { name: 'Ana', balance: +13.33 },
//   { name: 'Luis', balance: -26.67 },
//   { name: 'Carla', balance: +13.33 }
// ]

// Bonus: agregá la posibilidad de incluir propina
// y filtrar solo los que consumieron alcohol o comida.

