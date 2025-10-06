const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Importar rutas
const coursesRoutes = require('./routes/courses.routes');
const enrollmentsRoutes = require('./routes/enrollments.routes');

// Usar las rutas
app.use('/api/courses', coursesRoutes);
app.use('/api/enrollments', enrollmentsRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'API de Cursos',
    endpoints: {
      courses: '/api/courses',
      enrollments: '/api/enrollments'
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
