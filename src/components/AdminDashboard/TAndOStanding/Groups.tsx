import { Button, Divider, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";

export default function Groups() {
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
    <div className="w-full">
      <button
        className="w-full bg-[#1D98F0] text-white px-9 py-3 rounded-lg text-xs"
        onClick={showModal}
      >
        Groups
      </button>

      <Modal
        title="Invite Participants"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <button
              className="bg-[#000080] text-white py-1 px-3 rounded-md ml-3"
              onClick={handleOk}
            >
              Invite Participants
            </button>
          </>,
        ]}
      >
        <div>
          <Divider type="horizontal" />
          <Form layout="vertical">
            <Row className="justify-between">
              <Form.Item label="First Name">
                <Input />
              </Form.Item>
              <Form.Item label="Last Name">
                <Input />
              </Form.Item>
            </Row>

            <Form.Item label="Email">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
