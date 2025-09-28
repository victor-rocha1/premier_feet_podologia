import Card from '../../components/Card/Card';
import './servicos.css';

function Servicos() {
    return (
        <section className="servicos-container">
            <h2 className="section-title container">NOSSOS SERVIÇOS</h2>
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