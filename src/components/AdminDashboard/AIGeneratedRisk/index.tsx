import { TruncatedText } from "@/components/shared/ReuseAble";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Select, Switch, Table, TableColumnsType } from "antd";
import { ArrowUpWideNarrow, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import EmailRisk from "./EmailRisk";

const aiGeneratedRisk = [
  {
    id: 1,
    title:
      "Risk Title Ipsum dolor sit amet, consectetur adipiscing elitNunc vulputate",
    action: "",
  },
  {
    id: 2,
    title:
      "Risk Title Ipsum dolor sit amet, consectetur adipiscing elitNunc vulputate",
    action: "",
  },
  {
    id: 3,
    title:
      "Risk Title Ipsum dolor sit amet, consectetur adipiscing elitNunc vulputate",
    action: "",
  },
];

export default function index() {
  const columns: TableColumnsType<any> = [
    {
      title: "Risk Title & Description",
      dataIndex: "title",
      width: "70%",
      render: (text: string) => (
        <>
          <TruncatedText text={text} maxLength={50} title="" />
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record) => (
        <div className="flex gap-y-2 md:gap-x-2 flex-col md:flex-row">
          <button className="bg-[#3838F0] py-1 px-3 text-white">
            View Risk
          </button>
          <EmailRisk />
          <button className="bg-[#FF3B30] py-1 px-3 text-white">
            Hide Risk
          </button>
        </div>
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2 my-3 items-center">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">10,000 Risks</p>
        </div>
        <div className="md:col-span-2 col">
          <div className="flex justify-between gap-y-4  items-center">
            <div className="flex items-center border bg-white  border-gray-300 rounded-2xl px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
              <div className="relative">
                <div
                  className="flex items-center justify-between cursor-pointer outline-none bg-blue-900 p-1 rounded-2xl text-white border-l border-gray-300 pl-2"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <span className="mr-3 text-sm">Filter</span>
                  <span>{isExpanded ? <ChevronUp /> : <ChevronDown />}</span>
                </div>
                {isExpanded && (
                  <div className="absolute top-full left-0  bg-white border border-gray-300 mt-1 z-10">
                    <div className="flex flex-col p-2 m-2">
                      <label className="mb-2">Risk Type</label>
                      <div className="flex flex-col md:flex-row gap-y-2 justify-between mt-2 gap-x-3">
                        <button className="px-4 py-2 rounded-xl w-[200px] bg-[#FF3B30] text-white">
                          Threat
                        </button>
                        <button className="px-4 py-2 rounded-xl w-[200px] bg-[#007AFF] text-white">
                          Opportunities
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col p-2 m-2">
                      <label className="mb-2">Region</label>
                      <div className="flex flex-col md:flex-row gap-y-2 justify-between mt-2 gap-x-3">
                        <button className="px-4 py-2 rounded-xl w-[200px] bg-[#00C7BE] text-white">
                          Global
                        </button>
                        <select className="px-4 py-2 rounded-xl w-[200px] bg-[#A2845E] text-white">
                          <option className="bg-[#A2845E]">
                            Select Country
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col p-2 m-2">
                      <label className="mb-2">Exposure</label>
                      <div className="flex flex-col md:flex-row gap-y-2 justify-between mt-2 gap-x-3">
                        <DatePicker placeholder="Start Date" className="zaga px-4 py-2 rounded-lg w-[200px] bg-[#000080] text-white  placeholder:text-white" />
                        <DatePicker placeholder="End Date" className="zaga px-4 py-2 rounded-lg w-[200px] bg-[#000080] text-white  placeholder:text-white" />

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <label className="text-[#1E3A89] md:text-lg  font-semibold mr-3">
                ON/OFF
              </label>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table
          className="w-[calc(100% - 10px)] px-3"
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={aiGeneratedRisk}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
}
