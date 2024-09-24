import {
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
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
import { ArrowUp, Settings } from "lucide-react";
import React, { useState } from "react";
import AddNew from "./AddNew";

const settings = [
  {
    priority: 1,
    payment_processor: "Stripe",
    order: "",
    enabled: false,
    action: "",
  },
  {
    priority: 2,
    payment_processor: "Stripe",
    order: "",
    enabled: true,
    action: "",
  },
  {
    priority: 3,
    payment_processor: "PayPal",
    order: "",
    enabled: false,
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
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "Payment Processor",
      dataIndex: "payment_processor",
    },
    {
      title: "Change Order",
      dataIndex: "order",
      render: (value, record) => <>{<UpOutlined />} </>,
    },
    {
      title: "Enabled",
      dataIndex: "enabled",
      render: (value, record) => (
        <>
          <Switch defaultValue={value} />
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
                <Divider type="horizontal" className="w-full my-2" />
              </div>
            }
            trigger="click"
            placement="bottom"
            open={open && openPopoverKey === index}
            onOpenChange={(open) => handleOpenChange(open, index)}
          >
            <Settings />
          </Popover>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">Payment Processors</p>

        <div className="flex ml-auto">
          <AddNew />
        </div>
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={settings}
          className="mt-3 border border-grey rounded-md w-[calc(100%-6px)]"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
