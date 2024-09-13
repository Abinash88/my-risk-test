import {
  faBagShopping,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabsProps } from "antd";
import React from "react";
import Business from "./Business";
import Professional from "./Professional";
import RegistrationRequest from "./RegistrationRequest";

export default function index() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBagShopping} className="mr-3" />
          <p>Business</p>
        </div>
      ),
      children: <Business />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-3" />
          <p>Professional</p>
        </div>
      ),
      children: <Professional />,
    },
    {
      key: "3",
      label: (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
          <p>Registration Request</p>
        </div>
      ),
      children: <RegistrationRequest />,
    },
  ];

  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
