import React from 'react'
import Styles from "./gallery.module.css";
import image from "../../../images/gallery/king1.jpg"
import image2 from "../../../images/gallery/king2.jpg"
import image3 from "../../../images/gallery/king3.jpg"
import image4 from "../../../images/gallery/king4.jpg"
import image5 from "../../../images/gallery/king5.jpg"
import image6 from "../../../images/gallery/king6.jpg"

const Gallery = () => {
    return (
        <div className={Styles.container_gallery} id="gallery">
        <section className="page-section portfolio">
            <div className="container">
            
                <h2 className="text-center">Galería</h2>
          
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container-fluid mx-auto w-100" data-bs-toggle="modal"
                            data-bs-target="#portfolioModal1">
                            <img className={ ` ${Styles.img_fluid} img-fluid`} src={image} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className={ ` ${Styles.img_fluid} img-fluid`} src={image2} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className={`${Styles.img_fluid} img-fluid`} src={image3} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className={`${Styles.img_fluid} img-fluid`} src={image4} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className={`${Styles.img_fluid} img-fluid`} src={image5} alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className="col-md-6 col-lg-4">
                        <div className="container mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <img className={`${Styles.img_fluid} img-fluid`} src={image6} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>




    </div>
    )
}

export default Gallery
