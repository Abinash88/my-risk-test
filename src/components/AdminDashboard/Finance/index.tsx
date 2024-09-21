import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ArrowUp, Info, KeyRound, RotateCcwSquare, Ticket, UserPlus, Verified } from "lucide-react";
import React, { useState } from "react";
import Subscriptions from "./Subscriptions";
import PremiumFeatures from "./PremiumFeatures";
import Payments from "./Payments";
import Durations from "./Durations";
import { ContactlessPayment, HashStraight } from "@phosphor-icons/react";


const enum tabs {
  SUBSCRIPTIONS = "Subscriptions",
  PREMIUM_FEATURES = "Premium Features",
  PAYMENTS = "Payments",
  DURATIONS = "Durations",
}
export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.SUBSCRIPTIONS);

  return (
    <div className="bg-white rounded-lg m-3">
      <div className="pt-3 flex items-center justify-between border-b border-gray">
        <div className="flex">
          <button
            className={`${
              activeTab == tabs.SUBSCRIPTIONS
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.SUBSCRIPTIONS)}
          >
            <Verified className="mr-2" /> Subscriptions
            {activeTab === tabs.SUBSCRIPTIONS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.PREMIUM_FEATURES
                ? "text-[#3838F0]"
                : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.PREMIUM_FEATURES)}
          >
            <Ticket className="mr-2" /> Premium Features
            {activeTab === tabs.PREMIUM_FEATURES && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.DURATIONS ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.DURATIONS)}
          >
            <RotateCcwSquare className="mr-2" /> Durations
            {activeTab === tabs.DURATIONS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              activeTab == tabs.PAYMENTS ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-4 px-4 py-2 flex items-center`}
            onClick={() => setActiveTab(tabs.PAYMENTS)}
          >
            <HashStraight className="mr-2" /> Payments
            {activeTab === tabs.PAYMENTS && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          
        </div>
      </div>
      <div className="mt-3">
        {activeTab == tabs.SUBSCRIPTIONS && <Subscriptions />}
        {activeTab == tabs.PREMIUM_FEATURES && <PremiumFeatures />}
        {activeTab == tabs.PAYMENTS && <Payments />}
        {activeTab == tabs.DURATIONS && <Durations />}
      </div>
    </div>
  );
}
