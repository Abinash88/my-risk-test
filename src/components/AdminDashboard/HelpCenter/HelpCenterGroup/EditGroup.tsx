import React, { useState } from "react";
import { Modal, Input, Button, Form, Select } from "antd";

const EditGroup = () => {
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
        className="bg-[#007AFF] text-white text-sm shadow-md shadow-gray-400 font-lg px-5 py-2"
        onClick={showModal}
      >
        Edit Group
      </button>
      <Modal
        title="Edit Group"
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Confirm"
      >
        <Form
          layout="vertical"
          className="my-5"
          initialValues={{
            group: "Select Group",
          }}
        >
          <Form.Item label="Select Group To Edit" name="group" className="w-60">
            <Select>
              <Select.Option value="1">Select Group</Select.Option>
              <Select.Option value="2">Group 2</Select.Option>
              <Select.Option value="3">Group 3</Select.Option>
            </Select>
          </Form.Item>
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

export default EditGroup;
