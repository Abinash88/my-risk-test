import { Popover } from "@mui/material";
import { Flag, X } from "lucide-react";
import React, { useState, type MouseEventHandler } from "react";

const steps = [
  {
    step: "Step 1",
    title: "Region & Sector",
    content: "Content for Region & Sector",
  },
  {
    step: "Step 2",
    title: "Risk Details",
    content: "Content for Risk Details",
  },
  {
    step: "Step 3",
    title: "Risk Scoring",
    content: "Content for Risk Scoring",
  },
  {
    step: "Step 4",
    title: "Risk Mitigation",
    content: "Content for Risk Mitigation",
  },
];

const ReportReason = [
  {
    label: "Unprofessional",
    value: "Unprofessional",
  },
  {
    label: "Spam Content",
    value: "Spam Content",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const StepsSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick: MouseEventHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full h-full">
      <div className="flex justify-between items-start  w-full">
        <div className="">
          <span className="text-[#000080] font-[600] mb-3 block">
            Risk ID: #R0231
          </span>
          <h1 className="text-2xl font-bold text-[#000080] mb-6">
            Risk Title 1
          </h1>
        </div>
        <button
          onClick={handleClick}
          className="bg-white px-3 text-red-500 scale-90 gap-2 py-1 flex items-center rounded-lg"
        >
          <Flag className=" size-5" />
          <span>Flag</span>
        </button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          className="!rounded-2xl"
        >
          <div className="rounded-xl max-w-[150px] min-w-[160px] p-2 min-h-[100px] bg-white shadow-2xl overflow-hidden">
            <div className="flex justify-between border-b pb-2 ">
              <h3 className="text-sm text-blue-900 font-medium">
                Report Reason
              </h3>
              <X onClick={handleClose} className="size-4 text-gray-600" />
            </div>
            <div className="flex flex-col">
              {ReportReason?.map((item) => (
                <span className="py-2  md:text-sm text-xs w-full hover:bg-gray-50">
                  {item?.label}
                </span>
              ))}
            </div>
          </div>
        </Popover>
      </div>
      {steps.map((step, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleStep(index)}
            className="w-full  bg-white p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[#000080] text-[20px]">
                <span className="mr-5 text-[rgba(0,0,128,0.6)] text-[18px]">
                  {step.step}
                </span>

                {step.title}
              </p>
              <span className="text-[#6095C9] text-[25px]">
                {openStep === index ? "▲" : "▼"}
              </span>
            </div>
            {openStep === index && (
              <div className="mt-2 py-4 px-1 bg-white rounded-lg text-left">
                {step.content}
              </div>
            )}
          </button>
        </div>
      ))}
      <div className="mt-6 flex justify-between text-sm text-black font-[600]">
        <span>AI Powered Risk Profile</span>
        <span>Risk author - User Display name</span>
      </div>
    </div>
  );
};

export default StepsSection;
