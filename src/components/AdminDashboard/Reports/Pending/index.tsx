import { Button, Divider, Input, Table, TableColumnsType } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";

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
        <>
          <Button type="primary" danger 
        //   onClick={showModal}
          >
            Dismiss
          </Button>
          <Button
            className="bg-[#3838F0] text-white ml-2"
            // onClick={showApproveModal}
          >
            Review
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="mt-5 mx-3">
      <Table
        style={{ marginBottom: "20px" }}
        columns={columns}
        dataSource={reports}
        className="rounded-lg border border-gray"
      />
    </div>
  );
}
