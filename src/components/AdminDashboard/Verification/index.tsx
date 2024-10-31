import { CloseCircleOutlined } from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import { Verified } from "lucide-react";
import DeclinedRequest from "./DeclinedRequest";
import NewRequest from "./NewRequest";

export default function Verification() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <Verified className="mr-3" />
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
          <CloseCircleOutlined className="mr-3" />
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
