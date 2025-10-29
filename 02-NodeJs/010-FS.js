// ====================================================
// TRABAJANDO CON EL SISTEMA DE ARCHIVOS EN NODE.JS
// ====================================================
//
// Node.js tiene un módulo nativo llamado "fs" (File System)
// que permite leer, escribir, eliminar y manipular archivos.
//
// En este ejemplo:
// - Guardamos un array de usuarios en un archivo JSON.
// - Leemos y mostramos su contenido.
//
// ====================================================
// Para ejecutar este archivo:
// node 010-FS.js
// ====================================================

// Importamos módulos nativos:
// "fs" -> operaciones con archivos (escribir, leer, borrar, etc.)
// "path" -> para construir rutas compatibles entre sistemas (Windows, Mac, Linux)
import { writeFileSync, readFile } from 'fs';
import { join } from 'path';

// process.cwd() devuelve la ruta actual del proyecto, donde se encuentra el archivo JS en ejecución (current working directory)
// join() que viene del módulo "path" nos ayuda a construir rutas de forma segura entre diferentes sistemas operativos
const filePath = join(process.cwd(), 'users.json');
console.log('Ruta del archivo:', filePath);

// Creamos datos de ejemplo
const users = [
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Luis', email: 'luis@mail.com' },
  { id: 3, name: 'Carla', email: 'carla@mail.com' },
];

// ====================================================
// ESCRIBIR UN ARCHIVO (SINCRÓNICO)
// ====================================================
//
// writeFileSync(ruta, contenido)
// - "Sync" significa que el programa espera hasta que termine.
//
// JSON.stringify() convierte un objeto/array en texto JSON. (JavaScript Object Notation)
//
// JSON.stringify(value, replacer, space)
// - "value" es el objeto que queremos convertir.
// - "replacer" es una función que se ejecuta para cada propiedad del objeto.
//    Normalmente se deja null (sirve para filtrar o transformar valores).
// - "space" es el espacio que queremos que haya entre las propiedades del objeto. (para que sea legible)
// Podríamos dejar solo JSON.stringify(users) pero el resultado sería todo en una línea sin espacios.
//
writeFileSync(filePath, JSON.stringify(users, null, 2));
console.log(`✅ Archivo users.json creado en:\n${filePath}`);

// ====================================================
// LEER UN ARCHIVO (ASÍNCRONO)
// ====================================================
//
// readFile(ruta, codificación, callback)
// - "utf8" indica que queremos texto legible.
// - El callback recibe "err" y "data". Automático de fs.
// - "err" es un error si ocurre. Null si no hay error.
// - "data" es el contenido del archivo.
//
readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error al leer el archivo:', err);
    return; // Salimos si hay error
  }

  // Convertimos el texto JSON de vuelta a objeto
  const parsedUsers = JSON.parse(data);
  console.log('📂 Contenido leído desde el archivo:', parsedUsers);
});

// ====================================================
// DIFERENCIAS CLAVE
// ====================================================
// - Métodos síncronos (Sync) bloquean el hilo hasta terminar.
// - Métodos asíncronos permiten seguir ejecutando otras tareas.
// - JSON.stringify() -> objeto → texto JSON.
// - JSON.parse() -> texto JSON → objeto.
// ====================================================
//
// CHALLANGE: combinar esto con un servidor
// para leer y escribir datos desde endpoints.
// ====================================================
