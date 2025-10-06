import './CourseDetail.css'
import CourseHero from '../components/CourseHero'
import CourseActions from '../components/CourseActions'
import CourseModules from '../components/CourseModules'
import CourseInstructor from '../components/CourseInstructor'

function CourseDetail({ curso, inscrito, onToggleInscripcion, navigate }) {
  if (!curso) {
    return (
      <div className="course">
        <p>No se encontró el curso.</p>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
    )
  }

  return (
    <div className="course">
      <CourseHero curso={curso} />
      
      <CourseActions 
        inscrito={inscrito}
        onToggleInscripcion={onToggleInscripcion}
        onVolver={() => navigate('/')}
      />

      <section className="course__section">
        <h3>Descripción del Curso</h3>
        <p>{curso.descripcion}</p>
      </section>

      <CourseInstructor instructor={curso.instructor} />

      <CourseModules modulos={curso.modulos} />
    </div>
  )
}

export default CourseDetail
