import "./CardEstudios.css";

export const CardEstudios = ({ url, titulo }) => {
  return (
    <div className="container__estudios">
      <img src={url} className="card__image" />
      <p className="title">{titulo}</p>
    </div>
  );
};
