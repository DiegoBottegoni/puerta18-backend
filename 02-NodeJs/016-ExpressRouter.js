// ====================================================
// EXPRESS ROUTER - ORGANIZANDO RUTAS
// ====================================================
//
// Express nos permite separar las rutas en módulos
// usando "express.Router()". Esto mejora la organización
// del código a medida que la app crece.
//
// ====================================================
// Para ejecutar este archivo:
// node 016-ExpressRouter.js (asegurate de tener express instalado)
// Y abrí http://localhost:3000/api/users
// ====================================================

// 1️⃣ Importamos express
import express from 'express';

// 2️⃣ Creamos la aplicación principal y configuramos middleware para JSON
const app = express();
app.use(express.json());

// 3️⃣ Creamos un router independiente
// Es como un "mini servidor" dentro del servidor principal.
const userRouter = express.Router();

// 4️⃣ Middleware global en el router (solo afecta a rutas del router)
userRouter.use((req, res, next) => {
  console.log(`📦 Middleware del router → ${req.method} ${req.url}`);
  next();
});

// 5️⃣ Definimos rutas dentro del router
userRouter.get('/', (req, res) => {
  // Simulamos obtener una lista de usuarios
  res.json([{ id: 1, name: 'User from router' }]);
});

userRouter.post('/', (req, res) => {
  const user = req.body;
  user.id = Math.floor(Math.random() * 1000);
  res.status(201).json(user);
});

// 6️⃣ Montamos el router bajo un prefijo
// app.use('/api/users', userRouter)
// Esto significa que todas las rutas dentro del router
// van a empezar con "/api/users"
app.use('/api/users', userRouter);

// 7️⃣ Ruta raíz del servidor
app.get('/', (req, res) => {
  res.send('🏠 Bienvenido! Visitá /api/users para probar el router.');
});

// 8️⃣ Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor Express con Router corriendo en http://localhost:${PORT}`);
});

// ====================================================
// CONCEPTOS CLAVE
// ====================================================
// - express.Router(): permite agrupar rutas relacionadas.
// - app.use('/ruta', router): monta un router con prefijo.
// - Los middlewares pueden ser globales o por router.
// - Ideal para apps grandes (rutas de users, products, etc.)
// ====================================================
