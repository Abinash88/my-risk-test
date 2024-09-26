import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, TableColumnsType, Table } from "antd";
import { ArrowUp } from "lucide-react";
import React from "react";

const activities = [
  {
    date: "July 1, 2024 - 10:30AM",
    admin: "Moshood Adam",
    action: "Approved user verification for “John Snow”",
  },
  {
    date: "July 1, 2024 - 10:30AM",
    admin: "Moshood Adam",
    action: "Approved user verification for “John Snow”",
  },
  {
    date: "July 1, 2024 - 10:30AM",
    admin: "Moshood Adam",
    action: "Approved user verification for “John Snow”",
  },
];

export default function Activities() {
  const columns: TableColumnsType<any> = [
    {
      title: "Timestamp",
      dataIndex: "date",
    },
    {
      title: "Admin",
      dataIndex: "admin",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">Activites</p>

        <div className="flex ml-auto">
          {/* <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          /> */}
          <button className="flex justify-around ml-2 rounded-md bg-[#3838F0] text-white py-2 px-2 md:px-4 lg:px-6">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </button>
        </div>
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={activities}
          className="mt-3 border border-grey rounded-md w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
