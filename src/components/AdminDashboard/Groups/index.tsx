import { faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Tabs, TabsProps } from "antd";
import AllGroups from "./AllGroups";
import ActiveGroups from "./ActiveGroups";
import RestrictedGroups from "./RestrictedGroups";
import DeletedGroups from "./DeletedGroups";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUsers} className="mr-3" />
          <p>All Groups</p>
        </div>
      ),
      children: <AllGroups />,
    },
    {
      key: "2",
      label: "Active Groups",
      children: <ActiveGroups />,
    },
    {
      key: "3",
      label: "Restricted Groups",
      children: <RestrictedGroups />,
    },
    {
      key: "4",
      label: "Deleted Groups",
      children: <DeletedGroups />,
    },
  ];
  return (
    <div className="p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
