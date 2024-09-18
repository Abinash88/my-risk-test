import { Warning } from "@phosphor-icons/react";
import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function PauseVisibility() {
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
      <button className="bg-[#6666B3] text-white rounded-md p-2"
      onClick={showModal}
      >
        Pause Visibility
      </button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Pause Visibility</p>
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
              Confirm
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to pause the visibility of this risk? This
          action will temporarily hide the risk from users but can be reversed
          at any time.
        </p>
      </Modal>
    </>
  );
}
