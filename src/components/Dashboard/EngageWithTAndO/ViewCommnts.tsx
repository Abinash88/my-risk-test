import React, { useState } from 'react'
import { Modal } from 'antd'
import { Cone, Flag, Heart, MoveUp } from 'lucide-react'
import { UpCircleFilled } from '@ant-design/icons'
import { comments } from '@/lib/fakedata'

const ViewCommnts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col bg-[#DAE8F7] md:p-4 p-2'>
                <div className='flex items-center justify-between'>
                    <p>Risk ID: #R0231</p>
                    <span className='flex items-center gap-1 bg-white text-red-500 rounded-md px-2 py-1  text-sm'>
                        <Flag/>
                        Flag
                    </span>
                </div>
                <p className='text-sm md:text-lg font-semibold mt-5'>Risk Title 1</p>
                
                <div className='mt-5 flex flex-col gap-y-1'>
                <button className='px-2 md:px-4 py-1 md:py-3 flex justify-between items-center bg-white rounded-md px-2 py-1'>
                    <p className='text-[#000099] opacity-80'>Step 1</p>
                    <p className='text-[#000080] font-semibold'>Region & Sector</p>
                    <img src="/icons/up.svg" alt="Down Icon" className="w-6 h-6" />
                </button>

                <button className='px-2 md:px-4 py-1 md:py-3 flex justify-between items-center bg-white rounded-md px-2 py-1'>
                    <p className='text-[#000099] opacity-80'>Step 2</p>
                    <p className='text-[#000080] font-semibold'>Risk Details</p>
                    <img src="/icons/down.svg" alt="Down Icon" className="w-6 h-6" />
                </button>
                <button className='px-2 md:px-4 py-1 md:py-3 flex justify-between items-center bg-white rounded-md px-2 py-1'>
                    <p className='text-[#000099] opacity-80'>Step 3</p>
                    <p className='text-[#000080] font-semibold'>Risk Scoring</p>
                    <img src="/icons/down.svg" alt="Down Icon" className="w-6 h-6" />
                </button>
                <button className='px-2 md:px-4 py-1 md:py-3 flex justify-between items-center bg-white rounded-md px-2 py-1'>
                    <p className='text-[#000099] opacity-80'>Step 4</p>
                    <p className='text-[#000080] font-semibold'>Risk Mitigation</p>
                    <img src="/icons/down.svg" alt="Down Icon" className="w-6 h-6" />
                </button>
                </div>

                <div className='mt-16 flex justify-between items-center'>
                    <p className='text-sm md:text-lg font-semibold'>AI powered risk profile</p>
                    <p className='text-sm md:text-lg font-semibold'>Risk Author - User Display Name</p>
                </div>
            </div>

            <div className='flex flex-col bg-white md:p-4 p-2'>
                <p className='text-sm md:text-lg font-semibold text-center'>View All 99 Comments</p>
                <div className='flex flex-col gap-y-2 mt-5'>
                    {comments.map((item)=>(
                    <div className='flex gap-x-2 items-center justify-between'>
                        <div className='flex gap-x-2 items-center'>
                           <img
									src={item.image}
									alt="profile-image"
									className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
							/>
                            <div className='flex flex-col gap-y-1'>
                                <p className='font-semibold'>{item.name}</p>
                                <p>{item.comment}</p>
                                <span className='text-sm text-[#000000] opacity-50 py-1'>Reply</span>
                            </div>
                       </div>
                       <div className='flex flex-col gap-y-1 items-center'>
                        <Heart/>
                        <p>{item.likes}</p>
                       </div>
                    </div>
                    ))}
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCommnts