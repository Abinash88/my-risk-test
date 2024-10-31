import { Tabs, TabsProps } from "antd";
import Banned from "./Banned";
import Pending from "./Pending";
import Restricted from "./Restricted";
import Suspended from "./Suspended";

const enum tabs {
  PENDING = "Pending",
  RESTRICTED = "Restricted",
  SUSPENDED = "Suspended",
  BANNED = "Banned",
}

export default function index() {
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
