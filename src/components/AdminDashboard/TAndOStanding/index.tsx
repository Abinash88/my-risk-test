import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import AddTAndOStanding from "./AddTAndOStanding";
import { truncateText } from "@/lib/utils";
import PauseVisibility from "./PauseVisibility";
import RemoveRisk from "./RemoveRisk";
import RepostRisk from "./RepostRisk";
import Public from "./Public";
import Private from "./Private";

const risks = [
  {
    rank: 1,
    vote: "",
    title: "lorem ipsum",
    description: "lorem ipsum",
    rating: 99,
    up_vote: 3000,
    down_vote: 299090,
    date: "Jul 24, 2024 - 10:35AM",
    duration: 3,
    status: "Active",
  },
  {
    rank: 2,
    vote: "",
    title: "lorem ipsum",
    description: "lorem ipsum",
    rating: 80,
    up_vote: 3000,
    down_vote: 299090,
    date: "Jul 24, 2024 - 10:35AM",
    duration: 3,
    status: "Closed",
  },
];

export default function index() {
  const [type, setType] = useState("public");

  const columns: TableColumnsType<any> = [
    {
      title: "Rank",
      dataIndex: "rank",
    },
    {
      title: "Vote",
      dataIndex: "vote",
      render: (value, record) => (
        <div className="flex flex-col items-center space-y-2">
          <button className="bg-blue-600 text-white py-1 px-4 rounded-md">
            👍 Up Vote
          </button>
          <button className="bg-red-600 text-white py-1 px-4 rounded-md">
            👎 Down Vote
          </button>
        </div>
      ),
    },
    {
      title: "Risk Title & Description",
      //   width: "200px",
      render: (value, record) => (
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="font-semibold">Risk Title</p>
            <p className="ml-1">{record.title}</p>
          </div>
          <p className="flex">
            {truncateText(record.description, 15)}{" "}
            <span className="text-[#D9D9D9]">more</span>
          </p>
          <p className="text-[#D9D9D9]">View all comments</p>
        </div>
      ),
    },
    {
      title: "Risk Rating",
      dataIndex: "rating",
      width: "100px",
      className: "bg-[#540303] text-white",
      render: (value, record) => (
        <>
          <p>{value} %</p>
        </>
      ),
    },
    {
      title: "Up Votes",
      dataIndex: "up_vote",
    },
    {
      title: "Down Votes",
      dataIndex: "down_vote",
    },
    {
      title: "Admin Control",
      render: (value, record) => (
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="font-semibold mr-2">Posted:</p>
            <p>{record.date}</p>
          </div>
          <div className="flex">
            <p className="font-semibold mr-2">Duration:</p>
            <p>{record.duration} Weeks</p>
          </div>
          <p>{record.status}</p>
          <div className="flex justify-between">
            {record.status == "Active" && (
              <>
                <PauseVisibility />
                <RemoveRisk />
              </>
            )}
            {record.status == "Closed" && (
              <>
                <RepostRisk />
              </>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-lg mt-5">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3 items-center">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">3,400 Risks</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              

              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
            <AddTAndOStanding />
          </div>
        </div>
      </div>
       
      <div className="bg-white m-3">
        <div className="flex flex-col">
          <div className=" flex justify-around items-center">
            <button
              className={`${
                type == "public"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg w-1/5 py-3 shadow-md text-sm md:text-lg`}
              onClick={() => setType("public")}
            >
              Public T & O Standing
            </button>
            <button
              className={`${
                type == "private"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg w-1/5 py-3 shadow-md text-sm md:text-lg`}
              onClick={() => setType("private")}
            >
              Private T & O Standing
            </button>
            <Select
              defaultValue="Filter By"
              className=" text-sm md:text-lg"
              // onChange={}
              options={[
                { value: "Sectors", label: "Sectors" },
                { value: "Risk Status", label: "Risk Status" },
                { value: "Exposure  Date", label: "Exposure  Date" },
                { value: "Country", label: "Country" },
                { value: "Risk Rating", label: "Risk Rating" },
              ]}
            />
          </div>
        </div>
        {type == "public" && <Public />}
        {type == "private" && <Private />}
      </div>

      {/* <Modal
        title={
          <div className="flex items-center">
            <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
            <p>Remove AI Provider</p>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              type="primary"
              danger
              className="text-white"
              onClick={handleOk}
            >
              Remove
            </Button>
          </>,
        ]}
      >
        <p className="py-3">
          Are you sure you want to remove this AI provider? Removing this AI
          provider will permanently erase it from the system.
        </p>
      </Modal> */}
    </div>
  );
}
