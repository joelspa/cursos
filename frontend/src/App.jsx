import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Profile from './pages/Profile.jsx'
import { CURSOS } from './data/cursos.js'

function parseHash() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  const parts = hash.split('/').filter(Boolean)
  if (parts.length === 0) return { name: 'home', params: {} }
  if (parts[0] === 'perfil') return { name: 'profile', params: {} }
  if (parts[0] === 'curso' && parts[1]) return { name: 'course', params: { id: parts[1] } }
  return { name: 'home', params: {} }
}

function App() {
  // Estado de ruta (router por hash) y datos simulados
  const [route, setRoute] = useState(parseHash())
  const [inscripciones, setInscripciones] = useState(() => {
    try {
      const raw = localStorage.getItem('inscripciones')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => { 
    function onHashChange() {
      setRoute(parseHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    localStorage.setItem('inscripciones', JSON.stringify(inscripciones))
  }, [inscripciones])

  function navigate(to) {
    window.location.hash = to
  }

  function toggleInscripcion(id) {
    setInscripciones(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  function logout() {
    setInscripciones([])
    try { localStorage.removeItem('inscripciones') } catch {}
    navigate('/')
  }

  const cursosIndex = useMemo(() => new Map(CURSOS.map(c => [String(c.id), c])), [])
  const cursoActual = route.name === 'course' ? cursosIndex.get(String(route.params.id)) : null

  return (
    <div className="app">
      <Navbar navigate={navigate} onLogout={logout} />
      <main className="contenido">
        {route.name === 'home' && (
          <Home
            cursos={CURSOS}
            inscripciones={inscripciones}
            navigate={navigate}
          />
        )}
        {route.name === 'course' && (
          <CourseDetail
            curso={cursoActual}
            inscrito={inscripciones.includes(String(route.params.id))}
            onToggleInscripcion={() => toggleInscripcion(String(route.params.id))}
            navigate={navigate}
          />
        )}
        {route.name === 'profile' && (
          <Profile
            cursos={CURSOS}
            inscripciones={inscripciones}
            navigate={navigate}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
