import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowUp, Info, KeyRound, UserPlus } from "lucide-react";
import React, { useState } from "react";
import PaymentProcessors from "./PaymentProcessors";
import SocialLinks from "./SocialLinks";
import MaintenanceMode from "./MaintenanceMode";

const enum tabs {
  PAYMENT_PROCESSORS = "Payment Processors",
  SOCIAL_LINKS = "Social Links",
  MAINTENANCE_MODE = "Maintenance Mode",
}

export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.PAYMENT_PROCESSORS);

  return (
    <div className=" rounded-lg m-3">
      <div className="pt-3 flex items-center justify-between border-b border-gray">
        <div className="flex">
          <button
            className={`${
              activeTab == tabs.PAYMENT_PROCESSORS
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.PAYMENT_PROCESSORS)}
          >
            Payment Processors
            {activeTab === tabs.PAYMENT_PROCESSORS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.SOCIAL_LINKS
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.SOCIAL_LINKS)}
          >
            Social Links
            {activeTab === tabs.SOCIAL_LINKS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.MAINTENANCE_MODE
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.MAINTENANCE_MODE)}
          >
            Maintenance Mode
            {activeTab === tabs.MAINTENANCE_MODE && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
        </div>
      </div>
      <div className="mt-3">
        {activeTab == tabs.PAYMENT_PROCESSORS && <PaymentProcessors />}
        {activeTab == tabs.SOCIAL_LINKS && <SocialLinks />}
        {activeTab == tabs.MAINTENANCE_MODE && <MaintenanceMode />}
      </div>
    </div>
  );
}
