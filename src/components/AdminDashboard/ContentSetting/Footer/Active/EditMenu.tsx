import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Form, Input, Modal, Select, Switch } from "antd";
import React, { useState } from "react";

export default function EditMenu() {
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

  const [openSelection, setOpenSelection] = useState(false);
  const showSelectionModal = () => {
    setOpenSelection(true);
  };

  const handleSelectionOk = () => {
    setOpenSelection(false);
  };

  const handleSelectionCancel = () => {
    setOpenSelection(false);
  };

  return (
    <>
      <button
        className="mr-3 rounded-md px-6 py-2 text-white bg-[#000080]"
        onClick={showSelectionModal}
      >
        Edit Footer
      </button>
      <Modal
        title="Select Footer To Edit"
        open={openSelection}
        onOk={handleSelectionOk}
        // confirmLoading={confirmLoading}
        onCancel={handleSelectionCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-center mb-7">
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={() => {
                handleSelectionCancel(), showModal();
              }}
            >
              Next
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form
            layout="vertical"
            initialValues={{
              pages: "Select Pages",
            }}
          >
            <Form.Item name="menu_title">
              <Input
                addonBefore={<SearchOutlined />}
                className="py-2"
                placeholder="Search"
              />
            </Form.Item>

            <div className="flex flex-col">
              <a className="text-lg font-bold mb-1.5">Product</a>
              <a className="text-lg font-bold mb-1.5">Learn</a>
              <a className="text-lg font-bold mb-1.5">Support</a>
              <a className="text-lg font-bold mb-1.5">T & O Standings</a>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        title="Edit Menu"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-center mb-7">
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Save Changes
            </button>
            <button
              className="ml-2 rounded-md text-white bg-[#FF4949] py-2 px-3"
              onClick={handleOk}
            >
              Delete Menu
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form
            layout="vertical"
            initialValues={{
              pages: "Select Pages",
            }}
          >
            <Form.Item label="Menu Title" name="menu_title">
              <Input className="p-2 bg-[#EEF5F9]" placeholder="Menu Title" />
            </Form.Item>
            <Form.Item label="Link(available)" name="link">
              <Input
                className="p-2 bg-[#EEF5F9]"
                placeholder="Enter link/url"
              />
            </Form.Item>
            <div className="flex justify-between items-center">
              <Switch defaultChecked />
              
              <div className="flex flex-col">
                <label className="text-sm mb-2">Add created pages</label>
              <button className="mb-1.5 text-[#000080] rounded-3xl border border-grey-200 py-1 px-2 flex items-center">Page 1 <CloseOutlined /></button>
              <Form.Item label="" name="pages">
                <Select>
                  <Select.Option value="Select Pages">
                    Select Pages
                  </Select.Option>
                </Select>
              </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}
