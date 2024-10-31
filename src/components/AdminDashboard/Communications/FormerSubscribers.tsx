import { Button } from "@/components/shared/ReuseAble/button";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";

const formerSubscribers = [
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_unsubscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_unsubscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    date_unsubscribed: "July 1, 2024 - 10:30AM",
    action: "",
  },
];

export default function FormerSubscribers() {
  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date Unsubscribed",
      dataIndex: "date_unsubscribed",
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2  items-center mt-2">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">2,320 Subscribers</p>
        </div>
        <div className="flex justify-end flex-wrap  gap-y-4 gap-x-2">
          <div className=" relative">
            <SearchOutlined className="absolute top-3 left-2" />
            <input
              className=" mr-2 border rounded-lg py-2 pl-8 focus:outline-none pr-1"
              placeholder="Search"
            />
          </div>

          <Button className="mr-2 rounded-md flex justify-center items-center gap-4  py-1 px-5">
            <PlusOutlined className="text-white" /> <span>Export</span>{" "}
            <ArrowUp size={19} />
          </Button>
        </div>
      </div>
      <div className=" mt-3 mx-2">
        <Table
          columns={columns}
          dataSource={formerSubscribers}
          className="rounded-md border border-grey mb-3 w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
