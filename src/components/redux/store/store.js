import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ProductsReducer from "../slices/productsSlice";
import ProductReducer from "../slices/productSlice";
import CategoryReducer from "../slices/categorySlice";
import CartReducer from "../slices/cartSlice";
import OrderReducer from "../slices/orderSlice";


const reducer = combineReducers({
  ProductsState: ProductsReducer,
  ProductState: ProductReducer,
  CategoryState: CategoryReducer,
  CartState: CartReducer,
  OrderState: OrderReducer,

});
export default configureStore({
  reducer,
  middleware: [thunk],
});
