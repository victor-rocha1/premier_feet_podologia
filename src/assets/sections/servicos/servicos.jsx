import Card from '../../components/Card/Card';
import './servicos.css';

function Servicos() {
    return (
        <section id="nossos-servicos" className="servicos-container">
            <h2 className="section-title">NOSSOS SERVIÇOS</h2>
            <div className="card-container"> 
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
            </div>
        </section>
    );
}

export default Servicos;