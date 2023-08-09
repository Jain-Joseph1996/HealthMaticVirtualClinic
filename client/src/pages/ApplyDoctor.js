import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { applyDoctor } from "../redux/doctor/doctorSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";

function ApplyDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, user } = useSelector((state) => state.user);
  if (isSuccess) {
    navigate("/");
  }
  const onFinish = async (values) => {
    try {
      const data = { id: user._id, doctorData: values };
      console.log(data)
      dispatch(applyDoctor(data));
      navigate("/home")
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
    
      {/* <div className="authentication-form-doctor card p-3"> */}
        {/* <Container class1="login-wrapper py-5 home-wrapper-2"> */}
          {/* <div className="row">
            <div className="col-12"> */}
              {/* <div className="auth-card"> */}
                <h3 className="text-center mb-3">Doctor Registration</h3>
                <DoctorForm onFinish={onFinish} />
              {/* </div> */}
            {/* </div>
          </div> */}
        {/* </Container> */}
      {/* </div> */}
    
    </Layout>

  );
}

export default ApplyDoctor;
