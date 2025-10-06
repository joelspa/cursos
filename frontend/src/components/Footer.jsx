import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="contenido" style={{display:'flex', gap:'10px', alignItems:'center', justifyContent:'space-between'}}>
        <div className="footer__links">
          <a href="#" onClick={(e) => e.preventDefault()}>Términos</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacidad</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Contacto</a>
        </div>
        <div className="footer__copy">© 2024 EduPro. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}

export default Footer
