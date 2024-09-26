import { PlusOutlined } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
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
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: tabs.PAYMENT_PROCESSORS,
      children: <PaymentProcessors />,
    },
    {
      key: "2",
      label: tabs.SOCIAL_LINKS,
      children: <SocialLinks />,
    },
    {
      key: "3",
      label: tabs.MAINTENANCE_MODE,
      children: <MaintenanceMode />,
    },
  ];
  return (
    <div className=" rounded-lg m-3  ">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
