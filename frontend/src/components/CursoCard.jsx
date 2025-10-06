import './CursoCard.css'

function CursoCard({ curso, onVer }) {
  return (
    <div className="curso-card">
      <div className="curso-card__img" style={{ backgroundImage: `url(${curso.portada})` }}></div>
      <div className="curso-card__body">
        <h3>{curso.titulo}</h3>
        <div className="curso-card__progress">
          <div className="curso-card__progress-bar" style={{ width: `${curso.progreso}%` }}></div>
        </div>
        <div className="curso-card__progress-text">{curso.progreso}% completado</div>
        <button onClick={onVer}>Continuar</button>
      </div>
    </div>
  )
}

export default CursoCard
