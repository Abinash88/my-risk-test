import { Button, Divider, Input, Table, TableColumnsType } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";
import LiftSuspension from "./LiftSuspension";

const reports = [
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    suspended_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    suspended_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    suspended_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    suspended_on: "July 1, 2024 - 10:30AM",
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
      title: "Suspended On",
      dataIndex: "suspended_on",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <>
          <LiftSuspension />
        </>
      ),
    },
  ];

  return (
      <div className="mt-2 mx-3 pb-3 flex flex-col">
        <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5 ml-auto mb-2">
          <PlusOutlined className="text-white" /> Export <ArrowUp />
        </Button>      <Table
        style={{ marginBottom: "20px" }}
        columns={columns}
        dataSource={reports}
        className="rounded-lg border border-gray w-[calc(100% - 6px)]"
        scroll={{ x: true }}
      />
    </div>
  );
}
