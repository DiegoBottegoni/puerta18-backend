// ============================================
// 013 - Promises
// ============================================

// Igual que el callback, la promesa "espera" una tarea asíncrona.
// Pero su sintaxis es más ordenada y fácil de leer.

// Una Promise (promesa) representa un valor que aún no conocemos,
// pero que existirá más adelante (éxito o error).

function getNumberAsync() {
  // Creamos una promesa "a mano"
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9

    // Simulamos una demora de 1 segundo (como si el dato viniera de un servidor)
    setTimeout(() => {
      if (number > 2) {
        // Si el número es mayor que 2, todo salió bien
        resolve(number); // Llamamos a "resolve" para cumplir la promesa
      } else {
        // Si no, algo salió mal
        reject("Número demasiado bajo"); // Llamamos a "reject" para marcar error
      }
    }, 1000);
  });
}

// 🔹 Consumir una promesa
console.log("Consumiendo una promesa...");
console.log("Esperando número...");

getNumberAsync()
  .then((num) => {
    // 👉 Este bloque se ejecuta solo si la promesa se cumplió (resolve)
    console.log("✅ Éxito! El número es:", num);
  })
  .catch((err) => {
    // 👉 Este bloque se ejecuta solo si la promesa fue rechazada (reject)
    console.log("❌ Error:", err);
  })
  .finally(() => {
    // 👉 Este bloque se ejecuta siempre al final, pase lo que pase
    console.log("🏁 Fin del proceso");
  });

// CHALLENGE: crear una función que salude con una promesa
// Extensión opcional: agregar un caso de reject() si name está vacío. 
// Pista: usar if(name === "") ... en el setTimeout()























































// function greet(name) {
//   return new Promise((resolve) => {
//     console.log("Esperando para saludar...");
//     setTimeout(() => {
//       resolve(`👋 Hola, ${name}!`);
//     }, 1000);
//   });
// }

// // Llamala y manejá el resultado
// greet("Puerta18").then((msg) => console.log(msg));
