import { Button } from "@/components/shared/ReuseAble/button";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Warning } from "@phosphor-icons/react";
import { Modal, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

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
      render: () => <Button onClick={showModal}>Unsubscribe</Button>,
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2  items-center mt-2">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">2,320 Subscribers</p>
        </div>
        <div className="flex justify-end flex-wrap  gap-y-4 gap-x-2">
          <div className=" relative">
            <SearchOutlined className="absolute top-3 left-2" />
            <input
              className=" mr-2 border rounded-lg py-2 pl-8 focus:outline-none pr-1"
              placeholder="Search"
            />
          </div>

          <Button className="mr-2 rounded-md flex justify-center items-center gap-4 bg-[#3838F0] text-white py-1 px-5">
            <PlusOutlined className="text-white" /> <span>Export</span>{" "}
            <ArrowUp size={19} />
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
            <Button className="text-white" onClick={handleOk}>
              UnsubscribeButton
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
