import { Table, TableColumnsType } from "antd";
import { Expand } from "lucide-react";
import React from "react";

const deletedPages = [
  {
    title: "Terms And Conditions",
    deleted_date: "July 22, 2024 - 10:45pm",
    deleted_by: "mashoodadam@gmail.com",
    action: "",
  },
  {
    title: "Terms And Conditions",
    deleted_date: "July 22, 2024 - 10:45pm",
    deleted_by: "mashoodadam@gmail.com",
    action: "",
  },
  {
    title: "Terms And Conditions",
    deleted_date: "July 22, 2024 - 10:45pm",
    deleted_by: "mashoodadam@gmail.com",
    action: "",
  },
  {
    title: "Terms And Conditions",
    deleted_date: "July 22, 2024 - 10:45pm",
    deleted_by: "mashoodadam@gmail.com",
    action: "",
  },
];
export default function Pages() {
  const columns: TableColumnsType<any> = [
    {
      dataIndex: "",
      render: (text: string) => <Expand className="mr-2" />,
    },
    {
      title: "Page Title",
      dataIndex: "title",
    },

    {
      title: "Deleted Date",
      dataIndex: "deleted_date",
    },
    {
      title: "Deleted By",
      dataIndex: "deleted_by",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <button className="bg-[#000080] text-white rounded-md px-4 py-2">
          Restore
        </button>
      ),
    },
  ];

  return (
    <div className="mt-6">
      <Table
        columns={columns}
        dataSource={deletedPages}
        className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3"
        scroll={{ x: true }}
      />
    </div>
  );
}
