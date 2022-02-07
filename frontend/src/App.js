import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";

import "./App.css";
import ProductDetails from "./component/Product/ProductDetails";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
