import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import Appointmentform from "../components/Appointmentform"
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, user } = useSelector(({ auth }) => auth);
  const onFinish = async (values) => {
    try {
      const data = { id: user._id, appointmentData: values };
      console.log(data)
      navigate("/doctors", {state:{
        appointmentdata: data
      }})
      
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
            <Appointmentform onFinish={onFinish}/>
    </Layout>
  );
}

export default Home;
