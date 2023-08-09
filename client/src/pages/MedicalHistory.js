import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MedicalHistoryForm from "../components/MedicalHistoryForm";
import { toast } from "react-toastify";

function MedicalHistory() {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [history, setHistory] = useState(null);
  const [isEditMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/update-history",
        {
          ...values,
          userId: user._id,
          useremail:user.email,
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
        toast.success(response.data.success)
        setHistory(response.data.data);
        console.log(history);

      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getHistoryData();
    console.log("rendered")
  }, []);
  return (
    <Layout>
      <h1 className="page-title">Medical History</h1>
      <hr />  
      {history && <MedicalHistoryForm onFinish={onFinish} initialValues={history || null} />}
      {!history && <MedicalHistoryForm onFinish={onFinish}  />}
    </Layout>
  );
}

export default MedicalHistory;
