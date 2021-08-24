import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import ItemNav from "./ItemNav"
import navbarStyles from "./styles-components/navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const onClick = () => {
    setClick(!click)
  }
  return (
    <nav className={navbarStyles.NavbarItems}>
      <Link to="/" className={`animate__animated animate__flipInX ${navbarStyles.navbar_logo} `}>
        KINGNANDO
      </Link>

      {location.pathname === "/" ? (
        <>
          <div
            className={navbarStyles.menu_icon}
            onClick={onClick}
          >
            {!click ? <FaBars /> : <FaTimes />}
          </div>
          <ul
            className={
              click
                ? `${navbarStyles.nav_menu} ${navbarStyles.active}`
                : navbarStyles.nav_menu
            }
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                 <ItemNav onClick={onClick} item={item} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <Link className={navbarStyles.backHome} to="/">
              Regresar
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
