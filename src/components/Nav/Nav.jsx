import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [active, setActive] = useState(false);

  function handleClick(clickedItem) {
    const items = document.querySelectorAll(".nav-link");

    items.forEach((item) => {
      if (item != clickedItem) {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      }
    });

    clickedItem.target.classList.contains("active")
      ? clickedItem.target.classList.remove("active")
      : setActive(clickedItem.target.classList.add("active"));
  }

  return (
    <nav>
      <img src="/src/assets/logo-hc.png" alt="" />
      <ul className="nav-container">
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link" to="/orientacoes">
            Orientações
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link" to="/sobre">
            Sobre
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link" to="/contato">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
