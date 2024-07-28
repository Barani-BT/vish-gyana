import axios from "axios";
import {
  productsFailure,
  productsRequest,
  productsSuccess,
} from "../slices/productsSlice";
import {
  productFailure,
  productRequest,
  productSuccess,
} from "../slices/productSlice";

export const getProducts = (slug) => async (dispatch) => {
  try {
    dispatch(productsRequest({ loading: true }));
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${slug}`
    );

    dispatch(productsSuccess(data));
  } catch (error) {
    dispatch(productsFailure(error.response.data.message));
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(productRequest({ loading: true }));
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productFailure(error.response.data.message));
  }
};
