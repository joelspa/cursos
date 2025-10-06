import './CourseModules.css'

function CourseModules({ modulos }) {
  return (
    <section className="course__section">
      <h3>Módulos del Curso</h3>
      <div className="modulos">
        {modulos.map(m => (
          <details className="modulo" key={m.id} open>
            <summary>{m.titulo}</summary>
            <div className="modulo__content">{m.lecciones} lecciones</div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default CourseModules