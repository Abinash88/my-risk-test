import { Divider, Form, Input, Modal, Select, Switch } from "antd";
import { CloudUpload, Plus } from "lucide-react";
import React, { useState } from "react";

const AddDuration = () => {
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
        className="rounded-md px-6 py-2 text-white bg-[#3838F0] flex items-center"
        onClick={() => showModal()}
      >
        Add Duration
      </button>
      <Modal
        title="Add Duration"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-end my-7">
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
              Add
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form layout="vertical" initialValues={{}}>
            <Form.Item label="Duration name" name="name">
              <Input className="p-2" placeholder="Name" />
            </Form.Item>
            <Form.Item label="Total Times" name="duration">
              <Input className="p-2" placeholder="Enter Total Hours" />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <Input className="p-2" placeholder="Price" />
            </Form.Item>
          </Form>
          <div className="flex justify-between mt-5">
              <p>Enable / Disable Visibility</p>
              <Switch />
            </div>
        </div>
      </Modal>
    </div>
  )
}

export default AddDuration