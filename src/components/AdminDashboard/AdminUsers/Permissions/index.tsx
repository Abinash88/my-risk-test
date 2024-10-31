import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Checkbox, Table, TableColumnsType } from "antd";
import { ArrowUp } from "lucide-react";
import CreateEditRole from "./CreateEditRole";
import { Button } from "@/components/shared/ReuseAble/button";

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
        <div className="col-span-1 md:col-span-2  justify-start">
          <p className="text-xl text-medium text-black">2 Admin Users</p>
        </div>
        <div className="md:col-span-2 col-span-1">
          <div className="flex  md:justify-end flex-wrap   gap-y-4 gap-x-2">
            <div className=" relative">
              <SearchOutlined className="absolute top-3 left-2" />
              <input
                className=" mr-2 border rounded-lg py-2 pl-8 focus:outline-none pr-1"
                placeholder="Search"
              />
            </div>

            <CreateEditRole />
            <Button className="mr-2 rounded-md flex justify-center items-center gap-4 h-10 py-1 px-5">
              <PlusOutlined className="text-white" /> <span>Export</span>{" "}
              <ArrowUp size={19} />
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={users}
          components={{
            body: {
              cell: ({ children, ...restProps }: any) => (
                <td {...restProps} className="border border-gray-200 p-2">
                  {children}
                </td>
              ),
            },
            header: {
              cell: ({ children, ...restProps }: any) => (
                <th {...restProps} className="border border-gray-200 p-2 ">
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
