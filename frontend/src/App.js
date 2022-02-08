import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search.js"
import "./App.css";
import LoginSignup from "./component/User/LoginSignup.js";



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
        <Routes>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Routes>
          <Route path="/products/:keyword" element={<Products />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Routes>
          <Route path="/search" element={<Search />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
