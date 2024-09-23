import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Switch,
  Table,
  TableColumnsType,
} from "antd";
import { Expand } from "lucide-react";
import React, { useState } from "react";
import EditMenu from "./EditMenu";

const pages = [
  {
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },

  {
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
];
export default function index() {
  const columns: TableColumnsType<any> = [
    {
      dataIndex: "",
      render: (text: string) => <Expand className="mr-2" />,
    },
    {
      title: "Title",
      dataIndex: "title",
    },

    {
      title: "Visibility",
      dataIndex: "visibility",
      render: (value, record) => (
        <>
          <Switch defaultValue={record.visibility} />
        </>
      ),
    },
    {
      title: "Owner",
      dataIndex: "owner",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <>
          <EditOutlined className="w-10 h-10  text-[#000080]" />
          <DeleteOutlined className="w-10 h-10 text-[#F24E1E]" />
        </>
      ),
    },
  ];

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
    <div className="flex flex-col mt-6">
      <div className="flex justify-end">
        <EditMenu />
        <button
          className="rounded-md px-6 py-2 text-white bg-[#3838F0]"
          onClick={() => showModal()}
        >
          Add Menu
        </button>
      </div>

      <div className="flex mt-5">
        <button className="mr-5 bg-[#3838F0] px-10 py-3 text-lg text-white ">
          Product <RightOutlined className="ml-3" />
        </button>
        <button className="border border-[#C7C8C9] mr-5 bg-[#ECECEE] px-10 py-3 text-lg text-black ">
          <LeftOutlined className="mr-3" />
          Learn <RightOutlined className="ml-3" />
        </button>
        <button className="border border-[#C7C8C9] mr-5 bg-[#ECECEE] px-10 py-3 text-lg text-black ">
          <LeftOutlined className="mr-3" />
          Support <RightOutlined className="ml-3" />
        </button>
        <button className="border border-[#C7C8C9] mr-5 bg-[#ECECEE] px-10 py-3 text-lg text-black ">
          <LeftOutlined className="mr-3" />
          T & O Standings <RightOutlined className="ml-3" />
        </button>
      </div>
      <div className="flex flex-col mt-8">
        <button className="ml-auto rounded-md px-6 py-2 text-white bg-[#3838F0]">
          Add New Page
        </button>
        <Table columns={columns} dataSource={pages} className="mt-3 rounded-lg border border-gray w-[calc(100% - 6px)] mb-3" 
          scroll={{ x: true }}
        />
      </div>

      <Modal
        title="Add Menu"
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
              <Form.Item label="Add created pages" name="pages">
                <Select>
                  <Select.Option value="Select Pages">
                    Select Pages
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
