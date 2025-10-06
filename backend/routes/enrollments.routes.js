const express = require('express');
const router = express.Router();
const { courses, enrollments, getNextEnrollmentId } = require('../data/courses.data');
const { validate } = require('../middleware/validator.middleware');
const { createEnrollmentSchema, updateProgressSchema } = require('../models/schemas');

// POST - Inscribir a un usuario en un curso
router.post('/', validate(createEnrollmentSchema), (req, res) => {
  try {
    const { userId, courseId, userName, userEmail } = req.body;
    
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Curso no encontrado'
      });
    }
    
    // Verificar si ya está inscrito
    const alreadyEnrolled = enrollments.find(
      e => e.userId === userId && e.courseId === parseInt(courseId)
    );
    
    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        error: 'Ya estás inscrito en este curso'
      });
    }
    
    const newEnrollment = {
      id: getNextEnrollmentId(),
      userId,
      courseId: parseInt(courseId),
      userName,
      userEmail,
      enrolledAt: new Date().toISOString(),
      progress: 0,
      completed: false
    };
    
    enrollments.push(newEnrollment);
    course.students += 1;
    
    res.status(201).json({
      success: true,
      message: 'Inscripción exitosa',
      data: {
        ...newEnrollment,
        course
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET - Obtener inscripciones de un usuario
router.get('/user/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    
    const userEnrollments = enrollments.filter(e => e.userId === userId);
    
    const enrichedEnrollments = userEnrollments.map(enrollment => {
      const course = courses.find(c => c.id === enrollment.courseId);
      return {
        ...enrollment,
        course
      };
    });
    
    res.json({
      success: true,
      count: enrichedEnrollments.length,
      data: enrichedEnrollments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// PUT - Actualizar progreso de un curso
router.put('/:enrollmentId/progress', validate(updateProgressSchema), (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const { progress, completed } = req.body;
    
    const enrollment = enrollments.find(e => e.id === parseInt(enrollmentId));
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Inscripción no encontrada'
      });
    }
    
    if (progress !== undefined) {
      enrollment.progress = Math.min(100, Math.max(0, progress));
    }
    
    if (completed !== undefined) {
      enrollment.completed = completed;
      if (completed) {
        enrollment.progress = 100;
      }
    }
    
    res.json({
      success: true,
      message: 'Progreso actualizado',
      data: enrollment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE - Cancelar inscripción
router.delete('/:enrollmentId', (req, res) => {
  try {
    const { enrollmentId } = req.params;
    
    const enrollmentIndex = enrollments.findIndex(e => e.id === parseInt(enrollmentId));
    
    if (enrollmentIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Inscripción no encontrada'
      });
    }
    
    const enrollment = enrollments[enrollmentIndex];
    const course = courses.find(c => c.id === enrollment.courseId);
    
    if (course) {
      course.students = Math.max(0, course.students - 1);
    }
    
    enrollments.splice(enrollmentIndex, 1);
    
    res.json({
      success: true,
      message: 'Inscripción cancelada exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
