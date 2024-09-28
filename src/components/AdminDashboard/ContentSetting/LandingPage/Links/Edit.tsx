import { Divider } from "antd";
import { Cloud, Eye, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import Remove from "../Remove";

function EditSection() {
  const [buttonText, setButtonText] = useState("Get Started");
  const [openNewTab, setOpenNewTab] = useState(false);
  const [image, setImage] = useState(
    "https://via.placeholder.com/300x150.png?text=Opportunity"
  );

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="p-6 m-6 bg-white rounded-lg shadow-md w-full mx-auto">
      <div className="mb-6 rounded-md border border-grey">
        <div className="m-3 bg-white">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="background"
          >
            Icon Preview
          </label>
          <div className="flex flex-col bg-[#F9F9F9] flex justify-center items-center rounded-md overflow-hidden">
            <div className="w-1/3 flex flex-col items-center mb-4">
            <img
              src="/images/Engage.png"
              alt="Background"
              className="object-cover w-1/3 h-full mt-3"
            />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="inset-0 opacity-0 cursor-pointer"
              />
              <span className="flex items-center bottom-2 text-[#3838F0] text-sm cursor-pointer">
                <UploadCloud className="mr-3" /> Click to replace image/Video
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="buttonText"
          >
            Available Link(Must)
          </label>
          <input
            type="text"
            id="buttonText"
            value="https://hermandai.com/register"
            onChange={(e) => setButtonText(e.target.value)}
            className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
      </div>

      <div className="flex items-center justify-center mt-3">
        <input
          type="checkbox"
          id="newTab"
          checked={openNewTab}
          onChange={(e) => setOpenNewTab(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="newTab" className="ml-2 text-gray-700">
          Tick box to open new tab
        </label>
      </div>
      <Divider type="horizontal" className="my-7"/>
      <div className="mt-6 flex justify-around">
        <button className="border border-[#000080] rounded-md bg-white text-black py-2 px-6">
          Exit
        </button>
        <Remove/>
        <button className="rounded-md bg-[#3838F0] text-white py-2 px-6">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default EditSection;
