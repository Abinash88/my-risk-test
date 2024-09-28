import React, { useState } from 'react'
import InternalMessage from './InternalMessage';
import Notification from './Notification';

const enum types{
    INTERNAL_MESSAGE = "Internal Messages",
    NOTIFICATION = "Notifications",
}
const Welcome = () => {
    const [type, setType] = useState(types.NOTIFICATION);

  return (
    
    <div className="flex flex-col p-3">
      <div className="flex justify-between gap-3 mx-3">
        <button
					className={`h-[45px] p-3 rounded-md shadow-md w-[45%] font-[600] ${
						type === types.NOTIFICATION
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType(types.NOTIFICATION)}
        >
          Notifications
        </button>
        <button
					className={`h-[45px] p-3 rounded-md shadow-md w-[45%] font-[600] ${
						type === types.INTERNAL_MESSAGE
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType(types.INTERNAL_MESSAGE)}
        >
          Internal Messages
        </button>
    </div>
        {type == types.NOTIFICATION && <Notification />}
        {type == types.INTERNAL_MESSAGE && <InternalMessage />}
    </div>
  )
}

export default Welcome