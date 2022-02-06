import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import "./Home.css";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { productReducer } from "../../Reducers/productReducer";
import Loader from "../layout/Loader/Loader";

const product = {
  name: "Blue handle",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "₹3000",
  _id: "abhishek",
};

function Home() {
  const dispatch = useDispatch(productReducer);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Fragment>
            <MetaData title="gethandles" />
            <div className="banner">
              <p>Welcome to Ecommerce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>

              <a href="#container">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
