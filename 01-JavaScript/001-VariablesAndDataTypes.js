// Variables y Tipos de Datos en JavaScript

// 1. Variables
// Las variables se utilizan para almacenar datos. En JavaScript, se pueden declarar variables usando las palabras reservadas var, let o const.
// Cada una tiene su propio alcance y características. Son estas:

// La palabra reservada var es la forma más antigua de declarar variables y son globales. Es decir, pueden ser accedidas desde cualquier parte del código.
var x = 10;
// La palabra reservada let es más moderna y se utiliza para declarar variables con alcance (scope) de bloque. Esto significa que solo pueden ser accedidas dentro del bloque donde fueron declaradas.
let y = 20;
// La palabra reservada const se utiliza para declarar variables cuyo valor no puede cambiar una vez asignado. También tiene alcance de bloque.
const z = 30;

// Ejemplos:
var age = 25; // Variable global con la posibilidad de cambiar su valor
let name = "Juan"; // Variable local con la posibilidad de cambiar su valor
const PI = 3.14; // Variable constante que no puede cambiar su valor

// 2. Tipos de Datos
// Al igual que muchos lenguajes de programación, JavaScript tiene varios tipos de datos para manejar diferentes tipos de información:
// Las consideradas variables primitivas o tipos primitivos son: 
let number = 42; // Number: entero o de punto flotante (con decimales)
let text = "Hola, Mundo!"; // String: cadena de texto (caracteres entre comillas dobles o simples)
let boolean = true; // Boolean: true o false (verdadero o falso)
let nullValue = null; // Null: valor nulo (o ausencia de valor)
let undefinedValue = undefined; // Undefined: valor indefinido (o ausencia de valor)

// La diferencia entre null y undefined es que null es un valor asignado intencionalmente a una variable para indicar que no tiene valor, mientras que undefined significa que una variable ha sido declarada pero no se le ha asignado ningún valor.

// También hay tipos de datos no primitivos, más complejos, pero extremadamente útiles:
let array = [1, 2, 3, 4, 5]; // Array: arreglo
let object = { name: "Ana", age: 25 }; // Object: objeto

// console.log() es una función que imprime mensajes en la consola del navegador o del entorno de ejecución (como Node.js). Es útil para depurar y verificar el valor de las variables.
// estos mensajes no se ven en la página web, sino en la consola de desarrollo y sirve para ver el resultado de nuestro código.

// Imprimimos en consola las variables ya declaradas:
console.log("Variables y Tipos de Datos en JavaScript:");
console.log("Variable var (global):", x);
console.log("Variable let (local):", y);
console.log("Variable const (constante):", z);
console.log("Número:", number);
console.log("Cadena de texto:", text);
console.log("Booleano:", boolean);
console.log("Nulo:", nullValue);
console.log("Indefinido:", undefinedValue);
console.log("Arreglo:", array);
console.log("Objeto:", object);

// También se puede ver el tipo de dato usando la función typeof:
console.log("Tipo de dato de 'number':", typeof number);
console.log("Tipo de dato de 'text':", typeof text);
console.log("Tipo de dato de 'boolean':", typeof boolean);
console.log("Tipo de dato de 'nullValue':", typeof nullValue); // Nota: esto devuelve "object" debido a un error histórico en JavaScript
console.log("Tipo de dato de 'undefinedValue':", typeof undefinedValue);
console.log("Tipo de dato de 'array':", typeof array); // Nota: esto devuelve "object" porque los arrays son un tipo especial de objeto en JavaScript
console.log("Tipo de dato de 'object':", typeof object);

// Para verificar si una variable es un array, se puede usar Array.isArray()
console.log("¿'array' es un Array?:", Array.isArray(array));
console.log("¿'object' es un Array?:", Array.isArray(object));

// Con comillas invertidas (``) se pueden crear plantillas de texto (template literals) que permiten incrustar expresiones dentro de cadenas de texto usando ${}.
let rnd = Math.random(); // Genera un número aleatorio entre 0 y 1
console.log(`The input is: ${rnd}`);

// 3. Conversión de Tipos
// Para convertir entre diferentes tipos de datos en JavaScript, necesitamos usar la conversión de tipos.
// JavaScript soporta la conversión de tipos tanto implícita como explícita.

// Conversión implícita:
let implicitString = "El número es " + 42; // El número 42 se convierte a cadena de texto
let implicitNumber = "5" * 2; // La cadena "5" se convierte a número

// Conversión explícita:
let strNumber = "123.45";
let intNumber = parseInt(strNumber); // Convierte a entero (123)
let floatNumber = parseFloat(strNumber); // Convierte a número de punto flotante (123.45)
let str = String(100); // Convierte a cadena de texto ("100")
let boolTrue = Boolean(1); // Convierte a booleano (true)
let boolFalse = Boolean(0); // Convierte a booleano (false)
let numFromStr = Number("456"); // Convierte a número (456)

console.log("Conversión de Tipos:");
console.log("parseInt('123.45'):", intNumber);
console.log("parseFloat('123.45'):", floatNumber);
console.log("String(100):", str);
console.log("Boolean(1):", boolTrue);
console.log("Boolean(0):", boolFalse);
console.log("Number('456'):", numFromStr);