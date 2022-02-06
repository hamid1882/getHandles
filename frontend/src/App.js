import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";

import "./App.css";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <>
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
        <Routes>
          <Route path="/" element={Header}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={Home}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={Footer}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
