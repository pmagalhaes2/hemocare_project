import { Link } from "react-router-dom";
import "./nav.css";
import menuItems from "./menuItems";

const Nav = () => {
  const handleClick = (clickedItem) => {
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
  };

  return (
    <nav>
      <a href="/">
        <img src="/src/assets/logo-hc.png" alt="" />
      </a>
      <ul className="nav-container">
        {menuItems.map((item) => {
          return (
            <li className="nav-item" key={item.id}>
              <Link onClick={handleClick} className={item.class} to={item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
