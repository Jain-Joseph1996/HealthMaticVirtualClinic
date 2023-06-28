import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { forgotPassword } from "../redux/user/userSlice";

const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
});

const Forgotpassword = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Forgot Password</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Email </label>
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
                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="primary-button my-2 full-width-button" type="submit">
                        SUBMIT
                      </button>
                      <button className="primary-button my-2 full-width-button" type="submit">
                      <Link style={{ textDecoration: 'none'}} className="primary-button my-2 full-width-button" to="/login">CANCEL</Link>
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
};

export default Forgotpassword;
