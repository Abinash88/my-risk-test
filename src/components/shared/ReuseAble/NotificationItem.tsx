import { Divider,Badge } from 'antd'
import React from 'react'

export type NotificationItemType = {
  date: string;
  title: string;
  status: string;
  message: string;
};

export default function NotificationItem(notification: NotificationItemType) {
  return (
    
    <div className="flex flex-col my-2">
    <Badge className="bg-[#E8E8F6] p-2 rounded-md mb-1">
      {notification.date}
    </Badge>
    <p className="text-lg font-medium nb-1">
    {notification.title}
    </p>
    <p className=" mb-1">{notification.status}    </p>
    <p className=" mb-1">
    {notification.message}
    </p>
    <Divider type="horizontal" className="my-2"/>
  </div>
  )
}
