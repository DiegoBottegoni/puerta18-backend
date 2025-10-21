// 007 - Strings

// ===============================
// Los strings son cadenas de texto. En JavaScript se escriben
// entre comillas simples '', dobles "" o backticks ``.
// Los métodos de string nos permiten analizarlos y transformarlos.


// ===============================
// ✨ Creación y concatenación
// ===============================
let name = "Diego";
let greeting = "Hola, " + name + "!";
console.log("Greeting:", greeting);

// Usando template literals (más moderno y legible)
let age = 38;
console.log(`My name is ${name} and I am ${age} years old.`);


// ===============================
// 🔠 Métodos básicos de strings
// ===============================
let text = "  JavaScript is awesome!  ";

// length - cantidad de caracteres
console.log("Length:", text.length);

// toUpperCase() / toLowerCase()
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// trim() - elimina espacios en los extremos
console.log("Trimmed:", text.trim());

// includes() - busca si contiene una palabra
console.log("Includes 'JavaScript':", text.includes("JavaScript"));

// startsWith() / endsWith()
console.log("Starts with '  J':", text.startsWith("  J"));
console.log("Ends with '!  ':", text.endsWith("!  "));

// indexOf() - posición de la primera coincidencia
console.log("Index of 'awesome':", text.indexOf("awesome"));

// slice() - corta una parte del string
console.log("Slice (2, 12):", text.slice(2, 12));

// replace() - reemplaza texto
console.log("Replace 'awesome' → 'powerful':", text.replace("awesome", "powerful"));

// split() - convierte el string en array
console.log("Split by space:", text.split(" "));

// join() - une un array en un string
let words = ["Learning", "JavaScript", "is", "fun"];
console.log("Joined words:", words.join(" "));


// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Dado un nombre completo, mostralo en mayúsculas y sin espacios extras.
let fullName = "  juan perez  ";
// 👉 "JUAN PEREZ"

// Challenge 2:
// Dado un email, verificá si contiene "@" y termina con ".com".
let email = "usuario@mail.com";
// 👉 true

// Challenge 3:
// Escribí una función que reciba un string y devuelva cuántas vocales tiene.
let word = "Programación";
// 👉 5

// Challenge 4:
// Usá template literals para mostrar un mensaje con variables.
let user = "Lucía";
let language = "JavaScript";
// 👉 "Hi Lucía! Welcome to the JavaScript world."


// ===============================
// 🧠 CHALLENGE FINAL: PASSWORD VALIDATOR
// ===============================

// Crea una función llamada isValidPassword() que reciba un string
// y devuelva true si cumple con las siguientes condiciones:
// - Al menos 8 caracteres
// - Contiene una mayúscula
// - Contiene una minúscula
// - Contiene un número
// - Contiene un símbolo (!@#$%^&*)

// Ejemplo:
let pass = "MyP@ssword123";
// 👉 true

// Bonus: devolver un mensaje indicando qué condición no se cumple.
