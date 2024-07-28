import axios from "axios";
import {
  categoryFailure,
  categoryRequest,
  categorySuccess,
} from "../slices/categorySlice";
export const getCAtegory = async (dispatch) => {
  try {
    dispatch(categoryRequest({ loading: true }));
    const data = await axios.get(`https://dummyjson.com/products/categories`);
    dispatch(categorySuccess(data));
  } catch (error) {
    dispatch(categoryFailure(error.response.data.message));
  }
};
