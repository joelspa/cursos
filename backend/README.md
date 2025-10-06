# Backend - API de Cursos

API simple con Node.js y Express para gestionar cursos.

## Instalación

```bash
npm install
```

## Iniciar el servidor

```bash
npm run dev
```

El servidor corre en `http://localhost:3000`

## Endpoints Disponibles

### Cursos

#### Obtener todos los cursos
```
GET /api/courses
```

**Respuesta:**
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

#### Obtener un curso por ID
```
GET /api/courses/:id
```

**Ejemplo:** `GET /api/courses/1`

#### Obtener cursos por nivel
```
GET /api/courses/level/:level
```

**Ejemplo:** `GET /api/courses/level/principiante`

#### Crear un nuevo curso
```
POST /api/courses
Content-Type: application/json

{
  "title": "Curso de JavaScript",
  "instructor": "Juan Pérez",
  "duration": "30 horas",
  "level": "Intermedio",
  "price": 39.99,
  "description": "Aprende JavaScript desde cero",
  "image": "https://via.placeholder.com/300x200",
  "modules": [
    { "id": 1, "title": "Introducción", "duration": "2 horas" }
  ]
}
```

#### Actualizar un curso
```
PUT /api/courses/:id
Content-Type: application/json

{
  "title": "Nuevo título",
  "price": 49.99
}
```

#### Eliminar un curso
```
DELETE /api/courses/:id
```

### Inscripciones

#### Inscribir a un usuario en un curso
```
POST /api/enrollments
Content-Type: application/json

{
  "userId": "user123",
  "courseId": 1
}
```

#### Obtener inscripciones de un usuario
```
GET /api/enrollments/user/:userId
```

**Ejemplo:** `GET /api/enrollments/user/user123`

#### Actualizar progreso de un curso
```
PUT /api/enrollments/:enrollmentId/progress
Content-Type: application/json

{
  "progress": 50,
  "completed": false
}
```

#### Cancelar inscripción
```
DELETE /api/enrollments/:enrollmentId
```

## Estructura del Proyecto

```
backend/
├── data/           # Datos temporales
├── middleware/     # Validaciones
├── models/         # Esquemas de validación
├── routes/         # Rutas del API
├── .env           
├── package.json
└── server.js      # Archivo principal
```

## Tecnologías

- Node.js
- Express
- Zod para validaciones
- CORS
- Nodemon

## Próximos Pasos

- Integrar MongoDB como base de datos
- Agregar autenticación con JWT
- Agregar paginación y filtros avanzados
- Implementar subida de imágenes
- Agregar tests unitarios y de integración

## Licencia

ISC
