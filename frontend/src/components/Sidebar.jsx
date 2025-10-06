import './Sidebar.css'

function Sidebar({
  busqueda,
  setBusqueda,
  categoria,
  setCategoria,
  nivel,
  setNivel,
  idioma,
  setIdioma,
  soloInscritos,
  setSoloInscritos,
  categorias,
  niveles,
  idiomas,
  onReset
}) {
  return (
    <aside className="sidebar">
      <h3>Filtros</h3>
      <div className="buscador">
        <span className="icono">🔍</span>
        <input 
          value={busqueda} 
          onChange={e => setBusqueda(e.target.value)} 
          placeholder="Buscar cursos" 
        />
      </div>

      <details className="acordeon" open>
        <summary>
          <span>Categoría</span>
          <span>▾</span>
        </summary>
        <div className="campo">
          <select value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="">Todas</option>
            {categorias.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </details>

      <details className="acordeon">
        <summary>
          <span>Nivel</span>
          <span>▾</span>
        </summary>
        <div className="campo">
          <select value={nivel} onChange={e => setNivel(e.target.value)}>
            <option value="">Todos</option>
            {niveles.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </details>

      <details className="acordeon">
        <summary>
          <span>Idioma</span>
          <span>▾</span>
        </summary>
        <div className="campo">
          <select value={idioma} onChange={e => setIdioma(e.target.value)}>
            <option value="">Todos</option>
            {idiomas.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </details>

      <label className="check">
        <input 
          type="checkbox" 
          checked={soloInscritos} 
          onChange={e => setSoloInscritos(e.target.checked)} 
        />
        Solo inscritos
      </label>
      
      <button className="btn-reset" onClick={onReset}>
        Limpiar filtros
      </button>
    </aside>
  )
}

export default Sidebar