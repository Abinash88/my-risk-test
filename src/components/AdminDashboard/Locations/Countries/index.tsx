import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Switch, Table, TableColumnsType } from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";
import React, { useState } from "react";
import AddCountry from "./AddCountry";
import RemoveCountry from "./RemoveCountry";

const countries = [
  {
    name: "Mashood Adam",
    visibility: false,
    action: "",
  },
  {
    name: "Mashood Adam",
    visibility: false,
    action: "",
  },
  {
    name: "Mashood Adam",
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
      <div className="grid grid-cols-4 gap-6 mx-2 my-3">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">120 Countries</p>
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
            <Button className="py-1 px-5 mr-2">
              <FilterIcon /> Filters
            </Button>
            <Button danger className="mr-2 rounded-md py-1 px-5">
              Builk Remove
            </Button>
            <AddCountry />
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
              <PlusOutlined className="text-white" /> Export <ArrowUp />
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
