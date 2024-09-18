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
import DeleteGroup from "../DeleteGroup";
import RestrictGroup from "../RestrictGroup";

const groups = [
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: false,
    visibility: true,
    status: "Active",
    action: "",
  },
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: false,
    visibility: true,
    status: "Active",
    action: "",
  },
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: false,
    visibility: true,
    status: "Active",
    action: "",
  },
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: true,
    visibility: false,
    status: "Active",
    action: "",
  },
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: false,
    visibility: true,
    status: "Restricted",
    action: "",
  },
  {
    name: "Group #121",
    created_by: "John Finz",
    exit: false,
    visibility: true,
    status: "Deleted",
    action: "",
  },
];

export default function index() {
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
      title: "Group Name",
      dataIndex: "name",
    },
    {
      title: "Created By",
      dataIndex: "created_by",
    },
    {
      title: "Entrance / Exit",
      dataIndex: "exit",
      render: (value, record) => (
        <>
          <Switch defaultValue={record.exit} />
        </>
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
                <RestrictGroup />
                <Divider type="horizontal" className="w-full my-2"/>
                <DeleteGroup />
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
      <div className="w-full flex items-center p-5">
        <div className="flex ml-auto">
          <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />

          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </Button>
        </div>
      </div>
      <div className="px-3">
        <Table columns={columns} dataSource={groups} className="mt-3" />
      </div>
    </div>
  );
}
