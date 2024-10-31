import { Tabs, TabsProps } from "antd";
import { Info, KeyRound, UserPlus } from "lucide-react";
import { useState } from "react";
import Activities from "./Activities";
import AdminUsers from "./AdminU/AdminUsers";
import Permissions from "./Permissions/";

const enum tabs {
  ADMIN_USERS = "Admin Users",
  PERMISSIONS = "Permissions",
  ACTIVITIES = "Activities",
}

export default function index() {
  const [activeTab, setActiveTab] = useState<string>(tabs.ADMIN_USERS);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <UserPlus className="mr-2" />
          <p className=" font-medium text-[#838384]">Subscriptions</p>
        </div>
      ),
      children: <AdminUsers />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <KeyRound className="mr-2" />
          <p className=" font-medium text-[#838384]">Permissions</p>
        </div>
      ),
      children: <Permissions />,
    },
    {
      key: "3",
      label: (
        <div className="flex items-center">
          <Info className="mr-2" />
          <p className=" font-medium text-[#838384]">Activities</p>
        </div>
      ),
      children: <Activities />,
    },
  ];
  return (
    <div className="bg-white rounded-lg m-3 p-3">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
