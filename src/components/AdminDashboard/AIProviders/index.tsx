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
  const columns: TableColumnsType<any> = [
    {
      title: "AI Provider Name",
      dataIndex: "name",
      render: (text: string) => (
        <div className="flex items-center">
          <p className="mr-4">{text}</p>
          <Gear />
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
        <Button
          type="primary"
          danger
          //   onClick={showModal}
        >
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
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">5 AI Providers</p>
        <div className="flex ml-auto">
          <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />
          <AddAIProvider />
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
          className="rounded-md border border-grey mb-3"
        />
      </div>
      {/* <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Decline Verification</p>
          </div>
        }
        open={openApprove}
        onOk={handleApproveOk}
        onCancel={handleApproveCancel}
        footer={[
          <>
             <Button onClick={handleApproveCancel}>Cancel</Button> 
            <Button
              className="text-white w-full px-2 py-5 mx-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700"
              onClick={handleApproveCancel}
            >
              Okay!
            </Button>
          </>,
        ]}
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-indigo-500"
              size="4x"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Verification Request Approved
          </h2>
          <p className="text-gray-600 mb-6">
            You have successfully approved verification for{" "}
            <span className="text-indigo-600 font-medium">Taofeeq Moha</span>
          </p>
          
        </div>
      </Modal> */}
    </div>
  );
}
