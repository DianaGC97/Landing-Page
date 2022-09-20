import { PortafolioCards } from "../cards/PortafolioCards";
import { Proyectos } from "../database/Proyectos";

export const Portafolio = () => {
  return (
    <>
      {Proyectos.map((proyecto) => (
        <PortafolioCards
          key={proyecto.id}
          url={proyecto.url}
          title={proyecto.title}
          descripcion={proyecto.descripcion}
          href={proyecto.url_preview}
          href2={proyecto.url_github}
        />
      ))}
    </>
  );
};
