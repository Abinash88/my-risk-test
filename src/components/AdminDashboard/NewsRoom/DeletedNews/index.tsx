import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import CreateNews from "../CreateNews";
import NewsCard from "../NewsCard";
import { tabs } from "..";
const DeletedNews = () => {
  return <div className='flex flex-col mt-5'> 
   

   <div className="flex justify-between gap-6 mx-2 my-3">
        <div className="col-span-1 md:col-span-2 justify-start">
          <p className="text-xl text-medium text-black">8 Posts</p>
        </div>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64">
         <SearchOutlined className="text-gray-500 mr-2" />
         <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent w-full text-gray-500"
         />
          </div>
     </div>
 
  <div className="bg-[#FEFEFE] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 justify-items-center">
  <NewsCard type={tabs.DELETED_NEWS}        />
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}  />
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}/>
  <NewsCard type={tabs.DELETED_NEWS}/>
  </div>
</div>;
};

export default DeletedNews;
