import { Button } from "@/components/shared/ReuseAble/button";
import { Form, Input, Modal } from "antd";
import { useState } from "react";

export default function CreateEditRole() {
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
        onClick={showModal}
        className="mr-2 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5"
      >
        Create New Role
      </Button>
      <Modal
        title="Edit/Create Role"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-end mb-7">
            <button
              className="p-2 rounded-md text-black bg-white border border-grey-200 "
              onClick={handleOk}
            >
              Cancel
            </button>
            <button
              className="ml-2 p-2 rounded-md text-white bg-[#FF3B30]"
              onClick={handleOk}
            >
              Remove Role
            </button>
            <button
              className="ml-2 p-2 rounded-md text-white bg-[#3838F0]"
              onClick={handleOk}
            >
              Create
            </button>
          </div>,
        ]}
      >
        <Form
          className="my-10"
          layout="vertical"
          initialValues={{
            name: "Backend Engineer",
          }}
        >
          <Form.Item label="Role Name" name="name">
            <Input className="p-2 bg-[#EEF5F9]" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
