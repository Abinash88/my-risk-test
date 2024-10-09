import TabHeader from "@/components/shared/AdminDashboard/TabHeader";
import {
  CloseOutlined,
  LogoutOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { faCheckCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from "@phosphor-icons/react";
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
import { ArrowUp, FilterIcon, Pen } from "lucide-react";
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

export default function NewRequest() {
  const [details, setDetails] = useState({name:""});
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
      title: "Action",
      render: (value, record) => (
        <div className="flex items-center gap-2">
          <Button type="primary" danger onClick={showModal}>
            Remove
          </Button>
        </div>
      ),
      // dataIndex: "action",
    },
    {
      title: "Visibility",
      // dataIndex: "enabled",
      render: () => (
        <>
          <Switch defaultValue={false} />
        </>
      ),
    },
    {
      title: "",
      render: (value, record) => (
        <div
          className="flex hover:cursor-pointer items-center gap-2"
          onClick={() => {
            setDetails(value);
            console.log(value)
            setEdit(true);
          }}
        >
          <Pen size={16} />
        </div>
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
  const [edit, setEdit] = useState(false);
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
              Add Sectors
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
      {/* approve notifaction modal */}
      <Modal
        closeIcon={
          <CloseOutlined className="bg-indigo-600 text-white rounded-full p-1" />
        }
        title={
          <div className="flex items-center">
            {/* <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" /> */}
            <p>Add Sector</p>
          </div>
        }
        open={openApprove}
        onOk={handleApproveOk}
        // confirmLoading={confirmLoading}
        onCancel={handleApproveCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              className="text-white  bg-indigo-600 rounded-md hover:bg-indigo-700"
              onClick={handleOk}
            >
              Add Sector
            </Button>
          </>,
        ]}
      >
        <div className="flex flex-col mt-4">
          {/* <Divider type="horizontal" className="mt-0" /> */}
          <Form
            layout="vertical"
            initialValues={{
              region: "Select",
            }}
          >
            <Form.Item
              label="Sector Name"
              className="font-semibold my-4"
              name="name"
            >
              <Input className="p-2" placeholder="Name" />
            </Form.Item>
            <div className="flex justify-between items-center my-8">
              <p className="text-sm font-semibold">
                Enable / Disable Visibility
              </p>
              <Switch defaultChecked />
            </div>
          </Form>
        </div>
      </Modal>
      <Modal
        closeIcon={
          <CloseOutlined className="bg-indigo-600 text-white rounded-full p-1" />
        }
        title={
          <div className="flex items-center">
            {/* <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" /> */}
            <p>Edit Sector</p>
          </div>
        }
        open={edit}
        onOk={() => setEdit(true)}
        // confirmLoading={confirmLoading}
        onCancel={() => setEdit(false)}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <>
            <Button onClick={()=>setEdit(false)}>Cancel</Button>
            <Button
              type="primary"
              className="text-white  bg-indigo-600 rounded-md hover:bg-indigo-700"
              onClick={() => setEdit(true)}
            >
              Save
            </Button>
          </>,
        ]}
      >
        <div className="flex flex-col mt-4">
          {/* <Divider type="horizontal" className="mt-0" /> */}
          <Form
            layout="vertical"
          
          >
            <Form.Item
              label="Sector Name"
              className="font-semibold my-4"
              // name="name"
            >
              <Input
                className="p-2"
                placeholder="Name"
               value={"Sector 1"}/>
            </Form.Item>
            <div className="flex justify-between items-center my-8">
              <p className="text-sm font-semibold">
                Enable / Disable Visibility
              </p>
              <Switch defaultChecked />
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
