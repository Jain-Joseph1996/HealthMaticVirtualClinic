import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);
  const userOrderState = useSelector((state) => state.auth.userorder);
  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, []);

  return (
    <>
      <Meta title={"Orders"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header justify-content-between py-3 d-flex align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Brand</h4>
              <h4 className="cart-col-3">Count</h4>
              <h4 className="cart-col-4">Amount</h4>
              <h4 className="cart-col-5">Date</h4>
            </div>
            {userOrderState &&
              userOrderState?.map((item, key) => {
                return (
                  <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item?.orderItems[0]?.product?.images[0]?.url}
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.orderItems[0]?.product?.title}</p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">
                        {item?.orderItems[0]?.product?.brand}
                      </h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <h5 className="price">
                        {item?.orderItems[0]?.product?.quantity}
                      </h5>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        {item?.orderItems[0]?.product?.price}
                      </h5>
                    </div>
                    <div className="cart-col-5">
                      <h5 className="price">
                        {new Date(item?.createdAt).toLocaleString()}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
