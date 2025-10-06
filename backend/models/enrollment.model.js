// Modelo de Inscripción
class Enrollment {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.courseId = data.courseId;
    this.userName = data.userName;
    this.userEmail = data.userEmail;
    this.progress = 0;
    this.completed = false;
  }
}

module.exports = Enrollment;
