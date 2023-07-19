import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Layout from "../../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const {state} = useLocation();
  const {appointmentdata} = state
  console.log(state)
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        const docDetails =  response.data.data.filter((obj) => {
          return obj.specialization === appointmentdata.appointmentData.specialization;
        });
        console.log(docDetails)
        setDoctors(docDetails);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <Row gutter={20}>
        {doctors.map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} appointmentdata = {appointmentdata} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default DoctorList;