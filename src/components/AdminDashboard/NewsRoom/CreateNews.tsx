import { Form, Input, Upload } from 'antd'
import { UploadCloud } from 'lucide-react'
import React from 'react'
import ReactQuill from 'react-quill'

export default function CreateNews() {
  return (
    <div className='flex flex-col bg-white rounded-lg mt-5'>
        <div className='flex flex-col m-4 p-4 rounded-lg border border-gray-200'>
          <Form 
            layout='vertical'
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete='off'
            className='w-full'
          >
            <Form.Item
              label='Title'
              name='title'
            >
              <Input placeholder='Post Title' className='bg-[#F9F9F9] p-2'/>
            </Form.Item>
            <Form.Item
              label='Image'
              name='img'
              className='w-full'
            >
              <div className='w-full'>
                <button className='w-[100%] bg-[#F9F9F9] rounded-md flex items-center justify-center gap-2 text-[#3838F0] p-2 border border-grey-200'><UploadCloud/> Click to Upload Image</button>
              </div>
            </Form.Item>
            
            
          </Form>

        </div>
        <div className='flex flex-col m-4 p-4 rounded-lg border border-gray-200'>
          <div className='flex flex-col mb-5'>
            <label>Content</label>
            <ReactQuill
              // theme="snow"
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
              style={{ height: '400px',marginBottom: '20px',marginTop: '10px' }}
            />
          </div>
        </div>
        <div className='flex justify-end my-5 mx-4'>
         <button className='mr-3 bg-white border border-gray-200 text-black px-4 py-2 rounded-md'>Cancel</button>
          <button className='bg-[#3838F0] text-white px-4 py-2 rounded-md'>Post</button>
        </div>
    </div>
  )
}
