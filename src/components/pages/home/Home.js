import React, { useEffect } from "react";
import Slider from "./Slider";
import Chat from "./Chat";
import Post from "./Posts";
import Gallery from "./Gallery"
import Styles from "./home.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={Styles.container__home}>
      <Slider />
      <Chat />
      <Post />
      <Gallery />
    </div>
  );
};

export default Home;
