import { Table, TableColumnsType } from "antd";
import { truncateText } from "@/lib/utils";
import Continents from "@react-map/continents";
import ViewCommnts from "../ViewCommnts";

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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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

export default function Public() {

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
          <ViewCommnts />
          {/* <p className="">View all comments</p> */}
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
  ];

  return (
    <div className="w-full mt-3 px-2 justify-center">
        
      <Table
        columns={columns}
        dataSource={risks}
        pagination={false}
        className="w-[calc(100% - 6px)] rounded-md border border-grey mb-3 my-3"
        scroll={{ x: true, y: 500 }}
      />
    </div>
  );
}