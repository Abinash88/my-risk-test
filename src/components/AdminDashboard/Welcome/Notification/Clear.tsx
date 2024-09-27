import { Warning } from '@phosphor-icons/react';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'

export default function Clear() {
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
    <div className='ml-auto'>
        <button className="bg-[#000080] text-white rounded-md py-1 px-3 ml-auto"
        >Mark As Read</button>
        <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Clear Notifications</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleOk}
            >
              Clear
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
         Are you sure you want to clear notifications?
        </p>
      </Modal>
    </div>
  )
}
