import React from "react";

const OrderSuccess = () => {
  return (
    <>
      {" "}
      <div className="container container-fluid">
        <div className="row justify-content-center">
          <div className="col-6 mt-5 text-center">
            <img
              className="my-5 img-fluid d-block mx-auto"
              src="/images/success.png"
              alt="Order Success"
              width="200"
              height="200"
            />
            <h2>Your Order has been placed successfully.</h2>
            <a
              href="/order"
              className="text-decoration-none btn btn-outline-success mt-2"
            >
              Go to Orders
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
