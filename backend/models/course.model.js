// Modelo de Curso
class Course {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.instructor = data.instructor;
    this.duration = data.duration || '';
    this.level = data.level || 'Principiante';
    this.rating = data.rating || 0;
    this.students = data.students || 0;
    this.price = data.price || 0;
    this.image = data.image || '';
    this.modules = data.modules || [];
  }
}

module.exports = Course;
