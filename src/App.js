import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/posts/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Socialbar from "./components/Socialbar"

function App() {
  return (
    <div>
      <Router >
      <Navbar />
     
     <Route path="/" exact component={Home} />
     <Route path="/post" component={Post} />
     </Router>

      <Socialbar />
      <Footer />
    </div>
  );
}
export default App;
