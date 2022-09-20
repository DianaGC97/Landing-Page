import { CardEstudios } from "../cards/CardEstudios";
import { Estudio } from "../database/Estudio";
import "./Estudios.css";

export const Estudios = () => {
  return (
    <div className="estudios__container">
      {Estudio.map((estudio) => (
        <CardEstudios
          key={estudio.id}
          url={estudio.url}
          titulo={estudio.titulo}
        />
      ))}
    </div>
  );
};
