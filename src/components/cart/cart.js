import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  decreaseCartItemQty,
  increaseCartItemQty,
  removeCartItem,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const { items: cartItems } = useSelector((state) => state.CartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/order/confirm");
  };
  return (
    <div className="container container-fluid">
      {cartItems.length === 0 ? (
        <h2 className="mt-5 text-center">
          <b>Your Cart is Empty</b>
        </h2>
      ) : (
        <div>
          <h5 className="mt-5 ">
            Your Cart: <b>{cartItems.length} items</b>
          </h5>

          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems?.map((item) => (
                <>
                  <hr />
                  <div className="cart-item">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item?.images?.[0]}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="col-5 col-lg-3 ">
                        <a
                          href={`/product/${item?.product}`}
                          className="text-decoration-none text-secondary"
                        >
                          {item?.name}
                        </a>
                      </div>

                      <div className="col-4 col-lg-2">
                        <p className="font-weight-bold fs-4 text-orange m-0">
                          ₹ {item?.price}
                        </p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className=" d-inline">
                          <span
                            className="btn btn-outline-danger"
                            onClick={() =>
                              dispatch(decreaseCartItemQty(item?.product))
                            }
                          >
                            -
                          </span>
                          <input
                            type="number"
                            className="form-control count d-inline border-0 text-center bg-white"
                            style={{ width: "3rem" }}
                            value={item?.qty}
                            readOnly
                          />

                          <span
                            className="btn btn-outline-primary px-2"
                            onClick={() =>
                              dispatch(increaseCartItemQty(item?.product))
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>

                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <RiDeleteBin6Line
                          onClick={() =>
                            dispatch(removeCartItem(item?.product))
                          }
                          className="text-danger "
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div className="border border-bg-secondary-subtle rounded-3 px-5 py-4">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values ms-3">
                    {cartItems.reduce((acc, curr) => acc + curr.qty, 0)} (Units)
                  </span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values ms-3">
                    ₹{" "}
                    {cartItems
                      .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
                      .toFixed(2)}
                  </span>
                </p>

                <hr />
                <button
                  className="btn btn-block bg-nav border-nav rounded-pill text-white"
                  onClick={checkoutHandler}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
