import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: localStorage.getItem("orderItems")
      ? JSON.parse(localStorage.getItem("orderItems"))
      : [],
    loading: false,
  },
  reducers: {
    orderItemRequest: (state, action) => {
      return action.payload;
    },
    orderItemSuccess: (state, action) => {
      const newOrder = {
        orderId: action.payload.orderId,
        items: action.payload.orderItems,
      };
      state.orderItems.push(newOrder);
      localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
    },
    addorderItemFailure: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
const { actions, reducer } = OrderSlice;
export const { orderItemRequest, orderItemSuccess, orderItemFailure } = actions;
export default reducer;
