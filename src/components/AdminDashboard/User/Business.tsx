import { Button } from "@/components/shared/ReuseAble/button";
import CustomSearch from "@/components/shared/ReuseAble/input";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Table, TableColumnsType } from "antd";
import { ArrowUp, FilterIcon, Verified } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 2,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 3,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 4,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 5,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 6,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 7,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 8,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 9,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
  {
    id: 10,
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    ceoName: "Taofeeq Moha",
    businessName: "Samusa Enterprise",
    verified: "",
    date: "July 1, 2024 - 10:30AM",
  },
];

export default function Business() {
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
      render: () => (
        <>
          <Verified className="bg-[#4B4BFF] text-white rounded-full" />
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">30,000 Users</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="flex justify-end flex-wrap  gap-y-4 gap-x-2">
            <CustomSearch onChange={() => {}} value="" />
            <button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
              <p className=" mr-2">Entries</p>
              <Divider type="vertical" className="text-black w-1" />
              <select className="bg-white ">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </button>
            <button className="mr-2 border border-grey rounded-md flex items-center gap-3 py-1 px-5">
              <FilterIcon /> Filters
            </button>
            <Button className="mr-2 rounded-md  text-white py-1 h-10 px-5">
              Invite User
            </Button>
            <Button className="mr-2 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5">
              <PlusOutlined className="text-white" /> <span>Export</span>{" "}
              <ArrowUp size={19} />
            </Button>
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
