import { Warning } from '@phosphor-icons/react';
import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react'

export default function CloseWebsite({isMaintenanceMode,setIsMaintenanceMode}: {isMaintenanceMode: boolean,setIsMaintenanceMode:Function}) {
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setIsMaintenanceMode((prev:boolean)=>!prev)
      setOpen(false);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
    return (
    <div>
        <button
          className={`${
            isMaintenanceMode ? 'bg-[#000E56] hover:bg-[#000E56]' : 'bg-[#F04141] hover:bg-[#F04141]'
          } text-white font-semibold py-3 px-4 rounded-md`}
          onClick={() => {
            showModal()
          }}
        >
          {isMaintenanceMode ? "Turn On Website" : "Close Website Temporarily"}
        </button>
        <Modal
        title={
            isMaintenanceMode ? <div className="flex items-center">
              <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
              <p>Turn Website Back On</p>
            </div>:<div className="flex items-center">
              <Warning className="mr-3 text-[#FF4949] bg-[#FFE5E5] w-7 h-7 p-1 rounded-full" />
              <p>Close website temporarily</p>
            </div>
          }
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <>
              <Button onClick={handleCancel}>Cancel</Button>
              {!isMaintenanceMode ? <Button
                type="primary"
                danger
                className="text-white"
                onClick={handleOk}
              >
                Confirm
              </Button> : <Button
                className="bg-[#002856] text-white"
                onClick={handleOk}
              >
                Confirm
              </Button>}
            </>,
          ]}
        >{
            isMaintenanceMode?<div className='flx flex-col'>
<p>Are you sure you want to turn website back on? Users will now be able to access the website.</p>
<div className="mt-4">
              <label htmlFor="password" className="block mb-2">Enter password:</label>
              <Input.Password
                id="password"
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            </div>
            
        :<div className='flx flex-col'>
            <p>Are you sure you want to close the website temporarily? Users will no longer be able to access the website.</p>
            <div className="mt-4">
              <label htmlFor="password" className="block mb-2">Enter password:</label>
              <Input.Password
                id="password"
                placeholder="Enter password"
                className="w-full"
              />
            </div>
            </div>
        }
        </Modal>
    </div>
  )
}
