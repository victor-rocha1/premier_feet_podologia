import logo from './logo.png';
import './navbar.css';
import imgChat from './icon-message.png'

function NavBar() {

  return (
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
  );
}

export default NavBar;