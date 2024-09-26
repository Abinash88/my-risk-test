import { PlusOutlined } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
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
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: tabs.PENDING,
      children: <Pending />,
    },
    {
      key: "2",
      label: tabs.RESTRICTED,
      children: <Restricted />,
    },
    {
      key: "3",
      label: tabs.SUSPENDED,
      children: <Suspended />,
    },
    {
      key: "4",
      label: tabs.BANNED,
      children: <Banned />,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3">
      <Tabs
        defaultActiveKey="1"
        items={items}
        // onChange={(key) => setActiveTab(key)}
      />
    </div>
  );
}
