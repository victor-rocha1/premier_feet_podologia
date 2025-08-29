import logo from './logo.png';
import './navbar.css';

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
          <a href="#projects">Endereço</a>
          <a href="#Dúvidas">Experiências</a>
        </div>

      </nav>

      <div className='side-menu'>
        <div className="side-menu-header">
          <button className="close-menu">X</button>
        </div>
        <a href="#">Home</a>
        <a href="#about">Sobre Mim</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#experiences">Experiências</a>
      </div>
    </header>
  );
}

export default NavBar;