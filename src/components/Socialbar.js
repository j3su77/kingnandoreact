import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

import Styles from "./styles-components/socialbar.module.css";

const Socialbar = () => {
  return (
    <div className={Styles.social_sharing}>
      <a href="https://api.whatsapp.com/send?phone=573128464126&app"
      target="_blank" rel="noopener noreferrer">
        <div className={Styles.box_whatsapp}>
          <FaWhatsapp size="3vh" />
        </div>
      </a>

      <a href="https://m.facebook.com/elkingnando/"
      target="_blank" rel="noopener noreferrer">
        <div className={Styles.box_face}>
          <AiOutlineFacebook size="3vh" />
        </div>
      </a>

      <a href="https://www.instagram.com/elkingnando/"
      target="_blank" rel="noopener noreferrer">
        <div className={Styles.box_insta}>
          <RiInstagramLine size="3vh" />
        </div>
      </a>
    </div>
  );
};

export default Socialbar;
