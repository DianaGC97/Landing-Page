import "./index.css";
import { Inicio } from "./components/Inicio/Inicio";
import { Navbar } from "./components/Navbar/Navbar";
import { Perfil } from "./components/Perfil/Perfil";

import { Routes, Route } from "react-router-dom";
import { Estudios } from "./components/Estudio/Estudios";
import { Portafolio } from "./components/Portafolio/Portafolio";
import { Experiencia } from "./components/Experiencia/Experiencia";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/*" element={<Inicio />} />
        <Route path="/portfolio" element={<Portafolio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </>
  );
}

export default App;
