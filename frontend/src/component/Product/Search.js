import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(params.keyword));
  }, [dispatch, params.keyword]);

  const data = useSelector((state) => state.products);
  console.log(data);

  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Seach a product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
