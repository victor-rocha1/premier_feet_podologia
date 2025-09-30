import { useState, useEffect } from 'react';
import logo from './logo.png';
import './navbar.css';
import imgChat from './icon-message.png';

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    if (menuAberto) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuAberto]);

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="nav-links">
            <a href="#about">Sobre</a>
            <a href="#nossos-servicos">Nossos Serviços</a>
            <a href="#endereco">Endereço</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <a href="#contato" className="contact-btn">
            ENTRE EM CONTATO
            <img className="btn-icon" src={imgChat} alt="ícone de contato" />
          </a>
        </nav>
      </header>
      


      {/* Botão do menu hamburguer (fora da sidebar) */}
      {!menuAberto && (
        <button 
          className="menu-lateral" 
          onClick={toggleMenu} 
          aria-label="Abrir ou fechar menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      )}


      <div className={`sidebar ${menuAberto ? 'open' : ''}`}>
        {menuAberto && (
          <button 
            className="menu-lateral open" 
            onClick={toggleMenu} 
            aria-label="Fechar menu"
            style={{position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
          >
            <i className="bi bi-x-lg" style={{fontSize: 28, color: '#222'}}></i>
          </button>
        )}
        <a href="#about" onClick={toggleMenu}>Sobre</a>
        <a href="#nossos-servicos" onClick={toggleMenu}>Nossos Serviços</a>
        <a href="#endereco" onClick={toggleMenu}>Endereço</a>
        <a href="#duvidas" onClick={toggleMenu}>Dúvidas</a>
      </div>
      
      <div className={`overlay ${menuAberto ? 'active' : ''}`} onClick={toggleMenu}></div>
    </>
  );
}

export default NavBar;