import "./Experiencia.css";
import { useState } from "react";

export const Experiencia = () => {
  const [experiences] = useState([
    {
      title: "ToDo List",
      description:
        "Aplicacion de tareas en donde se aplican los metodos CRUD que cualquier aplicacion puede llevar",
    },
    {
      title: "Aplicación Clima",
      description:
        "App construido con React, typeScript, css y consumiendo la api de OpenWeather",
    },
    {
      title: "Heroes",
      description:
        "Aplicación creada con React.js consumiendo la api de Heroes",
    },
    {
      title: "Landing Page",
      description: "Realizada con react y react-router-dom",
    },
  ]);
  return (
    <div className="experience__container">
      {experiences.map((value, id) => (
        <div className="experience__container--row" key={id}>
          <h3>{value.title}</h3>
          <p className="experience__description">{value.description}</p>
        </div>
      ))}
    </div>
  );
};
