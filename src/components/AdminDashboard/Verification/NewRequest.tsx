import TabHeader from "@/components/shared/AdminDashboard/TabHeader";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { faCheckCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from "@phosphor-icons/react";
import { Button, Divider, Input, Modal, Table, TableColumnsType } from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";
import React, { useState } from "react";

const requests = [
  {
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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

export default function NewRequest() {
  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Employer/ Company Name",
      dataIndex: "employer",
    },
    {
      title: "Employement Proof",
      dataIndex: "employement",
      render: (value, record) => (
        <>
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-[#6666B3] w-5 h-5"
          />
        </>
      ),
    },
    {
      title: "Action",
      render: (value, record) => (
        <>
          <Button type="primary" danger onClick={showModal}>
            Decline
          </Button>
          <Button
            className="bg-[#3838F0] text-white ml-2"
            onClick={showApproveModal}
          >
            Approve
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
  const showApproveModal = () => {
    setOpenApprove(true);
  };

  const handleApproveOk = () => {
    setOpenApprove(false);
  };

  const handleApproveCancel = () => {
    setOpenApprove(false);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg">
      <TabHeader title="245 Requests" />
      <div className=" mt-3 mx-2">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={requests}
        />
      </div>
      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Decline Verification</p>
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
              Decline
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to decline the verification request for Taofeeq
          Moha?
        </p>
      </Modal>
      {/* approve notifaction modal */}
      <Modal
        // title={
        //   <div className="flex items-center">
        //     <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
        //     <p>Decline Verification</p>
        //   </div>
        // }
        open={openApprove}
        onOk={handleApproveOk}
        // confirmLoading={confirmLoading}
        onCancel={handleApproveCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            {/* <Button onClick={handleApproveCancel}>Cancel</Button> */}
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
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-indigo-500"
              size="4x"
            />
          </div>
          {/* Title */}
          <h2 className="text-xl font-semibold mb-2">
            Verification Request Approved
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-6">
            You have successfully approved verification for{" "}
            <span className="text-indigo-600 font-medium">Taofeeq Moha</span>
          </p>
          {/* Button */}
          {/* <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Okay!
            </button> */}
        </div>
      </Modal>
    </div>
  );
}
