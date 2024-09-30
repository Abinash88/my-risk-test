import { Button, Divider, Form, Input, Modal, Row, Select } from 'antd';
import { CloudUpload } from 'lucide-react';
import React, { useState } from 'react'

export default function AddNewGroup() {
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
    <div className='w-full'>
        <button className="w-full bg-[#1D98F0] text-white px-9 py-3 rounded-lg text-[18px]" onClick={showModal}>
		 Create New Group
		</button>


      <Modal
        title="Create New Group"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Cancel</Button>
            <button
              className="bg-[#000080] text-white py-1 px-3 rounded-md ml-3"
              onClick={handleOk}
            >
              Save
            </button>
          </>
        ]}
      >
        <div>
            <Divider type='horizontal'/>
            <Form 
            layout='vertical'
            initialValues={{
              visibility:"Select Option"
            }}
            >
                    <Form.Item label="Group Name">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Visibility" name="Visibility">
                        <Select>
                          <Select.Option value="Select Option" >Select Option</Select.Option>
                        </Select>
                    </Form.Item>

                <Form.Item label="Invite Participants">
                    <Input placeholder='Add user email'/>
                </Form.Item>


            <Form.Item label="Upload Group Picture"  name="img">
              <input
                type="file"
                accept="image/*"
                onChange={(e:any) => {
                  const file:any = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event:any) => {
                      // setSelectedImage(event.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                style={{ display: 'none' }}
                id="imageUpload"
              />
              <label htmlFor="imageUpload" className="w-full py-3 rounded-md flex items-center justify-center bg-[#F9F9F9] text-[#6868F2] cursor-pointer">
                <CloudUpload className="mr-2" /> Click to add image

              </label>
            </Form.Item>
            </Form>
        </div>
      </Modal>
    </div>
  )
}
