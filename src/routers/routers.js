import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Product from "../components/product/product";
import Cart from "../components/cart/cart";
import ConfirmOrder from "../components/cart/confirmOrder";
import OrderSuccess from "../components/cart/orderSuccess";
import Products from "../components/product/products";
import Orders from "../components/cart/orders";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:category_slug" element={<Products />} />
        <Route exact path="/:category_slug/:product_id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/order/confirm" element={<ConfirmOrder />} />
        <Route exact path="/order/success" element={<OrderSuccess />} />
        <Route exact path="/order" element={<Orders />} />
      </Routes>
    </>
  );
};

export default Routers;
