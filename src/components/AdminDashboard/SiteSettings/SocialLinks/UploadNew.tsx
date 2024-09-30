import { Divider, Form, Input, Modal } from 'antd';
import { CloudUpload } from 'lucide-react';
import React, { useState } from 'react'

export default function UploadNew({img}:{img:string}) {
  const [open, setOpen] = useState(false);
  const [selectedImage,setSelectedImage]=useState(img)
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
      <button className="bg-[#3838F0] text-white px-6 py-2 rounded mt-3 md:mt-0"
      onClick={showModal}
      >
        Upload New
      </button>

      <Modal
        title="Change Image"
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
              onClick={handleCancel}
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
          <Form layout="vertical" initialValues={{}}>
           <div className='flex justify-center'>
           <img
             src={selectedImage || "/images/blue-logo.png"}
             alt={`Logo`}
             className="w-[120px] h-[100px]"
            />
           </div>
            <Form.Item  name="auth_key">
              <input
                type="file"
                accept="image/*"
                onChange={(e:any) => {
                  const file:any = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event:any) => {
                      setSelectedImage(event.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                style={{ display: 'none' }}
                id="imageUpload"
              />
              <label htmlFor="imageUpload" className="w-full py-3 rounded-md flex items-center justify-center bg-[#F9F9F9] text-[#6868F2] cursor-pointer">
                <CloudUpload className="mr-2" /> Click to replace image
              </label>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}
