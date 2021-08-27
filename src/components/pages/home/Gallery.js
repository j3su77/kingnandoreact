import React  from "react";
import Spinner from "../../Spinner"
import Styles from "./gallery.module.css";
import { useGallery } from "../../../hooks/useGallery";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const { images, apiURL , isLoading} = useGallery();

  const errorMsg = "error al cargar imagenes";




  return (
    <div className={Styles.container_gallery} id="gallery">
      <section className="page-section portfolio">
        <div className="container">
          <h2 className="text-center">Galería</h2>

          {isLoading ? <Spinner /> :
              <div className="row justify-content-center">
              {images.length !== 0 ? (
                images.map((image, index) => (
                 <GalleryItem image={image} index={index} apiURL={apiURL} />
                ))
              ) : (
                <h1>{errorMsg}</h1>
              )}
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default Gallery;
