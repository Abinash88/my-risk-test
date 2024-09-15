import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabsProps } from "antd";
import React from "react";
import NewRequest from "./NewRequest";
import {
  faBagShopping,
  faCheckCircle,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import DeclinedRequest from "./DeclinedRequest";
import { Verified } from "lucide-react";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

export default function Verification() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
            <Verified className="mr-3"/>
          {/* <FontAwesomeIcon icon={faCheckCircle} className="mr-3" /> */}
          <p>New Requests</p>
        </div>
      ),
      children: <NewRequest />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
            <CloseCircleOutlined className="mr-3"/>
          {/* <FontAwesomeIcon icon={faClosedCaptioning} className="mr-3" /> */}
          <p>Declined Requests</p>
        </div>
      ),
      children: <DeclinedRequest />,
    },
  ];

  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
