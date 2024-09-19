import { Button, Divider, Form, Input, Modal, Select, Switch } from "antd";
import React, { useState } from "react";

export default function AddRegion() {
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
    <>
      <Button
        className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5"
        onClick={showModal}
      >
        Add Region
      </Button>

      <Modal
        title="Add New Region"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-end mb-7">
            <Button
              className="py-5 px-6"
              onClick={handleOk}
            >
              Cancel
            </Button>
            <button
              className="ml-2 rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Add Region
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          {/* <Divider type="horizontal" className="mt-0" /> */}
          <Form
          className="my-10"
            layout="vertical"
            initialValues={{
                region: "Select",
            }}
          >
            <Form.Item label="Region Name" name="name">
              <Input className="p-2" placeholder="Name" />
            </Form.Item>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">
                Enable / Disable Visibility
              </p>
              <Switch defaultChecked />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
