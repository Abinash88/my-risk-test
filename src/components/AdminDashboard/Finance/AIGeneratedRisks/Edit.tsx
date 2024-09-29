import React, { useState } from 'react'
import { Divider, Form, Input, Modal, Select, Switch } from "antd";
import { DollarOutlined } from '@ant-design/icons';
import { DollarSignIcon } from 'lucide-react';

export default function Edit({data}:{data:any}) {
    const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
        <button
         className="text-white border bg-[#3838F0] rounded-lg py-2 px-4"
         onClick={showModal}
            >
              Edit
       </button>

        <Modal
        title="Edit Price"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-end mb-7">
            <button
              className="mr-3 rounded-md text-black bg-white border border-grey py-2 px-3"
              onClick={handleOk}
            >
              Cancel
            </button>
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Save
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <p className='text-lg font-semibold'>{data.name}</p>
          <div className='my-4'>
            <label className='font-semibold'>Price</label>
            <Input prefix={<DollarSignIcon />}  className='p-2 mt-2'/>
          </div>
        </div>
      </Modal>
    </div>
  )
}
