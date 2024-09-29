import { Button, Divider, Input, Table, TableColumnsType } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";
import Review from "./Review";

const reports = [
  {
    id: "001",
    name: "Mashood Adam",
    violation_type: "Misleading Risk Post",
    status: "Pending",
    date: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Mashood Adam",
    violation_type: "Misleading Risk Post",
    status: "Pending",
    date: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Mashood Adam",
    violation_type: "Misleading Risk Post",
    status: "Pending",
    date: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    id: "001",
    name: "Mashood Adam",
    violation_type: "Misleading Risk Post",
    status: "Pending",
    date: "July 1, 2024 - 10:30AM",
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
      title: "Status",
      dataIndex: "status",
      render: (value, record) => (
        <>
          {value == "Active" && (
            <span className="bg-green-100 text-green-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Active
            </span>
          )}
          {value == "Pending" && (
            <span className="bg-[#FFFAEB] text-[#CC7E4E] text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Pending
            </span>
          )}
          {value == "Deleted" && (
            <span className="bg-red-100 text-red-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
              Deleted
            </span>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <div className="flex gap-x-2">
          <Button type="primary" danger 
        //   onClick={showModal}
          >
            Dismiss
          </Button>
          <Review/>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-2 mx-3 pb-3 flex flex-col">
        <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5 ml-auto mb-2">
          <PlusOutlined className="text-white" /> Export <ArrowUp />
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
