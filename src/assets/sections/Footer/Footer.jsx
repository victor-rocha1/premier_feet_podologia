import './footer.css';
import logo from '../NavBar/logo.png';

function Footer() {
    const instagramUrl = "https://www.instagram.com/seu_perfil";
    const instaUrl = 'https://www.instagram.com/premierfeet.podologia/';
    const phoneNumber = "31971024799";
    const whatsappLink = `https://wa.me/55${phoneNumber}`;

    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">

                        <div className="footer-logo">
                            <img src={logo} alt="Logo Premier Feet Podologia" />
                        </div>

                        <div className="copyright">
                            <p>© 2025 Premier Feet Podologia. </p>
                            <p>Todos os direitos reservados.</p>
                        </div>

                        <div className="footer-contact">
                            <h4>Contato</h4>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-whatsapp"></i> (31) 97102-4799
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i> premierfeet.podologia
                            </a>
                        </div>

                        <div className="footer-hours">
                            <h4>Horário de Funcionamento</h4>
                            <p><i className="bi bi-calendar3"></i> Quarta a Sábado</p>
                            <p><i className="bi bi-clock"></i> 8h - 17h</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
