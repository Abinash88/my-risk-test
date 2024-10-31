import { Button } from "@/components/shared/ReuseAble/button";
import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Popover, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import AddAdminUser from "./AddAdminUser";
import DeleteAccount from "./DeleteAccount";
import EditAccount from "./EditAccount";

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
        <div className="col-span-1 md:col-span-2  justify-start">
          <p className="text-xl text-medium text-black">2 Admin Users</p>
        </div>
        <div className="md:col-span-2 col-span-1">
          <div className="flex  md:justify-end flex-wrap   gap-y-4 gap-x-2">
            <div className=" relative">
              <SearchOutlined className="absolute top-3 left-2" />
              <input
                className=" mr-2 border rounded-lg py-2 pl-8 focus:outline-none pr-1"
                placeholder="Search"
              />
            </div>

            <AddAdminUser />
            <Button className="mr-2 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5">
              <PlusOutlined className="text-white" /> <span>Export</span>{" "}
              <ArrowUp size={19} />
            </Button>
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
