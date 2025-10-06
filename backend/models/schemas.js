const { z } = require('zod');

// Validación para crear un curso
const createCourseSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  instructor: z.string().min(3, 'El instructor es requerido'),
  duration: z.string().optional(),
  level: z.string().optional(),
  price: z.number().optional(),
  image: z.string().optional(),
  modules: z.array(z.any()).optional()
});

// Validación para actualizar un curso
const updateCourseSchema = createCourseSchema.partial();

// Validación para crear una inscripción
const createEnrollmentSchema = z.object({
  userId: z.string().min(1, 'El ID de usuario es requerido'),
  courseId: z.number(),
  userName: z.string().min(2, 'El nombre es requerido'),
  userEmail: z.string().email('El email no es válido')
});

// Validación para actualizar progreso
const updateProgressSchema = z.object({
  progress: z.number().min(0).max(100).optional(),
  completed: z.boolean().optional()
});

module.exports = {
  createCourseSchema,
  updateCourseSchema,
  createEnrollmentSchema,
  updateProgressSchema
};
