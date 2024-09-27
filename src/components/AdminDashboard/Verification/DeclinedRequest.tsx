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
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    status: "declined",
  },
  {
    name: "Mashood Adam",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
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
      render: (text: string,record:any) =><div
      className="flex items-center"
      >
        <img
									src={record.image}
									alt="profile-image"
									className="mr-2 rounded-full aspect-square object-cover h-[25px] w-[25px] md:h-[53px] md:w-[53px]"
								/>
        <a>{text}</a>
      </div> 
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

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">34 Declined Requests</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
          <Input
              className=" mr-2 "
              addonBefore={<SearchOutlined />}
              placeholder="Search"
            />
            <Button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
              <p className=" mr-2">Entries</p>
              <Divider type="vertical" className="text-black w-1" />
              <select className="bg-white ">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </Button>
      
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

      
      <div className="w-full mt-3 px-2 justify-center">
        <Table 
          className="w-[calc(100% - 10px)] px-3"
          columns={columns} 
          dataSource={requests}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
