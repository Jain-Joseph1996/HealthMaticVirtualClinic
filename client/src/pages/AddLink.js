import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../redux/doctor/doctorSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AppointmentLinkForm from "../components/AppointmentLinkForm"
import moment from "moment";

function AddLink() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const {record} = state;
    const onFinish = async (values) => {
        try {
            const data = {id:record._id, data:values}
            dispatch(addLink(data));
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout>
        <AppointmentLinkForm onFinish={onFinish} />
        </Layout>

    );
}

export default AddLink;
