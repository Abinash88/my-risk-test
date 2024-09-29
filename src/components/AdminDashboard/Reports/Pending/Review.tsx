import { Button, Form, Input, InputNumber, Modal } from 'antd'
import React,{useState} from 'react'

export default function Review() {
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
    <div >
     <Button
            className="bg-[#3838F0] text-white mt-2 md:mt-0 md:ml-2"
            onClick={showModal}
          >
            Review
          </Button>

        <Modal
        title="Report Details"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="flex justify-end mb-7">
            <button
              className="p-1 rounded-md text-white bg-[#007AFF]"
              onClick={handleOk}
            >
              View Violation
            </button>
            <button
              className="ml-2 rounded-md text-white bg-[#6666B3] p-1"
              onClick={handleOk}
            >
              Issue Warning
            </button>
            <button
              className="ml-2 p-1 rounded-md text-white bg-[#FAB503]"
              onClick={handleOk}
            >
              Restrict User
            </button>
            <button
              className="ml-2 rounded-md text-white bg-[#FF9500] p-1"
              onClick={handleOk}
            >
              Suspend User
            </button>
            <button
              className="ml-2 rounded-md text-white bg-[#FF3B30] py-2 px-3"
              onClick={handleOk}
            >
              Ban User
            </button>
          </div>,
        ]}
      >
        <Form
          className="my-10"
            layout="vertical"
            initialValues={{
                description: "User posted multiple spam messages in forums.",
                violations:2,
                comment:"User is disrupting conversations.",
                link:"www.hermandai.com/T&OStanding/risk01"
            }}
          >
            <Form.Item label="Description" name="description">
              <Input className="p-2 bg-[#EEF5F9]" />
            </Form.Item>
            <Form.Item label="User's Previous Violations" name="violations">
              <InputNumber className="w-full bg-[#EEF5F9]"  />
            </Form.Item>
            <Form.Item label="Comments from Reporter" name="comment">
              <Input className="p-2 bg-[#EEF5F9]" />
            </Form.Item>
            <Form.Item label="Violations link" name="link">
              <Input className="p-2 bg-[#EEF5F9]" />
            </Form.Item>
          </Form>
      </Modal>
    </div>
  )
}
