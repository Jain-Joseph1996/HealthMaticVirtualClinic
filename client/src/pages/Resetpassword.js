import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const ResetPasswordSchema = yup.object({
  password: yup.string().required("Password is Required"),
  confpassword: yup
    .string()
    .required("Password is Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Resetpassword = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confpassword: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      const details = {
        password: values.password,
        userId: userId,
      };
      dispatch(resetPassword(details));
      navigate("/login");
    },
  });

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">New Password </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="password"
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
                  </div>
                  <div className="form-row">
                    <div className="form-label">
                      <label for="email" class="" title="Email">Confirm Password </label>
                    </div>
                    <div class="ant-col ant-form-item-control">
                      <CustomInput
                        type="password"
                        name="confpassword"
                        placeholder="Confirm Password"
                        onChange={formik.handleChange("confpassword")}
                        onBlur={formik.handleBlur("confpassword")}
                        value={formik.values.confpassword}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.confpassword && formik.errors.confpassword}
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="primary-button my-2 full-width-button" type="submit">OK</button>
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

export default Resetpassword;
