import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, TableColumnsType } from "antd";
import React from "react";
import AddTAndOStanding from "./AddTAndOStanding";

const risks = [
  {
    rank: 1,
    vote: "",
    title: "lorem ipsum",
    description: "lorem ipsum",
    rating: "",
    up_vote: 3000,
    down_vote: 299090,
    date: "Jul 24, 2024 - 10:35AM",
    duration: 3,
    status: "Active",
  },{
    rank: 2,
    vote: "",
    title: "lorem ipsum",
    description: "lorem ipsum",
    rating: "",
    up_vote: 3000,
    down_vote: 299090,
    date: "Jul 24, 2024 - 10:35AM",
    duration: 3,
    status: "Active",
  },
];

export default function index() {
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
          <div className="flex">
            <p>Risk Title</p>
            <p>{record.title}</p>
          </div>
          <p>{record.description}</p>
          <p>View all comments</p>
        </div>
      ),
    },
    {
      title: "Risk Rating",
      dataIndex: "rating",
      //   width: "200px",
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
          <div className="flex">
            <p>Posted:</p>
            <p>{record.date}</p>
          </div>
          <div className="flex">
            <p>Duration:</p>
            <p>{record.duration} Weeks</p>
          </div>
          <p>{record.status}</p>
          <div className="flex justify-between">
            <button>Pause Visibility</button>
            <button>Remove Risk</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">3,400 Risks</p>
        <div className="flex ml-auto">
          <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />
          <AddTAndOStanding />
        </div>
      </div>
      <div></div>
      <div className=" mt-3 mx-2">
        <Table
          columns={columns}
          dataSource={risks}
          className="rounded-md border border-grey mb-3"
        />
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
