import { Button, Divider, Input, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";

const users = [
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
];

export default function Professional() {
  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "CEO Name",
      dataIndex: "ceoName",
    },
    {
      title: "Business Name",
      dataIndex: "businessName",
    },
    {
      title: "Verified",
      dataIndex: "verified",
      render: (value, record) => (
        <>
          <Verified className="bg-[#4B4BFF] text-white rounded-full"/>
          {/* <FontAwesomeIcon icon={faCheck} className="text-[#6666B3] w-5 h-5" /> */}
        </>
      ),
    },
    {
      title: "Date Registered",
      dataIndex: "date",
    },
  ];
  
  return (
    <div className="flex flex-col bg-white rounded-md">
      <div className="grid grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">30,000 Users</p>
        </div>
        <div className="col-span-3">
          <div className="flex justify-end">
            <Input
              className="px-5 mr-2 w-56"
              addonBefore={<SearchOutlined />}
              placeholder="Search"
            />
            <Button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
              <p className="text-lg mr-2">Entries</p>
              <Divider type="vertical" className="text-black w-1" />
              <select className="bg-white text-lg">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </Button>
            <Button className="py-1 px-5 mr-2">
              <FilterIcon /> Filters
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              Invite User
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              <PlusOutlined className="text-white" /> Export <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-3 px-2 justify-center">
        <Table 
          className="w-[calc(100% - 10px)] px-3"
          columns={columns} 
          dataSource={users}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
