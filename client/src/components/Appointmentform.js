import { Button, Col, Form, Input, Row, TimePicker, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState, useRef } from "react";
import Doctor from "../components/Doctor";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function Appointmentform({ onFinish, initivalValues }, props) {
    const navigate = useNavigate();
    const [showOHIDropdown, setShowOHIDropdown] = useState(false);
    const [showInsuranceDropdown, setShowInsuranceropdown] = useState(false);
    const [showOHIPInput, setShowOHIPInput] = useState(false);
    const handleDropdownOHIPdd = (value) => {
        setShowOHIDropdown(value === 'No');
        setShowOHIPInput(value === 'Yes');
    };
    const handleDropdownInsurancedd = (value) => {
        setShowInsuranceropdown(value === 'Yes');
    };

    return (
        <>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    ...initivalValues
                }}
            >
                <h1 className="card-title mt-3">Appointment details</h1>
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item
                            required
                            label="Do you have valid OHIP Card?"
                            name="ohipcard"
                            rules={[{ required: true }]}
                        >
                            <Select
                                // style={{ width: 120 }}
                                onChange={handleDropdownOHIPdd}
                                options={[
                                    { value: 'Yes', label: 'Yes' },
                                    { value: 'No', label: 'No' }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    {showOHIPInput && (
                        <Col span={8} xs={24} sm={24} lg={8}>
                            <Form.Item
                                required
                                label="OHIP Card Number?"
                                name="ohipcardnumber"
                                rules={[{ required: true }]}
                            >
                                 <Input placeholder="OHIP Card Number" />
                            </Form.Item>
                        </Col>
                    )}
                    {showOHIDropdown && (
                        <Col span={8} xs={24} sm={24} lg={8}>
                            <Form.Item
                                required
                                label="Do you have third-party insurance?"
                                name="thirdpartyinsurance"
                                rules={[{ required: true }]}
                            >
                                <Select
                                    // style={{ width: 120 }}
                                    onChange={handleDropdownInsurancedd}
                                    options={[
                                        { value: 'Yes', label: 'Yes' },
                                        { value: 'No', label: 'No' }
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    )}
                    </Row> 
                    

                    {showInsuranceDropdown && (
                        <>
                        <Row gutter={20}>
                                <Col span={8} xs={24} sm={24} lg={8}>
                                    <Form.Item
                                        required
                                        label="Insurance Provider"
                                        name="insuranceprovider"
                                        rules={[{ required: true }]}
                                    >
                                        <Select
                                            // style={{ width: 120 }}
                                            options={[
                                                { value: 'Blue Cross', label: 'Blue Cross' },
                                                { value: 'Guard me', label: 'Guard me' },
                                                { value: 'IFHP', label: 'IFHP' },
                                                { value: 'UHIP', label: 'UHIP' }
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>


                                <Col span={8} xs={24} sm={24} lg={8}>
                                    <Form.Item
                                        required
                                        label="Group Number"
                                        name="groupnumber"
                                        rules={[{ required: true }]}
                                    >
                                        <Input placeholder="Group Number" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={20}>
                                <Col span={8} xs={24} sm={24} lg={8}>
                                    <Form.Item
                                        required
                                        label="Policy Number"
                                        name="policynumber"
                                        rules={[{ required: true }]}
                                    >
                                        <Input placeholder="Policy Number" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>
                    )}
               
                <hr />
                {/* <h1 className="card-title mt-3">Professional Information</h1> */}
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item
                            required
                            label="Appointment type?"
                            name="connectiontype"
                            rules={[{ required: true }]}
                        >
                            <Select
                                // style={{ width: 120 }}
                                options={[
                                    { value: 'In person', label: 'In person' },
                                    { value: 'Video', label: 'Video' }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item
                            required
                            label="Select the doctor specialization"
                            name="specialization"
                            rules={[{ required: true }]}
                        >
                            <Select
                                // style={{ width: 120 }}
                                options={[
                                    { value: 'Physician', label: 'Physician' },
                                    { value: 'Cardiology', label: 'Cardiology' },
                                    { value: 'Neurology', label: 'Neurology' },
                                    { value: 'Pediatrics', label: 'Pediatrics' },
                                    { value: 'Dermatology', label: 'Dermatology' },
                                    { value: 'Gastroenterology', label: 'Gastroenterology' }
                                ]}
                            />
                        </Form.Item>
                    </Col>

                </Row>

                <div className="d-flex justify-content-end">
                    <Button className="primary-button" htmlType="submit">
                        SUBMIT
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default Appointmentform;
