import { PlusOutlined } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
import {
  ArrowUp,
  Info,
  KeyRound,
  RotateCcwSquare,
  Ticket,
  UserPlus,
  Verified,
} from "lucide-react";
import React, { useState } from "react";
import Subscriptions from "./Subscriptions";
import PremiumFeatures from "./PremiumFeatures";
import Payments from "./Payments";
import Durations from "./Durations";
import { ContactlessPayment, HashStraight } from "@phosphor-icons/react";
import AIGeneratedRisks from "./AIGeneratedRisks";

const enum tabs {
  SUBSCRIPTIONS = "Subscriptions",
  PREMIUM_FEATURES = "Premium Features",
  PAYMENTS = "Payments",
  DURATIONS = "Durations",
  AI_GENERATED_RISK = "AI Generated Risk",
}
export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.SUBSCRIPTIONS);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <Verified className="mr-2" />
          <p className="text-lg font-medium text-[#838384]">Subscriptions</p>
        </div>
      ),
      children: <Subscriptions />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <Ticket className="mr-2" />
          <p className="text-lg font-medium text-[#838384]">Premium Features</p>
        </div>
      ),
      children: <PremiumFeatures />,
    },

    {
      key: "3",
      label: (
        <div className="flex items-center">
          <Ticket className="mr-2" />
          <p className="text-lg font-medium text-[#838384]">
            AI Generated Risks
          </p>
        </div>
      ),
      children: <AIGeneratedRisks />,
    },
    {
      key: "4",
      label: (
        <div className="flex items-center">
          <RotateCcwSquare className="mr-2" />
          <p className="text-lg font-medium text-[#838384]">Payments</p>
        </div>
      ),
      children: <Payments />,
    },
    {
      key: "5",
      label: (
        <div className="flex items-center">
          <HashStraight className="mr-2" />
          <p className="text-lg font-medium text-[#838384]">Durations </p>
        </div>
      ),
      children: <Durations />,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
    // <div className="bg-white rounded-lg p-3 w-[calc(100%-6px)]">
    //   <div className=" pt-3 flex items-center justify-between border-b border-gray">
    //     <div className="flex overflow-x-auto scrollbar-hide">
    //       <div className="flex">
    //         <button
    //           className={`${
    //             activeTab == tabs.SUBSCRIPTIONS
    //               ? "text-[#3838F0]"
    //               : "text-[#838384]"
    //           } relative text-lg font-medium mr-4 px-4 py-2 flex items-center whitespace-nowrap`}
    //           onClick={() => setActiveTab(tabs.SUBSCRIPTIONS)}
    //         >
    //           <Verified className="mr-2" /> Subscriptions
    //           {activeTab === tabs.SUBSCRIPTIONS && (
    //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
    //           )}
    //         </button>
    //         <button
    //           className={`${
    //             activeTab == tabs.PREMIUM_FEATURES
    //               ? "text-[#3838F0]"
    //               : "text-[#838384]"
    //           } relative text-lg font-medium mr-4 px-4 py-2 flex items-center whitespace-nowrap`}
    //           onClick={() => setActiveTab(tabs.PREMIUM_FEATURES)}
    //         >
    //           <Ticket className="mr-2" /> Premium Features
    //           {activeTab === tabs.PREMIUM_FEATURES && (
    //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
    //           )}
    //         </button>
    //         <button
    //           className={`${
    //             activeTab == tabs.DURATIONS ? "text-[#3838F0]" : "text-[#838384]"
    //           } relative text-lg font-medium mr-4 px-4 py-2 flex items-center whitespace-nowrap`}
    //           onClick={() => setActiveTab(tabs.DURATIONS)}
    //         >
    //           <RotateCcwSquare className="mr-2" /> Durations
    //           {activeTab === tabs.DURATIONS && (
    //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
    //           )}
    //         </button>
    //         <button
    //           className={`${
    //             activeTab == tabs.PAYMENTS ? "text-[#3838F0]" : "text-[#838384]"
    //           } relative text-lg font-medium mr-4 px-4 py-2 flex items-center whitespace-nowrap`}
    //           onClick={() => setActiveTab(tabs.PAYMENTS)}
    //         >
    //           <HashStraight className="mr-2" /> Payments
    //           {activeTab === tabs.PAYMENTS && (
    //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-3">
    //     {activeTab == tabs.SUBSCRIPTIONS && <Subscriptions />}
    //     {activeTab == tabs.PREMIUM_FEATURES && <PremiumFeatures />}
    //     {activeTab == tabs.PAYMENTS && <Payments />}
    //     {activeTab == tabs.DURATIONS && <Durations />}
    //   </div>
    // </div>
  );
}
