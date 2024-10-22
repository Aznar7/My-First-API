import express from 'express';
const app = express();
const port = 3000;

// Datos: Nombres de los integrantes de la clase
const alumnos = [
    'Ana',
    'Carlos',
    'Luis',
    'María',
    'David',
    'Laura',
    'Juan',
    'Paula',
    'Miguel'
];

// Endpoint que devuelve el JSON con los nombres de los alumnos y el número total
app.get('/api/alumnos', (req, res) => {
    res.json({
        integrantes: alumnos,
        total_alumnos: alumnos.length
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
