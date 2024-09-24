import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Input,
  Popover,
  Select,
  Switch,
  Table,
  TableColumnsType,
} from "antd";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";
import EditAccount from "./EditAccount";
import DeleteAccount from "./DeleteAccount";
import AddAdminUser from "./AddAdminUser";

const users = [
  {
    name: "John Wahab",
    email: "johnwah@gmail.com",
    role: "Admin",
    status: "Active",
    action: "",
  },
  {
    name: "John Wahab",
    email: "johnwah@gmail.com",
    role: "Admin",
    status: "Active",
    action: "",
  },
  {
    name: "John Wahab",
    email: "johnwah@gmail.com",
    role: "Admin",
    status: "Active",
    action: "",
  },
  {
    name: "John Wahab",
    email: "johnwah@gmail.com",
    role: "Admin",
    status: "Active",
    action: "",
  },
];

export default function AdminUser() {
  const [open, setOpen] = useState(false);
  const [openPopoverKey, setOpenPopoverKey] = useState(null);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean, key: any) => {
    setOpen(newOpen);
    if (newOpen) {
      setOpenPopoverKey(key); // Set the key of the opened Popover
    } else {
      setOpenPopoverKey(null); // Close the Popover
    }
  };

  const columns: TableColumnsType<any> = [
    {
      dataIndex: "S/N",
      render: (text: string, record, index) => <>{index + 1}</>,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value, record) => (
        <>
          {value == "Active" && (
            <span className="bg-green-100 text-green-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Active
            </span>
          )}
          {value == "Restricted" && (
            <span className="bg-red-100 text-red-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Restricted
            </span>
          )}
          {value == "Deleted" && (
            <span className="bg-red-100 text-red-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Deleted
            </span>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record, index) => (
        <div className="" key={index}>
          <Popover
            key={index}
            content={
              <div className="flex flex-col">
                <EditAccount />
                <Divider type="horizontal" className="w-full my-2" />
                <DeleteAccount />
              </div>
            }
            trigger="click"
            placement="bottom"
            open={open && openPopoverKey === index}
            onOpenChange={(open) => handleOpenChange(open, index)}
          >
            <button
              className="text-[#002856] border border-[#002856] rounded-lg py-1 px-4"
              //   onClick={handleOk}
            >
              Actions <DownOutlined />
            </button>
          </Popover>
        </div>
        // <Select
        //   defaultValue="Actions"
        //   className="rounded-md"
        //   // onChange={}
        //   options={[
        //     { value: "Restrict Group", label: "Restrict Group" },
        //     { value: "Delete Group", label: "Delete Group" },
        //   ]}
        // />
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">2 Admin Users</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
          <AddAdminUser />
          <button className="flex ml-2 rounded-md bg-[#3838F0] text-white py-2 px-5">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </button>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={users}
          className="mt-3 border border-grey rounded-md w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
