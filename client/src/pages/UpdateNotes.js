import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import DoctorNotesForm from "../components/DoctorNotesForm"
import moment from "moment";

function UpdateNews() {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const {record} = state;
    console.log(state.record);
    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const data = {id:record._id, data:values}
            const response = await axios.post(
                "/api/doctor/update-notes",
                {
                    data,
                    Id:data._id
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
                navigate("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
            {state.record.doctornotes&& <DoctorNotesForm onFinish={onFinish} initivalValues={state.record.doctornotes} />}
        </Layout>
    );
}

export default UpdateNews;
