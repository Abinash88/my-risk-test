import TabHeader from "@/components/shared/AdminDashboard/TabHeader";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { faCheckCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from "@phosphor-icons/react";
import {
  Badge,
  Button,
  Divider,
  Input,
  Modal,
  Table,
  TableColumnsType,
  Switch
} from "antd";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";
import React, { useState } from "react";
import PreviewDocument from "./PreviewDocument";

const requests = [
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Admin",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Mashood",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Admin",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Admin",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Admin",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Sector 1",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
];

export default function DeclinedRequest() {
  const columns: TableColumnsType<any> = [
    {
      title: "Sectors Name",
      dataIndex: "name",
      render: (text: string) => (
        <div className="flex items-center">
          <a className="font-semibold">{text}</a>
        </div>
      ),
    },
    {
      title: "Created By",
      dataIndex: "employer",
      render: (text: string) => (
        <div className="flex items-center">
          <a className="font-semibold">{text}</a>
        </div>
      ),
    },
    {
      title: "Date",
      // dataIndex: "",
      render: () => (
        <>
          <p className="font-semibold">July 1, 2024 - 10:30AM</p>
        </>
      ),
    },
    {
      title: "Actions",
      render: (value, record) => (
        <>
          <Button className="bg-indigo-800 text-white mr-4"  onClick={showModalApprove}>
            Approve
          </Button>
          <Button type="primary" danger onClick={showModal}>
            Remove
          </Button>
        </>
      ),
      // dataIndex: "action",
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

  const [openApprove, setOpenApprove] = useState(false);
  const showModalApprove = () => {
    setOpenApprove(true);
  };

  const handleOkApprove = () => {
    setOpenApprove(false);
  };

  const handleCancelApprove = () => {
    setOpenApprove(false);
  };





  return (
    <div className="flex flex-col bg-white rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
      <div className="col-span-1 justify-start">
        <p className="text-xl font-bold text-medium text-black">
          120 Sectors
        </p>
      </div>
      <div className="md:col-span-3 col-span-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
          <Input
            className=" mr-2 "
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />
          <Button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
            <p className=" mr-2">Entries</p>
            <Divider type="vertical" className="text-black w-1" />
            <select className="bg-white ">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </Button>

          <Button danger className="mr-2 rounded-md py-1 px-5">
            Bulk Remove
          </Button>
          <Button
            onClick={() => showApproveModal(true)}
            className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-3"
          >
            Bulk Approve
          </Button>
          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
            <PlusOutlined className="text-white" /> Export{" "}
            <ArrowUp className="scale-75" />
          </Button>
        </div>
      </div>
    </div>
    <div className="w-full mt-3 px-2 justify-center">
      <Table
        className="w-[calc(100% - 10px)] px-3"
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={requests}
        scroll={{ x: true }}
      />
    </div>
    <Modal
      title={
        <div className="flex items-center">
          <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
          <p>Remove Sector</p>
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
        Are you sure you want to remove this Sector? Removing this sector will
        permanently remove it from the system, users can still add it forward.
      </p>
    </Modal>
    <Modal
      title={
        <div className="flex items-center">
          <Verified className="mr-3 text-[#000080] bg-indigo-50 w-7 h-7 p-1 rounded-full" />
          <p>Approve Sector</p>
        </div>
      }
      open={openApprove}
      onOk={handleOkApprove}
      // confirmLoading={confirmLoading}
      onCancel={handleCancelApprove}
      // okButtonProps={{ title: "Suspend" }}
      // cancelButtonProps={{ disabled: true }}
      footer={[
        <>
          <Button onClick={handleCancelApprove}>Cancel</Button>
          <Button
            type="primary"

            className="text-white bg-indigo-700"
            onClick={handleOkApprove}
          >
            Approve
          </Button>
        </>,
      ]}
    >
      <p className="py-3">
        Are you sure you want to approve this Sector? Approving this sector will
        add it to the system, allowing concerned users to see it.
      </p>
    </Modal>
    {/* approve notifaction modal */}
  </div>
  );
}
