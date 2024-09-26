import { useState } from "react";
import Active from "./Active";
import Deleted from "./Deleted";
import { Tabs, TabsProps } from "antd";

export default function index() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="text-lg">Active</p>,
      children: <Active />,
    },
    {
      key: "2",
      label: <p className="text-lg">Deleted</p>,
      children: <Deleted />,
    },
  ];

  return (
    <div className="p-1 md:p-3 flex flex-col">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
