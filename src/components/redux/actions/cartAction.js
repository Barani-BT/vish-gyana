import axios from "axios";
import {
  addCartItemFailure,
  addCartItemRequest,
  addCartItemSuccess,
} from "../slices/cartSlice";

export const CartAction = (id, qty) => async (dispatch) => {
  try {
    dispatch(addCartItemRequest());

    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    dispatch(
      addCartItemSuccess({
        product: data.id,
        name: data.title,
        price: data.price,
        stock: data.stock,
        images: data.images,
        qty,
      })
    );
  } catch (err) {
    //console.log(err);
    dispatch(addCartItemFailure(err));
  }
};
