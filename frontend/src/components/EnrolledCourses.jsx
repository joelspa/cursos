import './EnrolledCourses.css'

function EnrolledCourses({ cursos, inscripciones, navigate }) {
  const misCursos = cursos.filter(c => inscripciones.includes(String(c.id)))

  return (
    <section className="profile__section">
      <h3>Mis Cursos</h3>
      {misCursos.length === 0 && <p>No estás inscrito en ningún curso.</p>}
      <ul className="profile__list">
        {misCursos.map(c => (
          <li key={c.id} className="profile__curso" onClick={() => navigate(`/curso/${c.id}`)}>
            <div className="profile__curso-img" style={{ backgroundImage: `url(${c.portada})` }} />
            <div className="profile__curso-info">
              <div className="profile__curso-title">{c.titulo}</div>
              <div className="profile__curso-desc">{c.descripcion}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EnrolledCourses