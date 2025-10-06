import './Navbar.css'
import Logo from './Logo.jsx'

function Navbar({ navigate, onLogout }) {
  return (
    <header className="navbar">
      <div className="contenido">
        <div className="navbar__brand" onClick={() => navigate('/') }>
          <span className="navbar__icon"><Logo size={24} /></span>
          <span className="navbar__logo">EduPro</span>
        </div>
        <nav className="navbar__links">
          <button onClick={() => navigate('/')}>Inicio</button>
          <button onClick={() => navigate('/perfil')}>Mis Cursos</button>
          <button className="btn-secondary" onClick={onLogout}>Cerrar sesión</button>
        </nav>
        <div
          className="navbar__avatar"
          title="Perfil"
          role="button"
          tabIndex={0}
          onClick={() => navigate('/perfil')}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/perfil') } }}
        />
      </div>
    </header>
  )
}

export default Navbar
