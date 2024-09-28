import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react'

export default function EmailRisk() {
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
        <button className='bg-[#000080] py-1 px-3 text-white'
        onClick={showModal}
        >Email Risk</button>

    <Modal
        title="Email Risk"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="mt-5">
            <Button type='primary' onClick={handleCancel} className="mr-5">
              
              Send
            </Button>
            <Button
               type='primary'
               danger
                className="text-white bg-[#3838F0] px-5"
                onClick={handleOk}
              >
                Cancel
              </Button>
          </div>,
        ]}
      >
          <Form 
          className='pt-5'
          layout="vertical" 
          initialValues={{
            resend:"No"
          }}>
            <Form.Item name="name" label="Payment Details">
              <Input className="py-2" placeholder="enter last four digits" />
            </Form.Item>
            <Form.Item name="resend" label="Resend to Original Email">
              <Select>
                <Select.Option value="No">No</Select.Option>
                <Select.Option value="Yes">Yes</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="email" label="New email address">
              <Input className="py-2" placeholder="Enter new email address" />
            </Form.Item>
          </Form>
        
      </Modal>
    </div>
  )
}
