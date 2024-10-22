import './loadEnvironment.js';
import express from 'express';

// Inicializar express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

// Datos: Nombres de los integrantes de la clase
const alumnos = [
    'Nil',
    'Joshua',
    'Oriol',
    'Saten',
    'Adri',
    'Eisnar 🐐',
    'Ocsar',
    '& Company'
];

// Ruta de ping (para comprobar que el servidor está en marcha)
app.get('/ping', (req, res) => res.send('pongk'));

// Ruta de ping (para comprobar que el servidor está en marcha)
app.get('/test', (req, res) => res.send('aa'));

// Ruta de la API que devuelve el JSON con los alumnos
app.get('/alumnos', (req, res) => {
  res.json({
    totalAlumnos: alumnos.length,
    nombresAlumnos: alumnos
  });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
