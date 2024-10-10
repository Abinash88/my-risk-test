import { Button, Card, Checkbox, Divider, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";

export default function InviteParticipants() {
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
        Invite Participants
      </button>

      <Modal
        title="Invite Participants"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="mt-5">
            <button
              onClick={handleCancel}
              className="border border-grey-200 rounded-md py-2 px-3"
            >
              Cancel
            </button>
            <button
              className="bg-[#000080] text-white py-2 px-3 rounded-md ml-3"
              onClick={handleOk}
            >
              Invite Participants
            </button>
          </div>,
        ]}
      >
        <div>
          <Divider type="horizontal" />
          <Form layout="vertical">
            <Form.Item label="Surname">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Row gutter={8} className="justify-between">
              <Card>
                <Checkbox>Basic Access</Checkbox>
                <p></p>
              </Card>

              <Card>
                <Checkbox>Full Access</Checkbox>
                {/* <p>Invited participant will have full subscription benefits.</p> */}
              </Card>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
