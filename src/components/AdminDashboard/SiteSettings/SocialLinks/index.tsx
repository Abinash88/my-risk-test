import { Divider } from "antd";
import { Facebook, Instagram, Linkedin, Twitter, XIcon } from "lucide-react";
import React from "react";
import UploadNew from "./UploadNew";

export default function index() {
  return (
    <div className="p-8 bg-white">
      {/* Social Links Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
        <div className="w-full flex flex-col">
          <span className="text-gray-500 mb-4 text-center ">Preview</span>
          <div className="flex justify-around items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Social media link cards */}
              <SocialLinkCard icon={<XIcon />} label="X (Formerly Twitter)" />
              <SocialLinkCard icon={<Linkedin />} label="LinkedIn" />
              <SocialLinkCard icon={<Instagram />} label="Instagram" />
              <SocialLinkCard icon={<Facebook />} label="Facebook" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <button className="bg-[#3838F0] text-white px-6 py-2 rounded"
            onClick={() => window.location.href = '/admin/dashboard/site-settings/edit-social-link'}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Site Logos Section */}
      <div>
        <Divider className="mb-5" />
        <h2 className="text-2xl font-semibold mb-4">Site Logos</h2>
        <div className="space-y-4">
          {/* Each logo row */}
          <LogoRow label="Website logo" />
          <LogoRow label="Admin logo" />
          <LogoRow label="Fav Icon" />
          <LogoRow label="Footer Icon" />
        </div>
      </div>
    </div>
  );
}

// Component for social media link card
const SocialLinkCard = ({ icon, label }: { icon: any; label: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow rounded-md">
      <div className="mb-3 md:mb-0 md:mr-4 ">{icon}</div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
};

// Component for logo row
const LogoRow = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between item-start md:items-center p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-start">
        <span className="text-gray-700 mb-2">{label}</span>

        <img
          src="/images/logo.png"
          alt={`${label}`}
          //   className="w-10 h-10 mr-4"
        />
      </div>
      <UploadNew img="/images/blue-logo.png"/>
    </div>
  );
};
