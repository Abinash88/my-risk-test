import { faPen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@mui/material/Checkbox";
import InviteMembers from "./InviteMembers";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveMembers from "./removeMembers";

const GroupSettings = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
    setOpenModal2(false);
  };

  return (
    <div>
      <h3 className="font-[500] text-2xl mb-5">Group Settings</h3>
      <div className=" flex flex-col gap-4 mt-5 bg-white rounded-md px-2 py-5  overflow-y-auto scrollBar">
        <div className="w-full justify-center flex flex-row">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="rand"
            className="w-44 rounded-full"
          />
          <div className="z-2">
            <FontAwesomeIcon
              // onClick={handleImageClick}
              icon={faPen}
              className="bg-[#6666B3] text-xs hover:cursor-pointer z-1 text-white rounded-full p-4 mt-28 ml-[-30px]"
            />
          </div>
        </div>
        <p className="text-[#6666B3] text-sm mt-[-10px] font-semibold text-center">
          Change Group Photo
        </p>
        <div className="flex justify-center">
          <div className="lg:w-[80%] space-y-5 mt-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mb-2"
                >
                  Group Name
                </label>
                <div className="flex gap-1 items-center">
                  <input
                    type="text"
                    value={"Group #2324242"} // Set value to state
                    className="w-72 outline-none text-black border-2 p-2 text-sm rounded-md border-[#D9D9D9FF]"
                  />
                  <div className="flex gap-3 items-center cursor-pointer scale-75">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-[20px]  text-[#6666B3]"
                    />
                    <p className="font-[400]  text-md">Edit</p>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-[rgba(0,0,0,0.7)] font-[600] text-sm mt-4 md:mt-0 md:mb-2"
                >
                  Visibility
                </label>
                <select
                  name=""
                  id=""
                  className="border-[2px] w-48 lg:mr-24 my-2 border-[#0000805a] outline-none py-2 text-sm px-5 rounded-md"
                >
                  <option value="Activity-log">Private</option>
                  <option value="Activity-log">Public</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start ml-[-12px] items-center">
              <Checkbox
                defaultChecked
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28, color: "#6666B3" },
                }}
              />
              <p className="text-[#6666B3] text-sm font-semibold">
                Allow group members to upload risk
              </p>
            </div>
            <div className="flex mt-2 justify-center w-full ml-[-12px]">
              <div className="flex flex-row justify-between w-[90%] ml-[-12px]">
                <button
                  className="bg-[#6666B3] scale-90 text-white px-12 py-3 rounded-lg text-md"
                  onClick={() => setOpenModal(true)}
                >
                  Invite Members
                </button>
                <button
                  className="bg-red-400 scale-90 text-white px-12 py-3 rounded-lg text-md"
                  onClick={() => setOpenModal2(true)}
                >
                  Remove Members
                </button>
              </div>
            </div>
            <div className="flex justify-center ml-[-12px] items-center">
              <button
                className="bg-[#6666B3] scale-90 text-white px-12 py-3 rounded-lg text-md"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1000);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <InviteMembers open={openModal} close={handleClose} />
      <RemoveMembers isModalOpen={openModal2} closeModal={handleClose} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default GroupSettings;
