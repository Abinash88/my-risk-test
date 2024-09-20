import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { CloudUpload } from "lucide-react";

const ViewPaymentProcessor = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white rounded-md mx-5 my-5 flex flex-col justify-center">
      <h1 className="p-3 text-2xl font-semibold mb-6 text-start">
        View Payment Processor
      </h1>

      <img
        src="/path/to/paypal-logo.png"
        alt="PayPal Logo"
        className="px-3 mb-4 h-16"
      />

      <div className="w-full p-6">
        <button className="p-3 rounded-md w-[calc(100%-20px)] flex items-center justify-center bg-[#F9F9F9] text-[#6868F2]">
          <CloudUpload className="mr-2"/> Click to replace image
        </button>

        <h2 className="text-center text-xl font-bold my-6">PayPal</h2>

        <Form
          form={form}
          name="paymentProcessor"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4 mx-10"
        >
          <Form.Item
            label="API Key"
            name="apiKey"
            rules={[{ required: true, message: "Please input the API Key!" }]}
          >
            <Input placeholder="Enter your API Key" className="p-2" />
          </Form.Item>

          <Form.Item
            label="Secret Key"
            name="secretKey"
            rules={[
              { required: true, message: "Please input the Secret Key!" },
            ]}
          >
            <Input placeholder="Enter your Secret Key" className="p-2" />
          </Form.Item>

          <Form.Item
            label="Auth Key"
            name="authKey"
            rules={[{ required: true, message: "Please input the Auth Key!" }]}
          >
            <Input placeholder="Enter your Auth Key" className="p-2" />
          </Form.Item>

          <Form.Item className="flex justify-center ">
            <button className="my-4 rounded-md px-6 py-2 text-white bg-[#3838F0] flex items-center">
              Update
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ViewPaymentProcessor;
