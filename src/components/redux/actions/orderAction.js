import axios from "axios";
import {
  orderItemFailure,
  orderItemRequest,
  orderItemSuccess,
} from "../slices/orderSlice";

export const OrderAction = (id, items) => async (dispatch) => {

  try {
    dispatch(orderItemRequest());

    dispatch(
    //   orderItemSuccess(data)
    );
  } catch (err) {
    dispatch(orderItemFailure(err));
  }
};
