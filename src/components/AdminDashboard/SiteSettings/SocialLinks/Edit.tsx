import { useState } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, MoveLeftIcon, Settings, Twitter, XIcon } from "lucide-react";
import AddEditSocialLink from './AddEditSocialLink';
import Setting from './Setting';

const Edit = () => {
  const [links, setLinks] = useState<any>([
    { id: 1, icon: <XIcon />, name: 'Twitter',link:"y.com" },
    { id: 2, icon: <Linkedin />, name: 'LinkedIn',link:"y.com" },
    { id: 3, icon: <Instagram />, name: 'Instagram',link:"y.com" },
    { id: 4, icon: <Facebook />, name: 'Facebook',link:"y.com" },
  ]);

  return (
    <div className="m-3 h-[70%] rounded-lg bg-white flex flex-col justify-around p-4">
      <h2 className="text-2xl font-bold mb-10 mt-10">Social Links</h2>
      <div className="flex mb-4 overflow-x-auto justify-center">
        {links.map((link:any) => (
          <div key={link.id} className="w-[250px] flex flex-col items-center border border-gray-200 p-4">
            <div className="w-full flex items-center justify-between space-x-2 mb-2">
              <ChevronLeft />
              <span className="text-2xl">{link.icon}</span>
              <ChevronRight />
              <Setting data={link}/>
            </div>
            <hr className="w-full my-4 border-t border-gray-200" />
            <div className="">
            <AddEditSocialLink  />
            </div>
          </div>
        ))}
        <div className="w-[250px] flex flex-col items-center border border-gray-200 p-4">
        <div className="">
        <AddEditSocialLink  />
            </div>
          <hr className="w-full my-4 border-t border-gray-200" />
          <div className="">
              <AddEditSocialLink  />
            </div>
        </div>
      </div>
     <div className='flex justify-center mt-5 md:mt-15'>
       <button className="bg-[#3838F0] text-white px-8 py-2 rounded hover:bg-[#3838AA]">
         Update Changes
       </button>
     </div>
    </div>
  );
};

export default Edit;
