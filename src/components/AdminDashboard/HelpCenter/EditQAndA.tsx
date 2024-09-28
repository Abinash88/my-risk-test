import React, { useState } from 'react'
import { Modal, Input, Button, Form, Select } from 'antd';
import ReactQuill from 'react-quill';

export default function EditQAndA() {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
  return (
    <div>
        <button className="bg-[#1E3A89] text-white px-4 py-1 rounded-md"
        onClick={showModal}
        >
            Edit
        </button>
        <Modal 
        title="Edit Q & A" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        footer={[
            <div className='flex gap-x-3 justify-center mt-5'>
                <button className='bg-[#B3261E] text-white rounded-lg px-4 py-2'>Discard</button>
                <button className='bg-[#000080] text-white rounded-lg px-4 py-2'>Confirm</button>
            </div>
        ]}
        >
        <Form layout='vertical' className='my-5'
        initialValues={{
            group:"Select Group"
        }}
        >
        <Form.Item label="Question" name="question">
        <ReactQuill
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image', 'video'],
              ['clean']                                         
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
          ]}
          style={{ marginBottom: '20px',marginTop: '10px' }}
        />
        </Form.Item>
        <div className='flex justify-end'>
         <button className='px-10 py-2 bg-[#3838F0] rounded-md text-white'>Edit</button>
        </div>
        <Form.Item label="Answer" name="answer">
        <ReactQuill
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image', 'video'],
              ['clean']                                         
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
          ]}
          style={{ marginBottom: '20px',marginTop: '10px' }}
        />
        </Form.Item>
        <div className='flex justify-end'>
         <button className='px-10 py-2 bg-[#3838F0] rounded-md text-white'>Edit</button>
        </div>

        <Form.Item label="Select Help Center Group" name="group">
        <Select>
            <Select.Option value="Select Group">Select Group</Select.Option>
        </Select>
        </Form.Item>
        </Form>
        
      </Modal>
    </div>
  )
}
