import React from "react";
import Styles from "../components/styles-components/adsbanner.module.css";
import advertisingImage from "../images/advertising.png";

const AdsBanner = () => {
  return (
    <div className={Styles.container_ads}>
      <img
        className={Styles.imgAds}
        width="100%"
        src={advertisingImage}
        alt=""
      />
    </div>
  );
};
export default AdsBanner;
