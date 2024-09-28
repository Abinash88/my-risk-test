import { Popover } from 'antd';
import React, { useState } from 'react'

const AddNewPage = () => {
    const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
        
        <div className="ml-auto">
          <Popover
            content={
              <div className="flex flex-col p-2">
                <a className="text-[#1A1A1A] my-1" href="/admin/dashboard/content-setting/duplicate" >Duplicate Service Type Page</a>
                <a className="text-[#1A1A1A] my-1" href="/admin/dashboard/content-setting/" >Duplicate Premium Page</a>
                <a className="text-[#1A1A1A] my-1" href="/admin/dashboard/content-setting/" >Create New Page</a>

              </div>
            }
            trigger="click"
            placement="bottom"
            open={open}
            onOpenChange={(open:any) => handleOpenChange(open)}
          >
        <button className="ml-auto rounded-md px-6 py-2 mb-2 text-white bg-[#3838F0]">
          Add New Page
        </button>
    </Popover>
    </div>

  )
}

export default AddNewPage