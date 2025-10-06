# Validación con Zod

## ¿Qué es Zod?

Zod valida los datos que llegan al servidor.

## Cómo funciona

### 1. Defines las reglas en `models/schemas.js`

```javascript
const createCourseSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  instructor: z.string().min(3, 'El instructor es requerido')
});
```

### 2. Usas el middleware en las rutas

```javascript
router.post('/', validate(createCourseSchema), (req, res) => {
  // Si llega aquí, los datos son válidos
});
```

## Tipos de validación

```javascript
z.string()       // Texto
z.number()       // Número  
z.email()        // Email
z.min(3)         // Mínimo 3 caracteres
z.max(10)        // Máximo 10 caracteres
z.optional()     // No obligatorio
```

## Ejemplo de error

```json
{
  "success": false,
  "errores": ["El título debe tener al menos 3 caracteres"]
}
```
