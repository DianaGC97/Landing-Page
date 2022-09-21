import perfil from "../../assets/perfil.png";
import "./perfil.css";

export const Perfil = () => {
  return (
    <div className="perfil__container">
      <img src={perfil} alt="DianaGalindo" />
      <div className="col-2">
        <h1>
          Desarrolladora FrontEnd <br />
          con React JS
        </h1>
        <p>
          Uno de mis hobbys favoritos es desarrollar, porque me permite hacer
          cualquier cosa que me imagine por medio de las instrucciones que le
          pase a la computadora, quiero que conozcan mas sobre mi trabajo en
          este landing page
        </p>
      </div>
    </div>
  );
};
