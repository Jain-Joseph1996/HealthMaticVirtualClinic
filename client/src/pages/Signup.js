import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const signupSchema = yup.object({
  fname: yup.string().required("First Name is Required"),
  lname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email address is required"),
  number: yup.string().required("Mobile number is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { isSuccess, createdUser } = useSelector(({ auth }) => auth);
  console.log("createdUser", createdUser?.email);
  if (isSuccess) {
    navigate("/login");
  }
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formik.values.fname}
                  onChange={formik.handleChange("fname")}
                  onBlur={formik.handleBlur("fname")}
                />
                <div className="error">
                  {formik.touched.fname && formik.errors.fname}
                </div>
                <CustomInput
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formik.values.lname}
                  onChange={formik.handleChange("lname")}
                  onBlur={formik.handleBlur("lname")}
                />
                <div className="error">
                  {formik.touched.lname && formik.errors.lname}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="number"
                  placeholder="Mobile Number"
                  value={formik.values.number}
                  onChange={formik.handleChange("number")}
                  onBlur={formik.handleBlur("number")}
                />
                <div className="error">
                  {formik.touched.number && formik.errors.number}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
