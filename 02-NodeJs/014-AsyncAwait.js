// ============================================
// 014 - Async/Await
// ============================================

// async/await permite escribir código asíncrono “como si fuera paso a paso”.
// Detrás de escena, sigue usando promesas, pero con una sintaxis más legible.

function fetchUser() {
  // Devuelve una promesa que se cumple después de 1 segundo
  return new Promise((resolve) => {
    setTimeout(() => resolve("👤 Usuario cargado"), 1000);
  });
}

function fetchPosts() {
  // Devuelve otra promesa (simulamos los posts del usuario)
  return new Promise((resolve) => {
    setTimeout(() => resolve(["📄 Post 1", "📄 Post 2"]), 1500);
  });
}

// Usamos "async" para poder usar "await" dentro
async function showData() {
  console.log("⏳ Cargando datos...");

  // "await" pausa la ejecución dentro de esta función
  // hasta que la promesa se resuelva (sin bloquear el resto del programa)
  const user = await fetchUser();
  console.log(user);

  const posts = await fetchPosts();
  console.log("Posts del usuario:", posts);

  console.log("✅ Todo cargado!");
}

showData();

// 🔍 Orden esperado:
// ⏳ Cargando datos...
// 👤 Usuario cargado
// Posts del usuario: [ '📄 Post 1', '📄 Post 2' ]
// ✅ Todo cargado!

// En resumen:
// - async/await simplifica el uso de promesas.
// - Permite escribir código que *parece* síncrono pero sigue siendo asíncrono.

// ============================================
// CHALLENGE: “Mini Dashboard”
// ============================================
// Simulá un sistema que cargue *dos recursos* en orden usando async/await:
// loadUser() → devuelve "👤 Usuario conectado"
// loadNotifications() → devuelve ["🔔 Notificación 1", "🔔 Notificación 2"]
//
// Mostrá los datos en consola en orden, con un mensaje final "✅ Dashboard listo!"
// (Pista: usá `await` para esperar cada promesa antes de continuar.)


















































// function loadUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("👤 Usuario conectado"), 1000);
//   });
// }
//
// function loadNotifications() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["🔔 Notificación 1", "🔔 Notificación 2"]), 1500);
//   });
// }
//
// async function main() {
//   console.log("⏳ Iniciando dashboard...");
//   const user = await loadUser();
//   console.log(user);
//   const notifications = await loadNotifications();
//   console.log("📩 Notificaciones recibidas:", notifications);
//   console.log("✅ Dashboard listo!");
// }
//
// main();
