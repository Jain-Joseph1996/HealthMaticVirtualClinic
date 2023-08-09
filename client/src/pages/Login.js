import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { loginUser } from "../redux/user/userSlice";
import { useSelector } from "react-redux";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
  password: yup.string().required("Password is Required"),
});


const Login = () => {
  const navigate = useNavigate();
  const { isSuccess, user } = useSelector((state) => state.user);
  if (isSuccess && user?.email) {
    navigate("/");
  }
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
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
        <h1 className="card-title">Welcome Back</h1>
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15 ant-form ant-form-vertical"
                >
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Email  </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-label">
                      <label for="password" class="" title="Password">Password  </label>
                    </div>
                    <div class="form-item">
                      <CustomInput
                        type={isShown ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                        value={formik.values.password}
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
                          style={{height:'12px !important'}}
                          checked={isShown}
                          onChange={togglePassword}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="primary-button my-2 full-width-button" type="submit">
                      LOGIN
                    </button>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <hr />
                    <Link to="/register" className="primary-button my-2 full-width-button register-button">SIGN UP</Link>
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

export default Login;
