// Base de datos temporal (en memoria)
let courses = [
  {
    id: 1,
    title: "React desde Cero",
    instructor: "Ana García",
    duration: "40 horas",
    level: "Principiante",
    rating: 4.8,
    students: 1234,
    price: 49.99,
    image: "https://via.placeholder.com/300x200?text=React",
    description: "Aprende React desde los conceptos básicos hasta crear aplicaciones completas.",
    modules: [
      { id: 1, title: "Introducción a React", duration: "2 horas" },
      { id: 2, title: "Componentes y Props", duration: "3 horas" },
      { id: 3, title: "Estado y Ciclo de Vida", duration: "4 horas" },
      { id: 4, title: "Hooks", duration: "5 horas" }
    ]
  },
  {
    id: 2,
    title: "Node.js Avanzado",
    instructor: "Carlos Ruiz",
    duration: "50 horas",
    level: "Avanzado",
    rating: 4.9,
    students: 856,
    price: 59.99,
    image: "https://via.placeholder.com/300x200?text=Node.js",
    description: "Domina Node.js y crea APIs REST profesionales con Express y MongoDB.",
    modules: [
      { id: 1, title: "Fundamentos de Node.js", duration: "3 horas" },
      { id: 2, title: "Express Framework", duration: "4 horas" },
      { id: 3, title: "Base de Datos", duration: "5 horas" },
      { id: 4, title: "Autenticación y Seguridad", duration: "6 horas" }
    ]
  },
  {
    id: 3,
    title: "Python para Data Science",
    instructor: "María López",
    duration: "60 horas",
    level: "Intermedio",
    rating: 4.7,
    students: 2103,
    price: 69.99,
    image: "https://via.placeholder.com/300x200?text=Python",
    description: "Conviértete en un experto en análisis de datos con Python, Pandas y NumPy.",
    modules: [
      { id: 1, title: "Python Básico", duration: "4 horas" },
      { id: 2, title: "NumPy y Pandas", duration: "6 horas" },
      { id: 3, title: "Visualización de Datos", duration: "5 horas" },
      { id: 4, title: "Machine Learning Básico", duration: "8 horas" }
    ]
  }
];

let enrollments = [];

let nextCourseId = 4;
let nextEnrollmentId = 1;

module.exports = {
  courses,
  enrollments,
  getNextCourseId: () => nextCourseId++,
  getNextEnrollmentId: () => nextEnrollmentId++
};
