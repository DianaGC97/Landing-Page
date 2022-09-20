import { useState } from "react";
import logo from "../../assets/DG.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <nav className="navbar">
        <ul className={isClicked ? "nav__menu--active" : "nav__menu--inactive"}>
          <li className="nav-item">
            <Link to="/inicio">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/perfil">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to="/estudios">Estudios</Link>
          </li>
          <li className="nav-item">
            <Link to="/experiencia">Experiencia</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portafolio</Link>
          </li>
        </ul>
      </nav>

      <div className="menu" onClick={handleClick}>
        {isClicked ? (
          <FaTimes size={30} style={{ color: "#AED6F1" }} />
        ) : (
          <FaBars size={30} />
        )}
      </div>
    </div>
  );
};
