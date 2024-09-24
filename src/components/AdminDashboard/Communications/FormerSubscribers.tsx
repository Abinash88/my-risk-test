import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import React from "react";

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
        <div className="flex md:ml-auto">
           <div className="flex items-center border border-gray-300 rounded-md px-3 ">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5 ml-3">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
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
