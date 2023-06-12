import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  const { grid, data } = props;
  const navigate = useNavigate();
  let location = useLocation();
  let newdata;
  if (data) {
    newdata = Object.values(data);
  } else {
    newdata = data;
  }

  return (
    <>
      {newdata?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <Link
                  to={"/product/" + item?._id}
                  className="border-0 bg-transparent"
                >
                  <img src={view} alt="view" />
                </Link>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid  mx-auto"
                  alt="product image"
                />
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid  mx-auto"
                  alt="product image"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item.brand}</h6>
                <h5 className="product-title">{item.title}</h5>
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">$ {item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
