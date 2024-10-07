import { Modal } from 'antd';
import React, { useState } from 'react'

export default function MakePaymentModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
	const [isChecked, setIsChecked] = useState(true);

   const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
       <button className="bg-[#000080] text-white font-[600] text-[19px] p-3   mr-auto ml-auto rounded-lg"
       onClick={showModal}
       >
          Choose Plan
        </button>  
      <Modal 
      title="Make Payment" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[]}
      >
        
					<div className="px-3 my-6">
						<div className="flex items-center gap-2 ml-2 ">
							<input
								type="radio"
								className="p-8 w-5 h-5  specifyColor"
								id="pay"
								checked={isChecked}
								onClick={() => setIsChecked(!isChecked)}
								readOnly
							/>
							<label
								htmlFor="pay"
								className="block text-black font-[600] text-[14px] md:text-[19px]"
							>
								Pay with Credit or Debit Card
							</label>
						</div>
						<div className="mt-3 flex items-center gap-4 ml-1 md:ml-8">
							<img src="/images/master.png" alt="" className="w-[50px]" />
							<img src="/images/visa.png" alt="" className="w-[50px]" />
							<img src="/images/maestro.png" alt="" className="w-[50px]" />
							<img src="/images/circus.png" alt="" className="w-[50px]" />
						</div>
						<div className="flex flex-col gap-3 mt-5">
							<input
								type="number"
								className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
								placeholder="Card Number*"
							/>
							<div className="flex gap-3">
								<input
									type="text"
									className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
									placeholder="MM*"
								/>
								<input
									type="text"
									className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
									placeholder="YY*"
								/>
								<input
									type="text"
									className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
									placeholder="CVV/CVC*"
								/>
							</div>
							<input
								type="text"
								className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
								placeholder="First Name"
							/>
							<input
								type="text"
								className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div className="flex gap-4 justify-center">
						<button className="py-3 px-4 text-white rounded-lg bg-[#000080] w-[40%]">
							Back
						</button>
						<button className="py-3 px-4 text-white rounded-lg bg-[#000080] w-[40%]">
							Next
						</button>
					</div>
      </Modal>
    </div>
  )
}
