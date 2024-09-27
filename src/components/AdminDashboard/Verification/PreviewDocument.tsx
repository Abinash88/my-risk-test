import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'antd';
import React, { useState } from 'react'

export default function PreviewDocument() {
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
        <FontAwesomeIcon
        onClick={showModal}
            icon={faFilePdf}
            className="text-[#6666B3] w-5 h-5"
        />
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
        <img src='/images/letter.png' />
        </Modal>
    </div>
  )
}
