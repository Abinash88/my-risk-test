import { Eye } from 'lucide-react'
import React,{useState} from 'react'
import {Modal,Button} from 'antd'

export default function Preview({record}:{record:any}) {
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
        <Eye onClick={showModal}/>
        <Modal
        title="Preview Document"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <>
            <Button onClick={handleCancel}>Close</Button>
            
          </>,
        ]}
      >
        <div
			className="relative w-full bg-cover bg-center h-[300px]"
			style={{ backgroundImage: `url('/images/background.png')` }}
		>
			<div className="h-full relative inset-0 bg-black bg-opacity-60 flex flex-col  gap-3 text-white text-center p-3 md:p-6">
				<div className='h-full flex flex-col items-center justify-center'>
                    <button className='bg-[#000080] p-3 text-md'>{record.button_title}</button>
                </div>
			</div>
		</div>
        </Modal>
    </div>
  )
}
