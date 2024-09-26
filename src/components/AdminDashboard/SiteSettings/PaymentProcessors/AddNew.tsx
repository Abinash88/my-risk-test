import { Divider, Form, Input, Modal, Select, Switch } from "antd";
import { CloudUpload, Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNew() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-md px-2 md:px-4 lg:px-6 py-2 text-white bg-[#3838F0] flex items-center"
        onClick={() => showModal()}
      >
        <Plus className="md:mr-3 mr-1" /> Add New
      </button>
      <Modal
        title="Add New Payment Processor"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-end mb-7">
            <button
              className="mr-3 rounded-md text-black bg-white border border-grey py-2 px-3"
              onClick={handleOk}
            >
              Cancel
            </button>
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Add Processor
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form layout="vertical" initialValues={{}}>
            <Form.Item label="Payment Processor Name" name="name">
              <Input className="p-2" placeholder="Enter Here" />
            </Form.Item>
            <Form.Item label="API Key" name="api_key">
              <Input className="p-2" placeholder="Enter Here" />
            </Form.Item>
            <Form.Item label="Secret Key" name="secret_key">
              <Input className="p-2" placeholder="Enter Here" />
            </Form.Item>
            <Form.Item label="Auth Key" name="auth_key">
              <Input className="p-2" placeholder="Enter Here" />
            </Form.Item>
            <Form.Item  name="auth_key">
              <button className="w-full py-3 rounded-md  flex items-center justify-center bg-[#F9F9F9] text-[#6868F2]">
                <CloudUpload className="mr-2" /> Click to replace image
              </button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
