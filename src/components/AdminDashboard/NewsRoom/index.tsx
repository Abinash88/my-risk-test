import React, { useState } from "react";
import LiveNews from "./LiveNews";
import ArchivedNews from "./ArchivedNews";
import DeletedNews from "./DeletedNews";
import SpotlightedNews from "./SpotlighedNews";

export const enum tabs {
  LIVE_NEWS = "Live News",
  ARCHIVED_NEWS = "Archived News",
  SPOTLIGHT_NEWS = "Spotlight News",
  DELETED_NEWS = "deleted_news",
}

const NewsRoom = () => {
    const [type, setType] = useState(tabs.LIVE_NEWS);

  return (
    <div className="flex flex-col p-3 mt-5 rounded-lg bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <button
      className={`${
        type == tabs.LIVE_NEWS
          ? "bg-[#000080] text-white"
          : "bg-white text-black"
      } rounded-lg py-3 shadow-md shadow-black w-full`}
      onClick={() => setType(tabs.LIVE_NEWS)}
    >
     Live News
    </button>
    <button
      className={`${
        type == tabs.ARCHIVED_NEWS ? "bg-[#000080] text-white" : "bg-white text-black"
      } rounded-lg py-3 shadow-md shadow-black shadow-opacity-10 w-full`}
      onClick={() => setType(tabs.ARCHIVED_NEWS)}
    >
      Archived News
    </button>
    <button
      className={`${
        type == tabs.SPOTLIGHT_NEWS ? "bg-[#000080] text-white" : "bg-white text-black"
      } rounded-lg py-3 shadow-md shadow-black shadow-opacity-10 w-full`}
      onClick={() => setType(tabs.SPOTLIGHT_NEWS)}
    >
      Spotlight News
    </button>
    <button
      className={`${
        type == tabs.DELETED_NEWS ? "bg-[#000080] text-white" : "bg-white text-black"
      } rounded-lg py-3 shadow-md shadow-black shadow-opacity-10 w-full`}
      onClick={() => setType(tabs.DELETED_NEWS)}
    >
      Deleted News
    </button>
  </div>
      {type == tabs.LIVE_NEWS && <LiveNews />}
      {type == tabs.ARCHIVED_NEWS && <ArchivedNews />}
      {type == tabs.SPOTLIGHT_NEWS && <SpotlightedNews />}
      {type == tabs.DELETED_NEWS && <DeletedNews />}

    </div>
  );
};

export default NewsRoom;
