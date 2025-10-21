// 008 - Objects & JSON

// ===============================
// Los objetos permiten agrupar datos relacionados en pares clave-valor.
// JSON (JavaScript Object Notation) es un formato universal para enviar
// y recibir datos (por ejemplo, desde un servidor).
// ===============================


// ===============================
// 📦 Crear y acceder a objetos
// ===============================
const person = {
  name: "Diego",
  age: 27,
  country: "Argentina"
};

// Se puede acceder a las propiedades usando notación de punto o corchetes
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Agregar y modificar propiedades
person.email = "diego@example.com";
person.age = 38;
console.log("Updated person:", person);

// Eliminar una propiedad
delete person.country;
console.log("Without country:", person);


// ===============================
// 🔁 Recorrer objetos
// ===============================
for (let key in person) {
  console.log(key, "→", person[key]); // Nombre de la clave y su valor
}

// Object.keys() / Object.values() / Object.entries()
console.log("Keys:", Object.keys(person)); // Devuelve un array con las claves
console.log("Values:", Object.values(person)); // Devuelve un array con los valores
console.log("Entries:", Object.entries(person)); // Devuelve un array de pares [clave, valor]


// ===============================
// 📋 Copiar y combinar objetos
// ===============================
// Creo otro objeto para combinar
const address = { city: "Buenos Aires", zip: 1000 };
// Usando "..." (spread operator) para combinar, llamo al objeto completo de person con todas sus propiedades
// y le agrego las del objeto address para combinar ambos en uno nuevo.
const merged = { ...person, ...address };
console.log("Merged object:", merged);

// Cuidado con la copia por referencia, porque si modifico la copia, el original también cambia!
const copyRef = person;
copyRef.name = "Juan";
console.log("Original after modifying copy:", person.name); // Cambia!

// Solución: clonarlo
const clone = { ...person };
clone.name = "Pedro";
console.log("Clone:", clone);
console.log("Original:", person);


// ===============================
// 🌐 JSON (JavaScript Object Notation)
// ===============================

// Convertir objeto a JSON (string)
// Declaro una constante jsonString que almacena el resultado de convertir el objeto person a una cadena JSON
// utilizando el método JSON.stringify().
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

// Convertir JSON a objeto
const parsedObject = JSON.parse(jsonString);
console.log("Parsed object:", parsedObject);


// ===============================
// 💥 MINI CHALLENGES
// ===============================

// Challenge 1:
// Crear un objeto "car" con propiedades brand, model y year.
// Mostrar "Mi auto es un Toyota Corolla del 2020."

// Challenge 2:
// Crear una función getOlder(person) que reciba un objeto persona y
// devuelva un nuevo objeto con la edad incrementada en 1.

// Challenge 3:
// Crear una función cloneObject(obj) que retorne una copia exacta del objeto
// sin afectar al original (¡probarlo con console.log!).


// ===============================
// 🧠 CHALLENGE FINAL: USER DATABASE SIMULATION
// ===============================

// Crea un array llamado users que contenga varios objetos usuario,
// cada uno con name, email, isAdmin y age.
// Luego hacé lo siguiente:

// 1️⃣ Mostrar todos los nombres.
// 2️⃣ Filtrar los usuarios mayores de 18.
// 3️⃣ Obtener solo los emails.
// 4️⃣ Convertir el array a JSON (string).
// 5️⃣ Parsear nuevamente ese JSON a un array de objetos.
// 6️⃣ BONUS: Usar map/filter/reduce combinados para contar cuántos son admin.

const users = [
  { name: "Ana", email: "ana@mail.com", isAdmin: false, age: 22 },
  { name: "Luis", email: "luis@mail.com", isAdmin: true, age: 30 },
  { name: "Carla", email: "carla@mail.com", isAdmin: false, age: 17 }
];

// 👉 ejemplos:
// Mostrar todos los nombres → ["Ana", "Luis", "Carla"]
// Filtrar mayores de edad → ["Ana", "Luis"]
// Contar admins → 1
