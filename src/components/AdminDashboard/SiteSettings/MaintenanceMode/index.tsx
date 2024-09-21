import React, { useState } from 'react'
import CloseWebsite from './CloseWebsite';

export default function index() {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className={`text-9xl mb-8 ${isMaintenanceMode ? 'text-blue-500' : 'text-red-500'}`}>
          🛠️
        </div>
        <CloseWebsite isMaintenanceMode={isMaintenanceMode} />
      </div>
    </div>
  )
}
