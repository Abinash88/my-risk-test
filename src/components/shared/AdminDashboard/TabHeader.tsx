import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import { ArrowUp, FilterIcon } from "lucide-react";

export default function TabHeader({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-4 gap-6 mx-2 my-3">
      <div className="col-span-1 justify-start">
        <p className="text-xl text-medium text-black">{title}</p>
      </div>
      <div className="col-span-3">
        <div className="flex justify-end">
          <Input
            className="px-5 mr-2 w-56"
            addonBefore={<SearchOutlined />}
            placeholder="Search"
          />
          <Button className="mr-2 border border-grey rounded-md flex items-center py-1 px-5">
            <p className="text-lg mr-2">Entries</p>
            <Divider type="vertical" className="text-black w-1" />
            <select className="bg-white text-lg">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </Button>
          <Button className="py-1 px-5 mr-2">
            <FilterIcon /> Filters
          </Button>
          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
            Invite User
          </Button>
          <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-1 px-5">
            <PlusOutlined className="text-white" /> Export <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
}
