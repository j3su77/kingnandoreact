import React from 'react'
import Styles from "./post.module.css"
import imageCover from "../../../images/posts-cover/vanced.webp"
import image1 from "../../../images/posts-cover/vanced1.png"
import image2 from "../../../images/posts-cover/vanced2.png"
import image3 from "../../../images/posts-cover/vanced3.png"

const Post = () => {
    return (
        <div class={Styles.container_post}>
        <div class={Styles.container_page_post}>
          
          <div class={Styles.content_image}>
            <img
              class={Styles.img_post_banner}
              src={imageCover}
              alt=""
            />
          </div>
          <h1 class={Styles.title_post }>YouTube sin anuncios</h1>
      
          <div class="paragraph-content p-4">
            <p class="firts-par-post caption-content text-light">¡YouTube Vanced es la
              app que estabas esperando para ver YouTube! Cuenta con una infinidad de
              características que hacen que YouTube sea una experiencia muchísimo
              mejor, desde un modo noche auténticamente optimizado para ahorrar
              batería y descansar tus ojos, hasta la posibilidad de reproducir música
              con la pantalla bloqueada y, lo que quizá sea todavía más impresionante,
              ¡un completísimo bloqueador de publicidad!</p>
          </div>
      
          <div class="paragraph-content mt-1 p-4">
            <p class="caption-content text-light">El equipo de YouTube Vanced ha
              creado un nuevo método más sencillo para poner en marcha Vanced. Los
              usuarios pueden ahora simplemente instalar la aplicación Vanced Manager
              y ésta facilitará el proceso de instalación de MicroG y YouTube Vanced.
              La compatibilidad con Vanced Music, es decir, una versión modificada de
              YouTube Music, también está presente desde la versión 1.3.0. La
              aplicación facilita la elección del tema que quieras y la instalación de
              futuras actualizaciones.</p>
          </div>
      
          <div class="paragraph-content p-4 pt-2">
            <h3 class="subtitle-post text-light">Características de YouTube Vanced</h3>
            <p class="caption-content text-light">
              <ul class="text-light">
                <li class="mb-2">Reproducción con la pantalla bloqueada. </li>
                <li class="mb-2">Publicidad bloqueada. </li>
                <li class="mb-2">Sofisticado modo noche.</li>
                <li class="mb-2">Controles de brillo y volumen.</li>
                <li class="mb-2">Alta personalización.</li>
              </ul>
            </p>
          </div>
      
          <hr />
      
          <div class="paragraph-content mt-1 p-4">
            <h3 class="subtitle-post text-light">Instrucciones de instalación</h3>
            <p class="caption-content text-light">
              <ul class="text-light p-4">
                <li class="mb-2">Descargue e instale la última versión de Vanced
                  Manager
                  <a
               
                    href="https://vancedapp.com/"
                  
                  >desde aquí </a>
                  en tu dispositivo Android.</li>
      
                <li class="mb-3">Abra la aplicación Vanced Manager y toque la flecha
                  azul en la esquina inferior derecha.</li>
      
                <li class="mb-3">Instale Vanced microG.</li>
      
                <li class="mb-3">A continuación, instale YouTube Vanced o YouTube
                  Music Vanced si lo desea</li>
      
                <li class="mb-3">Siga las instrucciones para permitir la instalación
                  de aplicaciones desconocidas.</li>
      
                <li class="mb-3">MicroG se descargará y luego tocarás "Instalar"
                  cuando esté listo.</li>
      
                <li class="mb-3">Selecciona tu tema preferido y toca "NEXT".</li>
      
                <li class="mb-3">Selecciona el idioma que prefieras y toca
                  "FINALIZAR".</li>
      
                <li class="mb-3">Vanced se descargará y tocarás "Instalar" cuando esté
                  listo.</li>
                <br />
                Listo!
              </ul>
      
              <div class="paragraph-content mt-1 p-4">
                <p><strong class="strong">Nota:</strong>
                  se recomienda no iniciar sesion con su cuenta principal de google en
                  MicroG, utiliza o crea otra cuenta de Google solo para usarla con
                  YouTube Vanced, para evitar cualquier bloqueo por parte de Mr.
                  google</p>
              </div>
      
            </p>
          </div>
      
          <div class="portfolio mb-5">
            <div class="container">
              <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-lg-4">
                  <div class="container-fluid d-flex justify-content-center">
                    <img
                      width="237"
                      height="512"
                      class="img-fluid mx-auto"
                      src={image1}
                      alt="..."
                    />
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-4">
                  <div class="container d-flex justify-content-center">
                    <img
                      width="237"
                      height="512"
                      class="img-fluid"
                      src={image2}
                      alt="..."
                    />
                  </div>
                </div>
      
                <div class="col-md-6 col-lg-4">
                  <div class="container d-flex justify-content-center">
                    <img
                      width="237"
                      height="512"
                      class="img-fluid"
                      src={image3}
                      alt="..."
                    />
                  </div>
                </div>
      
              </div>
      
            </div>
          </div>
      
        </div>
      </div>
    )
}

export default Post
