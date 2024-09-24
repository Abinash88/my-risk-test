import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Warning } from "@phosphor-icons/react";
import { Button, Input, Modal, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";

const currentSubscribers = [
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_subscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_subscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_subscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
];
export default function CurrentSubscribers() {
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

  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date Subscribed",
      dataIndex: "date_subscribed",
    },
    {
      title: "Action",
      render: (value, record) => (
        <Button
          type="primary"
          danger
          onClick={showModal}
        >
          Unsubscribe
        </Button>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2  items-center mt-2">
       <div className="col-span-1 justify-start">
         <p className="text-xl text-medium text-black">2,320 Subscribers</p>
        </div>
        <div className="flex md:ml-auto">
           <div className="flex items-center border border-gray-300 rounded-md px-3 ">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5 ml-3">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </Button>
        </div>
    </div>

      <div className=" mt-3 mx-2">
        <Table
          columns={columns}
          dataSource={currentSubscribers}
          className="rounded-md border border-grey mb-3 w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>

      <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Unsubscribe User</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleOk}
            >
              Unsubscribe
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to unsubscribe this user package? They will no
          longer receive updates.
        </p>
      </Modal>
    </div>
  );
}
