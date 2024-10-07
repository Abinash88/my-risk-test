import React,{useState} from 'react'
import { Popover } from 'antd';
import RemoveContent from '../../RemoveContent';
import { Gear } from '@phosphor-icons/react';
export default function Setting({index}:{index:any}) {
  const [open, setOpen] = useState(false);
  const [openPopoverKey, setOpenPopoverKey] = useState(null);
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean, key: any) => {
    setOpen(newOpen);
    if (newOpen) {
      setOpenPopoverKey(key); // Set the key of the opened Popover
    } else {
      setOpenPopoverKey(null); // Close the Popover
    }
  };
  return (
    <div className="" key={index}>
          <Popover
            key={index}
            content={
              <div className="flex flex-col p-2">
                <a className="text-[#1A1A1A] my-1" href="/admin/dashboard/content-setting/landing-page/edit-image" >Edit</a>
                <RemoveContent />
              </div>
            }
            trigger="click"
            placement="bottom"
            open={open && openPopoverKey === index}
            onOpenChange={(open) => handleOpenChange(open, index)}
          >
                      <Gear className="w-8 h-8" />

          </Popover>
        </div>
  )
}
