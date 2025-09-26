import './endereco.css';

function Endereco() {
    return (
        <section className="endereco-section">
            <h2 className="section-title">NOSSO ENDEREÇO</h2>

            <div className="endereco-content">
                
                <div className="endereco-info">
                    <p className="endereco-text">
                        Avenida Miguel Perrela 330, Belo <br />
                        Horizonte, Brazil 31330290
                    </p>
                    <button className='como-chegar-btn'>
                        Como Chegar
                        <i className="bi bi-arrow-right"></i> 
                    </button>
                </div>

                <div className="map-container">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0511130931436!2d-43.9977229!3d-19.880063500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691db1d69ac6b%3A0xe7cf1a847746a04c!2sPremier%20Feet%20Podologia%20Castelo!5e0!3m2!1spt-BR!2sbr!4v1758910780516!5m2!1spt-BR!2sbr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>

            </div>
        </section>
    );
}

export default Endereco;