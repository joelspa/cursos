import './CourseHero.css'

function CourseHero({ curso }) {
  return (
    <div className="course__hero" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${curso.portadaDetalle || curso.portada})` 
    }}>
      <h2>{curso.titulo}</h2>
    </div>
  )
}

export default CourseHero