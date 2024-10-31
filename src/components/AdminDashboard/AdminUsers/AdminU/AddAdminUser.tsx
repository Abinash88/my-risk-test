import { Button } from "@/components/shared/ReuseAble/button";
import { Divider, Form, Input, Modal, Select, Switch } from "antd";
import React, { useState } from "react";

export default function AddAdminUser() {
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
      <Button
        onClick={() => showModal()}
        className="mr-2 rounded-md  text-white py-1 h-10 px-5"
      >
        Add Admin User
      </Button>
      <Modal
        title="Add New Admin User"
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
              Add Admin
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form
            layout="vertical"
            initialValues={{
              role: "Select Role",
            }}
          >
            <Form.Item label="Full Name" name="full_name">
              <Input className="p-2" placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input className="p-2" placeholder="name@gmail.com" />
            </Form.Item>
            <Form.Item label="Role" name="role">
              <Select>
                <Select.Option value="Select Role">Select Role</Select.Option>
                <Select.Option value="Select Role">
                  Assistance Admin
                </Select.Option>
                <Select.Option value="Select Role">
                  Marketing Manager
                </Select.Option>
                <Select.Option value="Select Role">
                  Customer Support
                </Select.Option>
                <Select.Option value="Select Role">
                  Sales Representative
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password className="p-2" placeholder="******" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
