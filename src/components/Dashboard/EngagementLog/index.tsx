import {
  faComment,
  faEye,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TableProps } from "@mui/material";
import { Table } from "antd";
import { useState } from "react";

const EngagementLog = () => {
  const [filterType, setFilterType] = useState("all");

  const testLogs = [
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You liked Risk (Heartburn) specific to Country under Sector A",
      type: "like",
    },
    {
      name: "You commented on Risk (Heartburn) specific to Country under Sector A",
      type: "comment",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You liked Risk (Heartburn) specific to Country under Sector A",
      type: "like",
    },
    {
      name: "You commented on Risk (Heartburn) specific to Country under Sector A",
      type: "comment",
    },
  ];

  const filteredLogs =
    filterType === "all"
      ? testLogs
      : testLogs.filter((log) => log.type === filterType);

  const columns: any = [
    {
      title: "Description",
      render: (value: any, record: any) => (
        <div className="flex gap-2 items-center w-[70%]">
          {record.type === "like" && (
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-2xl text-blue-600"
            />
          )}
          {record.type === "dislike" && (
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-2xl text-red-600"
            />
          )}
          {record.type === "comment" && (
            <FontAwesomeIcon
              icon={faComment}
              className="text-2xl text-green-600"
            />
          )}
          <p className="font-[500] w-4/6 text-black text-sm ml-4">
            {record.name}
          </p>
        </div>
      ),
    },
    {
      title: "Action",
      render: (value: any, record: any) => (
        <p className="text-sm">
          <FontAwesomeIcon icon={faEye} />
        </p>
      ),
    },

    {
      title: "Time",
      render: (value: any, record: any, index: number) => (
        <p className="text-sm">{index} mins ago</p>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap pb-10">
        <h3 className="font-[600] text-[25px] mb-5">Engagement Log</h3>
        <div className="flex items-center gap-4">
          <select
            name="days"
            id="days"
            className="p-2 text-sm px-6 border-2 border-[#000080] rounded-lg bg-transparent outline-none"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="like">Likes</option>
            <option value="dislike">Dislikes</option>
            <option value="comment">Comments</option>
          </select>
        </div>
      </div>
      <>
        <div className=" bg-white rounded-md px-9 py-3 lg:h-[58vh] overflow-y-auto scrollBar">
          <Table
            dataSource={filteredLogs}
            pagination={false}
            bordered={false}
            columns={columns}
            // rowKey={(record, index) => index}
            // showHeader={false}
            scroll={{ x: "max-content" }}
          />
        </div>
      </>
    </div>
  );
};

export default EngagementLog;
