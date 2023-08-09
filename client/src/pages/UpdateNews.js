import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Newsandannouncements from "../components/Newsandannouncements"
import moment from "moment";

function UpdateNews() {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const [news, setNews] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { data } = state
    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post(
                "/api/admin/update-news",
                {
                    ...values,
                    newsId:data._id
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
                navigate("/newsandannouncement");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    };

    const getData = async () => {
      

    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Layout>
            {data && <Newsandannouncements onFinish={onFinish} initivalValues={data} />}
        </Layout>
    );
}

export default UpdateNews;
