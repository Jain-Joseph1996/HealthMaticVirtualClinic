import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MedicalHistoryForm from "../components/MedicalHistoryForm";
import moment from "moment";

function MedicalHistory() {
  const { user } = useSelector(({ auth }) => auth);
  const params = useParams();
  const [history, setHistory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/update-history",
        {
          ...values,
          userId: user._id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  const getHistoryData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/get-history-info-by-user-id",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        console.log(response.data.data)
        setHistory(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getHistoryData();
  }, []);
  return (
    <Layout>
      <h1 className="page-title">Medical History</h1>
      <hr />
      {history? <MedicalHistoryForm onFinish={onFinish} initivalValues={history} /> : <MedicalHistoryForm onFinish={onFinish}/>}
       
    </Layout>
  );
}

export default MedicalHistory;
