import React from "react";
import { Link } from "react-router-dom";
import image from "../images/posts-cover/vanced.webp"
import Styles from "../components/pages/home/posts.module.css"
const PostItems = () => {
  return (
    <>
      <div className="col-md-6 ">
        <Link className="portfolio-item" to="/post">
          <div className="caption">
            <div className="caption-content">
              <p  className={`${Styles.title_post} mb-0` }>Mira youtube sin anuncios!</p>
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
