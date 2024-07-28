import { useSelector } from "react-redux";
import logo from "../../assets/images/TN_CART.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
  const { items: cartItem } = useSelector((state) => state.CartState);
  const [cartCount, setCartCount] = useState();
  useEffect(() => {
    setCartCount(cartItem.length);
  }, [cartItem]);
  return (
    <nav className="navbar row bg-nav">
      <div className="col-3">
        <div className="navbar-brand mx-5">
          <Link to="/">
            <img width="50px" src={logo} alt="TNcart_logo" />
          </Link>
        </div>
      </div>

      <div className="col-3 col-md-2 mt-4 mt-md-0 text-center d-flex justify-content-around mx-5">
        <div className="">
          <a href="/cart " className="text-decoration-none">
            <span id="cart" className="ml-3 text-white">
              Cart
              <TiShoppingCart className="fs-3 ms-1" />
            </span>
            {cartCount > 0 && (
              <span className="ml-1" id="cart_count">
                {cartCount}
              </span>
            )}
          </a>
        </div>
        <div>
          <IoSettingsSharp className="fs-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
