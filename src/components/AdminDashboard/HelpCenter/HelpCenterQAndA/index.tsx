import React from 'react'
import CurrentQAndA from './CurrentQAndA'
import ArchivedQAndA from './ArchivedQAndA'
import DeletedQAndA from './DeletedQAndA'

const enum tabs {
    CURRENT_QANDA = "current_qanda",
    ARCHIVED_QANDA = "archived_qanda",
    DELETED_QANDA = "deleted_qanda",
  }

const HelpCenterQAndA = () => {
  const [type, setType] = React.useState(tabs.CURRENT_QANDA);

  return (
    <div className='flex flex-col  mt-5'>
      <div className="flex justify-between md:p-5">
      <button
          className={`${
            type === tabs.CURRENT_QANDA
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg md:w-1/5 py-2 px-2 shadow-md shadow-black mr-2`}
          onClick={() => setType(tabs.CURRENT_QANDA)}
        >
          Current Q&A
        </button>
        <button
          className={`${
            type === tabs.ARCHIVED_QANDA
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg md:w-1/5 py-2 px-2 shadow-md shadow-black mr-2`}
          onClick={() => setType(tabs.ARCHIVED_QANDA)}
        >
          Archived Q&A
        </button>
        <button
          className={`${
            type === tabs.DELETED_QANDA
              ? "bg-[#6666B3] text-white"
              : "bg-white text-black"
          } rounded-lg md:w-1/5 py-2 px-2 shadow-md shadow-black mr-2`}
          onClick={() => setType(tabs.DELETED_QANDA)}
        >
          Deleted Q&A
        </button>
      </div>
      <div className='mt-3'>
          {type === tabs.CURRENT_QANDA && <CurrentQAndA />}
          {type === tabs.ARCHIVED_QANDA && <ArchivedQAndA />}
          {type === tabs.DELETED_QANDA && <DeletedQAndA />}
      </div>
    </div>
  );
}

export default HelpCenterQAndA