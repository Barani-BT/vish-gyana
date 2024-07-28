import React from "react";
import MetaTag from "../layouts/metaTag";
import { useSelector } from "react-redux";

const Orders = () => {
  const { orderItems, loading } = useSelector((state) => state.OrderState);

  return (
    <>
      <MetaTag title={"Confirm Order"} />
      <div className="row d-flex justify-content-between">
        <div className="col-12  mt-5 order-confirm">
          <h4 className="mb-3 text-secondary">Order Info</h4>

          {orderItems.map((item) => (
            <React.Fragment key={item.product}>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="mt-4 font-weight-bold text-secondary">
                  Order ID : {item.orderId}
                </div>
                <div className="mt-4 font-weight-bold text-secondary">
                  Total :{" "}
                  {item?.items
                    ?.reduce((curr, val) => curr + val.qty * val.price, 0)
                    .toFixed(2)}
                </div>
              </div>
              <hr />
              <div className="mx-4 my-0 px-0 py-2">
                {item.items.map((orderItem) => (
                  <React.Fragment key={orderItem.name}>
                    <div className="row my-4 " key={orderItem.name}>
                      <div className="col-4 col-lg-2 d-flex align-items-center">
                        <img
                          src={orderItem.images[0]}
                          alt={orderItem.name}
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-6 d-flex align-items-center">
                        <a
                          href={`/product/${orderItem.product}`}
                          className="text-secondary text-decoration-none"
                        >
                          {orderItem.name}
                        </a>
                      </div>

                      <div className="col-4 col-lg-4 mt-4 mt-lg-0 d-flex align-items-center text-secondary">
                        <p className="m-0">
                          {orderItem.qty} <span className="mx-1">x</span> ₹{" "}
                          {orderItem.price} ={" "}
                          <b>₹ {orderItem.qty * orderItem.price}</b>
                        </p>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
