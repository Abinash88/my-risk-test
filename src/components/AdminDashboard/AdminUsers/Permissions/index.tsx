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
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">4 Admin Users</p>

        <div className="flex ml-auto">
          <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />
          <AddAdminUser />
          <button className="flex ml-2 rounded-md bg-[#3838F0] text-white py-2 px-5">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </button>
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
          className="mt-3 border border-grey rounded-md"
        />
      </div>
    </div>
  );
}
