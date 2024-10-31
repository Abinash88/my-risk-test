import { PlusOutlined } from "@ant-design/icons";
import { Button } from "@/components/shared/ReuseAble/button";
import { Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import LiftRestriction from "./LiftRestriction";

const reports = [
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    restricted_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    restricted_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    restricted_on: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Emily Davis",
    violation_type: "Harrassment",
    date: "July 1, 2024 - 10:30AM",
    restricted_on: "July 1, 2024 - 10:30AM",
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
      title: "Restricted On",
      dataIndex: "restricted_on",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <>
          <LiftRestriction />
        </>
      ),
    },
  ];

  return (
    <div className="mt-2 mx-3 pb-3 relative flex flex-col">
      <Button className="mr-2 absolute z-20 -top-[75px] right-0 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5">
        <PlusOutlined className="tex" /> <span>Export</span>{" "}
        <ArrowUp size={19} />
      </Button>
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
