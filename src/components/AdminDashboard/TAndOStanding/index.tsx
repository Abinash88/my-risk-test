import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Select } from "antd";
import { Box } from "@mui/material";
import { Modal as Modal2 } from "@mui/material";
import React, { useState } from "react";
import AddTAndOStanding from "./AddTAndOStanding";
import Public from "./Public";
import Private from "./Private";
import InviteParticipants from "./InviteParticipants";
import AddNewRisk from "./AddNewRisk";
import Groups from "./Groups";
import AddNewGroup from "./AddNewGroup";
import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";
import { ArrowUp, X } from "lucide-react";

export default function index() {
  const [type, setType] = useState("public");
  const [isOpen, setIsOpen] = useState(false);
  const [sel, setSel] = useState("");
  const [countryx, setCountry] = useState("");
  const [stuff, setStuff] = useState(0);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    paddingY: 2,
  };
  const closeModal = () => {
    setIsOpen(false);
    setStuff(0);
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-lg mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-2 my-3 items-center">
        <div className="col-span-1 justify-start">
          <p className="text-xl text-medium text-black">3,400 Risks</p>
        </div>
        <div className="md:col-span-4 col-span-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2">
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
            <Button className="mr-2 rounded-md bg-[#3838F0] text-white py-5 px-5">
              <PlusOutlined className="text-white" /> Export <ArrowUp />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white m-3">
        <div className="flex flex-col">
          <div className=" flex flex-row space-x-4 justify-around items-center">
            <button
              className={`${
                type == "public"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg md:w-full py-3 shadow-md text-sm `}
              onClick={() => setType("public")}
            >
              Public T & O Standing
            </button>
            <button
              className={`${
                type == "private"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-black"
              } rounded-lg md:w-full py-3 shadow-md text-sm `}
              onClick={() => setType("private")}
            >
              Private T & O Standing
            </button>
            <Select
              defaultValue="Filter By"
              className="text-sm md:text-lg md:w-72 border-blue-900 border-2 rounded-xl "
              size="large"
              onChange={(f) => {
                if (f === "Sectors") {
                  setOpen(true);
                }
                if (f === "Exposure  Date") {
                  setOpen2(true);
                }
                if (f === "Risk Rating") {
                  setOpen3(true);
                }
                if (f === "Risk Status") {
                  setOpen4(true);
                }
                if (f === "Country") {
                  setIsOpen(true);
                }
              }}
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
          <div className="md:flex grid grid-cols-2 gap-4 md:flex-row md:justify-between my-5">
            <div className="md:w-[22%]">
              <InviteParticipants />
            </div>
            <div className="md:w-[22%]">
              <AddNewRisk />
            </div>
            <div className="md:w-[22%]">
              <Groups />
            </div>
            <div className="md:w-[22%]">
              <AddNewGroup />
            </div>
          </div>
        </div>
      </div>
      {/* ModALS */}
      <Modal
        width={300}
        okButtonProps={{ className: "hidden" }}
        cancelButtonProps={{ className: "hidden" }}
        title=""
        onCancel={() => setOpen(false)}
        centered
        destroyOnClose
        open={open}
      >
        <div>
          <div className="flex mt-8 items-center border border-gray-300 rounded-md px-3 py-2">
            <SearchOutlined className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search & Add Sector"
              className="outline-none bg-transparent w-full text-gray-500"
            />
          </div>
          <div className="flex h-56 overflow-y-auto flex-col gap-4 scrollBar  mt-4">
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Politics</div>
              <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-4 text-xs  text-white">
                Add
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        width={400}
        okButtonProps={{ className: "hidden" }}
        cancelButtonProps={{ className: "hidden" }}
        title=""
        onCancel={() => setOpen2(false)}
        centered
        destroyOnClose
        open={open2}
      >
        <div>
          <div className="flex flex-col p-2 m-2">
            <div className="flex flex-col md:flex-row space-y-5 justify-between mt-2 gap-x-3">
              <div className="flex gap-1 flex-col mt-5">
                <label className="mb-2 bg-blue-500 p-2 md:text-sm rounded-lg text-white">
                  Exposure Start Date
                </label>
                <DatePicker placeholder="Start Date" />
              </div>
              <div className="flex gap-1 flex-col">
                <label className="mb-2 bg-blue-500 p-2 md:text-sm rounded-lg text-white">
                  Exposure End Date
                </label>
                <DatePicker
                  placeholder="End Date"
                  onChange={() => setOpen2(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        width={300}
        okButtonProps={{ className: "hidden" }}
        cancelButtonProps={{ className: "hidden" }}
        title=""
        onCancel={() => setOpen3(false)}
        centered
        destroyOnClose
        open={open3}
      >
        <div>
          <div className="flex flex-col p-2 m-2">
            <div className="grid grid-cols-2 space-y-5 items-center justify-between mt-2 gap-x-3">
              <div className="flex gap-1 flex-col items-center mt-5">
                <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-8 text-xs  text-white">
                  Min
                </div>
                <input
                  type="number"
                  className="w-10 px-2 bg-indigo-200 rounded-lg"
                  defaultValue={1}
                />
              </div>
              <div className="flex gap-1 flex-col items-center">
                <div className="bg-indigo-900 shadow-2xl  py-1 hover:cursor-pointer rounded-2xl px-8 text-xs  text-white">
                  Max
                </div>
                <input
                  type="number"
                  className="w-10 px-2 bg-indigo-200 rounded-lg"
                  defaultValue={99}
                  max={3}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        width={250}
        okButtonProps={{ className: "hidden" }}
        cancelButtonProps={{ className: "hidden" }}
        title="Select Status"
        onCancel={() => setOpen4(false)}
        centered
        destroyOnClose
        open={open4}
      >
        <div>
          <div className="flex h-56 overflow-y-auto flex-col gap-4 scrollBar  mt-4">
            <div className="flex flex-row justify-between w-full px-6">
              <div>Posted By Admin</div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Removed By Admin</div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Active Risk</div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Paused Risk</div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Deleted Risk</div>
            </div>
            <div className="flex flex-row justify-between w-full px-6">
              <div>Cancelled Risk</div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal2
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // contentClassName="bg-white rounded-lg w-[50%] pb-4 scale-90 md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
      >
        <Box
          sx={style}
          className={`w-[95%] ${!sel ? "md:w-[20%]" : "md:w-[60%]"} `}
        >
          <div className="w-[100%] flex justify-end">
            <X
              onClick={() => {
                closeModal();
                setSel("");
              }}
              className="mt-1 mr-2 z-20"
            />
          </div>
          <div className="flex -mt-4 items-start space-y-2 flex-col ml-5 justify-center">
            <p className="text-[#000080] text-lg pb-2 font-bold border-b-2 w-full">
              Select Your Location
            </p>
            <div className="flex md:flex-row flex-col">
              <div
                className={`flex ${
                  stuff === 1
                    ? "flex-row md:flex-col md:w-fit  md:mr-4 space-x-6"
                    : "flex-col space-x-3"
                } overflow-x-scroll md:overflow-hidden text-sm md:space-y-3 md:justify-center md:items-start scrollBar py-2 w-[80vw] md:w-fit md:px-12`}
              >
                {Continents.map((x) => (
                  <p
                    className={`text-md font-bold mt-2 opacity-80 ml-3 ${
                      !sel ? "md:ml-3" : "md:ml-6"
                    } text-nowrap ${
                      sel === x.continent_name && "text-purple-800"
                    }`}
                    onClick={() => {
                      setStuff(1);
                      setSel(x.continent_name);
                    }}
                  >
                    {x.continent_name}
                  </p>
                ))}
              </div>
              {stuff === 1 && (
                <div className="h-80 space-y-2 gap-y-4 ml-4 md:ml-0 md:gap-4 flex flex-row flex-wrap w-[100%] overflow-y-scroll overflow-x-hidden scrollBar">
                  {Countries.map((x) => {
                    if (sel === x.continent)
                      return (
                        <p
                          className="text-md md:text-xs w-36 md:w-24 text-wrap mt-4 opacity-80 md:ml-3 "
                          onClick={() => {
                            setCountry(x.country);
                            closeModal();
                          }}
                        >
                          {x.country}
                        </p>
                      );
                  })}
                </div>
              )}
            </div>
          </div>
        </Box>
      </Modal2>
    </div>
  );
}
