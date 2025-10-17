// Functions - Funciones
// Las funciones son bloques de código reutilizables que pueden ser llamados desde cualquier parte del código.
// En JavaScript, las funciones se declaran usando la palabra reservada function.
// En su sintáxis básica, una función consta de dos partes: la declaración y el cuerpo.
function printMessage() {
    console.log("This is a reusable function!")
}

// Para llamar a una función, simplemente usamos su nombre seguido de paréntesis.
printMessage(); // Llama a la función y muestra el mensaje en la consola

// Las funciones pueden aceptar parámetros, que son valores que se pasan a la función cuando se llama.
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Llamando a la función con un argumento
greet("Alice"); // Muestra "Hello, Alice!" en la consola

// Las funciones también pueden devolver valores usando la palabra reservada return.
// La instrucción return en una función se utiliza para especificar el valor o los valores que la función debe producir como su salida.
// Nota: no todas las funciones necesitan devolver un valor; algunas simplemente realizan una acción. (como printMessage)
function add(a, b) {
    return a + b;
}

// Llamando a la función y almacenando el valor devuelto
let sum = add(5, 3);
console.log(sum); // Muestra 8 en la consola

// Las funciones pueden tener múltiples parámetros y pueden ser llamadas con diferentes argumentos.
function multiply(x, y) {
    return x * y;
}

let product1 = multiply(4, 5); // 20
let product2 = multiply(7, 3); // 21

// CHALLENGE!!
// Escriban una función llamada sigma con un argumento que representa el número n.
// La función tiene que devolver la suma de todos los números desde 1 hasta n (inclusive).
// Por ejemplo, para sigma(5), la función devuelve 15, porque 15 = 1 + 2 + 3 + 4 + 5.

// En JavaScript, una expresión de función es una forma de definir una función como parte de una expresión.
// A diferencia de las declaraciones de función, las expresiones de función no son elevadas (hoisted), lo que significa que no pueden ser llamadas antes de ser definidas en el código.
// Recuerden.. el hoisting significa que el código ejecuta de arriba hacia abajo!! 
// Por lo tanto, si una expresión de función se declara despues de su llamada, el navegador lo interpretaría como una variable sin valor.
// Sintaxis básica de una expresión de función:
let functionName = function(parameters) {
    // Codigo a ser ejecutado
    // ...
    return value; // Return opcional
};

// Funciones flecha (Arrow Functions)
// Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.
// Se introdujeron en ES6 (ECMAScript 2015) y utilizan la sintaxis "=>" para definir la función.
let addArrow = (a, b) => {
    return a + b;
};

// Si la función tiene una sola expresión, se puede omitir el bloque de llaves y el return.
let addArrowConcise = (a, b) => a + b;

// Llamando a las funciones flecha
console.log(addArrow(2, 3)); // Muestra 5
console.log(addArrowConcise(4, 6)); // Muestra 10

// CHALLENGE ARROW!!

// Escriban una función llamada isValid que reciba dos argumentos de tipo string, username y password.
// La función devuelbe true si el username y password son válidos en el sistema, de lo contrario false.
// Nuestro sistema contiene solo dos nombres de usuario válidos - "admin" y "user".
// La contraseña válida para el nombre de usuario "user" es "qweasd".
// Para el nombre de usuario "admin" cualquier contraseña es válida!
