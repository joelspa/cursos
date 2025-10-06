import './CourseInstructor.css'

function CourseInstructor({ instructor }) {
  if (!instructor) return null

  return (
    <section className="course__section">
      <h3>Tu Instructor</h3>
      <div className="instructor">
        <div className="instructor__avatar">
          <img src={instructor.avatar} alt={`Avatar de ${instructor.nombre}`} />
        </div>
        <div className="instructor__info">
          <h4 className="instructor__name">{instructor.nombre}</h4>
          <div className="instructor__credentials">
            <span className="instructor__experience">{instructor.experiencia} de experiencia</span>
            <span className="instructor__specialty">• {instructor.especialidad}</span>
          </div>
          <p className="instructor__bio">{instructor.bio}</p>
        </div>
      </div>
    </section>
  )
}

export default CourseInstructor