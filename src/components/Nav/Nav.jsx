import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
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
      : clickedItem.target.classList.add("active");
  }

  return (
    <nav>
      <a href="/">
        <img src="/src/assets/logo-hc.png" alt="" />
      </a>
      <ul className="nav-container">
        <li className="nav-item">
          <Link onClick={handleClick} className="nav-link active" to="/">
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
};

export default Nav;
