import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

function ProductCard({ product }) {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const images = product.images.map((images) => images.url);
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={images.toString()} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} /> <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>₹{product.price}</span>
    </Link>
  );
}

export default ProductCard;
