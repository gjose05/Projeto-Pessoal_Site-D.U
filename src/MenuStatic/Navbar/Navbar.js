import './Navbar.css';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('paginaInicial')}
          >
            Página Inicial
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('mostruario')}
          >
            Sobre
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('pedidos')}
          >
            Comprar
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;