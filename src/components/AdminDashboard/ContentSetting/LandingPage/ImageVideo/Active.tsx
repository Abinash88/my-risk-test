import { SettingFilled } from "@ant-design/icons";
import { Gear } from "@phosphor-icons/react";
import { Switch, TableColumnsType, Table } from "antd";
import { Expand, Eye } from "lucide-react";
import React from "react";

const activeImages = [
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: false,
    action: "",
  },
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    item: "Mashood Adam",
    preview: "mashoodadam@gmail.com",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: false,
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
      render: (text: string) => (
        <img src="/images/background.png" className="w-15 h-10" />
      ),
    },
    {
      title: "Preview",
      dataIndex: "preview",
      render: (text: string) => <Eye />,
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
          <Gear />
        </>
      ),
    },
  ];

  return (
    <div className=" mt-3 mx-2">
      <Table columns={columns} dataSource={activeImages} />
    </div>
  );
}