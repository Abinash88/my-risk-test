import { CloseCircleFilled } from '@ant-design/icons';
import { Warning } from '@phosphor-icons/react';
import { Button,Modal } from 'antd';
import React, { useState } from 'react'

export default function RejectRegistration() {
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
         <Button danger className="p-5 mr-2" onClick={showModal}>
            <CloseCircleFilled />
            Reject registration
          </Button>

          <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Reject registration</p>
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
              Reject
            </Button>
          </>
        ]}
      >
        <p className="py-3">
        Are you certain you wish to reject this registration? 
        Rejecting this registration will decline registrant access to the platform.
         This action cannot be undone.
        </p>
      </Modal>

    </div>
  )
}
