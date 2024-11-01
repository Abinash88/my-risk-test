import TabHeader from "@/components/shared/AdminDashboard/TabHeader";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { faCheckCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from "@phosphor-icons/react";
import { Button, Divider, Input, Modal, Table, TableColumnsType } from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";
import React, { useState } from "react";
import PreviewDocument from "./PreviewDocument";

const requests = [
  {
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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
    name: "Mashood Adam",
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

export default function NewRequest() {
  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string,record:any) =><div
      className="flex items-center"
      >
        <img
									src={record.image}
									alt="profile-image"
									className="mr-2 rounded-full aspect-square object-cover h-[25px] w-[25px] md:h-[53px] md:w-[53px]"
								/>
        <a>{text}</a>
      </div> 
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
          <PreviewDocument/>
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
            className="bg-[#3838F0] text-white mt-1 md:mt-0 md:ml-2 "
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">300 Requests</p>
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
              Bulk Reject
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              Bulk Accept
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              <PlusOutlined className="text-white" /> Export <ArrowUp />
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
