import React from "react";
import Styles from "./Slider.module.css";
import image from "../../../images/kingnando.webp";
import image2 from "../../../images/adelanteking.webp";
import image3 from "../../../images/wwwkingnandoradiotk.webp";

const Slider = () => {
  return (
    <div className={Styles.container_slider} >
      <div className={Styles.slidebar}>
        <input type="radio" id="1" name="image-slide" hidden />
        <input type="radio" id="2" name="image-slide" hidden />
        <input type="radio" id="3" name="image-slide" hidden />

        <div className={Styles.slide}>
          <div className={Styles.item_slide}>
            <img src={image} alt="" />
          </div>

          <div className={Styles.item_slide}>
            <img src={image2} alt="" />
          </div>

          <div className={Styles.item_slide}>
            <img src={image3} alt="" />
          </div>
        </div>
        <div className={Styles.bottom_bar}></div>
      </div>
    </div>
  );
};

export default Slider;
