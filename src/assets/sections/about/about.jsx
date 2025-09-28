import './about.css';

function About() {
    return (
        <section className="about container">
            <div className="title-clinica">
                <h1>PREMIER FEET PODOLOGIA</h1>
                <p>O melhor atendimento para <br /> seus pés!</p>
            </div>

            <div className="about-container">
                <div className="txt_about">
                    <h2>SOBRE A CLÍNICA</h2>
                    <p>
                        Desde maio de 2023, a Premier Feet Podologia tem sido referência em saúde e bem-estar para os pés. Fundada com o propósito de oferecer um atendimento humanizado e altamente especializado, nossa clínica é liderada por uma podóloga experiente e apaixonada pelo que faz.
                    </p>
                    <p>
                        Nossa responsável técnica é especializada no tratamento de pés diabéticos, oferecendo um cuidado minucioso, seguro e totalmente personalizado para pacientes que necessitam de atenção especial. Com conhecimento técnico avançado e constante atualização na área, ela garante um atendimento que une ciência, prevenção e carinho em cada procedimento.
                    </p>
                    <p>
                        Além do cuidado com pés diabéticos, a Premier Feet Podologia também oferece tratamentos completos para calos, unhas encravadas, fissuras, micose, hidratação profunda, entre outros. Tudo isso em um ambiente acolhedor, higienizado e com equipamentos de alta qualidade, pensado para proporcionar conforto e segurança.
                    </p>
                    <p>
                        Venha nos conhecer e sinta a diferença de estar em boas mãos. Porque quando seus pés estão bem, todo o seu corpo agradece.
                    </p>
                </div>
                <div className="div-card">
                    <div className="card card-verde-agua"></div>
                    <div className="card card-white"><p>Foto</p></div>
                </div>
            </div>
        </section>
    );
}

export default About;