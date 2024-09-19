import React, { useState } from "react";

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

const StepsSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full h-full">
      <span className="text-[#000080] font-[600] mb-3 block">
        Risk ID: #R0231
      </span>
      <h1 className="text-2xl font-bold mb-6">Risk Title 1</h1>
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
