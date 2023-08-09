import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const role = user?.role
  const firstLink = role == "admin" ? "/admin/userslist" : role == "doctor" ? "/doctor/appointments" : "/home";
  // Calculate the first link based on user's role/admin/userslist


  useEffect(() => {
    navigate(firstLink)
  }, [role]);

  return (
    <Layout>
      <Row gutter={20}>
      </Row>
    </Layout>
  );
}

export default Dashboard;
