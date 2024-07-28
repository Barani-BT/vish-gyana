import React from "react";
import MetaTag from "../layouts/metaTag";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs
import { orderItemSuccess } from "../redux/slices/orderSlice";
import { clearCartItems } from "../redux/slices/cartSlice";

const ConfirmOrder = () => {
  const { items: cartItems } = useSelector((state) => state.CartState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subTotalPrice = +cartItems
    .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
    .toFixed(2);
  const shippingPrice = +(subTotalPrice > 500 ? 0 : 40).toFixed(2);
  const taxPrice = +Number(0.05 * subTotalPrice).toFixed(2);
  const totalPrice = Number(subTotalPrice + shippingPrice + taxPrice).toFixed(
    2
  );

  const placeOrder = () => {
    const orderId = uuidv4();
    const updatedData = { orderId, orderItems: cartItems };
    dispatch(orderItemSuccess(updatedData));
    dispatch(clearCartItems());
    navigate("/order/success");
  };

  return (
    <>
      <MetaTag title={"Confirm Order"} />
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-confirm">
          <h4 className="mb-3">Shipping Info</h4>

          <hr />
          <h4 className="mt-4">Your Cart Items:</h4>

          <hr />
          {cartItems.map((item) => (
            <React.Fragment key={item.product}>
              <div className="mx-4 my-0 px-0 py-2">
                <div className="row d-flex align-items-center">
                  <div className="col-4 col-lg-2">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      height="45"
                      width="65"
                    />
                  </div>

                  <div className="col-5 col-lg-6">
                    <a
                      href={`/product/${item.product}`}
                      className="text-decoration-none text-secondary"
                    >
                      {item.name}
                    </a>
                  </div>

                  <div className="col-4 col-lg-4 ">
                    <p className="m-0">
                      {item.qty} <span className="mx-1">x</span> ₹ {item.price}{" "}
                      = <b>₹ {item.qty * item.price}</b>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div className="border border-bg-secondary-subtle rounded-3 px-5 py-4">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal:{" "}
              <span className="order-summary-values ms-3">
                ₹ {subTotalPrice}
              </span>
            </p>
            <p>
              Shipping:{" "}
              <span className="order-summary-values ms-2">
                ₹ {shippingPrice}
              </span>
            </p>
            <p>
              Tax:{" "}
              <span className="order-summary-values ms-3">₹ {taxPrice}</span>
            </p>

            <hr />

            <p>
              Total:{" "}
              <span className="order-summary-values ms-3">₹ {totalPrice}</span>
            </p>

            <hr />
            <button
              className="btn btn-block bg-nav border-nav rounded-pill text-white"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
