import { Button } from "@/components/shared/ReuseAble/button";
import { PlusOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";

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
          <Button className="mr-2 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5">
            <PlusOutlined className="text-white" /> <span>Export</span>{" "}
            <ArrowUp size={19} />
          </Button>
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
