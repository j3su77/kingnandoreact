import React from 'react'


import PostItems from "../../PostItems"
import Styles from "./posts.module.css";


const Posts = () => {
    return (
        <div className={Styles.container_post} id="posts">
        <section className={`${Styles.content_section} content-section`}>
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading text-center">

                    <h2 className="mb-1">Publicaciones</h2>
                </div>
                <div className="row gx-0 contents">

                    <PostItems />
                </div>


            </div>
        </section>

    </div>
    )
}

export default Posts
