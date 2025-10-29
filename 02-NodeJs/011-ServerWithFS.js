// 011 - ServerWithFS.js
// ====================================================
// SERVIDOR HTTP + SISTEMA DE ARCHIVOS (FS)
// ====================================================
//
// En este ejemplo combinamos los módulos `http` y `fs`
// para crear un pequeño servidor que lee y escribe usuarios en un archivo JSON.
// No usamos Express: todo está hecho "a mano" para entender los fundamentos.
// 
// El servidor:
//  - GET /users       -> devuelve todos los usuarios (JSON)
//  - GET /users/:id   -> devuelve un usuario específico
//  - POST /users      -> agrega un nuevo usuario (recibe JSON)
//
// Sin usar Express ni frameworks, todo con Node puro.
// ====================================================

import { createServer } from 'http';
import { readFile, writeFile, existsSync } from 'fs';
import { join } from 'path';

// Definimos el puerto en el que va a escuchar nuestro servidor.
const PORT = 3000;

// Obtenemos la ruta absoluta del archivo donde se guardan los usuarios.
// process.cwd() devuelve el directorio actual de trabajo (Current Working Directory).
const filePath = join(process.cwd(), 'users.json');

// Si el archivo todavía no existe, lo creamos vacío con un array de usuarios vacío `[]`.
if (!existsSync(filePath)) {
  writeFile(filePath, '[]', err => {
    if (err) console.error('Error al crear users.json:', err);
  });
}

// ---------------------------------------------------------
// Función para leer los usuarios desde el archivo JSON.
// ---------------------------------------------------------
// Usamos una función que recibe un "callback" (otra función) como parámetro.
// Esto es un patrón común en Node.js cuando trabajamos con operaciones asíncronas.

function readUsers(callback) {
  // Leemos el archivo como texto (utf8).
  readFile(filePath, 'utf8', (err, data) => {
    // Si ocurre un error (por ejemplo, el archivo no existe o no se puede leer),
    // mostramos el error y ejecutamos el callback pasándole un array vacío.
    // Así "no rompemos" el flujo del programa.
    if (err) {
      console.error('Error al leer usuarios:', err);
      callback([]); // Enviamos un array vacío para que el resto del código no falle.
      return; // Terminamos la ejecución de esta función.
    }

    // Si todo va bien, convertimos el texto JSON a un array de objetos JavaScript.
    const users = JSON.parse(data);
    callback(users); // Llamamos a la función callback pasando los usuarios.
  });
}

// ---------------------------------------------------------
// Creamos el servidor con createServer
// ---------------------------------------------------------
const server = createServer((req, res) => {
  // Extraemos método (GET, POST, etc.) y URL (/users, /users/1, etc.)
  const { method, url } = req;

  // Configuramos el encabezado que enviará siempre nuestro servidor.
  // En este caso, indicamos que la respuesta será en formato JSON.
  res.setHeader('Content-Type', 'application/json');

  // -------------------------------------------------------
  // GET /users → devuelve todos los usuarios
  // -------------------------------------------------------
  if (method === 'GET' && url === '/users') {
    readUsers(users => {
      res.writeHead(200);
      res.end(JSON.stringify(users, null, 2)); // `null, 2` = formatear bonito el JSON.
    });
  }

  // -------------------------------------------------------
  // GET /users/:id → devuelve un usuario por ID
  // -------------------------------------------------------
  else if (method === 'GET' && url.startsWith('/users/')) {
    const id = parseInt(url.split('/')[2]); // Ejemplo: /users/3 → id = 3

    readUsers(users => {
      const user = users.find(u => u.id === id);
      if (!user) {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'User not found' }));
      } else {
        res.writeHead(200);
        res.end(JSON.stringify(user, null, 2));
      }
    });
  }

  // -------------------------------------------------------
  // POST /users → agrega un nuevo usuario al archivo
  // -------------------------------------------------------
  else if (method === 'POST' && url === '/users') {
    let body = ''; // Acumulamos acá los datos que van llegando.

    // `req` es un stream (flujo de datos). Node recibe los datos "por partes" (chunks).
    // Por eso escuchamos el evento 'data' para ir acumulando esos fragmentos.
    req.on('data', chunk => {
      body += chunk.toString(); // Convertimos cada parte a string y la concatenamos.
    });

    // Cuando ya llegaron todos los datos del cuerpo (body), se dispara el evento 'end'.
    req.on('end', () => {
      // try...catch: estructura que sirve para manejar errores de forma controlada.
      // "Intentamos" hacer algo (try), y si da error, "capturamos" la excepción (catch).
      try {
        const newUser = JSON.parse(body); // Convertimos el JSON recibido a objeto.
        readUsers(users => {
          newUser.id = users.length + 1; // Asignamos un ID simple.
          users.push(newUser);

          // Guardamos el nuevo array en el archivo.
          writeFile(filePath, JSON.stringify(users, null, 2), err => {
            if (err) {
              res.writeHead(500);
              res.end(JSON.stringify({ message: 'Error saving user' }));
            } else {
              res.writeHead(201);
              res.end(JSON.stringify(newUser, null, 2));
            }
          });
        });
      } catch (error) {
        // Si el JSON que mandaron está mal formado, se lanza un error.
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
  }

  // -------------------------------------------------------
  // Si ninguna ruta coincide, devolvemos un 404.
  // -------------------------------------------------------
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

// Arrancamos el servidor.
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// ====================================================
// CONCEPTOS CLAVE
// ====================================================
// - req.on('data'): recibe partes del body (stream).
// - req.on('end'): se ejecuta cuando terminó de llegar el body.
// - JSON.parse(): convierte texto JSON a objeto.
// - writeFileSync(): guarda los cambios en el archivo.
// - res.writeHead(): define código de estado (200, 201, 404, etc).
//
// Este ejemplo ya tiene la misma lógica que usaríamos en Express,
// solo que acá todo se hace "a mano".
// ====================================================
