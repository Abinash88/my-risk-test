import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import NewRequest from "./AllSectors";
import {
  faBagShopping,
  faCheckCircle,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import PendingSector from "./UserPendingSectors";
import { Trash2Icon, Users, Verified } from "lucide-react";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import DeletedSector from "./deletedSectors";

export default function Sectors() {
  const [current, setCurrent] = useState(null);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <Verified className="mr-3" />
          {/* <FontAwesomeIcon icon={faCheckCircle} className="mr-3" /> */}
          <p>All Sectors</p>
        </div>
      ),
      children: <NewRequest />,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <Users size={14} className="mr-3" />
          {/* <FontAwesomeIcon icon={faClosedCaptioning} className="mr-3" /> */}
          {current === "2" ? (
            <p className="flex">
              User Created Sectors&nbsp;
              <div className="m-auto text-center pt-[3px] rounded-full bg-red-800 text-white text-[10px] w-5 h-5">32</div>
            </p>
          ) : (
            <p>User Created Sectors</p>
          )}
        </div>
      ),
      children: <PendingSector />,
    },
    {
      key: "3",
      label: (
        <div className="flex items-center">
          <Trash2Icon size={14} className="mr-3" />
          {/* <FontAwesomeIcon icon={faClosedCaptioning} className="mr-3" /> */}
          <p>Deleted Sectors</p>
        </div>
      ),
      children: <DeletedSector />,
    },
  ];

  return (
    <div className="p-3">
      <Tabs
        onTabClick={(key) => setCurrent(key)}
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
}
