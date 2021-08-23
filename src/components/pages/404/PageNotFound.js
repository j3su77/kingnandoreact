import React from "react";
import image404 from "../../../images/404speaker.webp"
import Styles from "./pagenotfound.module.css"
const PageNotFound = () => {
  return (
    <div class={Styles.container_404}>
      <div class="content-404">
        <img class="img-fluid " src={image404} alt="" />
        <div class={Styles.content_text_404}>
          <h1>404</h1>
          <h3>página no encontrada</h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
