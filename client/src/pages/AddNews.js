import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncement } from "../redux/admin/adminSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Newsandannouncements from "../components/Newsandannouncements"
import moment from "moment";

function AddNews() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            console.log(values)
            dispatch(addAnnouncement(values));
            navigate("/newsandannouncement")
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
        <Newsandannouncements onFinish={onFinish} />
        </Layout>

    );
}

export default AddNews;
