import { faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Tabs, TabsProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Countries from "./Countries";
import Regions from "./Regions";
import { Verified } from "lucide-react";
import { CloseCircleOutlined } from "@ant-design/icons";

export default function index() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <Verified className="mr-3" />
          <p>Countries</p>
        </div>
      ),
      children: <Countries />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <CloseCircleOutlined className="mr-3" />
          <p>Regions</p>
        </div>
      ),
      children: <Regions />,
    },
  ];
  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
