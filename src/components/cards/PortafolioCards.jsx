import "./PortafolioCards.css";

export const PortafolioCards = ({ url, title, descripcion, href, href2 }) => {
  return (
    <div className="card__portafolio">
      <div className="card__container">
        <img src={url} className="card__img" />

        <div className="card__titulo">
          <h1 className="titulo">{title}</h1>
          <p className="card__descripcion">{descripcion}</p>
        </div>

        <div className="card__buttons">
          <a href={href} target="_blank">
            <button>Vista previa</button>
          </a>
          <a href={href2} target="_blank">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};
