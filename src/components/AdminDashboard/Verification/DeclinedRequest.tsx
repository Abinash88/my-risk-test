import TabHeader from "@/components/shared/AdminDashboard/TabHeader";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { faCheckCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from "@phosphor-icons/react";
import {
  Badge,
  Button,
  Divider,
  Input,
  Modal,
  Table,
  TableColumnsType,
} from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";
import React, { useState } from "react";

const requests = [
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
];

export default function DeclinedRequest() {
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
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Employer/ Company Name",
      dataIndex: "employer",
    },
    {
      title: "Employement Proof",
      dataIndex: "employement",
      render: (value, record) => (
        <>
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-[#6666B3] w-5 h-5"
          />
        </>
      ),
    },
    {
      title: "Status",
      render: (value, record) => (
        <>
          <Badge className="bg-[#FEF3F2] text-[#FF4D4F] rounded-md px-2 py-1">
            Declined
          </Badge>
        </>
      ),
      // dataIndex: "action",
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg">
      <div className="grid grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">34 Declined Requests</p>
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
            {/* <Button className="py-1 px-5 mr-2">
              <FilterIcon /> Filters
            </Button> */}

            <Button danger className="mr-2 rounded-md py-1 px-5">
              Bulk Reject
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              Bulk Accept
            </Button>
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              <PlusOutlined className="text-white" /> Export <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
      <div className=" mt-3 mx-2">
        <Table columns={columns} dataSource={requests} />
      </div>
    </div>
  );
}
