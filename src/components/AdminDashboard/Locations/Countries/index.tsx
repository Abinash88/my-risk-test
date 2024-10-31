import { Button } from "@/components/shared/ReuseAble/button";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Switch, Table, TableColumnsType } from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";
import React, { useState } from "react";
import RemoveCountry from "./RemoveCountry";

const countries = [
  {
    name: "Afghanistan",
    visibility: false,
    action: "",
  },
  {
    name: "Albania",
    visibility: false,
    action: "",
  },
  {
    name: "Algeria",
    visibility: true,
    action: "",
  },
];
export default function index() {
  const columns: TableColumnsType<any> = [
    {
      title: "Country Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Action",
      render: (value, record) => (
        <>
          <RemoveCountry />
        </>
      ),
      // dataIndex: "action",
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      render: (value, record) => (
        <>
          <Switch defaultValue={record.visibility} />
        </>
      ),
    },
  ];
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="flex flex-col bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">120 Countries</p>
        </div>
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
            <button className="mr-2 border border-grey rounded-md flex items-center gap-3 py-1 px-5">
              <FilterIcon /> Filters
            </button>
            <Button className="mr-2 h-10 rounded-md bg-[#3838F0] text-white py-1 px-5">
              Add Country
            </Button>
            <Button className="mr-2 rounded-md h-10 flex justify-center items-center gap-4 bg-[#3838F0] text-white py-1 px-5">
              <PlusOutlined className="text-white" /> <span>Export</span>{" "}
              <ArrowUp size={19} />
            </Button>
          </div>
        </div>
      </div>
      <div className=" mt-3 mx-2">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={countries}
          className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
