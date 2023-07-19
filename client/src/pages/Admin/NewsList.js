import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

function NewsList() {
    const [news, setNews] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = async () => {
        try {
            dispatch(showLoading());
            const resposne = await axios.get("/api/admin/get-all-news", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            dispatch(hideLoading());
            if (resposne.data.success) {
                setNews(resposne.data.data);
            }
        } catch (error) {
            dispatch(hideLoading());
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Content",
            dataIndex: "content",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (
                <div className="d-flex">

                    <h1
                        className="anchor"
                        onClick={() => navigate("/updatenews", {
                            state: {
                                data: record
                            }
                        }
                        )}
                    >
                        Edit
                    </h1>
                </div>
            ),
        },
    ];

    return (
        <Layout>
            <h1 className="page-header">News and Announcements</h1>
            <hr />
            <div className="d-flex">
                <h1
                    className="anchor"
                    onClick={() => navigate("/addnews")}
                >
                    Add News
                </h1>
            </div>
            <hr />
            <Table columns={columns} dataSource={news} />
        </Layout>
    );
}

export default NewsList;
