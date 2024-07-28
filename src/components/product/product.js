import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/productAction";
import { useParams } from "react-router-dom";
import Loader from "../layouts/loader";
import { Carousel } from "react-bootstrap";
import MetaTag from "../layouts/metaTag";
import { CartAction } from "../redux/actions/cartAction";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const [qty, setQty] = useState(1);
  const [imageLoading, setImageLoading] = useState(true);
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductState);

  const { product_id } = useParams();

  const qtyIncrement = () => {
    const qty = document.querySelector(".count");
    if (product.stock === 0 || qty.valueAsNumber >= product.stock) return;
    const quantity = qty.valueAsNumber + 1;
    setQty(quantity);
  };

  const qtyDecrement = () => {
    const qty = document.querySelector(".count");
    if (qty.valueAsNumber === 1) return;
    const quantity = qty.valueAsNumber - 1;
    setQty(quantity);
  };

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, [dispatch, product_id]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      {!product ? (
        <Loader />
      ) : (
        <>
          <MetaTag title={product.name} />

          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid mt-5" id="">
              <Carousel pause="hover">
                {product?.images &&
                  product.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      {imageLoading && <Skeleton height={500} width={500} />}
                      <img
                        src={image}
                        alt={product.title}
                        height="500"
                        width="500"
                        onLoad={handleImageLoad}
                        className={imageLoading ? "d-none" : ""}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{product.title}</h3>
              <p id="text-secondary " style={{ fontSize: "0.8rem" }}>
                Product # {product.sku}
              </p>

              <hr />

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">
                ({product?.reviews?.length} Reviews)
              </span>

              <hr />

              <p id="" className="fs-2 font-weight-bold">
                ₹ {product.price}
              </p>
              <div className=" d-inline ">
                <span
                  className="btn btn-outline-danger  "
                  onClick={qtyDecrement}
                >
                  -
                </span>

                <input
                  type="number"
                  className="form-control count d-inline border-0 text-center bg-white"
                  style={{ width: "3rem" }}
                  value={qty}
                  readOnly
                />

                <span
                  className="btn btn-outline-primary px-2"
                  onClick={qtyIncrement}
                >
                  +
                </span>
              </div>
              <button
                type="button"
                id="cart_btn"
                className="btn  bg-nav d-inline ml-4 text-white"
                disabled={product.stock < 1}
                onClick={() => dispatch(CartAction(product.id, qty))}
              >
                Add to Cart
              </button>

              <hr />

              <p>
                Status:{" "}
                <span
                  id=""
                  className={product.stock < 1 ? "text-danger" : "text-success"}
                >
                  {product.stock < 1 ? "Out of Stock" : "In Stock"}
                </span>
              </p>

              <hr />

              <h4 className="mt-2">Description:</h4>
              <p>{product.description}</p>
              <hr />
              <p id="text-secondary mb-3" style={{ fontSize: "0.8rem" }}>
                Sold by: <strong>{product.brand}</strong>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
