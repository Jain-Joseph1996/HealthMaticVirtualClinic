import React, {useState} from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object({
  fname: yup.string().required("First Name is Required"),
  lname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email address is required"),
  password: yup.string().required("Password is Required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, createdUser } = useSelector((state) => state.user);
  console.log("createdUser", createdUser?.email);
  if (isSuccess) {
    navigate("/login");
  }
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      number: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };


  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice To Meet U</h1>
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Register</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">First Name </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        value={formik.values.fname}
                        onChange={formik.handleChange("fname")}
                        onBlur={formik.handleBlur("fname")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.fname && formik.errors.fname}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Last Name </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={formik.values.lname}
                        onChange={formik.handleChange("lname")}
                        onBlur={formik.handleBlur("lname")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.lname && formik.errors.lname}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Email </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Password </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type={isShown ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                    <div className="form-row">
                      <div className="checkbox-container" style={{margin: '20px 0'}}>
                        <label htmlFor="checkbox">Show password?</label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          style={{height: '12px !important'}}
                          checked={isShown}
                          onChange={togglePassword}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="primary-button my-2 full-width-button" type="submit">
                      REGISTER
                    </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Register;
