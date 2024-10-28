import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "@headlessui/react";
import { Dropdown, Space } from "antd";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Select Duration",
    title: "Select Duration",
    key: "",
    disabled: true,
    style: {
      color: "blue",
      cursor: "default",
      fontWeight: "500",
      display: "flex",
      fontSize: "17px",
      flexDirection: "row-reverse",
    },
    icon: <X className="size-5" />,
  },
  {
    type: "divider",
  },
  {
    label: "72hrs",
    key: "72hrs",
  },
  {
    label: "7days",
    key: "7days",
  },

  {
    label: "4weeks",
    key: "4weeks",
  },
  {
    label: "8weeks",
    key: "8weeks",
  },
];

const EnterDuration = () => {
  const [option, setOption] = useState(false);

  const handleClick = () => {
    setOption(true);
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-sm w-full">
      <div className="w-full">
        {" "}
        <h3 className="mb-5 text-[22px]">Enter Duration</h3>
        <div className="scale-110">
          <Dropdown menu={{ items }} className="w-full" trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="bg-white text-gray-400 max-w-xl flex justify-between w-full  p-3 rounded-md">
                Select Duration
                <ChevronDown className="" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex justify-between gap-3 mt-6 items-center">
          <button onClick={() => navigate(-1)} className="">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Go back{" "}
          </button>
          <button
            className="bg-[#000080] text-white px-4 py-2 rounded w-[35%]"
            onClick={handleClick}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterDuration;
