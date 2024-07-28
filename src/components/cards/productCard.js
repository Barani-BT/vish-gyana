import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
import { CartAction } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, col }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageLoad = () => {
    setLoading(false);
  };

  const clickHandler = () => {
    navigate(`${product.id}`);
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();
    dispatch(CartAction(product.id, 1));
  };

  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div
        className="card rounded-lg"
        onClick={clickHandler}
        style={{ minHeight: "25rem" }}
      >
        <div className="card-body d-flex flex-column border-0 bg-light">
          {loading && <Skeleton height={147} width={230} />}
          <img
            className={`w-100 mx-auto ${loading ? "d-none" : ""}`}
            style={{ maxHeight: "150px" }}
            src={product.images[0]}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
        <div className="card-footer bg-white border-0 fs-5">
          <h5 className="card-title fs-5 ">
            <Link
              to={`/product/${product._id}`}
              className="text-dark text-decoration-none"
            >
              {product.title}
            </Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.rating / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">
              ({product.reviews.length || 0} Reviews)
            </span>
          </div>
          <p className="card-text">₹ {product.price}</p>
          <button
            id="view_btn"
            className="btn btn-block bg-nav text-white "
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
