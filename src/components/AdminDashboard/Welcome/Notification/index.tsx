import React from 'react'
import Clear from './Clear'
import { Badge, Divider, Select } from 'antd'
import { notifications } from '@/lib/fakedata'
import NotificationItem from '@/components/shared/ReuseAble/NotificationItem'

const Notification = () => {
  return (
    <div className='flex flex-col mt-5 bg-white rounded-md p-3 h-[calc(100vh-170px)]'>
     <div className='ml-auto my-2'>
     <Select
     defaultValue={"Most Recent"}
     className='px-2'
     >
       <Select.Option value="Most Recent">Most Recent</Select.Option> 
       <Select.Option value="Past 24hrs">Past 24hrs</Select.Option>
       <Select.Option value="Past 48hrs">Past 48hrs</Select.Option>
       <Select.Option value="Past week">Past week</Select.Option>
       <Select.Option value="Past month">Past month</Select.Option>
       <Select.Option value="Past year">Past year</Select.Option>
     </Select>
     </div>
     <div className="flex flex-col overflow-y-auto">
                {notifications.map((item)=>(
                    <NotificationItem {...item}/>
                ))}
                </div>
                <Clear/>
    </div>
  )
}

export default Notification