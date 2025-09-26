import Card from '../../components/Card/Card';
import './servicos.css';

function Servicos() {
    return (
        <div className="servicos-container">
            <h2>NOSSOS SERVIÇOS</h2>

            <div className="card-container"> 
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
                <Card txt="teste" />
            </div>
        </div>
    );
}

export default Servicos;