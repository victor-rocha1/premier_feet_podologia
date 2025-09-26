import "./card.css"

function Card({ txt }) {
  return (
    <div className="div-card-servicos">
      <div className="card-servicos">
        <p>{txt}</p>
      </div>
    </div>
  );
}

export default Card;
