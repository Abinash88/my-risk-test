import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'

export default function IssueWarning() {
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
              className="ml-2 rounded-md text-white bg-[#6666B3] p-2"
              onClick={showModal}
            >
              Issue Warning
            </button>
        <Modal
        title="Issue Warning"
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
              className="ml-2 p-2 rounded-md text-white bg-[#3838F0]"
              onClick={handleOk}
            >
              Issue Warning
            </button>
          </div>,
        ]}
      >
        <Form
          className="my-10"
            layout="vertical"
            initialValues={{
                description: "Warning Notice: Violation of Community Guidelines",
                violations:"Your recent activity, [brief description of violation], violates our guidelines. Please stop to avoid further action. Thank you.",
            }}
          >
            <Form.Item label="Description" name="description">
              <Input className="p-2 bg-[#EEF5F9]" />
            </Form.Item>
            <Form.Item label="User's Previous Violations" name="violations">
              <TextArea className="w-full bg-[#EEF5F9]"  />
            </Form.Item>
          </Form>
      </Modal>
    </div>
  )
}
