import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowUp, Info, KeyRound, UserPlus } from "lucide-react";
import React, { useState } from "react";
import AdminUsers from "./AdminU/AdminUsers";
import Permissions from "./Permissions/";
import Activities from "./Activities";

const enum tabs {
  ADMIN_USERS = "Admin Users",
  PERMISSIONS = "Permissions",
  ACTIVITIES = "Activities",
}

export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.ADMIN_USERS);

  return (
    <div className="bg-white rounded-lg m-3 w-[calc(100%-6px)]">
      <div className="pt-3 flex items-center justify-between border-b border-gray">
      <div className="flex overflow-x-auto scrollbar-hide items-center">
        <div className="flex">
          <button
            className={`${
              activeTab == tabs.ADMIN_USERS
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.ADMIN_USERS)}
          >
            <UserPlus className="mr-2" /> Admin Users
            {activeTab === tabs.ADMIN_USERS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.PERMISSIONS
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.PERMISSIONS)}
          >
            <KeyRound className="mr-2" /> Permissions
            {activeTab === tabs.PERMISSIONS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.ACTIVITIES ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.ACTIVITIES)}
          >
            <Info className="mr-2" /> Activities
            {activeTab === tabs.ACTIVITIES && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
        </div>
      </div>
      </div>
      <div className="mt-3">
        {activeTab == tabs.ADMIN_USERS && <AdminUsers />}
        {activeTab == tabs.PERMISSIONS && <Permissions />}
        {activeTab == tabs.ACTIVITIES && <Activities />}
      </div>
    </div>
  );
}
