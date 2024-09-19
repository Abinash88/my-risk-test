import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";
import Pending from "./Pending";
import Restricted from "./Restricted";
import Suspended from "./Suspended";
import Banned from "./Banned";

const enum tabs {
  PENDING = "Pending",
  RESTRICTED = "Restricted",
  SUSPENDED = "Suspended",
  BANNED = "Banned",
}

export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.PENDING);

  return (
    <div className="bg-white rounded-lg m-3">
      <div className="pt-3 flex items-center justify-between border-b border-gray">
        <div className="flex">
          <button
            className={`${
              activeTab == tabs.PENDING ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2`}
            onClick={() => setActiveTab(tabs.PENDING)}
          >
            Pending
            {activeTab === tabs.PENDING && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.RESTRICTED ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2`}
            onClick={() => setActiveTab(tabs.RESTRICTED)}
          >
            Restricted
            {activeTab === tabs.RESTRICTED && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.SUSPENDED ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2`}
            onClick={() => setActiveTab(tabs.SUSPENDED)}
          >
            Suspended
            {activeTab === tabs.SUSPENDED && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.BANNED ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2`}
            onClick={() => setActiveTab(tabs.BANNED)}
          >
            Banned
            {activeTab === tabs.BANNED && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
        </div>
        {/* {type == "active" && ( */}
        <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
          <PlusOutlined className="text-white" /> Export <ArrowUp />
        </Button>
        {/* )} */}
      </div>
      <div className="mt-3">
        {activeTab == tabs.PENDING && <Pending />}
        {activeTab == tabs.RESTRICTED && <Restricted />}
        {activeTab == tabs.SUSPENDED && <Suspended />}
        {activeTab == tabs.BANNED && <Banned />}
      </div>
    </div>
  );
}
