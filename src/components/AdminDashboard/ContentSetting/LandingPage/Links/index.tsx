import { Tabs, TabsProps } from "antd";
import Active from "./Active";
import Deleted from "./Deleted";

export default function index() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="text-sm md:text-lg">Active</p>,
      children: <Active />,
    },
    {
      key: "2",
      label: <p className="text-sm md:text-lg">Deleted</p>,
      children: <Deleted />,
    },
  ];

  return (
    <div className="p-4 md:p-3 flex flex-col">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
