import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/posts/Post";
import Navbar from "./components/Navbar";
import "./App.css"
import Footer from "./components/Footer";
import Socialbar from "./components/Socialbar";
import AudioPlayer from "./components/AudioPlayer";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AudioPlayer />
        <Route path="/" exact component={Home} />
        <div className="container_post">
        <Route path="/post" component={Post} />
        </div>
        </Router>

      <Socialbar />
      <Footer />
    </div>
  );
}
export default App;
