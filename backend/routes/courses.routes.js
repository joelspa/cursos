const express = require('express');
const router = express.Router();
const { courses, getNextCourseId } = require('../data/courses.data');
const { validate } = require('../middleware/validator.middleware');
const { createCourseSchema, updateCourseSchema } = require('../models/schemas');

// GET - Obtener todos los cursos
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET - Obtener cursos por nivel
router.get('/level/:level', (req, res) => {
  try {
    const { level } = req.params;
    const filteredCourses = courses.filter(c => 
      c.level.toLowerCase() === level.toLowerCase()
    );
    
    res.json({
      success: true,
      count: filteredCourses.length,
      data: filteredCourses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET - Obtener un curso por ID
router.get('/:id', (req, res) => {
  try {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Curso no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST - Crear un nuevo curso
router.post('/', validate(createCourseSchema), (req, res) => {
  try {
    const { title, instructor, duration, level, price, description, image, modules } = req.body;
    
    const newCourse = {
      id: getNextCourseId(),
      title,
      instructor,
      duration,
      level,
      rating: 0,
      students: 0,
      price: price || 0,
      image: image || 'https://via.placeholder.com/300x200?text=Curso',
      description: description || '',
      modules: modules || []
    };
    
    courses.push(newCourse);
    
    res.status(201).json({
      success: true,
      message: 'Curso creado exitosamente',
      data: newCourse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// PUT - Actualizar un curso
router.put('/:id', validate(updateCourseSchema), (req, res) => {
  try {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    
    if (courseIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Curso no encontrado'
      });
    }
    
    const updatedCourse = {
      ...courses[courseIndex],
      ...req.body,
      id: courseId
    };
    
    courses[courseIndex] = updatedCourse;
    
    res.json({
      success: true,
      message: 'Curso actualizado exitosamente',
      data: updatedCourse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// DELETE - Eliminar un curso
router.delete('/:id', (req, res) => {
  try {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    
    if (courseIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Curso no encontrado'
      });
    }
    
    const deletedCourse = courses.splice(courseIndex, 1)[0];
    
    res.json({
      success: true,
      message: 'Curso eliminado exitosamente',
      data: deletedCourse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
