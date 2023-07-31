import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";
import {Link} from 'react-router-dom'

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => auth);
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const data = { userId: user._id }
      const localStoragedata = JSON.parse(localStorage.getItem("customer"));
      const resposne = await axios.get("/api/user/get-appointments-by-user-id",
        {
          paramas: data,
          headers: {
            Authorization: `Bearer ${localStoragedata.token}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        console.log(resposne.data.data)
        setAppointments(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Doctor",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      render: (text, record) => (
        <span>
          {record.doctorInfo.phoneNumber}
        </span>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Doctor Notes",
      dataIndex: "notes",
      render: (text, record) => (
        <span>
          {record.doctornotes}
        </span>
      ),
    },
    {
      title: "Meeting Link",
      dataIndex: "notes",
      render: (text, record) => (
        <div className="d-flex">
        {record.otherInfo.connectiontype == "Video" && record.status == "approved" && (
         <Link to ={record.link}>
             Meeting Link
           </Link>
       )}
     </div>
      ),
    }
  ];
  useEffect(() => {
    getAppointmentsData();
  }, []);
  return <Layout>
    <h1 className="page-title">Appointments</h1>
    <hr />
    <Table columns={columns} dataSource={appointments} />
  </Layout>
}

export default Appointments;
