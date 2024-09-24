import React from 'react'
import { tabs } from '.'

export default function NewsCard({type}:{type:string}) {
  return (
    <div className='mx-2 mb-3 bg-white flex flex-col w-[339px] h-[456px] rounded-md gap-17 relative shadow-[0_4px_32px_0_rgba(0,0,0,0.04)]'>
      <div className='absolute top-0 right-0 z-10'>
        <button className='px-3 py-2 text-xs bg-[#6666B3] text-white rounded-tr-md'>Spotlight</button>
      </div>
      <div className='w-full h-[250px] rounded-md'>
        <img src="/images/risk-image.png" alt="" className='w-full h-full object-cover rounded-t-md' />
      </div>
      <div className='flex flex-col gap-2 mx-3 mt-2'>
        <p className='text-lg font-bold'>Risk Management</p>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <p className='text-sm text-gray-500 py-2 mx-3'>Posted on: {new Date().toLocaleDateString()}</p>
       {type!=tabs.DELETED_NEWS && <div className='flex flex-row justify-between mt-4 mx-3'>
        <button className='mx-1 px-3 py-1.5 text-sm bg-[#1D2939] text-white rounded-md'>{type == tabs.ARCHIVED_NEWS ? "Unarchive" : "Archive"}</button>
{ (type==tabs.LIVE_NEWS||type==tabs.SPOTLIGHT_NEWS )&&       <button className='mx-1 px-3 py-1.5 text-sm bg-[#FF9500] text-white rounded-md'>{type == tabs.SPOTLIGHT_NEWS ? "Remove Spotlight" : "Spotlight"}</button>}
        <button className='mx-1 px-3 py-1.5 text-sm bg-[#3838F0] text-white rounded-md'>Edit</button>
        <button className='mx-1 px-3 py-1.5 text-sm bg-[#FF4949] text-white rounded-md'>Delete</button>
      </div>}
    </div>
  )
}

