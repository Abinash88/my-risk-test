import { Divider, Form, Input, Modal } from 'antd';
import { CloudUpload } from 'lucide-react';
import React, { useState } from 'react'

interface socialLinkTypeProps{
    icon:string,
    name:string,
    link:string
}

export default function AddEditSocialLink({data}: {data?: socialLinkTypeProps}) {
    const [open, setOpen] = useState(false);
    const [selectedImage,setSelectedImage]=useState(data?.icon)
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
        {data?<p onClick={showModal}>Edit</p>:
        <button className="bg-[#3838F0] text-white px-4 py-2 rounded hover:bg-[#3838AA]"
        onClick={showModal}
        >
                + Add Link
        </button>}
        <Modal
        title={data?"Edit Social Info":"Add Social Link"}
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
          <Form layout="vertical" initialValues={{
            ...(data ?? {})
          }}>
           <div className='flex justify-center'>
           <img
             src={selectedImage}
             alt={`Icon`}
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
                <CloudUpload className="mr-2" /> {data?"Click to replace icon":"Click to add icon"}
              </label>
            </Form.Item>
            <Form.Item label="Social Name" name="name">
                <Input placeholder='name'/>
            </Form.Item>

            <Form.Item label="Social Link" name="link">
                <Input placeholder='Url or link'/>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}
