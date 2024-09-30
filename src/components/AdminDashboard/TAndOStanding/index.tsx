import { SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React, { useState } from "react";
import AddTAndOStanding from "./AddTAndOStanding";
import Public from "./Public";
import Private from "./Private";
import InviteParticipants from "./InviteParticipants";
import AddNewRisk from "./AddNewRisk";
import Groups from "./Groups";
import AddNewGroup from "./AddNewGroup";



export default function index() {
  const [type, setType] = useState("public");


  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-lg mt-5">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3 items-center">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">3,400 Risks</p>
        </div>
        <div className="md:col-span-3 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              

              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500"
              />
            </div>
            <AddTAndOStanding />
          </div>
        </div>
      </div>
       
      <div className="bg-white m-3">
        <div className="flex flex-col">
          <div className=" flex justify-around items-center">
            <button
              className={`${
                type == "public"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg w-1/5 py-3 shadow-md text-sm md:text-lg`}
              onClick={() => setType("public")}
            >
              Public T & O Standing
            </button>
            <button
              className={`${
                type == "private"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg w-1/5 py-3 shadow-md text-sm md:text-lg`}
              onClick={() => setType("private")}
            >
              Private T & O Standing
            </button>
            <Select
              defaultValue="Filter By"
              className="text-sm md:text-lg"
              size="large"
              // onChange={}
              options={[
                { value: "Sectors", label: "Sectors" },
                { value: "Risk Status", label: "Risk Status" },
                { value: "Exposure  Date", label: "Exposure  Date" },
                { value: "Country", label: "Country" },
                { value: "Risk Rating", label: "Risk Rating" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          {type == "public" && <Public />}
          {type == "private" && <Private />}
          <div className="flex justify-between my-5">
            <div className="w-[22%]">
            <InviteParticipants/>
            </div>
            <div className="w-[22%]">
            <AddNewRisk/>
            </div>
            <div className="w-[22%]">
            <Groups/>
            </div>
            <div className="w-[22%]">
            <AddNewGroup/>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
