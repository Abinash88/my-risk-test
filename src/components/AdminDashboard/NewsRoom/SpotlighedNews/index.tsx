import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import CreateNews from "../CreateNews";
import NewsCard from "../NewsCard";
import { tabs } from "..";

const SpotlightedNews = () => {
  return <div className='flex flex-col mt-5'> 
  <div className='flex justify-between items-start md:items-center flex-col md:flex-row'>
 <p className="text-lg font-bold">8 Posts</p>
  <div className="flex items-center mt-5 mg:mt-0 justify-between">
  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64">
<SearchOutlined className="text-gray-500 mr-2" />
<input
  type="text"
  placeholder="Search"
  className="outline-none bg-transparent w-full text-gray-500"
/>
  </div>
  <button className='rounded-lg ml-3 bg-[#3838F0] text-white font-lg px-5 py-2' 
        // onClick={showModal}
        >
        Create Post
      </button>
  </div>
  </div>
 
  <div className="bg-[#FEFEFE] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 justify-items-center">
  <NewsCard type={tabs.SPOTLIGHT_NEWS }/>
  <NewsCard type={tabs.SPOTLIGHT_NEWS}/>
  <NewsCard type={tabs.SPOTLIGHT_NEWS}/>
  <NewsCard type={tabs.SPOTLIGHT_NEWS}/>
  <NewsCard type={tabs.SPOTLIGHT_NEWS}/>
  <NewsCard type={tabs.SPOTLIGHT_NEWS}/>
  </div>
</div>;
};

export default SpotlightedNews;
