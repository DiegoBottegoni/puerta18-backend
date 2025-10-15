// Operadores en JavaScript:
// Los operadores son símbolos que realizan operaciones sobre uno o más operandos (valores o variables) y devuelven un resultado.
// Se dividen en varias categorías:

// Operadores aritméticos
let x = 10;
let y = 5;
let z = x + y; // Suma
let a = x - y; // Resta
let b = x * y; // Multiplicación
let c = x / y; // División

console.log("Operadores en JavaScript:");
console.log("Suma (x + y):", z);
console.log("Resta (x - y):", a);
console.log("Multiplicación (x * y):", b);
console.log("División (x / y):", c);

// Operadores de asignación (otra forma de realizar operaciones aritméticas)
let d = 10;
d += 5; // d = d + 5
console.log("Operador de asignación (d += 5):", d);

// Operadores de comparación
console.log("Operador de comparación (x == y):", x == y); // Igualdad
console.log("Operador de comparación (x != y):", x != y); // Desigualdad
console.log("Operador de comparación (x > y):", x > y);   // Mayor que
console.log("Operador de comparación (x < y):", x < y);   // Menor que

// También existen los operadores estrictos (=== y !==) que comparan tanto el valor como el tipo de dato
let m = 10;       // Número
let n = "10";    // Cadena de texto
console.log("Operador de comparación estricta (m === n):", m === n); // Falso, diferente tipo
console.log("Operador de comparación estricta (m !== n):", m !== n); // Verdadero, diferente tipo

// Operadores lógicos
let p = true;
let q = false;

// La conocida como "tabla de la verdad" para AND (&&) y OR (||):

// && (AND) se cumple solo si ambos operandos son verdaderos.
// || (OR) se cumple si al menos uno de los operandos es verdadero.
// p     | q     | p && q | p || q
// -------------------------------
// true  | true  | true   | true
// true  | false | false  | true
// false | true  | false  | true
// false | false | false  | false

// El tercer operador lógico es el NOT (!), que invierte el valor del operando.
// NOT (!p):
// !true = false
// !false = true

console.log("Operadores lógicos en JavaScript:");
console.log("Operador lógico AND (p && q):", p && q); // AND
console.log("Operador lógico OR (p || q):", p || q);  // OR
console.log("Operador lógico NOT (!p):", !p);         // NOT
