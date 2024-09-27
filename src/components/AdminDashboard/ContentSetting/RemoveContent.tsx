import { Warning } from '@phosphor-icons/react';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'

function RemoveContent() {
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
        <a className="text-[#EA1C1C]"
        onClick={showModal}
        >Remove</a>
        <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove Content</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleOk}
            >
              Remove
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to remove this content?
        </p>
      </Modal>
    </div>
  )
}

export default RemoveContent