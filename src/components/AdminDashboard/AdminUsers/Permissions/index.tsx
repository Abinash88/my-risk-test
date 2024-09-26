import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Divider,
  Input,
  Popover,
  Table,
  TableColumnsType,
} from "antd";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";
import AddAdminUser from "../AdminU/AddAdminUser";

const users = [
  {
    permission: "Dashboard",
    assistance_admin: true,
    marketing_manager: true,
    customer_support: true,
    sales_representative: true,
  },
  {
    permission: "Dashboard",
    assistance_admin: true,
    marketing_manager: true,
    customer_support: true,
    sales_representative: false,
  },
  {
    permission: "Dashboard",
    assistance_admin: true,
    marketing_manager: false,
    customer_support: false,
    sales_representative: true,
  },

  {
    permission: "Dashboard",
    assistance_admin: true,
    marketing_manager: true,
    customer_support: false,
    sales_representative: false,
  },
];

export default function index() {
  const columns: TableColumnsType<any> = [
    {
      title: "Permission",
      dataIndex: "permission",
    },
    {
      title: "Assistance Admin",
      dataIndex: "assistance_admin",
      render: (value, record) => (
        <>
          <Checkbox value={value} />
        </>
      ),
    },
    {
      title: "Marketing Manager",
      dataIndex: "marketing_manager",
      render: (value, record) => (
        <>
          <Checkbox value={value} />
        </>
      ),
    },
    {
      title: "Customer Support",
      dataIndex: "customer_support",
      render: (value, record) => (
        <>
          <Checkbox value={value} />
        </>
      ),
    },
    {
      title: "Sales Representative",
      dataIndex: "sales_representative",
      render: (value, record) => (
        <>
          <Checkbox value={value} />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">2 Admin Users</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
          <AddAdminUser />
          <button className="flex justify-around ml-2 rounded-md bg-[#3838F0] text-white py-2 px-2 md:px-4 lg:px-6">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </button>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={users}
          components={{
            body: {
              cell: ({ children, ...restProps }:any) => (
                <td {...restProps} className="border border-gray-200 p-2">
                  {children}
                </td>
              ),
            },
            header: {
              cell: ({ children, ...restProps }:any) => (
                <th
                  {...restProps}
                  className="border border-gray-200 p-2 "
                >
                  {children}
                </th>
              ),
            },
          }}
          className="mt-3 border border-grey rounded-md w-[calc(100% - 6px)]"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
