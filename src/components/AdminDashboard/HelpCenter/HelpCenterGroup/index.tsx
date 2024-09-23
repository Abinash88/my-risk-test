import React from 'react'
import CurrentGroup from './CurrentGroup'
import ArchivedGroup from './ArchivedGroup'
import DeletedGroup from './DeletedGroup'

const enum tabs {
    CURRENT_GROUP = "current_group",
    ARCHIVED_GROUP = "archived_group",
    DELETED_GROUP = "deleted_group",
  }

const HelpCenterGroup = () => {
  const [type, setType] = React.useState(tabs.CURRENT_GROUP);

  return (
    <div className='flex flex-col  mt-5'>
      <div className="flex justify-between mt-4 p-5">
        <button
          className={`${
            type === tabs.CURRENT_GROUP
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg w-1/5 py-2 shadow-md shadow-black`}
          onClick={() => setType(tabs.CURRENT_GROUP)}
        >
          Current Group
        </button>
        <button
          className={`${
            type === tabs.ARCHIVED_GROUP
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg w-1/5 py-2 shadow-md shadow-black`}
          onClick={() => setType(tabs.ARCHIVED_GROUP)}
        >
          Archived Group
        </button>
        <button
          className={`${
            type === tabs.DELETED_GROUP
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg w-1/5 py-2 shadow-md shadow-black`}
          onClick={() => setType(tabs.DELETED_GROUP)}
        >
          Deleted Group
        </button>
      </div>
      <div className='mt-3'>
          {type === tabs.CURRENT_GROUP && <CurrentGroup />}
          {type === tabs.ARCHIVED_GROUP && <ArchivedGroup />}
          {type === tabs.DELETED_GROUP && <DeletedGroup />}
      </div>
    </div>
  );
}

export default HelpCenterGroup