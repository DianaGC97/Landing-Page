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
          Desarrollar es uno de mis hobbys favoritos porque por medio de este
          siento que se puede hacer cualquier cosa que se imagine por medio las
          instrucciones que le pasamos a la computadora, quiero que conozcan mas
          sobre mi trabajo en este landing page.
        </p>
      </div>
    </div>
  );
};
