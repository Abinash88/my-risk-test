import { Popover } from 'antd'
import { Settings } from 'lucide-react';
import React, { useState } from 'react'
import AddEditSocialLink from './AddEditSocialLink';

interface socialLinkTypeProps{
    id:number,
    icon:string,
    name:string,
    link:string
}

export default function Setting({data}: {data: socialLinkTypeProps}) {
    const [open, setOpen] = useState(false);
    const hide = () => {
      setOpen(false);
    };
  
    const handleOpenChange = (newOpen: boolean,) => {
      setOpen(newOpen);
    };

  return (
         <div className="" >
          <Popover
            content={
              <div className="flex flex-col">
                <AddEditSocialLink data={data}/>
                <a className="my-2">Duplicat Here</a>
                <a className="my-2 text-[#EA1C1C]">Remove</a>
                {/* <Divider type="horizontal" className="w-full my-2" /> */}
              </div>
            }
            trigger="click"
            placement="bottom"
            open={open}
            onOpenChange={(open) => handleOpenChange(open)}
          >
            <Settings />
          </Popover>
        </div>
  )
}
