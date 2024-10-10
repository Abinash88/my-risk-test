import React, { useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { Warning } from "@phosphor-icons/react";

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
        className="bg-red-500 text-sm shadow-gray-400 shadow-md text-white w-full py-2 rounded-md"
        onClick={showModal}
      >
        Delete
      </button>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove Content</p>
          </div>
        }
        visible={isModalVisible}
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
              Confirm
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to remove this content? Removing this content
          will permanently erase it from the website when saved.
        </p>
      </Modal>
    </div>
  );
};

export default AddGroup;
