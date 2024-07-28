import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: { loading: false },
  reducers: {
    productsRequest: (state, action) => {
      return action.payload;
    },
    productsSuccess: (state, action) => {
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.products.length,
        productsPerPage: 10,
      };
    },
    productsFailure: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});
const { actions, reducer } = ProductsSlice;
export const { productsRequest, productsSuccess, productsFailure } = actions;
export default reducer;
