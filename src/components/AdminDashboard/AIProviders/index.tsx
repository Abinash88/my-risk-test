import { PoundCircleFilled, SearchOutlined } from "@ant-design/icons";
import { Gear, Warning } from "@phosphor-icons/react";
import {
  Button,
  Input,
  Modal,
  Progress,
  Switch,
  Table,
  TableColumnsType,
} from "antd";
import { Euro, PoundSterling } from "lucide-react";
import React, { useState } from "react";
import AddAIProvider from "./AddAIProvider";
import EditAIProvider from "./EditAIProvider";

const aiProviders = [
  {
    name: "IntelliBot",
    price: 23,
    subscription: 70,
    visibility: true,
    action: "",
  },
  {
    name: "IntelliBot",
    price: 23,
    subscription: 70,
    visibility: true,
    action: "",
  },
  {
    name: "IntelliBot",
    price: 23,
    subscription: 20,
    visibility: false,
    action: "",
  },
];

export default function index() {
  const [type, setType] = useState("public");

  const [open, setOpen] = useState(false);
  const showModal = () => {
    console.log("clicked");
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const columns: TableColumnsType<any> = [
    {
      title: "AI Provider Name",
      dataIndex: "name",
      render: (text: string) => (
        <div className="flex items-center">
          <p className="mr-4">{text}</p>
          <EditAIProvider/>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value, record) => (
        <div className="flex text-lg">
          <PoundSterling className="mr-1 text-lg" />
          <p className="text-lg">{value}</p>
        </div>
      ),
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      //   width: "200px",
      render: (value, record) => (
        <>
          <Progress percent={value} showInfo={false} />
          <div className=" flex justify-between">
            <p>Low</p>
            <p>Full</p>
          </div>
        </>
      ),
    },
    {
      title: "Action",
      render: (value, record) => (
        <Button type="primary" danger onClick={showModal}>
          Remove
        </Button>
      ),
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
  ];
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 md:col-span-2 justify-start">
          <p className="text-xl text-medium text-black">5 AI Providers</p>
        </div>
        <div className="md:col-span-2 col-span-1">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
            <AddAIProvider />
          </div>
        </div>
      </div>

      <div className=" mt-3 mx-2">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={aiProviders}
          className="rounded-md border border-grey mb-3 w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>

      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove AI Provider</p>
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
          Are you sure you want to remove this AI provider? Removing this AI
          provider will permanently erase it from the system.
        </p>
      </Modal>
    </div>
  );
}
