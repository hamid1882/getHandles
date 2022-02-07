/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductDetails.css";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const params = useParams();

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id]);

  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>
        </div>
        <div className="detailsBlock-2">
          <Rating {...options} />
          <span>({product.numOfReviews} Reviews)</span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`₹${product.price}`}</h1>
          <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              <button>-</button>
              <input value="1" type="number" />
              <button>+</button>
            </div>
            <button>Add to cart</button>
          </div>

          <p>
            Status
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}></b>
          </p>
        </div>

        <div className="detailsBlock-4">
          Description: <p>{product.description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
