import { SettingFilled, SettingTwoTone } from "@ant-design/icons";
import { Gear, GearFine } from "@phosphor-icons/react";
import { Switch, TableColumnsType, Table } from "antd";
import { Expand, Eye } from "lucide-react";

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
      render: (value, record) => (
        <>
          <Gear className="w-10 h-10" />
        </>
      ),
    },
  ];

  return (
    <div className=" mt-3 mx-2">
      <Table columns={columns} dataSource={activeLinks} />
    </div>
  );
}