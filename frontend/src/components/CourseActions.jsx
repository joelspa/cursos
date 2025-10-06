import './CourseActions.css'

function CourseActions({ inscrito, onToggleInscripcion, onVolver }) {
  return (
    <div className="course__actions">
      <button className="btn-primary" onClick={onToggleInscripcion}>
        {inscrito ? 'Continuar' : 'Inscribirse'}
      </button>
      <button className="btn-secondary" onClick={onVolver}>Volver</button>
    </div>
  )
}

export default CourseActions