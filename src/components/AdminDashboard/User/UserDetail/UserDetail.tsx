import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Tabs, TabsProps } from "antd";
import { BanIcon } from "lucide-react";
import React from "react";
import UserInformation from "./UserInformation";

export default function UserDetail() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "User Information",
      children: <UserInformation />,
    },
    {
      key: "2",
      label: "Access & Permission",
      children: <></>,
    },
    {
      key: "3",
      label: "Activities",
      children: <></>,
    },
    {
      key: "4",
      label: "Referrals",
      children: <></>,
    },
    {
      key: "5",
      label: "Tour Guides",
      children: <></>,
    },

    {
      key: "6",
      label: "Report & Violation",
      children: <></>,
    },
  ];

  return (
    <div className="p-3 flex flex-col">
      <div className="flex justify-between">
        <p className="text-bold text-lg">Mashood Adam</p>
        <div className="flex justify-end ">
          <Button danger className="p-5 mr-2">
            <CloseCircleFilled /> Suspended User
          </Button>
          <Button className="text-white p-5 mr-2" type="primary" danger>
            <BanIcon /> Ban User
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-md mt-5">
        <Tabs defaultActiveKey="1" items={items} className="p-3" />
      </div>
    </div>
  );
}
