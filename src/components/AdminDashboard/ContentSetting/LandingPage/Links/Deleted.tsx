import { Gear } from "@phosphor-icons/react";
import { Table, TableColumnsType } from "antd";
import { Expand, Eye } from "lucide-react";

const deletedLinks = [
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    date_deleted: "July 22, 2024 - 10:45pm",
    action: "",
  },

  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    date_deleted: "July 22, 2024 - 10:45pm",
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    date_deleted: "July 22, 2024 - 10:45pm",
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    date_deleted: "July 22, 2024 - 10:45pm",
    action: "",
  },
  {
    item: <Gear className="w-10 h-10" />,
    title: "AI Risk Profile",
    date_deleted: "July 22, 2024 - 10:45pm",
    action: "",
  },
];

export default function Deleted() {
  const columns: TableColumnsType<any> = [
    {
      dataIndex: "",
      render: (text: string) => <Expand className="mr-2" />,
    },
    {
      title: "Item",
      dataIndex: "item",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Date Deleted",
      dataIndex: "date_deleted",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <>
          <button className="bg-[#3838F0] text-white px-5 py-1.5 rounded-md">
            Restore
          </button>
        </>
      ),
    },
  ];
  return (
    <div className=" mt-3 mx-2">
      <Table columns={columns} dataSource={deletedLinks} 
      className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3" 
      scroll={{ x: true }}/>
    </div>
  );
}
