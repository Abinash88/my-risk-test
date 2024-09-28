import { CloudUploadIcon, PencilIcon } from "lucide-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RemoveContent from "../../RemoveContent";
import Remove from "../../LandingPage/Remove";

const DuplicatePage = () => {
  const [editorContent, setEditorContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    // setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Title Section */}
      <div className="mb-6 rounded-lg border border-grey bg-white">
        <div className="flex flex-col md:flex-row justify-between p-3 mb-5">
          <div className="w-full md:w-2/5 mt-2 md:mt-0">
            <label htmlFor="title" className="block text-lg font-semibold">
              Page Link
            </label>
            <input
              id="title"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="link/url"
            />
          </div>
          <div className="w-full md:w-2/5 mt-2 md:mt-0">
            <label htmlFor="title" className="block text-lg font-semibold">
              Page Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Title"
            />
          </div>
        </div>
      </div>

      {/* File Upload Section */}
      <div className="bg-white border border-grey rounded-lg">
        <div className="flex justify-between mb-6 px-3 pt-7">
          <p className="block text-lg font-semibold">Image Or Video</p>
          <button className="bg-[#3838F0] px-5 py-2 rounded-md text-white">
            Add
          </button>
        </div>
        <div className="h-10 p-5 flex items-center justify-center">
          <div className="mt-2 rounded-lg flex items-center justify-center cursor-pointer">
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="fileInput"
              className="text-blue-500 cursor-pointer flex items-center"
            >
              <CloudUploadIcon className="h-6 w-6 mr-2" />
              <span>Click to Add image/Video</span>
            </label>
          </div>
          {selectedFile && (
            <img src={selectedFile} alt="Uploaded" className="mt-4 w-full" />
          )}
        </div>

        <div className="mt-4 px-3 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/3 md:mr-7 mb-4 md:mb-0">
            <label htmlFor="title" className="block text-lg font-semibold">
              Page Link
            </label>
            <input
              id="title"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="link/url"
            />
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <label htmlFor="title" className="block text-lg font-semibold">
              Page Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Title"
            />
          </div>
          <div></div>
        </div>
        <div className="mb-7 mt-3 flex justify-end px-3">
          <button className="ml-auto bg-[#FF4949] text-white rounded-md px-4 py-2">
            Remove Slide
          </button>
        </div>
      </div>

      {/* Rich Text Editor Section */}
      <div className="my-6 bg-white border border-grey rounded-lg">
        <div className="p-3">
          <label htmlFor="body" className="block text-lg font-semibold">
            Body
          </label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            className="mt-2 bg-white rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* Display Section */}
      <div className="border-t border-gray-300 pt-6 mt-6">
        {/* {selectedFile && ( */}
        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/images/risk-image.png"
              alt="Display"
              className="w-full md:w-1/3 p-5 md:p-0  md:mr-4"
            />
            <div className="ml-6">
              <img
                src="/images/Team.png"
                alt="Display"
                className="w-10 mb-2"
              />

              <h2 className="text-lg font-bold mb-2">Add Multiple Team Members</h2>
              <p className="text-gray-500">
                Unlock unlimited access to premium content with our subscription
                service, providing exclusive perks tailored to your interests.
              </p>
            </div>
          </div>
          <button className="ml-auto px-4 py-2 bg-[#3838F0] text-white rounded-lg flex items-center">
            Edit
          </button>
        </div>
        {/* )} */}

        {/* Action Buttons */}
        <div className="flex justify-around mt-10">
          <button 
          onClick={() => window.location.href = '/admin/dashboard/content-setting/preview'}
          className="px-4 py-2 md:px-6 md:py-3 bg-[#3838F0] text-white rounded-lg">
            Preview
          </button>
          <Remove/>
          <button className="px-4 py-2 md:px-6 md:py-3 bg-[#000080] text-white rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuplicatePage;
