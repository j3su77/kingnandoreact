import React from "react";
import Styles from "../components/styles-components/footer.module.css";
import image from "../images/title-kn2.png"
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FcFlashOn } from "react-icons/fc"

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <img
        className={Styles.logoFooter}
        width="100%"
        src={image}
        alt=""
      />

      <div className={Styles.container_social_buttons}>
        <ul className={Styles.social_buttons}>
          <li>
            <a href="https://api.whatsapp.com/send?phone=573128464126&app">
          <div className={Styles.fab}><FaWhatsapp  size="2.5rem"  /></div>
            </a>
          </li>
          <li>
            <a href="https://m.facebook.com/elkingnando/">
            <div className={Styles.fab}><AiOutlineFacebook  size="2.5rem"  /></div>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/elkingnando/">
            <div className={Styles.fab}><RiInstagramLine size="2.5rem"  /></div>
              
            </a>
          </li>
        </ul>
      </div>

      <p>Todos los derechos reservados.</p>
      <p>
        Diseñado y Desarrollado por 
        <a
          href="https://www.facebook.com/Jesusvergara11"
          className={Styles.yisus}
          target="_blank" rel="noopener noreferrer"
        >
           <span> J3su<FcFlashOn /></span>
        </a>
      </p>
 
      <p>
        <span styles={{ fontSize: "1.1rem" }}>&copy;</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
