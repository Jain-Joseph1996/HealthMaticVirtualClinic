import { Button, Col, Form, Input, Row, TextArea, Select } from "antd";
import moment from "moment";
import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function MedicalHistoryForm({ onFinish, initialValues }) {
  console.log(initialValues)
  const { TextArea } = Input;
  const navigate = useNavigate();
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initialValues
      }}
    >
      <Row gutter={20}>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Do you have any chronic medical conditions (e.g., diabetes, hypertension, asthma)?"
            name="chronicMedicalConditions"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Are you currently under treatment for any specific medical condition?"
            name="underTreatement"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Do you have any known allergies to medications, foods, or environmental factors?"
            name="allergies"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="List all the medications you are currently taking"
            name="medications"
            rules={[{ required: true }]}
          >
            <Input placeholder="Medications" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Have you undergone any surgeries in the past? If yes, please provide details."
            name="surgeries"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Are there any significant medical conditions that run in your family?"
            name="familymedicalhistory"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Are your vaccinations up-to-date? "
            name="immunizations"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Have you experienced any recent health issues, symptoms, or concerns?"
            name="recenthealthissues"
            rules={[{ required: true }]}
          >
            <Select
              // style={{ width: 120 }}
              options={[
                { value: 'Yes', label: 'Yes' },
                { value: 'No', label: 'No' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <Row gutter={20}>
        <Col span={12} xs={24} sm={24} lg={12}>
          <Form.Item
            required
            label="Additional Comments"
            name="additionalComments"
            rules={[{ required: false }]}
          >
           <TextArea rows={4} placeholder="Additional Comments" />
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          SUBMIT
        </Button>
      </div>
    </Form>
  );
}

export default MedicalHistoryForm;
