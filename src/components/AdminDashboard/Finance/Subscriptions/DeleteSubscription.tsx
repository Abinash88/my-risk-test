import { Warning } from "@phosphor-icons/react";
import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function DeleteSubscription() {
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
       onClick={showModal}
       className="bg-[#FF4949] text-white font-[600] px-5 py-3 rounded-lg mr-3">
					Delete
				</button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Delete Subscription Package</p>
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
              Delete
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
        Are you sure you want to delete this subscription package? Once deleted,
         it will no longer be available in the system or for users.
        </p>
      </Modal>
    </div>
  );
}
