import React from "react";
import Styles from "./gallery.module.css";

const GalleryItem = ({ image, index, apiURL }) => {
  return (
    <div key={index} className="col-md-6 col-lg-4">
      <div
        className="container-fluid mx-auto w-100"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <img
          className={` ${Styles.img_fluid} img-fluid`}
          src={apiURL + image.nameImg}
          alt={image.title}
        />
      </div>
    </div>
  );
};

export default GalleryItem;
