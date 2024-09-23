import { Button, Divider, Input, Table, TableColumnsType } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";
import Delete from "./Delete";

const reports = [
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    banned_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    banned_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    banned_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    banned_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
];

export default function index() {
  const columns: TableColumnsType<any> = [
    {
      title: "Report ID",
      dataIndex: "id",
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "Violation Type",
      dataIndex: "violation_type",
    },
    {
      title: "Reported On",
      dataIndex: "date",
    },
    {
      title: "Banned On",
      dataIndex: "banned_on",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <>
          <Delete />
        </>
      ),
    },
  ];

  return (
    <div className="mt-5 mx-3 pb-3">
      <Table
        style={{ marginBottom: "20px" }}
        columns={columns}
        dataSource={reports}
        className="rounded-lg border border-gray w-[calc(100% - 6px)]"
        scroll={{ x: true }}
      />
    </div>
  );
}
