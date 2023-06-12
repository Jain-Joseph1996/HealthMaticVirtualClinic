import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const { user } = useSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const token = localStorage.getItem("token");
  const signOut = () => {
    dispatch(logoutUser(user));
    localStorage.clear();
  };

  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h2>
                <Link className="text-white">FABULOUS MERCH</Link>
              </h2>
            </div>

            <div className="col-8">
              <div className="menu-bottom d-flex align-items-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      HOME
                    </NavLink>
                    <NavLink className="text-white" to="/about">
                      ABOUT US
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      CONTACT US
                    </NavLink>
                    {user?._id && (
                      <Link className="text-white" to="/product">
                        OUR STORE
                      </Link>
                    )}
                    {user?._id && (
                      <Link
                        className="text-white"
                        onClick={
                          user ? () => signOut() : () => navigate("/login")
                        }
                        to="/login"
                      >
                        LOGOUT
                      </Link>
                    )}
                    {!user?._id && (
                      <NavLink className="text-white" to="/login">
                        LOGIN
                      </NavLink>
                    )}
                    {user?._id && (
                      <NavLink className="text-white" to="/orders">
                        ORDERS
                      </NavLink>
                    )}
                    {user?._id && (
                      <NavLink className="text-white" to="/cart">
                        <AiOutlineShoppingCart
                          className="fs-3"
                          style={{ color: "white" }}
                        />
                        CART
                        <span className="badge  bg-white text-dark">
                          {cartState?.length ? cartState?.length : 0}
                        </span>
                      </NavLink>
                    )}
                    <div>
                      <FaRegUser className="fs-5" style={{ color: "white" }} />
                    </div>
                    <div>
                      <p className="mb-0" style={{ color: "white" }}>
                        Hai {user?.fname}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
