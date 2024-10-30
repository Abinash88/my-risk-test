import { useState } from "react";
import { Link } from "react-router-dom";
import AddTeamModal from "./addTeamModal";
import { cn } from "@/lib/utils";

const TeamMemberData = [
  {
    id: 1,
    name: "Ashley Wells",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 2,
    name: "Ashley Wells",
    image: "/images/profile-image.jpeg",
  },
  {
    id: 3,
    name: "Ashley Wells",
    image: "/images/profile-image.jpeg",
  },
];

const EditTeam = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toggle, setToggle] = useState<{ [key: number]: boolean }>();

  const toggleButton = (key: number) => {
    setToggle((prevState) => ({
      ...prevState,
      [key]: !prevState?.[key], // Toggle the specific row’s state
    }));
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <h4 className="font-[600] text-[20px] mb-5">General Settings</h4>
      <div className=" bg-white rounded-md px-9 py-9 h-auto overflow-y-auto scrollBar">
        <h3 className="font-[600] text-lg">Team Members</h3>
        <div className="flex flex-col gap-6 md:gap-3">
          {TeamMemberData?.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between flex-wrap gap-2 mt-5"
            >
              <div key={item?.id} className="flex items-center gap-3">
                <img
                  src="/images/profile-image.jpeg"
                  alt="profile-image"
                  className="rounded-full aspect-square object-cover h-10 w-10 md:h-[53px] md:w-[53px]"
                />
                <h4 className="font-[500] text-md flex flex-row w-full">
                  Ashley Wells
                  <span className={cn(` text-sm ml-4`, toggle?.[index] ? "text-[#1D98F0]": "text-green-600")}>
                    Full Access
                  </span>
                </h4>
              </div>
              <div className="flex gap-3 items-center flex-wrap mt-2 lg:mt-0">
                {toggle?.[index] ? (
                  <button
                    onClick={() => {
                      toggleButton(index);
                    }}
                    className="bg-[#218A3E] scale-90 text-white py-3 px-4"
                  >
                    Switch to Basic
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toggleButton(index);
                    }}
                    className="bg-[#1D98F0] scale-90 text-white py-3 px-4"
                  >
                    Switch to Full
                  </button>
                )}
                <button className="bg-[#950B24] scale-90 text-white py-3 px-4">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end scale-90 gap-3 mt-3">
        <Link
          to="/dashboard/general-setting"
          className="bg-[#6666B3] text-white py-3 px-8 rounded-lg"
        >
          Go Back
        </Link>
        <button
          className="bg-[#6666B3] text-white py-3 px-4 rounded-lg"
          onClick={() => setOpenModal(true)}
        >
          Add Team Member
        </button>
      </div>
      <AddTeamModal open={openModal} close={handleClose} />
    </div>
  );
};

export default EditTeam;
