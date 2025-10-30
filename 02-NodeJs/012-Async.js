// ============================================
// 012 - Asynchronous JavaScript
// ============================================

// JavaScript ejecuta línea por línea, PERO algunas tareas (como esperar tiempo o pedir datos)
// no bloquean el flujo. Esas tareas se ejecutan "mientras tanto" y avisan cuando terminan.

console.log("1️⃣ Inicio del programa");

setTimeout(() => {
  console.log("3️⃣ Esto aparece después de 2 segundos (tarea asíncrona).");
}, 2000);

console.log("2️⃣ Fin del programa (pero la tarea sigue corriendo...)");

// Orden esperado: 1 → 2 → (espera 2s) → 3
// JS no se queda “esperando”: continúa ejecutando el resto del código,
// y cuando el tiempo pasa, el callback del setTimeout se agrega a la cola y se ejecuta.

// ============================================
// CALLBACKS
// ============================================

// Un "callback" es una función que se pasa como parámetro a otra función.
// Esa función se ejecuta CUANDO termina una tarea asíncrona (por ejemplo, el setTimeout de antes).

function sayHelloLater(name, callback) {
  // Esta función no saluda todavía. Solo prepara la tarea.
  console.log("Esperando para saludar...");

  // setTimeout simula una tarea que toma tiempo (1 segundo)
  setTimeout(() => {
    // Cuando pasa el tiempo, ejecutamos la función "callback"
    // y le pasamos un mensaje como argumento.
    callback(`👋 Hola, ${name}!`);
  }, 1000);
}

// Llamamos a la función, pasando:
// - un nombre (valor normal)
// - una función anónima (callback) que se ejecuta después del delay
sayHelloLater("Puerta18", (message) => {
  console.log(message); // Se ejecuta al terminar el timeout de 1s
});

// Este código se ejecuta inmediatamente después,
// sin esperar que el saludo haya terminado.
console.log("Todo lo que pongamos acá sigue su curso sin esperar el saludo.");
console.log("Porque JavaScript no se detiene por tareas asíncronas.");

// En resumen:
// 1. Llamamos a sayHelloLater("Puerta18", callback).
// 2. La función muestra “Esperando para saludar...”.
// 3. El setTimeout arranca una tarea que dura 1 segundo.
// 4. JS sigue ejecutando el resto del programa.
// 5. Pasado el segundo, la callback se ejecuta y muestra el saludo.

// ============================================
// CHALLENGE: “Callback Hell”
// ============================================
// Mostrar tres mensajes, uno después del otro, usando setTimeout:
//
// 1️⃣ "Preparando..."
// 2️⃣ "Cargando datos..."
// 3️⃣ "Listo!"
//
// 👉 Pista: cada mensaje debe mostrarse *después* del anterior.
// (Sugerencia: usá callbacks anidados.)
// ============================================
// SPOILER:
// ============================================
// function showMessages() {
//   setTimeout(() => {
//     console.log("¿1, 2 o 3?");
//     setTimeout(() => {
//       console.log("¿1, 2 o 3?");
//       setTimeout(() => {
//         console.log("¿1, 2 o 3?");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
// showMessages();

// Reflexión:
// ¿Qué pasaría si tuviéramos 5 o 10 pasos más?
// Este tipo de código anidado se llama “callback hell” (infierno de callbacks).
// En el próximo archivo, veremos cómo las PROMESAS lo simplifican.
