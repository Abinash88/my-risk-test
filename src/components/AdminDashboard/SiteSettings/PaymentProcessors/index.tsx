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

const settingData = [
  {
    priority: 1,
    top_priority:true,
    payment_processor: "Stripe",
    img:"/images/stripe.png",
    order: "",
    enabled: false,
    action: "",
  },
  {
    priority: 2,   
    top_priority:false,
    payment_processor: "Adyen",
    img:"/images/adyen.png",
    order: "",
    enabled: true,
    action: "",
  },
  {
    priority: 3,   
    top_priority:false,
    payment_processor: "PayPal",
    img:"/images/paypallogo.png",
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

  const [settings,setSettings]=useState(settingData)

  const columns: TableColumnsType<any> = [
    {
      title: "Priority",
      dataIndex: "priority",
    },
    {
      title: "Payment Processor",
      dataIndex: "payment_processor",
      render:(value,record,index)=>(
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-2 ">
            <p>{record.payment_processor}</p>
            <img src={record.img} className="w-[50px] h-[30px]"/>
          </div>
     {  record.top_priority&& <button className="p-2 rounded-lg text-[#3838F0] border border-[#3838F0] ">Top Priority</button>}        </div>
      )
    },
    {
      title: "Change Order",
      dataIndex: "order",
      render: (value, record, index) => (
        <div className="flex flex-col justify-center gap-y-4">
          {index !== 0 && (
            <UpOutlined 
              onClick={() => {
                const newSettings = [...settings];
                [newSettings[index - 1], newSettings[index]] = [newSettings[index], newSettings[index - 1]];
                setSettings(newSettings);
              }}
            />
          )}
          {index !== settings.length - 1 && (
            <DownOutlined 
              onClick={() => {
                const newSettings = [...settings];
                [newSettings[index], newSettings[index + 1]] = [newSettings[index + 1], newSettings[index]];
                setSettings(newSettings);
              }}
            />
          )}
        </div>
      ),
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
                <a className="my-2">Set As Top Priority</a>
                <a className="my-2">View / Edit</a>
                <a className="my-2 text-[#EA1C1C]">Remove</a>
                {/* <Divider type="horizontal" className="w-full my-2" /> */}
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
