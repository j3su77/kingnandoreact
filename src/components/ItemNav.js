import React from 'react'
import  {Link}   from "react-scroll";
import navbarStyles from "./styles-components/navbar.module.css";

const ItemNav = ({ item , onClick }) => {
    return (
        <Link
        className={navbarStyles.nav_links}             
        to={item.url}
        onClick={onClick}
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
      >
        {item.title}
      </Link>
    )
}

export default ItemNav
