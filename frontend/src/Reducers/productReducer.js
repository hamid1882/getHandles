import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.product,
        productsCount: action.payload.productsCount,
      };

    case PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

