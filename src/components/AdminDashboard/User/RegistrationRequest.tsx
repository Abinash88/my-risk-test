import { Button } from "@/components/shared/ReuseAble/button";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 2,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 3,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 4,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 5,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 6,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 7,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 8,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 9,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Marketer",
    companyName: "Jando Ltd",
    account: "Professional",
    date: "July 1, 2024 - 10:30AM",
  },
];

export default function RegistrationRequest() {
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
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Account",
      dataIndex: "account",
    },
    {
      title: "Date Registered",
      dataIndex: "date",
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">30,000 Requests</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="md:col-span-3 col-span-1">
            <div className="flex justify-end flex-wrap  gap-y-4 gap-x-2">
              <div className=" relative">
                <SearchOutlined className="absolute top-3 left-2" />
                <input
                  className=" mr-2 border rounded-lg py-2 pl-8 focus:outline-none pr-1"
                  placeholder="Search"
                />
              </div>
              <button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
                <p className=" mr-2">Entries</p>
                <Divider type="vertical" className="text-black w-1" />
                <select className="bg-white ">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </button>
              <Button className="mr-2 rounded-md h-10 flex justify-center items-center gap-4 bg-[#3838F0] text-white py-1 px-5">
                <PlusOutlined className="text-white" /> <span>Export</span>{" "}
                <ArrowUp size={19} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-3 px-2 justify-center">
        <Table
          className="w-[calc(100% - 10px)] px-3"
          columns={columns.map((column) => ({
            ...column,
            onCell: (record: any) => ({
              onClick: () => {
                // Agelgay: Redirect to /admin/dashboard/user/:id
                window.location.href = `/admin/dashboard/user/${record.id}`;
              },
              style: { cursor: "pointer" },
            }),
          }))}
          dataSource={users}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
