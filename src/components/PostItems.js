import React from "react";
import { Link } from "react-router-dom";
import image from "../images/posts-cover/vanced.webp"
const PostItems = () => {
  return (
    <>
      <div className="col-md-6 ">
        <Link className="portfolio-item" to="/post">
          <div className="caption">
            <div className="caption-content">
              <p className="mb-0">Mira youtube sin anuncios!</p>
            </div>
          </div>
          <img
            className="img-fluid"
            src={image}
            alt="..."
          />
        </Link>
      </div>
      <div className="col-md-6 ">
        <Link className="portfolio-item" to="/post">
          <div className="caption">
            <div className="caption-content">
              <p className="mb-0">Mira youtube sin anuncios!</p>
            </div>
          </div>
          <img
            className="img-fluid"
            src={image}
            alt="..."
          />
        </Link>
      </div>
    </>
  );
};

export default PostItems;
