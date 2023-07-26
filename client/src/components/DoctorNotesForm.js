import React from "react";
import { Button, Col, Form, Input, Row, TimePicker, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function DoctorNotesForm({ onFinish, initivalValues }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { TextArea } = Input;
    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                ...initivalValues
            }}
        >
            <h1 className="card-title mt-3">Enter Doctor Notes here</h1>
            <Row gutter={20}>
                <Col span={24} xs={24} sm={24} lg={24}>
                    <Form.Item
                        required
                        label="Doctor notes"
                        name="notes"
                        rules={[{ required: true }]}
                    >
                        <TextArea rows={4} placeholder="Content"/>
                    </Form.Item>
                </Col>
            </Row>

            <div className="d-flex justify-content-center">
                <Button className="primary-button" htmlType="submit">
                    SUBMIT
                </Button>
            </div>
        </Form>
    );
}
export default DoctorNotesForm;
