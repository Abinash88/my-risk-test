import { Warning } from "@phosphor-icons/react";
import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function LiftRestriction() {
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
      <Button className="bg-[#3838F0] text-white ml-2" onClick={showModal}>
        Lift Restriction
      </Button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Lift Restriction</p>
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
              className="bg-[#3838F0] text-white"
              onClick={handleOk}
            >
              Confirm
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to lift the restriction on this user? This
          action will restore their full access to the platform.
        </p>
      </Modal>
    </div>
  );
}
