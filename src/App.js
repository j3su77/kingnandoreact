import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/posts/Post";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Socialbar from "./components/Socialbar";
import AudioPlayer from "./components/AudioPlayer";
// import PageNotFound from "./components/pages/404/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/pages/404/PageNotFound";
// import PageNotFound from "./components/pages/404/PageNotFound";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AudioPlayer />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route offset={0} path="/post" component={Post} />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

      <Socialbar />
      <Footer />
    </div>
  );
}
export default App;
