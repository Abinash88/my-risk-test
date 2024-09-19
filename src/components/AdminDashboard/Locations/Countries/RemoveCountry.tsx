import { Warning } from "@phosphor-icons/react";
import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function RemoveCountry() {
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
      <Button type="primary" danger onClick={showModal}>
        Remove
      </Button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove Country</p>
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
          Are you sure you want to remove this country? Removing this country
          will permanently erase it from the system.
        </p>
      </Modal>
    </div>
  );
}
