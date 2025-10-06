import { useMemo, useState } from 'react'
import './Home.css'
import CursoCard from '../components/CursoCard'
import Grid from '../components/Grid'
import Sidebar from '../components/Sidebar'

function Home({ cursos, inscripciones, navigate }) {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')
  const [nivel, setNivel] = useState('')
  const [idioma, setIdioma] = useState('')
  const [soloInscritos, setSoloInscritos] = useState(false)

  const categorias = useMemo(() => Array.from(new Set(cursos.map(c => c.categoria))).sort(), [cursos])
  const niveles = useMemo(() => Array.from(new Set(cursos.map(c => c.nivel))).sort(), [cursos])
  const idiomas = useMemo(() => Array.from(new Set(cursos.map(c => c.idioma))).sort(), [cursos])

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    return cursos.filter(c => {
      if (soloInscritos && !inscripciones.includes(String(c.id))) return false
      if (categoria && c.categoria !== categoria) return false
      if (nivel && c.nivel !== nivel) return false
      if (idioma && c.idioma !== idioma) return false
      if (q && !(c.titulo.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q))) return false
      return true
    })
  }, [busqueda, categoria, nivel, idioma, soloInscritos, cursos, inscripciones])

  const handleReset = () => {
    setBusqueda('')
    setCategoria('')
    setNivel('')
    setIdioma('')
    setSoloInscritos(false)
  }

  return (
    <div className="home">
      <div className="home__layout">
        <Sidebar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
          nivel={nivel}
          setNivel={setNivel}
          idioma={idioma}
          setIdioma={setIdioma}
          soloInscritos={soloInscritos}
          setSoloInscritos={setSoloInscritos}
          categorias={categorias}
          niveles={niveles}
          idiomas={idiomas}
          onReset={handleReset}
        />

        <div className="home__main">
          <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuASV8RsSe6rD4xtQ-bP4RZPJbKvwn84S24nNivYZDbYjJZ7d2FPLAuVCohkiu3yiDkBcrODLoah5dUf0rqjP4wDcVxzLdkEsGk8epnzsdWwR-_e8yYGfkr3TLx3R_ijTOaxxzx2vYV6ea7kJvNTAM5rzO59tNmzrQRoO6-pesAb8_ad1Y73ifL-UPK4BwrsCBgUYxGwdf6xGZHL40LzLiE_VCmp12mhCu5JOR4SUMgb_aUWFWBPLKa6xwn6V-g64XM6wJ7JQOnm46dK)` }}>
            <h2>Descubre nuevos cursos</h2>
            <p>Amplía tus conocimientos y habilidades.</p>
            <button onClick={() => document.getElementById('lista-cursos')?.scrollIntoView({ behavior: 'smooth' })}>Explorar cursos</button>
          </section>

          <section className="lista" id="lista-cursos">
            <h2 className="home__title">Mis Cursos</h2>
            {filtrados.length === 0 && <p className="sin-resultados">No se encontraron cursos.</p>}
            <Grid>
              {filtrados.map(c => (
                <CursoCard key={c.id} curso={c} onVer={() => navigate(`/curso/${c.id}`)} />
              ))}
            </Grid>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
