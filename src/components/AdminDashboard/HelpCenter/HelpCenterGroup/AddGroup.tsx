import React, { useState } from "react";
import { Modal, Input, Button, Form } from "antd";

const AddGroup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupTitle, setGroupTitle] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("Group Title:", groupTitle);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button
        className="ml-3 bg-[#6666B3] text-sm shadow-md shadow-gray-400 text-white font-lg px-5 py-2"
        onClick={showModal}
      >
        Add New Group
      </button>
      <Modal
        title="Add Group"
        visible={isModalVisible}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        okText="Confirm"
      >
        <Form layout="vertical" className="my-5">
          <Form.Item label="Group Title" name="groupTitle">
            <Input
              value={groupTitle}
              onChange={(e) => setGroupTitle(e.target.value)}
              placeholder="Enter group title"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddGroup;
