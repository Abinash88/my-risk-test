import { SettingFilled, SettingTwoTone } from "@ant-design/icons";
import { Gear, GearFine } from "@phosphor-icons/react";
import { Switch, TableColumnsType, Table, Popover } from "antd";
import { Expand, Eye } from "lucide-react";
import { useState } from "react";
import RemoveContent from "../../RemoveContent";

const activeLinks = [
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },

  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
];
export default function Active() {
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
      dataIndex: "",
      render: (text: string) => <Expand className="mr-2" />,
    },
    {
      title: "Item",
      dataIndex: "item",
      // render: (text: string) => (
      //     <img src="/images/background.png" className="w-15 h-10" />
      // ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Last Modified",
      dataIndex: "last_modified",
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
      title: "Action",
      dataIndex: "action",
      render: (value, record,index) => (
        <div className="" key={index}>
          <Popover
            key={index}
            content={
              <div className="flex flex-col p-2">
                <a className="text-[#1A1A1A] my-1" href="/admin/dashboard/content-setting/landing-page/edit-link" >Edit</a>
                <RemoveContent />
              </div>
            }
            trigger="click"
            placement="bottom"
            open={open && openPopoverKey === index}
            onOpenChange={(open) => handleOpenChange(open, index)}
          >
                      <Gear className="w-8 h-8" />

          </Popover>
        </div>
      
      ),
    },
  ];

  return (
    <div className="mt-3 mx-2 flex flex-col">
    <div className="flex justify-end">
    <button className="rounded-lg py-2 px-8 my-2 bg-[#3838F0] text-white">
          Add
    </button>
    </div>
      <Table columns={columns} dataSource={activeLinks} 
      className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3" 
      scroll={{ x: true }}
      />
    </div>
  );
}
